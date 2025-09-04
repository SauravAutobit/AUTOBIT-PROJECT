import "./App.css";
import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import UserDetail from "./pages/userDetail/UserDetail";
import TradingAccountList from "./pages/tradingAccountList/TradingAccountList";
import TradingAccountDetail from "./pages/tradingAccountDetail/TradingAccountDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <UserList />,
      },
      {
        path: "/user-detail",
        element: <UserDetail />,
      },
      {
        path: "/trading-account",
        element: <TradingAccountList />,
      },
      {
        path: "/trading-account-detail",
        element: <TradingAccountDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
