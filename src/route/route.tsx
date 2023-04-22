import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Layout from "../components/Layout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
]);
