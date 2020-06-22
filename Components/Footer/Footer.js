import React from "react";
import { jsx } from "@emotion/core";
import { Link, withRouter } from "react-router-dom";
import { Container, FooterStyle } from "./FooterStyle";
import { Card, CardGroup } from "react-bootstrap";
import { ThemeProvider } from "emotion-theming";

const Footer = () => {
  return (
    <div>
      <Container>
        <FooterStyle>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>About INPS</Card.Title>
                <Card.Text>
                  Institute of Natural & Professional sciences was founded in
                  the year 2000. The aim is to provide education in an
                  unconventional & distinct learning environment in the
                  challenging field of MCA for Mathematics, Computers,
                  Reasoning, and English.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="#" className="term">
                  Terms & Conditions
                </Link>
                <div className="copy">
                  Copyright © 2015. All Rights Reserved by INPS
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <div className="recent">Recent Blogs</div>
                </Card.Title>
                <ul className="bullhorn">
                  <li>
                    <i className="fa fa-bullhorn icon" aria-hidden="true"></i>
                    <Link to="#">
                      How To Prepare For NIMCET MCA entrance Exams
                    </Link>
                    <br />
                    <Link to="#" className="time">
                      2019-07-07 09:29:39,by Admin
                    </Link>
                  </li>
                  <div className="recent-blogs">
                    <li>
                      <i className="fa fa-bullhorn icon" aria-hidden="true"></i>
                      <Link to="#">
                        Tips on how to spend the day before JNU MCA <br />
                        Entran
                      </Link>
                      <br />
                      <Link to="#" className="time2">
                        2017-12-25 13:07:44,by Admin
                      </Link>
                    </li>
                  </div>
                </ul>
              </Card.Body>
              <Card.Footer>
                <Link to="#" className="delivery">
                  Delivery & Shipping policy
                </Link>
                <Link to="#" className="privacy">
                  PrivacyPolicy
                </Link>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <div className="third-block">Get in Touch</div>
                </Card.Title>
                <div className="third-text">
                  2nd Floor, Pratap Bhawan Behind Leela Cinema, Hazratganj
                  <br />
                  Lucknow , India
                </div>
                <ul>
                  <li>
                    <Link to="#" className="email">
                      Email:
                    </Link>
                    <Link to="#" className="email-1">
                      inpsclasses@gmail.com
                    </Link>
                  </li>
                  <div className="recent-blogs">
                    <li>
                      <Link to="#" className="phone">
                        Phone:
                      </Link>
                      <br />
                      <Link to="#" className="phone-1">
                        +91-9838-162-263
                      </Link>
                    </li>
                  </div>
                </ul>
              </Card.Body>
              <Card.Footer>
                <Link to="#" className="refund">
                  Refund & Cancellation
                </Link>
                <Link to="#" className="product">
                  Product/Service Details
                </Link>
              </Card.Footer>
            </Card>
          </CardGroup>
        </FooterStyle>
      </Container>
    </div>
  );
};
export default Footer;
