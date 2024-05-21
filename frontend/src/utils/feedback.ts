import { SharedProps, enqueueSnackbar } from "notistack";
import toast, { ToastOptions } from "react-hot-toast";

type ToastOpts = { message: string } & ToastOptions;

type NotifyOpts = { message: string } & SharedProps;

type ToastMsgPromise = {
  error: string;
  success: string;
  loading: string;
};

export class FeedbackUtils {
  constructor() {}

  public static notify({ message, ...opts }: NotifyOpts) {
    enqueueSnackbar(message, opts);
  }

  public static toast({ message, ...opts }: ToastOpts) {
    toast(message, opts);
  }

  public static promiseToast(promise: Promise<unknown>, opts: ToastMsgPromise) {
    toast.promise(promise, opts);
  }
}
