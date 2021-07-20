import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";
import PageIntro, { Props as PageIntroProps } from "components/PageIntro";
import { Centrator } from "components/Layout";
import { toFlexAlign } from "utils/align";
import getAddressImage from "utils/get-address-image";
import earthUrl from "./assets/earth.jpg";

type Align = "left" | "center";

export type Props = { align?: Align } & PageIntroProps;

export default function Cover({ align = "left", children, ...props }: Props) {
  return (
    <StyledWrapper backgroundImage={`url(${getAddressImage(earthUrl)})`}>
      <Centrator justifyContent={toFlexAlign(align)} textAlign={align}>
        <PageIntro
          theme={"light" as const}
          maxWidth={["100%", "41%"]}
          verticalResponsive={false}
          {...props}
        >
          {children}
        </PageIntro>
      </Centrator>
    </StyledWrapper>
  );
}

const StyledWrapper = styled("section")<StyledSystemProps>(
  css({
    display: "flex",
    alignItems: "center",
    boxSizing: "content-box",
    backgroundColor: "#124074",
    backgroundSize: "cover",
    backgroundPositionY: "center",
    minHeight: [200, 437],
    width: "100%",
    py: 5,
  }),
  all
);
