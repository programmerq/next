import styled from "styled-components";
import css from "@styled-system/css";
import { all, StyledSystemProps } from "components/system";
import { Centrator } from "components/Layout";
import Heading from "components/Heading";
import Box from "components/Box";
import { ReactNode } from "react";
import getAddressImage from "utils/get-address-image";
import * as icons from "./icons";
import pathUrl from "./assets/path.png";
import waveLeftUrl from "./assets/wave_left.png";
import waveRightUrl from "./assets/wave_right.png";

type Child = React.ReactElement<typeof Milestone>;

type Props = { children: Child | Array<Child> };

const pathBg = `url(${getAddressImage(pathUrl)}) center 200px no-repeat`;
const waveLeftBg = `url(${getAddressImage(
  waveLeftUrl
)}) -438px -660px no-repeat`;
const waveRightBg = `url(${getAddressImage(
  waveRightUrl
)}) right -438px top -660px no-repeat`;
const complexBg = [pathBg, waveLeftBg, waveRightBg].join(",");

function History({ children }: Props) {
  return (
    <Box
      as="section"
      width="100%"
      text="text-xl"
      py={[5, 10]}
      background={["none", "none", complexBg]}
    >
      <Centrator flexDirection="column" alignItems="center">
        <Heading title="Our Story" subtitle="History" align="center" />
        <Box as="ul" listStyle="none" maxWidth="100%">
          {children}
        </Box>
      </Centrator>
    </Box>
  );
}

interface MilestoneProps {
  icon: keyof typeof icons;
  children: ReactNode;
}

export function Milestone({ icon, children }: MilestoneProps) {
  return (
    <StyledItem backgroundImage={`url(${getAddressImage(icons[icon])})`}>
      <StyledTextWrapper>{children}</StyledTextWrapper>
    </StyledItem>
  );
}

History.Milestone = Milestone;

export default History;

const StyledTextWrapper = styled("div")<StyledSystemProps>(
  css({
    width: ["100%", "51%"],
    fontSize: "text-xl",
    lineHeight: "lg",
    "> p": {
      fontSize: "text-lg",
      lineHeight: "28px",
      color: "darkest",
      m: 0,
    },
  })
);

const StyledItem = styled("li")<StyledSystemProps>(
  css({
    display: "flex",
    alignItems: "center",
    minHeight: ["auto", "260px"],
    pt: ["300px", 0],
    backgroundSize: "313px 313px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: ["center top", "right 20% center"],
    ":nth-child(even)": {
      backgroundPosition: ["center top", "left 20% center"],

      [StyledTextWrapper]: {
        ml: "auto",
      },
    },
    "& + &": {
      mt: 2,
    },
    ":last-child": {
      mt: "-10px",
    },
  }),
  all
);
