import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes/Navigation";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/nice-select.css";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
   
    </div>
  );
}

export default App;
