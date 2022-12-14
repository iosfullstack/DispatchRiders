import React from "react";
import ButtonStyle from "../atoms/ButtonStyle"

const Button = ({
  label,
  variant = "solid",
  size,
  color = "primary",
  showIcon = "none",
  icon = null,
  block = false,
  state = "",
  className = "",
  onClick,
  style,
  ...props
}) => {
  return (
    <ButtonStyle
      variant={variant}
      size={size}
      color={color}
      showIcon={showIcon}
      state={state}
      block={block}
      style={style}
      className={className}
      onClick={onClick}
      {...props}
    >
      {showIcon === "left" && <span style={{ paddingRight: 5 }}>{icon}</span>}
      {label}
      {showIcon === "right" && <span style={{ paddingLeft: 5 }}>{icon}</span>}
    </ButtonStyle>
  );
};

export default Button;
