import styled from "styled-components";
import Box from "components/Box";
import Company, { CompanyId, data as companiesData } from "components/Company";
import Flex from "components/Flex";
// import Image from "components/Image";
import theme from "components/theme";
import { css, all } from "components/system";
import getAddressImage from "utils/get-address-image";
import reviewsData from "./data/reviews";
import * as personsData from "./data/photos";
import leftUrl from "./assets/left.svg";
import rightUrl from "./assets/right.svg";
import Image, { ImageProps } from "next/image";

const bg = [
  `url(${getAddressImage(leftUrl)}) left 24px top no-repeat`,
  `url(${getAddressImage(rightUrl)}) right 24px top no-repeat`,
].join(",");

type ReviewItemProps = {
  company: CompanyId;
};

export default function Review({ company }: ReviewItemProps) {
  const data = reviewsData[company];

  if (!data) {
    return null;
  }

  let photo = "";

  if (data.person.photo in personsData) {
    photo = personsData[data.person.photo];
  }

  const companyData = companiesData.find(({ id }) => id === company);

  return (
    <StyledWrapper>
      <Company width="140px" height="50px" id={company} />
      <Box
        as="p"
        mt="5"
        textAlign="center"
        fontSize={["text-lg", "header-4"]}
        lineHeight={["md", "lg"]}
        color="darkest"
        fontFamily={theme.fonts.serif}
      >
        {data.text}
      </Box>
      <Flex alignItems="center" pt="4">
        {photo && (
          <StyledImage
            src={photo}
            alt={companyData.title}
            title={companyData.title}
            width={40}
            height={40}
          />
        )}
        <Box
          color="gray"
          text="text-sm"
          letterSpacing=".5px;"
          ml={photo ? 4 : 0}
          textAlign={photo ? "left" : "center"}
        >
          <Box as="p">{data.person.name}</Box>
          <Box as="p">{`${data.person.title}, ${companyData.title}`}</Box>
        </Box>
      </Flex>
    </StyledWrapper>
  );
}

const StyledWrapper = styled("blockquote")(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "780px",
    m: 0,
    border: "1px solid",
    borderRadius: "md",
    borderColor: ["transparent", "dark-purple"],
    background: bg,
    backgroundColor: "white",
    backgroundSize: "80px 100px, 80px 100px",
    boxShadow: ["none", "0 1px 4px rgba(0, 0, 0, 0.24)"],
    px: 9,
    py: 5,
  }),
  all
);

const StyledImage = styled(Image)(
  css({
    borderRadius: "circle",
  }),
  all
);
