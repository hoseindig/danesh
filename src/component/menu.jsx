import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion, ListGroup } from "react-bootstrap";
import "./menu.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import ChildMenu from "./childMenu";

export class Example1 extends Component {
  render() {
    const menuItem = [
      // { id: 0, headerText: "خانه" },
      {
        id: 1,
        headerText: "ثبت",
        child: [
          { id: 0, name: "تجربه", icon: "", path: "/main/experience" },
          { id: 1, path: "", name: "ثبت سوال", icon: "fa fa-question-circle" },
          { id: 2, path: "", name: "ثبت مستند", icon: "fa fa-file-text-o" },
          {
            id: 3,
            path: "",
            name: "ثبت درخواست داتش",
            icon: "fa fa-puzzle-piece",
          },
          {
            id: 4,
            path: "",
            name: "ثبت مستندات پروژه ها",
            icon: "fa fa-file-text-o",
          },
          { id: 5, path: "", name: "فرهنگ واژگان", icon: "fa fa-book" },
        ],
      },
      { id: 2, headerText: "جستجو" },
      { id: 3, headerText: "نقشه دانش" },
      { id: 4, headerText: "آیتم های شخصی" },
      { id: 5, headerText: "ارزیابی ئ پاسخ" },
      { id: 6, headerText: "انجمن گفتگوی سوال" },
      { id: 7, headerText: "ارتباط با دیگران" },
      { id: 8, headerText: "گزارشات" },
      {
        id: 9, headerText: "سوابق ثبت", child: [
          { id: 0, name: "سوابق ثبت تجریه", icon: "", path: "/main/experienceHistory" },
        ]
      },
    ];
    return (
      <div>
        <ListGroup.Item>
          <Link to="/">خانه</Link>
        </ListGroup.Item>

        <Accordion>
          {menuItem.map((item) => {
            return (
              <Accordion.Item eventKey={item.id} key={item.id}>
                <Accordion.Header>{item.headerText}</Accordion.Header>
                <Accordion.Body>
                  <ChildMenu item={item} />
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default Example1;
