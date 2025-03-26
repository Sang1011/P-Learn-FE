// styledInput.ts
import styled from "styled-components";
import { Input } from "antd";
import type { IFInputProps } from "./index";

const createStyledInput = (Component: any) => styled(Component)<IFInputProps>`
  && {
    &:hover {
      border-color: var(--mainColor);
    }

    &:selected,
    &:ant-select{
      border-color: var(--mainColor) !important; 
    }

    &:focus,
    &.ant-input-focused, &.ant-input-outlined:focus, &.ant-input-outlined:focus-within  {
      border-color: var(--mainColor) !important;
    }

    .ant-btn {
      background-color: var(--mainColor);
      color: var(--whiteColor) !important;

      &:hover {
        filter: brightness(0.9);
        background-color: var(--mainColor);
        color: var(--whiteColor);
      }
    }
  }
`;

export const StyledInput = createStyledInput(Input);
export const StyledSearch = createStyledInput(Input.Search);
export const StyledTextArea = createStyledInput(Input.TextArea);
export const StyledPassword = createStyledInput(Input.Password);
