import { Button } from "react-bootstrap";

const Experience = () => {
  return (
    <div className="experience">
      <div className="header">
        <div>
          <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
          <span>ثبت تجربه</span>
        </div>

        <div>
          <Button variant="success">ثبت</Button>{" "}
          <Button variant="info">پیش نویس</Button>{" "}
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Experience;
