import styled from "styled-components";
import {
  Primary,
  Secondary,
  Grey,
  Success,
  Error,
  Warning,
  Info,
} from "../Colors"

const ButtonStyle = styled.button`
  font-weight: 800;
  font-size: ${(props) =>
    props.size === "md" ? "16px" : props.size === "sm" ? "26px" : "36px"};
  padding: ${(props) =>
    props.size === "md"
      ? "8px 16px"
      : props.size === "sm"
      ? "6px 12px"
      : "16px 32px"};
  /* border-radius: 30px; */
  cursor: pointer;
  text-align: right;
  width: ${(props) => (props.block ? "100%" : "auto")};
  background: ${(props) =>
    props.variant === "outline" || props.variant === "text"
      ? "none"
      : props.state === "disable"
      ? Grey[100]
      : props.color === "secondary"
      ? Secondary[500]
      : props.color === "grey"
      ? Grey[900]
      : props.color === "success"
      ? Success[500]
      : props.color === "error"
      ? Error[500]
      : props.color === "warning"
      ? Warning[500]
      : props.color === "info"
      ? Info[500]
      : Primary[500]};
  
  border: ${(props) =>
    props.variant === "outline"
      ? `5px solid ${
          props.state === "disable"
            ? Grey[300]
            : props.color === "secondary"
            ? Secondary[500]
            : props.color === "grey"
            ? Grey[700]
            : props.color === "success"
            ? Success[500]
            : props.color === "error"
            ? Error[500]
            : props.color === "warning"
            ? Warning[500]
            : props.color === "info"
            ? Info[500]
            : Primary[500]
        }`
      : "none"};

  ${(props) => props.style}
`;

export default ButtonStyle;
