import { Button, Alert, Form, Row, Col } from "react-bootstrap";

const Header = ({ title, Buttons,icon }) => {
  return (
    <div className="header">
      <div>
        <i className={icon} aria-hidden="true"></i>
        <span> {title}</span>
      </div>
      {Buttons ? (
        <div>
          ( <Button variant="success">ثبت</Button>
          <Button variant="info">پیش نویس</Button>)
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
