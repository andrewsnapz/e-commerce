import styled from "styled-components";
import { DESKTOP_STYLE, TABLET_STYLE, MOBILE_STYLE } from "../../screenStyles.ts";

type GridProps = {
  as?: HTMLElement;
};

type ColumnProps = {
  sm: number;
  md: number;
  lg: number;
  as?: HTMLElement;
};

/*
  mobile first approach:
*/
export const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${MOBILE_STYLE.columnGap}px;
  grid-template-columns: repeat(${MOBILE_STYLE.columns}, 1fr);

  @media (min-width: ${TABLET_STYLE.width}) {
    gap: ${TABLET_STYLE.columnGap}px;
    grid-template-columns: repeat(${TABLET_STYLE.columns}, 1fr);
  }

  @media (min-width: ${DESKTOP_STYLE.width}) {
    gap: ${DESKTOP_STYLE.columnGap}px;
    grid-template-columns: repeat(${DESKTOP_STYLE.columns}, 1fr);
  }
`;

export const Column = styled.div<ColumnProps>`
  grid-column: ${(props) => `span ${props.sm}`};

  @media (min-width: ${TABLET_STYLE.width}) {
    grid-column: ${(props) => `span ${props.md}`};
  }

  @media (min-width: ${DESKTOP_STYLE.width}) {
    grid-column: ${(props) => `span ${props.lg}`};
  }
`;
