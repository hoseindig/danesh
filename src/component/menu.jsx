import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import './menu.scss'
// import "bootstrap/dist/css/bootstrap.min.css";

export class Example1 extends Component {
  render() {
    const menuItem = [
      { id: 0, headerText: "خانه" },
      { id: 1, headerText: "ثبت" },
      { id: 2, headerText: "جستجو" },
      { id: 3, headerText: "نقشه دانش" },
      { id: 4, headerText: "آیتم های شخصی" },
      { id: 5, headerText: "ارزیابی ئ پاسخ" },
      { id: 6, headerText: "انجمن گفتگوی سوال" },
      { id: 7, headerText: "ارتباط با دیگران" },
      { id: 8, headerText: "گزارشات" },
    ];
    return (
      <div>
        <Accordion>
          {menuItem.map((item) => {
            return (
              <Accordion.Item eventKey={item.id} key={item.id}>
                <Accordion.Header>{item.headerText}</Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
              </Accordion.Item>
            );
          })}
       
        </Accordion>
      </div>
    );
  }
}

export default Example1;
