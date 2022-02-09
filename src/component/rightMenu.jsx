import logo from "../logo.png";
import { Link } from "react-router-dom";
import * as moment from 'jalali-moment';
import Menu from "./menu";
const RightMenu = () => {
  let todayJalali = moment().locale('fa').format('D  MMMM  YYYY');
  console.log(todayJalali);
  return (
    <div>
      <img width={100} src={logo} alt="" />
      <div>
        <span>کاربر : ادمین سیستم</span>
        <p> امروز :{todayJalali}</p>
        <p>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <Link to="/login"> خروج</Link>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default RightMenu;
