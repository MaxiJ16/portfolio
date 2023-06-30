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

import Image from 'next/image'
 
export function Me() {
  return <Image src="/image.png" alt="me" width="250" height="250" />
}
