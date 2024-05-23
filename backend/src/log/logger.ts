import path from "path";
import pino from "pino";

const pathToLog = `${process.env.BASE_UPLOAD_URL || path.resolve("./")}/log`;

const transport = pino.transport({
  targets: [
    { level: "trace", target: "pino-pretty", options: {} },
    {
      level: "err",
      target: "pino/file",
      options: {
        destination: `${pathToLog}/err`,
        mkdir: true,
      },
    },
    {
      level: "fatal",
      target: "pino/file",
      options: {
        destination: `${pathToLog}/fatal`,
        mkdir: true,
      },
    },
    {
      level: "warn",
      target: "pino/file",
      options: {
        destination: `${pathToLog}/warn`,
        mkdir: true,
      },
    },
  ],
});

const log = pino({}, transport);

export { log };
