import { dashboard, expenses, transactions, trend, options } from "./icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Transactions",
    icon: transactions,
    link: "/transactions",
  },
  {
    id: 3,
    title: "Earnings",
    icon: trend,
    link: "/earnings",
  },
  {
    id: 4,
    title: "Expenditures",
    icon: expenses,
    link: "/expenditures",
  },
  {
    id: 5,
    title: "Options",
    icon: options,
    link: "/settings",
  },
];
