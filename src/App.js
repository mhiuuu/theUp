import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import MyForm from "./Form.js";
import { Slide } from "react-awesome-reveal";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slide direction="up" triggerOnce>
        <Hero /> 
      </Slide>
      <Slide direction="up" triggerOnce>
        <Main />
      </Slide>
      <Slide direction="up" triggerOnce>
        <MyForm />
      </Slide> 
    </div>
  );
};

export default App;