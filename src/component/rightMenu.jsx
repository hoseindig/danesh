import logo from "../logo.png";
import Menu from "./menu";
const RightMenu = () => {
  return (
    <div>
      <img width={100} src={logo} alt="" />
      <div>
        <span>کاربر : ادمین سیستم</span>
        <p> امروز :28 دی ماه 1400</p>
        <p>
          <i className="fa fa-sign-out" aria-hidden="true"></i> خروج
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default RightMenu;
