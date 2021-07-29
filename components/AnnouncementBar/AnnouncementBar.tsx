import css from "@styled-system/css";
import Image from "next/image";
import { Centrator } from "components/Layout";
import Flex from "components/Flex";
import Box from "components/Box";

interface AnnouncementBarImageProps {
  src: string;
}

const AnnouncementBarImage = ({ src }: AnnouncementBarImageProps) => {
  return (
    <Box maxWidth={["80px", "auto"]} maxHeight="32px">
      <Image src={src} height="32px" width="128px" alt=""></Image>
    </Box>
  );
};

interface AnnouncementBarRowProps {
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  src5: string;
}

const AnnouncementBarRow = ({
  src1,
  src2,
  src3,
  src4,
  src5,
}: AnnouncementBarRowProps) => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      flexWrap="wrap"
      justifyContent="center"
      height={["48px", "60px"]}
      overflow="hidden"
      position="relative"
      textAlign="center"
    >
      <AnnouncementBarImage src={src1} />
      <AnnouncementBarImage src={src2} />
      <AnnouncementBarImage src={src3} />
      <AnnouncementBarImage src={src4} />
      <AnnouncementBarImage src={src5} />
    </Flex>
  );
};
