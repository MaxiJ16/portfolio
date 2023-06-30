import styled from "styled-components";

// Navbar Icons

// Home
import HomeSvg from "./home.svg";
export const HomeIcon = styled(HomeSvg)``;

// Tecnologias
import FileSvg from "./file-text.svg";
export const TechIcon = styled(FileSvg)``;

// Proyectos
import ScenerySvg from "./scenery.svg";
export const ProjetsIcon = styled(ScenerySvg)``;

// Contacto
import SendSvg from "./send.svg";
export const ContactIcon = styled(SendSvg)``;

// Light - Dark Mode
import MoonSVG from "./moon.svg";
export const MoonIcon = styled(MoonSVG)``;

// Home Icons
import LinkedinSvg from "./linkedin.svg";
export const LinkedinIcon = styled(LinkedinSvg)``;

import GithubSvg from "./github.svg";
export const GithbubIcon = styled(GithubSvg)``;

import MouseSvg from "./computer-mouse.svg";
export const MouseIcon = styled(MouseSvg)``;

import ArrowDownSvg from "./arrow-down.svg";
export const ArrowDownIcon = styled(ArrowDownSvg)``;

import DownloadSvg from "./download.svg";
export const DownLoadIcon = styled(DownloadSvg)``;

import Image from "next/image";

export function Me() {
  return (
    <Image src="/image.png" alt="me" width="250" height="250" priority={true} />
  );
}

///// SKILLS ICONS //////

// Frontend
import ReactSvg from "./react.svg";
export const ReactIcon = styled(ReactSvg)``;

import NextSvg from "./nextjs.svg";
export const NextIcon = styled(NextSvg)``;

import JsSvg from "./javascript.svg";
export const JsIcon = styled(JsSvg)``;

import TsSvg from "./typescript.svg";
export const TsIcon = styled(TsSvg)``;

import RecoilSvg from "./recoil-js.svg";
export const RecoilIcon = styled(RecoilSvg)``;

import ReduxSvg from "./redux.svg";
export const ReduxIcon = styled(ReduxSvg)``;

import HtmlSvg from "./html-1.svg";
export const HtmlIcon = styled(HtmlSvg)``;

import CssSvg from "./css-3.svg";
export const CssIcon = styled(CssSvg)``;

import StyledCompSvg from "./styled-components-1.svg";
export const StyledCompIcon = styled(StyledCompSvg)``;

import TailwindSvg from "./tailwind-css-2.svg";
export const TailwindIcon = styled(TailwindSvg)``;

import SWRSvg from "./swr.svg";
export const SwrIcon = styled(SWRSvg)``;

import MapboxSvg from "./mapbox.svg";
export const MapboxIcon = styled(MapboxSvg)``;
