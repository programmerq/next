// import { css } from "@styled-system/css";
import { Centrator } from "components/Layout";
import Flex from "components/Flex";
import Box from "components/Box";
import * as logos from "./logos";

export type LogoName = keyof typeof logos;

export interface AnnouncementBarImageProps {
  logo: LogoName;
}

const AnnouncementBarImage = ({ logo }: AnnouncementBarImageProps) => {
  const LogoSVG = logos[logo];
  return (
    <Box width="auto" height="32px" my={2} mx={4} color="gray" opacity=".56">
      <LogoSVG width="100%" height="100%" display="block"></LogoSVG>
    </Box>
  );
};

interface AnnouncementBarRowProps {
  logo1: LogoName;
  logo2: LogoName;
  logo3: LogoName;
  logo4: LogoName;
  logo5: LogoName;
}

const AnnouncementBarRow = ({
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
}: AnnouncementBarRowProps) => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      // position="absolute"
      // bottom="0"
      // top="0"
      // opacity="0"
      // css={css({
      //   transition: "all 5s",
      //   "&.is-active": {
      //     top: "0px",
      //     opacity: 1,
      //   },
      //   "&.is-exiting": {
      //     opacity: 0,
      //     transition: "all .5s",
      //   },
      // })}
    >
      <AnnouncementBarImage logo={logo1} />
      <AnnouncementBarImage logo={logo2} />
      <AnnouncementBarImage logo={logo3} />
      <AnnouncementBarImage logo={logo4} />
      <AnnouncementBarImage logo={logo5} />
    </Flex>
  );
};

export interface AnnouncementBarProps {
  bar1: React.ReactNode;
  bar2?: React.ReactNode;
  bar3?: React.ReactNode;
}

export const AnnouncementBar = ({
  bar1 /* bar2, bar3 */,
}: AnnouncementBarProps) => {
  return (
    <Centrator>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        overflow="hidden"
        position="relative"
        minHeight={["48px", "60px"]}
        border="1px dotted red"
      >
        {bar1}
        {/* {bar2}
        {bar3} */}
      </Flex>
    </Centrator>
  );
};

AnnouncementBar.Row = AnnouncementBarRow;
