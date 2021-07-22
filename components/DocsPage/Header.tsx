import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Icon, { IconName } from "components/Icon";
import getAddressImage from "utils/get-address-image";
import Versions from "./Versions";
import { VersionsInfo } from "./types";
import bgUrl from "./assets/bg.svg";

interface DocHeaderProps {
  title: string;
  icon?: IconName;
  versions: VersionsInfo;
  githubUrl: string;
}

const GITHUB_DOCS = process.env.NEXT_PUBLIC_GITHUB_DOCS;

const DocHeader = ({
  title,
  icon = "book",
  versions,
  githubUrl,
}: DocHeaderProps) => {
  return (
    <Box
      position="relative"
      bg="dark-purple"
      backgroundImage={`url(${getAddressImage(bgUrl)})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="right top"
      backgroundColor="dark-purple"
      backgroundSize="750px 168px"
      minHeight="168px"
    >
      <Box as="a" href={GITHUB_DOCS} position="absolute" top="0" right="0">
        <img
          width="112"
          height="112"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
          alt="Fork me on GitHub"
        />
      </Box>
      <Flex>
        <Icon
          name={icon}
          color="white"
          size="xl"
          ml="56px"
          mt="56px"
          mr={3}
          display={["none", "block"]}
        />
        <Box mt={[3, 5]}>
          <Box text="text-sm" color="white" display={["none", "block"]}>
            Teleport
          </Box>
          <Box
            as="h1"
            mb={["80px", 0]}
            pl={[3, 0]}
            pr={["120px", 6]}
            color="white"
            fontSize={["header-2", "header-1"]}
            fontWeight="regular"
          >
            {title}
          </Box>
          <Versions
            {...versions}
            position={["absolute", "static"]}
            left="16px"
            bottom="16px"
            mt={1}
          />
        </Box>
      </Flex>
      {!!githubUrl && (
        <Flex position="absolute" bottom="16px" right={["16px", "48px"]}>
          <Button
            width="60px"
            shape={["md", "sm"]}
            variant="secondary-white"
            as="a"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Improve
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default DocHeader;
