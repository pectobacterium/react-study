import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithname } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithname image={user.image} name={user.name}></UserIconWithname>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-left: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
