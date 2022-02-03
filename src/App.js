import "./App.scss";
import Header from "./component/header";
import Main from "./component/main";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer  position="bottom-right" />
      <Header />
      <Main />
    </div>
  );
}

export default App;
