import styled, { keyframes, css as styledCss } from "styled-components";
import css from "@styled-system/css";
import { all, StyledSystemProps, variant } from "components/system";
import Box, { BoxProps } from "components/Box";
import Image, { ImageProps } from "next/image";
import crew from "./data";

interface Photo {
  title: string;
  data: NextImageData;
}

type NextImageData = Exclude<ImageProps["src"], string>;

function getGroups(): [Photo[], Photo[]] {
  const queue: Photo[] = [];
  const group1: Photo[] = [];
  const group2: Photo[] = [];

  for (const member of crew) {
    if (member.photos.length) {
      const photos = member.photos.map((photo) => ({
        title: `${member.firstName}, ${member.role}`,
        data: photo,
      }));

      queue.push(...photos);
      const group = group1.length < crew.length / 2 ? group1 : group2;
      group.push(queue.pop());
    }
  }

  for (let i = 0; i < queue.length; i++) {
    if (i % 2) {
      group2.unshift(queue[i]);
    } else {
      group2.push(queue[i]);
    }
  }

  return [group1, group2];
}

export default function CrewGallery(props: BoxProps) {
  const [group1, group2] = getGroups();
  return (
    <Box overflow="hidden" {...props}>
      <StyledRowWrapper>
        <StyledRow
          height={["250px", "250px", "500px"]}
          animationDuration={["200s", "200s", "150s"]}
          variant={[250, 250, 500]}
        >
          {group1.map((photo, index) => (
            <Photo height={500} key={index} photo={photo} />
          ))}
        </StyledRow>
        <StyledRow
          height={["190px", "190px", "380px"]}
          animationDuration={["250s", "250s", "200s"]}
          variant={[190, 190, 380]}
          mt="3"
        >
          {group2.map((photo, index) => (
            <Photo height={380} key={index} photo={photo} />
          ))}
        </StyledRow>
      </StyledRowWrapper>
    </Box>
  );
}

interface PhotoProps {
  photo: Photo;
  height: number;
}

function Photo({ photo }: PhotoProps) {
  const photoDubl = { ...photo.data };

  return (
    <StyledLI>
      <Image src={photoDubl} alt={photo.title} placeholder="blur" />
      <StyledCaption>{photo.title}</StyledCaption>
    </StyledLI>
  );
}

const shiftAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(calc(min(-150vw, -100%) + 100vw));
  }
  100% {
    transform: translateX(0%);
  }
`;

const StyledRowWrapper = styled("div")<StyledSystemProps>(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "4000px",
  })
);

interface SledRowProps extends StyledSystemProps {
  variant?: number[];
}

const StyledRow = styled("ul")<SledRowProps>(
  css({
    display: "inline-flex",
    listStyle: "none",
    minWidth: "100vw",
    m: 0,
    p: 0,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    willChange: "transform",
  }),
  styledCss`animation-name: ${shiftAnimation};`,
  all,
  variant({
    variants: [190, 250, 380, 500].reduce((acc, num) => {
      acc[num] = {
        img: {
          height: `${num}px !important`,
        },
      };
      return acc;
    }, {}),
  })
);

const StyledCaption = styled("p")<StyledSystemProps>(
  css({
    position: "absolute",
    bottom: ["8px", "16px"],
    left: "0",
    m: 0,
    maxWidth: "80%",
    padding: "1",
    color: "white",
    fontSize: "text-sm",
    borderTopRightRadius: "default",
    borderBottomRightRadius: "default",
    bg: " rgba(0, 0, 0, 0.64)",
  })
);

const StyledLI = styled("li")<StyledSystemProps>(
  css({
    position: "relative",
    height: "100%",
    flexShrink: 0,
    "& + &": { ml: 3 },
  })
);
