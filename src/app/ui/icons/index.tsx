import styled from "styled-components";

// Navbar Icons

// Home
import HomeSvg from "./home.svg";
export const HomeIcon = styled(HomeSvg)`
  width: 30px;
  height: 30px;
`;

// import MyPictureSvg from "./blob.svg";
// export const MyPictureIcon = styled(MyPictureSvg)`
//  width: 330px;
//   height: 330px;
// `;
export const MyPictureIcon = () => {
	return (
		<svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <mask id="mask0" mask-type="alpha">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
    </mask>
    <g mask="url(#mask0)">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
        
        <image href="https://drive.google.com/file/d/1DKLcmwqivh0aE5iEFVvpj2dV--1rjqn7/view?usp=sharing" className="home__blob-img" />
    </g>
</svg>
	)
}


// Tecnologias
import FileSvg from "./file-text.svg";
export const TechIcon = styled(FileSvg)`
  width: 30px;
  height: 30px;
`;

// Proyectos
import ScenerySvg from "./scenery.svg";
export const ProjetsIcon = styled(ScenerySvg)`
  width: 30px;
  height: 30px;
`;

// Contacto
import SendSvg from "./send.svg";
export const ContactIcon = styled(SendSvg)`
  width: 30px;
  height: 30px;
`;

// Home Icons

import LinkedinSvg from "./linkedin.svg";
export const LinkedinIcon = styled(LinkedinSvg)`
  width: 20px;
  height: 20px;
`;

import GithubSvg from "./github.svg";
export const GithbubIcon = styled(GithubSvg)`
  width: 20px;
  height: 20px;
`;

import MouseSvg from "./computer-mouse.svg";
export const MouseIcon = styled(MouseSvg)`
  width: 32px;
  height: 32px;
`;

import ArrowDownSvg from "./arrow-down.svg";
export const ArrowDownIcon = styled(ArrowDownSvg)`
  width: 20px;
  height: 20px;
`;

import DownloadSvg from "./download.svg";
export const DownLoadIcon = styled(DownloadSvg)`
  width: 20px;
  height: 20px;
`;
