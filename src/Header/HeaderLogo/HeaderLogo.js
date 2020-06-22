import React from "react";
import styled from "styled-components";

const HeaderLogo = styled.nav`
  img {
    position: absolute;
    bottom: 2px;
    top: 10px;
    left: 7%;
    padding-right: 10px;
    margin-left: -4px;
    width: 72px;
    height: 55px;
  }
  @media screen and (min-width: 0px) and (max-width: 479px) {
    img {
      position: absolute;
      bottom: 2px;
      top: 10px;
      left: 7%;
      padding-right: 10px;
      margin-left: -3px;
      width: 15%;
      height: 7.5%;
    }
  }
`;

const HeaderLog = () => (
  <div>
    <HeaderLogo>
      <img src="image/logo.png"></img>
    </HeaderLogo>
  </div>
);

export default HeaderLog;
