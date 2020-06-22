import React from "react";
import styled from "@emotion/styled";
//Theme js
export const Container = styled.div({
  width: "100%",
  background: "#fff",
  transition: "all 0.2s ease-in-out",
  color: "#80878d",
  display: "inline-block",
  fontSize: "10px",
  lineHeight: "21px",
  fontWeight: "700",
  textTransform: "uppercase",
  borderBottom: "4px solid transparent",
});

export const MyNavbar = styled.nav`
  .color-nav {
    position: relative;
    top: -1px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.08);
    padding-left: 5%;
    height: 71px;
  }

  //react bootstrap..
  .navbar-brand {
    margin-right: 10rem;
  }
  .nav_link {
    padding-top: 26px;
    height: 66px;
  }
  .nav_link:hover {
    display: block;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    /* text-decoration: underline; */
    border-bottom: 5px solid #f16543;
    opacity: 1;
  }
  @media (max-width: 479px) {
    #responsive-navbar-nav {
      margin-top: 14px;
      margin-right: -15px;
      margin-left: -19px;
      padding-left: 10px;
      padding: 12px;
      background: #f16543;
    }
  }

  //Mobile-menu
  @media screen and (min-width: 0px) and (max-width: 479px) {
    .mobile-heading {
      display: inline-block;
      position: absolute;
      text-align: center;
      font-size: 22px;
      text-align: center;
      width: 60%;
      margin: 0;
      padding-top: 0px;
      color: #666;
      margin-bottom: 37px;
      left: 70px;
      bottom: -16%;
    }
    .navbar-light .navbar-nav .nav-link {
      color: #fff;
      line-height: 20px;
      font-size: 14px;
      text-transform: uppercase;
      position: relative;
      display: block;
      padding: 10px 5px;
      font: icon;
      height: 40px;
      /* font-weight:17px; */
      font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
  }

  @media screen and (min-width: 479px) and (max-width: 3000px) {
    .mobile-heading {
      display: none;
    }
    .navbar-light .navbar-nav .nav-link {
      font-size: 9.6px;
      margin: 8px -32px 10px 0px;
      padding: 21px 27px 0px;
      font-weight: 900;
    }
  }
  .white {
    display: block;
    font-size: 30px;
    color: #fff;
  }
  .navbar-light .navbar-toggler {
    margin-top: 10px;
    border-color: rgba(0, 0, 0, 0.1);
    background-color: #f16543;
    position: inherit;
    bottom: 5%;
    right: 10px;
    width: 49px;
    height: 40px;
    padding: 0px;
  }
`;
