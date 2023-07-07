import { LargeText, BodyText } from "@/app/ui/typography";
import { SkillsContent, SkillsBox, SkillsGroup, SkillsData } from "./style";

import {
  AirtableIcon,
  AlgoliaIcon,
  CloudinaryIcon,
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  GitIcon,
  GithbubIcon,
  HtmlIcon,
  JsIcon,
  JwtIcon,
  MapboxIcon,
  NextIcon,
  NodeIcon,
  NpmIcon,
  PostgreIcon,
  PostmanIcon,
  ReactIcon,
  RecoilIcon,
  ReduxIcon,
  SendgridIcon,
  SequelizeIcon,
  StyledCompIcon,
  SwrIcon,
  TailwindIcon,
  TrelloIcon,
  TsIcon,
  VercelIcon,
  YarnIcon,
} from "@/app/ui/icons";

export const FrontendIcons = () => {
  return (
    <SkillsContent className="container grid">
      <LargeText>Frontend Developer</LargeText>

      <SkillsBox>
        <SkillsGroup>
          <SkillsData>
            <ReactIcon />
            <BodyText>React</BodyText>
          </SkillsData>

          <SkillsData>
            <NextIcon />
            <BodyText>Next.Js</BodyText>
          </SkillsData>

          <SkillsData>
            <JsIcon />
            <BodyText>JavaScript</BodyText>
          </SkillsData>

          <SkillsData>
            <TsIcon />
            <BodyText>TypeScript</BodyText>
          </SkillsData>

          <SkillsData>
            <RecoilIcon />
            <BodyText>Recoil</BodyText>
          </SkillsData>

          <SkillsData>
            <ReduxIcon />
            <BodyText>Redux</BodyText>
          </SkillsData>

          <SkillsData>
            <HtmlIcon />
            <BodyText>HTML</BodyText>
          </SkillsData>

          <SkillsData>
            <CssIcon />
            <BodyText>CSS</BodyText>
          </SkillsData>

          <SkillsData>
            <StyledCompIcon />
            <BodyText>Styled Components</BodyText>
          </SkillsData>

          <SkillsData>
            <TailwindIcon />
            <BodyText>Tailwind</BodyText>
          </SkillsData>

          <SkillsData>
            <SwrIcon />
            <BodyText>Swr</BodyText>
          </SkillsData>

          <SkillsData>
            <MapboxIcon />
            <BodyText>Mapbox</BodyText>
          </SkillsData>
        </SkillsGroup>
      </SkillsBox>
    </SkillsContent>
  );
};

export const BackendIcons = () => {
  return (
    <SkillsContent className="container grid">
      <LargeText>Backend Developer</LargeText>

      <SkillsBox>
        <SkillsGroup>
          <SkillsData>
            <NodeIcon />
            <BodyText>Node.Js</BodyText>
          </SkillsData>

          <SkillsData>
            <PostgreIcon />
            <BodyText>PostgreSQL</BodyText>
          </SkillsData>

          <SkillsData>
            <ExpressIcon />
            <BodyText>Express</BodyText>
          </SkillsData>

          <SkillsData>
            <FirebaseIcon />
            <BodyText>Firebase</BodyText>
          </SkillsData>

          <SkillsData>
            <SequelizeIcon />
            <BodyText>Sequelize</BodyText>
          </SkillsData>

          <SkillsData>
            <AlgoliaIcon />
            <BodyText>Algolia</BodyText>
          </SkillsData>

          <SkillsData>
            <CloudinaryIcon />
            <BodyText>Cloudinary</BodyText>
          </SkillsData>

          <SkillsData>
            <JwtIcon />
            <BodyText>JWT</BodyText>
          </SkillsData>

          <SkillsData>
            <AirtableIcon />
            <BodyText>Airtable</BodyText>
          </SkillsData>

          <SkillsData>
            <SendgridIcon />
            <BodyText>Sendgrid</BodyText>
          </SkillsData>
        </SkillsGroup>
      </SkillsBox>
    </SkillsContent>
  );
};

export const OtherIcons = () => {
  return (
    <SkillsContent className="container grid">
      <LargeText>Others</LargeText>

      <SkillsBox>
        <SkillsGroup>
          <SkillsData>
            <GitIcon />
            <BodyText>Git</BodyText>
          </SkillsData>

          <SkillsData>
            <GithbubIcon />
            <BodyText>Github</BodyText>
          </SkillsData>

          <SkillsData>
            <PostmanIcon />
            <BodyText>Postman</BodyText>
          </SkillsData>

          <SkillsData>
            <YarnIcon />
            <BodyText>Yarn</BodyText>
          </SkillsData>

          <SkillsData>
            <VercelIcon />
            <BodyText>Vercel</BodyText>
          </SkillsData>

          <SkillsData>
            <NpmIcon />
            <BodyText>Npm</BodyText>
          </SkillsData>

          <SkillsData>
            <TrelloIcon />
            <BodyText>Trello</BodyText>
          </SkillsData>
        </SkillsGroup>
      </SkillsBox>
    </SkillsContent>
  );
};
