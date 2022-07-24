import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";

export const Home = () => {
  const user = {
    name: "sss",
    image: "https://source.unsplash.com/mJaD10XeD7w",
    email: "123456@gamil.com",
    phone: "012-2111-2123",
    company: {
      name: "mmm株式会社"
    },
    website: "https://google.com"
  };
  return (
    <DefaultLayout>
      <h1>Homeページです</h1>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </DefaultLayout>
  );
};
