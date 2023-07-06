import { LargeText, SubTitle, TinyText } from "@/app/ui/typography";
import { SkillSection, SkillsContainer, SkillsContent } from "./style";
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

export const SkillsSection = () => {
  return (
    <SkillSection id="skills">
      <SubTitle className="section__title">Habilidades</SubTitle>
      <TinyText className="section__subtitle">Mis Tecnologías</TinyText>

      <SkillsContainer className="container grid">
        <SkillsContent>
          <LargeText className="skills__title">Frontend Developer</LargeText>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <ReactIcon />
                <h3 className="skills__name">React</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <NextIcon />
                <h3 className="skills__name">Next.Js</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <JsIcon />
                <h3 className="skills__name">JavaScript</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <TsIcon />
                <h3 className="skills__name">TypeScript</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <RecoilIcon />
                <h3 className="skills__name">Recoil</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <ReduxIcon />
                <h3 className="skills__name">Redux</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <HtmlIcon />
                <h3 className="skills__name">HTML</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <CssIcon />
                <h3 className="skills__name">CSS</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <StyledCompIcon />
                <h3 className="skills__name">Styled Components</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <TailwindIcon />
                <h3 className="skills__name">Tailwind</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <SwrIcon />
                <h3 className="skills__name">Swr</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <MapboxIcon />
                <h3 className="skills__name">Mapbox</h3>
              </div>
            </div>
          </div>
        </SkillsContent>

        <SkillsContent>
          <LargeText className="skills__title">Backend Developer</LargeText>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <NodeIcon />
                <h3 className="skills__name">Node.Js</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <PostgreIcon />
                <h3 className="skills__name">PostgreSQL</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <ExpressIcon />
                <h3 className="skills__name">Express</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <FirebaseIcon />
                <h3 className="skills__name">Firebase</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <SequelizeIcon />
                <h3 className="skills__name">Sequelize</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <AlgoliaIcon />
                <h3 className="skills__name">Algolia</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <CloudinaryIcon />
                <h3 className="skills__name">Cloudinary</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <JwtIcon />
                <h3 className="skills__name">JWT</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <AirtableIcon />
                <h3 className="skills__name">Airtable</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <SendgridIcon />
                <h3 className="skills__name">Sendgrid</h3>
              </div>
            </div>
          </div>
        </SkillsContent>

        <SkillsContent>
          <LargeText className="skills__title">Others</LargeText>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <GitIcon />
                <h3 className="skills__name">Git</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <GithbubIcon />
                <h3 className="skills__name">Github</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <PostmanIcon />
                <h3 className="skills__name">Postman</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <YarnIcon />
                <h3 className="skills__name">Yarn</h3>
              </div>

              <div className="skills__data">
                {/* LOGO SKILL*/}
                <VercelIcon />
                <h3 className="skills__name">Vercel</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <NpmIcon />
                <h3 className="skills__name">Npm</h3>
              </div>
              <div className="skills__data">
                {/* LOGO SKILL*/}
                <TrelloIcon />
                <h3 className="skills__name">Trello</h3>
              </div>
            </div>
          </div>
        </SkillsContent>
      </SkillsContainer>
    </SkillSection>
  );
};