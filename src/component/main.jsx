import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RightMenu from "./rightMenu";
import "./main-box.scss";
import { Row, Col } from "react-bootstrap";

import CenterMainPage from "./centerMainPage";
import Experience from "./experience";
import ExperienceHistory from "./experienceHistory";
import Header from "./header";

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
    const { textConfig } = this.props;
    return (
      <div className="main-box">
        <Row>
          <Col md={12}>
            <Header text={textConfig.header} />
          </Col>
        </Row>

        <Row className="down-box">
          <Col md={3}>
            <div className="  menu-right">
              <RightMenu />
            </div>
          </Col>
          <Col md={9}>
            <Switch>
              {/* <Route path='/login' component={LoginForm} /> */}
              <Route path="/main/experience" component={Experience} />
              <Route path="/main/experienceHistory" component={ExperienceHistory} />
              <Route
                path="/"
                render={(props) => <CenterMainPage {...props} cards={cards} />}
              />
            </Switch>

            {/* <CenterMainPage cards={cards} /> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
