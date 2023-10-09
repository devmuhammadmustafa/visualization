import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
