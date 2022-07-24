import { Route, Routes } from "react-router-dom";
import { Page1DetailB } from "../components/Page1DetailB";
import { Page1DetailA } from "../components/Page1DetailsA";
import { HeaderOnly } from "../components/templates/HeaderOnly";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page404 } from "../Page404";
import { UrlParameter } from "../UrlParameter";

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/page1">
        <Route index={true} element={<Page1 />} />
        <Route path="detailA" element={<Page1DetailA />} />
        <Route path="detailB" element={<Page1DetailB />} />
      </Route>
      <Route path="/page2">
        <Route index={true} element={<Page2 />} />
        <Route path=":id" element={<UrlParameter />} />
      </Route>
      <Route
        path="/top"
        element={
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        }
      />
      <Route
        path="/users"
        element={
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
