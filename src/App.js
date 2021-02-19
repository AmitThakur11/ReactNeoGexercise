import "./styles.css";
import Counter from "./counter.js";
import CharCounter from "./characterCounter.js";
import Verify from "./passVerify.js";
import Alpha from "./alpha.js";
import UnSubmit from "./disableSubmit.js";
import ShowHide from "./showHidePass.js";
import ReSizeText from "./reSizeText.js";
import DarkMode from "./DarkMode.js";
import ReList from "./renderList";
import Todo from "./TODO";
import Cart from "./shopCart";
export default function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <CharCounter />
      <hr />
      <Verify />
      <hr />
      <Alpha />
      <hr />
      <UnSubmit />
      <hr />
      <ShowHide />
      <hr />
      <ReSizeText />
      <hr />
      <DarkMode />
      <hr />
      <ReList />
      <hr />
      <Todo />
      <hr />
      <Cart />
    </div>
  );
}
