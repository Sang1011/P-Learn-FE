import styled from "styled-components";
import { Button } from "antd";
import type { IFButtonProps } from "./index";

export const StyledButton = styled(Button)<{ origin?: IFButtonProps['origin'] }>`
  && {
    font-weight: 700;
    min-width: 90px;
    min-height: 40px;

    ${({ origin }) => origin?.bgcolor && `background-color: ${origin.bgcolor};`}
    ${({ origin }) => origin?.color && `color: ${origin.color};`}

    &.ant-btn-icon-only {
      min-width: 44px;
      min-height: 44px;
      &:hover {
            ${({ origin }) => !origin?.hoverBgColor && `background-color: inherit`}
            ${({ origin }) => !origin?.hoverColor && `color: inherit`}
            ${({ origin }) =>
                `border-color: ${origin?.border || origin?.bgcolor || "var(--mainColor)"};`}
            filter: brightness(0.8);
        }
    }

    &.ant-btn-primary {
  ${({ origin }) =>
    `background-color: ${origin?.bgcolor || "var(--mainColor)"};`}
  ${({ origin }) =>
    `color: ${origin?.color || "var(--whiteColor)"};`}
  ${({ origin }) =>
    `border-color: ${origin?.border || origin?.bgcolor || "var(--mainColor)"};`}

  &:hover {
    ${({ origin }) =>
      `background-color: ${
        origin?.hoverBgColor
          || origin?.bgcolor
          || "var(--mainColor)"
      };`}
    ${({ origin }) =>
      `color: ${
        origin?.hoverColor
          || origin?.color
          || "var(--whiteColor)"
      };`}
    filter: brightness(0.9);
  }
}

&.ant-btn-default {
  ${({ origin }) =>
    `background-color: ${origin?.bgcolor || "transparent"};`}
  ${({ origin }) =>
    `color: ${origin?.color || "var(--mainColor)"};`}
  ${({ origin }) =>
    `border-color: ${origin?.border || "var(--mainColor)"} !important;`}

  &:hover {
    ${({ origin }) =>
      `background-color: ${
        origin?.hoverBgColor
          || "rgba(0,0,0,0.04)"
      };`}
    ${({ origin }) =>
      `color: ${
        origin?.hoverColor
          || origin?.color
          || "var(--mainColor)"
      };`}
    filter: brightness(0.9);
  }
}

&.ant-btn-text {
    min-width: 25%;
    min-height: 25%;
  ${({ origin }) =>
    `background-color: ${origin?.bgcolor || "transparent"};`}
  ${({ origin }) =>
    `color: ${origin?.color || "var(--textColor)"};`}

  &:hover {
    ${({ origin }) =>
      `background-color: ${
        origin?.hoverBgColor
          || "var(--mainColorRGBA)"
      };`}
    ${({ origin }) =>
      `color: ${
        origin?.hoverColor
          || origin?.color
          || "var(--mainColor)"
      };`}
    filter: brightness(0.9);
  }
}

&.ant-btn-link {
  ${({ origin }) =>
    `background-color: ${origin?.bgcolor || "transparent"};`}
  ${({ origin }) =>
    `color: ${origin?.color || "var(--mainColor)"};`}

  &&&:hover {
    ${({ origin }) =>
      `color: ${
        origin?.hoverColor
          || origin?.color
          || "var(--mainColorDarkerMore)"
      };`}
  }
}

  }
`;
