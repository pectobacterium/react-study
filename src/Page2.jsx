import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="100">URL Parameter</Link>
      <br />
      <Link to="999?name=hogehoge">URL QueryParameter</Link>
    </div>
  );
};
