import React, { Component } from "react";
import RightMenu from "./rightMenu";
import "./main-box.scss";
import { Card, Row, Col, Accordion, ListGroup } from "react-bootstrap";

import CardsMAinPage from "./cardsMainPage";
import CardNewsMainPAge from "./cardNewMainPage";
class Main extends Component {
  state = {};
  render() {
    const cards = [
      {
        name: "",
        id: 1,
        cssClass: "orang",
        text: "تعداد کل کاربران",
        icon: "",
        number: 577,
      },
      {
        name: "",
        id: 2,
        cssClass: "orang",
        text: "تعداد مستندات",
        icon: "",
        number: 1394,
      },
      {
        name: "",
        id: 3,
        cssClass: "green",
        text: " تعداد دانش ها",
        icon: "",
        number: 33,
      },
      {
        name: "",
        id: 4,
        cssClass: "blue",
        text: "تعداد سوالات",
        icon: "",
        number: 2,
      },
    ];
    return (
      <div className="main-box">
        <Row>
          <Col md={3}>
            <div className="  menu-right">
              <RightMenu />
            </div>
          </Col>
          <Col md={9}>
            <CardsMAinPage cards={cards} />
            <Row>
              <Col md={8}>
                <div className="m-3"></div>
                <Accordion>
                  <Accordion.Item eventKey={0} key={0}>
                    <Accordion.Header>
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
                      ارسال پست
                    </Accordion.Header>
                    <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>

              <Col md={4}>
                <div className="m-3 card-box ">
                  <CardNewsMainPAge />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
