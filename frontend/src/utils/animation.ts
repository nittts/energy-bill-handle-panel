export class AnimationUtils {
  public static injectOpacityAnimation() {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }
}
