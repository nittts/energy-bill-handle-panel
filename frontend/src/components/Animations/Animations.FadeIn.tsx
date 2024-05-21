import { AnimationUtils } from "@/utils/animation";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
};

function FadeIn({ children }: FadeInProps) {
  return <motion.div {...AnimationUtils.injectOpacityAnimation()}>{children}</motion.div>;
}

export default FadeIn;
