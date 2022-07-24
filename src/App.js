import { useCallback, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { ChildArea } from "./components/ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
        {/* <InlineStyle />
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} /> */}
      </div>
      <Router />
    </BrowserRouter>
  );
}
