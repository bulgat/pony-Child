import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/homePages/homePages";
import SearchPage from "../pages/searchPages/searchPages";
import CompanyPage from "../pages/companyPages/companyPages";
import MoneyPage from "../pages/moneyPage/moneyPage";
import TablePage from "../pages/tablePage/tablePage";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                { path: "", element: <HomePage /> },
                { path: "search", element: <SearchPage /> },
                { path: "company/:ticker", element: <CompanyPage /> },
                { path: "money", element: <MoneyPage /> },
                { path: "table", element: <TablePage /> },
            ]
        }
    ]
)