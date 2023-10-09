import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { usePosts } from "./usePosts";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function PostTable() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <Spinner />;
  if (!posts) return <Empty resource={"posts"} />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">userId</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <TableRow
              key={`user-${row.id}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.userId}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">
                {row.body.length > 35 ? row.body.slice(0, 35) : row.body}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PostTable;
