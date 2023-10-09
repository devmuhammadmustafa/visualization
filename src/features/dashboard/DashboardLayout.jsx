import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { usePosts } from "../posts/usePosts";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import styled from "styled-components";

function DashboardLayout() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <Spinner />;
  if (!posts) return <Empty resource={"posts"} />;

  return (
    <LayoutContainer>
      <LineChart width={500} height={300} data={posts}>
        <XAxis dataKey="id" />
        <YAxis dataKey="userId" />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Legend />
        <Line
          type="monotone"
          dataKey="userId"
          stroke="#8884d8"
          name="User ID"
        />
      </LineChart>
    </LayoutContainer>
  );
}

export default DashboardLayout;

const LayoutContainer = styled.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 450px;
    overflow-x: scroll;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;
