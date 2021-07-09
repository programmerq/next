import styled from "styled-components";

import { all, StyledSystemProps } from "components/system";

interface ImagePorps extends StyledSystemProps {
  css?: string;
}

export const Image = styled("img")<ImagePorps>(
  {
    maxWidth: "100%",
    minWidth: 0,
    height: "auto",
  },
  all
);

export default Image;
