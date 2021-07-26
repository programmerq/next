import css from "@styled-system/css";
import styled from "styled-components";
import Image from "next/image";
import { all, transition, StyledSystemProps } from "components/system";
import Box, { BoxProps } from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import { Centrator } from "components/Layout";
import Link from "components/Link";
import getAddressImage from "utils/get-address-image";
import Filters, { useFilters } from "./Filters";
import Summary from "./Summary";
import { Job, filtersList, Filter, ALL, Group } from "./types";
import remoteUrl from "./assets/remote.svg";
import usaUrl from "./assets/usa.svg";
import waveUrl from "./assets/wave.png";

const waveBg = `url(${getAddressImage(waveUrl)}) -50px 0 no-repeat`;

type Props = {
  jobs: Job[];
} & BoxProps;

export default function JobList({ jobs, ...props }: Props) {
  const filter = useFilters(jobs);
  const groups = groupByDepartment(jobs, filter);
  return (
    <Box
      as="section"
      py={[6, 11]}
      background={waveBg}
      backgroundSize="1817px 421px"
      {...props}
    >
      <Centrator flexDirection="column" alignItems="center">
        <Box as="h2" fontWeight="black" text="header-1">
          Work at Teleport
        </Box>
        <Box as="p" text="text-lg" lineHeight="lg">
          Start shaping your future today
        </Box>
        <Filters mt={[3, 6]} width={["100%", "70%"]} filter={filter} />
        <Summary mt={[3, 6]} groups={groups} filter={filter} />
      </Centrator>
      <StyledList mt={[3, 6]}>
        {groups.map((group) => (
          <GroupItem as="li" key={group.title} group={group} />
        ))}
      </StyledList>
    </Box>
  );
}

function fitFilter(job: Job, filter: Filter): boolean {
  let res = 0;
  for (const field of filtersList) {
    const value = job[field];
    const selected = filter[field].current;
    if (selected[ALL] || selected[value]) {
      res++;
    }
  }
  return res === filtersList.length;
}

function groupByDepartment(jobs: Job[], filter: Filter): Group[] {
  const list: Group[] = [];
  const mapping: Record<string, number> = {};

  for (const job of jobs) {
    if (!fitFilter(job, filter)) {
      continue;
    }
    let index = mapping[job.department];
    if (index === undefined) {
      index = mapping[job.department] = list.length;
      list[index] = { title: job.department, jobs: [] };
    }
    list[index].jobs.push(job);
  }

  return list;
}

type GroupItemProps = {
  group: Group;
} & BoxProps;

function GroupItem({ group, ...props }: GroupItemProps) {
  return (
    <StyledGroup {...props}>
      <Centrator>
        <Box as="h3" fontWeight="bold" text={["header-4", "header-3"]}>
          {group.title}
        </Box>
      </Centrator>
      <StyledList mt={[3, 5]}>
        {group.jobs.map((item) => (
          <JobItem as="li" key={item.id} job={item} />
        ))}
      </StyledList>
    </StyledGroup>
  );
}

type JobItemProps = { job: Job } & BoxProps;

function JobItem({ job, ...props }: JobItemProps) {
  return (
    <StyledJob {...props}>
      <StyledLink href={job.hostedUrl} display="block" p="4" m="2">
        <Centrator alignItems="center">
          <Flex width={["70%", "85%"]} alignItems="center">
            <StyledJobTitle>{job.text}</StyledJobTitle>
            <Box as="p" width="50%" display={["none", "inline"]}>
              {job.commitment}
            </Box>
          </Flex>
          <Location location={job.location} width={["30%", "15%"]} />
        </Centrator>
      </StyledLink>
    </StyledJob>
  );
}

type LocationProps = { location: string } & FlexProps;

function Location({ location, ...props }: LocationProps) {
  let flagUrl = usaUrl;
  if (location.toLowerCase() === "remote") {
    flagUrl = remoteUrl;
  }
  return (
    <Flex alignItems="center" {...props}>
      <Box as="span" flexShrink={0} width="24px" height="16px" lineHeight={0}>
        <Image src={flagUrl} width={24} height={16} alt="" />
      </Box>
      <Box as="p" ml="3" lineHeight="20px">
        {location}
      </Box>
    </Flex>
  );
}

const StyledJob = styled("li")<StyledSystemProps>(
  css({
    "&:nth-child(odd)": {
      bg: "lightest-gray",
    },
  })
);

const StyledGroup = styled("div")<StyledSystemProps>(
  css({
    "& + &": {
      mt: [4, 8],
    },
  })
);

const StyledList = styled("ul")<StyledSystemProps>(
  css({
    width: "100%",
    listStyle: "none",
    m: 0,
    p: 0,
  }),
  all
);

const StyledJobTitle = styled("h4")<StyledSystemProps>(
  css({
    m: 0,
    boxSizing: "border-box",
    pr: 3,
    width: ["100%", "50%"],
    fontSize: ["text-md", "text-lg"],
    color: "dark-purple",
    fontWeight: "bold",
  })
);

const StyledLink = styled(Link)<StyledSystemProps>(
  css({
    m: 0,
    p: 0,
    py: 3,
    fontSize: "text-md",
    lineHeight: ["lg", "xxl"],
    display: "flex",
    alignItems: "center",
    color: "darkest",
    textDecoration: "none",
    outline: "2px solid",
    outlineColor: "transparent",
    transition: transition([
      ["backgroundColor", "interaction"],
      ["color", "interaction"],
      ["outlineColor", "interaction"],
    ]),
    "&:hover, &:focus": {
      bg: "lightest-gray",
      outlineColor: "dark-purple",
      color: "dark-purple",
    },
  })
);
