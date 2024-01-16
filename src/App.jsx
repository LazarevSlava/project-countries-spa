import { Header } from "./components/Header";
import "./App.css";
import { Context } from "./helpers/Context";

function App() {
  return (
    <Context>
      <Header />
    </Context>
  );
}

export default App;
