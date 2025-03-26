import { InputProps } from "antd";
import { StyledInput, StyledPassword, StyledSearch, StyledTextArea } from "./styledInput";

export interface IFInputProps extends InputProps {
  type?: "input" | "search" | "password" | "textArea";
  sx?: React.CSSProperties;
}

const FInput: React.FC<IFInputProps> = ({
  type = "input",
  sx,
  className = "",
  style,
  ...rest
}) => {
  if(type === "search"){
    return (
      <StyledSearch
      className={`${className}` || ""}
      style={{ ...style, ...sx }}
      {...rest}
    />
    )
  }else if(type === "password"){
    return (
      <StyledPassword
      className={`${className}` || ""}
      style={{ ...style, ...sx }}
      {...rest}
    />
    )
  }else if(type === "textArea"){
    return (
      <StyledTextArea
      className={`${className}` || ""}
      style={{ ...style, ...sx }}
      {...rest}
    />
    )
  }else{
    return (
      <StyledInput
        className={`${className}` || ""}
        style={{ ...style, ...sx }}
        {...rest}
      />
    );
  }
};

export default FInput;