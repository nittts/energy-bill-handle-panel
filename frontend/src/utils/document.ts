export class DocumentUtils {
  public static setWindowTitle(title: string) {
    if (window) window.document.title = title;
  }
}
