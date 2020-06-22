import React from "react";
import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  height: "200px",
  backgroundColor: "#373c40",
  paddingTop: "40px",
  color: "#7d8489",
});

export const FooterStyle = styled.div`
  .card {
    border: none !important;
  }
  @media (min-width: 576px) {
    .card-group > .card:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-top: -39px;
    }
  }
  .card-body {
    padding: 39px;
    height: 320px;
    background-color: #373c40;
  }

  .card-title {
    margin-top: 10px;
    margin-bottom: 0.75rem;
    color: #fff;
    padding-left: 46px;
  }
  .card-text:last-child {
    margin-top: 40.5px;
    position: relative;
    font-size: 12.9px;
    margin-left: 24.3px;
    line-height: 23px;
    font-weight: 500;
    left: 27px;
  }
  dl,
  ol,
  ul {
    margin-top: 0;
    margin-bottom: 1rem;
    list-style: none;
  }
  .icon {
    background-color: #f16543;
    font-size: 30px;
    display: inline-block;
    padding-top: 10px;
    float: left;
    width: 50px;
    height: 50px;
    margin: 6 15px 15px 0;
    text-align: center;
    color: #fff;
    margin-left: -57px;
  }
  a {
    position: relative;
    left: 12px;
    color: #cdd1d4;
    text-decoration: none;
    background-color: transparent;
    font-size: 13px;
  }

  .recent-blogs {
    width: 100%;
    height: 100%;
    margin: 30px 0px;
  }
  .time {
    font-size: 12px;
    margin-left: -7px;
    color: #7d8489;
    font-style: italic;
    font-family: "Open Sans", sans-serif;
  }
  .time2 {
    position: relative;
    top: -7px;
    margin-top: -71px;
    font-size: 12px;
    margin-left: -1px;
    color: #7d8489;
    font-style: italic;
    font-family: "Open Sans", sans-serif;
  }
  .recent {
    margin-left: -44px;
  }
  .bullhorn {
    margin-left: 24px;
    margin-top: 41px;
  }
  .third-block {
    margin: -40px -98px;
  }
  .third-text {
    margin-top: 85px;
    margin-right: -100px;
    margin-bottom: 82px;
    margin-left: -41px;
    font-size: 13.5px;
  }
  //third blogs

  .email {
    width: 120px;
    color: #a5a9ad;
    height: 250px;
    font-size: 14px;
    float: left;
    font-family: "Open Sans", sans-serif;
    margin: -72px -164px;
    /* border-bottom: 1px solid #44494e !important; */
  }
  .email-1 {
    font-size: 12px;
    color: #7d8489;
    font-style: italic;
    float: left;
    margin: -71px -121px;
    font-family: "Open Sans", sans-serif;
  }
  .phone {
    width: 120px;
    color: #a5a9ad;
    height: 250px;
    font-size: 14px;
    float: left;
    font-family: "Open Sans", sans-serif;
    margin: -26px -93px;
  }
  .phone-1 {
    font-size: 12px;
    color: #7d8489;
    font-style: italic;
    float: left;
    margin: -46px -39px;
    font-family: "Open Sans", sans-serif;
  }
  @media (min-width: 576px) {
    .card-group > .card:not(:last-child) .card-footer,
    .card-group > .card:not(:last-child) .card-img-bottom {
      border-bottom-right-radius: 0;
      height: 100px;
      background-color: #373c40;
    }
  }

  @media (min-width: 576px) {
    .card-group > .card:not(:first-child) .card-footer,
    .card-group > .card:not(:first-child) .card-img-bottom {
      border-bottom-left-radius: 0;
      height: 100px;

      background-color: #373c40;
    }
  }
  //Footer

  .term {
    font-size: 13px;
    position: absolute;
    bottom: 118px;
    padding-left: 117px;
  }
  .delivery {
    font-size: 13px;
    position: absolute;
    bottom: 117px;
    left: -97px;
  }
  .privacy {
    font-size: 13px;
    position: absolute;
    bottom: 117px;
    left: 185.2px;
  }
  .refund {
    font-size: 13px;
    position: absolute;
    bottom: 117px;
    left: -95px;
  }
  .product {
    font-size: 13px;
    position: absolute;
    bottom: 117px;
    left: 143px;
  }
  .copy {
    font-size: 14px;
    margin: -8px 58px;
  }
`;
