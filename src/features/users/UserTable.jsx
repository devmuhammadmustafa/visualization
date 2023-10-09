import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { useUsers } from "./useUsers";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function UserTable() {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Spinner />;
  if (!users) return <Empty resource={"users"} />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={`user-${row.id}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
