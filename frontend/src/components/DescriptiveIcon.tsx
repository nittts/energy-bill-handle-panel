import { Button, Tooltip } from "antd";
import { ReactNode } from "react";

type IDescriptiveIconProps = {
  title: string;
  icon: ReactNode;
  type?: "dashed" | "default" | "link" | "primary" | "text";
  danger?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  shape?: "circle" | "round" | "default";
  size?: "large" | "middle" | "small";
  onClick?: (value: unknown) => void;
};

function DescriptiveIcon(props: IDescriptiveIconProps) {
  const { title = "", icon = <></>, ...rest } = props;

  return (
    <Tooltip title={title}>
      <Button icon={icon} {...rest} />
    </Tooltip>
  );
}

export default DescriptiveIcon;
