import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log("search", search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータ―は{id}です</p>
      <p>クエリパラメータ―は{query.get("name")}です</p>
    </div>
  );
};
