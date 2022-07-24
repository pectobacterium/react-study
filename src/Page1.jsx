import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const navigate = useNavigate();
  const onClickDetailA = () => {
    navigate("DetailA", { state: { test: "navigate" } });
  };
  const arr = [...Array(100).keys()];
  console.log(arr);
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={"DetailA"} state={{ test: arr }}>
        DetailA
      </Link>
      <br />
      <Link to="DetailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
