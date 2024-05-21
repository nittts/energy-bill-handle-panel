import { useAccent } from "@/stores/preferences";
import { presetPrimaryColors } from "@ant-design/colors";
import { Spin } from "antd";
import { motion } from "framer-motion";

function LoadingOverlay() {
  const accent = useAccent();

  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: "absolute" }}>
      <Spin fullscreen style={{ background: `${presetPrimaryColors[accent]}40` }} />
    </motion.div>
  );
}

export default LoadingOverlay;
