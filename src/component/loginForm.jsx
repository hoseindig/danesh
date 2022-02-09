import "../style/login.scss";
import logoLogin from "../images/flag.jpg";
import tflag from "../images/tflag.jpg";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-box">
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row box-login d-flex">
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">نام کاربری</h6>
                  </label>
                  <input
                    className="mb-4"
                    type="text"
                    name="email"
                    placeholder="نام کاربری را وارد کنید"
                  />
                </div>
                <div className="row px-3 mb-4">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">کلمه عبور</h6>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="کلمه عبور را وارد کنید"
                  />
                </div>
                {/* <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="بیاد داشته باش"
                    />
                  </div>
                </div> */}
                <div className="row mb-3 px-3">
                  <Button variant="primary">
                    <Link to="/main">ورود</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row">
                  <img src={tflag} className="logo" alt="tflag" />
                </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img src={logoLogin} className="image" alt="logoLogin" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue py-4">
            <div className="row px-3">
              <small className="ml-4 ml-sm-5 mb-2">
                تمام حقوق محفوط &copy; 1400
              </small>
              <div className="social-contact ml-4 ml-sm-auto">
                <span className="fa fa-facebook mr-4 text-sm"></span>
                <span className="fa fa-google-plus mr-4 text-sm"></span>
                <span className="fa fa-linkedin mr-4 text-sm"></span>
                <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
