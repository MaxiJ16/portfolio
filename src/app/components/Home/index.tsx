import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { BodyText } from "@/app/ui/typography";
import { ArrowDownIcon, MouseIcon } from "@/app/ui/icons";
import { HomeContentData } from "../HomeContent";
import { HomeContent, HomeContainer, HomeSection } from "./styled";

export const HomePage = () => {
  return (
    <HomeSection id="top" data-scroll-section>
      <Balancer>
        <HomeContainer className="container grid">
          <HomeContent className="grid">
            <HomeContentData />
          </HomeContent>

          <Link
            className="scrollButton"
            href={"#projects"}
            data-scroll-to="projects"
          >
            <MouseIcon className={"mouse"} />
            <BodyText>Scroll down</BodyText>
            <ArrowDownIcon />
          </Link>
        </HomeContainer>
      </Balancer>
    </HomeSection>
  );
};