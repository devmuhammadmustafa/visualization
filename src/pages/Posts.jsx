import PostTable from "../features/posts/PostTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Posts() {
  return (
    <Row type="vertical">
      <Heading as="h1">All posts</Heading>
      <PostTable />
    </Row>
  );
}

export default Posts;
