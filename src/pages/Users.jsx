import UserTable from "../features/users/UserTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Users() {
  return (
    <Row type="vertical">
      <Heading as="h1">User lists</Heading>
      <UserTable />
    </Row>
  );
}

export default Users;
