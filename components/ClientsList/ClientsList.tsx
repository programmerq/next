import styled from "styled-components";
import css from "@styled-system/css";
import Flex from "components/Flex";
import Box, { BoxProps } from "components/Box";
import { Centrator } from "components/Layout";
import Company, { CompanyId } from "components/Company";
import { StyledSystemProps } from "components/system";

type Props = {
  clients: CompanyId[];
  contrasted: true;
} & BoxProps;

export default function ClientsList({ clients, contrasted, ...props }: Props) {
  return (
    <Box
      as="section"
      bg={contrasted ? "page-bg" : "white"}
      py={[3, 6]}
      {...props}
    >
      <Centrator>
        <Flex flexDirection="column" alignItems="center" width="100%">
          <Box as="h2" fontSize="0" color="white">
            Clients
          </Box>
          <Box
            as="p"
            fontSize="text-lg"
            lineHeight="lg"
            fontWeight="bold"
            color={contrasted ? "dark-gray" : "black"}
          >
            Trusted by leading organizations
          </Box>
          <StyledList>
            {clients.map((id) => (
              <StyledItem key={id}>
                <Company id={id} px="4" py={[3, 0]} />
              </StyledItem>
            ))}
          </StyledList>
        </Flex>
      </Centrator>
    </Box>
  );
}

const StyledItem = styled("li")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    height: ["auto", "100px"],
    my: 3,
    ml: [0, 4],
    width: ["50%", `calc(20% - 20px)`],
    borderRadius: "default",
    boxShadow: ["none", "0 1px 3px rgba(0, 0, 0, 0.24)"],
    "&:nth-child(5n+1)": {
      ml: [0, 0],
    },
  })
);

const StyledList = styled("ul")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    listStyle: "none",
    m: 0,
    p: 0,
    mt: [2, 6],
  })
);
