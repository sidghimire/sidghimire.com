import { Canvas } from "@react-three/fiber";
import {Route, RouterProvider} from "react-router-dom";
import {router} from "./route/route";
import Layout from "./components/Layout";
import Home from "./page/Home";

const App = () => {
  return (
    <RouterProvider router={router}/>
     
  );
};

export default App;
