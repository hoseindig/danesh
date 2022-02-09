import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import MainBox from "./component/main";
import LoginForm from "./component/loginForm";

function App() {
  const textConfig = {
    header: "وزارت صنعت معدن و تجارت",
  };
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      {/* <Header text={textConfig.header} /> */}
      <Switch>
        <Route
          path="/main"
          component={() => <MainBox textConfig={textConfig} />}
        />
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
