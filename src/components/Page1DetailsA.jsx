import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { test } = location.state;
  console.log(location.state.test);
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  );
};
