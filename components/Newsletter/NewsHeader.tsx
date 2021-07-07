import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";

const NewsHeader = styled("div")<StyledSystemProps>(
  css({
    margin: ["62px 0px 32px", "48px 0px 32px"],
    position: "relative",
    left: ["40px", "65px"],
  }),
  all
);

export type NewsHeaderProps = ComponentProps<typeof NewsHeader>;

export default NewsHeader;
