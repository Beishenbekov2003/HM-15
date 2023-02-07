import "./App.css";
import Counter from "./components/counter/Counter";
import { FirstCount } from "./components/firstcount/FirstCount";
import Input from "./components/input/Input";
import SecondCount from "./components/secondcount/SecondCount";
import Tema from "./components/tema/Tema";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <>
   <div className="App" >
      <Tema/>
      <Counter />
      <Input />
      <Timer />
      <FirstCount/>
      <SecondCount/>
    </div> 
    
    </>
  );
}

export default App;
