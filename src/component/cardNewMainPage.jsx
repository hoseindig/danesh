import { Card, Row, Col, Accordion, ListGroup } from "react-bootstrap";

const CardNewsMainPAge = () => {
  const news = [
    {
      id: 1,
      text: "بیمارستان ولایت مشهد مقدس افتتاح شد ",
    },
    {
      id: 2,
      text: "همنوایی کامل کمیته علمی و ستاد ملی مقابله با کرونا ",

    },
    {
      id: 3,
      text: "اعلام آماده باش به مراکز بهداشتی کشور با ورود به موج ششم کرونا ",

    },
    {
      id: 5,
      text: "مدیرعامل سازمان انتقال خون ایران منصوب شد ",
    },

    {
      id: 6,
      text: "تزریق ۶۲۱ هزار دُز واکسن کرونا در شبانه روز گذشته ",
    },
    {
      id: 7,
      text: "منابع پیش بینی شده نظام سلامت را به دستگاه های دیگر ندهید",
    },
    {
      id: 8,
      text: " روند بروز سرطان در ایران افزایشی است ",
    },
    {
      id: 9,
      text: "هیچ مرزی بین ایران و سوریه وجود ندارد ",
    },
    {
      id: 10,
      text: "انتقال موفقیت آمیز قلب قهرمان 1.5 ساله مشهدی به تهران ",
    },
     {
      id: 11,
      text: "راهکارهایی برای مدیریت نگرانی های غیرمفید در دوران همه گیری کرونا ",
    },
    // {
    //   id: 12,
    //   text: "اخبار ",
    // },
  ];
  return (
    <Card border="light" className="card-news">
      {/* <Card.Header>Header</Card.Header> */}
      <Card.Body>
        {/* آخرین اخبار */}
        <Card.Text>
          <i className="fa fa-volume-up" aria-hidden="true"></i> آخرین اخبار{" "}
          <ListGroup as="ul" className="p-0">
            {news.map((n) => {
              return (
                <ListGroup.Item as="li" key={n.id}>
                  <i className="fa fa-circle" style={{ fontSize: "8px" }}></i>{" "}
                  <span>{n.text}</span>
                  <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardNewsMainPAge;
