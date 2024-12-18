import styled from "styled-components";
import { DESKTOP_STYLE, TABLET_STYLE, MOBILE_STYLE } from "../../screenStyles.ts";

export const PageLayoutWrapper = styled.div`
  height: 100vh;
  width: ${MOBILE_STYLE.width};
  padding-inline: ${MOBILE_STYLE.inlinePadding}px;

  @media (min-width: ${TABLET_STYLE.width}) {
    width: ${TABLET_STYLE.width};
    padding-inline: ${TABLET_STYLE.inlinePadding}px;
  }

  @media (min-width: ${DESKTOP_STYLE.width}) {
    width: ${DESKTOP_STYLE.width};
    padding-inline: ${DESKTOP_STYLE.inlinePadding}px;
  }
`;

export const Main = styled.main`
  max-width: ${MOBILE_STYLE.maxWidth};

  @media (min-width: ${TABLET_STYLE.width}) {
    max-width: ${TABLET_STYLE.maxWidth};
  }

  @media (min-width: ${DESKTOP_STYLE.width}) {
    max-width: ${DESKTOP_STYLE.maxWidth};
  }
`;
