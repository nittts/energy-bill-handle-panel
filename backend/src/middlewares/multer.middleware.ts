import { config } from "dotenv";
config();
import { NextFunction, Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import { AppError } from "./asyncErrors.middleware";
import { v4 as uuid } from "uuid";
import path from "path";
import { log } from "../log/logger";

const maxSize = 12 * 1024 * 1024;

const destinationFiles = (
  req: Request,
  file: Express.Multer.File,
  cb: (error: Error | null, destination: string) => void
) => {
  const baseDir = process.env.BASE_UPLOAD_URL || path.resolve("./");

  const savePath = `${baseDir}/temp`;

  try {
    if (!fs.existsSync(savePath)) {
      fs.mkdirSync(savePath, { recursive: true });
    }
  } catch (err) {
    if (err instanceof AppError) {
      log.error(
        {
          error: err.message,
          status: 503,
          source: "MULTER MIDDLEWARE | destination files",
        },
        "uncaught file destination creation."
      );
      throw new AppError(err.message, 503);
    }
  }

  cb(null, savePath);
};

const filename = (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
  const id = uuid();

  cb(null, `${id}.pdf`);
};

const files = multer.diskStorage({
  destination: destinationFiles,
  filename,
});

const filesStorage = multer({ storage: files, limits: { fileSize: maxSize } });

async function fileUpload(req: Request, res: Response, next: NextFunction) {
  filesStorage.array("files[]", 20)(req, res, next);
}

export default fileUpload;
