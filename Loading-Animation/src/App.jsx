import "./App.css";
import Loading_Animation1 from "./components/Loading_Animation1";
import Loading_Animation2 from "./components/Loading_Animation2";
import Animate1 from "./components/Motion/Animate1";
import Animate2 from "./components/Motion/Animate2";
import Button1 from "./components/Buttons/Button1";
import Linear1 from "./components/gradient/linear-gradient/Linear1";
import Underline from "./components/underline";

function App() {
  return (
    <>
      <main className="select-none overflow-hidden">
        <Loading_Animation1 />
        <Loading_Animation2 />
        <Animate1 />
        <Animate2 />
        <Button1 />
        <Linear1 />
        <Underline />
      </main>
    </>
  );
}

export default App;
