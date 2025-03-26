import { ButtonProps } from "antd";
import { StyledButton } from "./styledButton";

export interface IFButtonProps extends ButtonProps {
  origin?: {
    color?: string;
    bgcolor?: string;
    hoverBgColor?: string;
    hoverColor?: string;
    border?: string;
  };
  sx?: React.CSSProperties;
}

const FButton: React.FC<IFButtonProps> = ({
  origin,
  sx,
  className = "",
  style,
  ...rest
}) => {
  return (
    <StyledButton
      origin={origin}
      className={`${className} : ''`}
      style={{ ...style, ...sx }}
      {...rest}
    >
      {rest.children}
    </StyledButton>
  );
};

export default FButton;
