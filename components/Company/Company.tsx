import styled from "styled-components";
import { Property } from "csstype";
import { all, css, StyledSystemProps } from "components/system";
import Image from "next/image";
import Flex, { FlexProps } from "components/Flex";
import * as logos from "./logos";
import { CompanyId } from "./types";
import companiesList from "./companiesList";

export type Props = {
  id: CompanyId;
} & FlexProps;

export default function Company({ id, ...props }: Props) {
  const url: string = logos[id];
  const data = companiesList.find(({ id: companyId }) => companyId === id);

  return (
    <StyledWrapperImage {...props}>
      <StyledImage
        src={url}
        layout="fill"
        alt={data?.title}
        title={data?.title}
      />
    </StyledWrapperImage>
  );
}

//in this case !important is used because in the component nex/image styles are locked
//and otherwise, unfortunately, they cannot be overridden
const StyledWrapperImage = styled(Flex)<StyledSystemProps>(
  css({
    borderRadius: "default",
    bg: "white",
    height: "100%",
    overflow: "hidden",
    position: "relative",

    "& > div:first-child": {
      position: "static !important" as Property.Position,
      width: "100%",
    },
  }),
  all
);

const StyledImage = styled(Image)<StyledSystemProps>(
  css({
    position: "static !important" as Property.Position,
    width: "auto !important",
    height: "auto !important",
  }),
  all
);
