export type Expense = {
  id: `EXP-${number}`;
  date: Date;
  merchant: string;
  amount: number;
  currency: string;
  category: "travel" | "office" | "meals" | "supplies" | "other";
  status: "approved" | "pending" | "rejected";
};

// Mock data for expenses
export const expenses: Expense[] = [
  {
    id: "EXP-0001",
    date: new Date("2023-01-15"),
    merchant: "Office Depot",
    amount: 250.0,
    currency: "EUR",
    category: "office",
    status: "approved",
  },
  {
    id: "EXP-0002",
    date: new Date("2023-02-03"),
    merchant: "Air France",
    amount: 450.75,
    currency: "EUR",
    category: "travel",
    status: "pending",
  },
  {
    id: "EXP-0003",
    date: new Date("2023-02-15"),
    merchant: "Restaurant Le Chef",
    amount: 85.0,
    currency: "EUR",
    category: "meals",
    status: "approved",
  },
  {
    id: "EXP-0004",
    date: new Date("2023-03-01"),
    merchant: "Amazon",
    amount: 150.5,
    currency: "EUR",
    category: "supplies",
    status: "rejected",
  },
  {
    id: "EXP-0005",
    date: new Date("2023-03-10"),
    merchant: "Uber",
    amount: 45.25,
    currency: "EUR",
    category: "travel",
    status: "pending",
  },
  {
    id: "EXP-0006",
    date: new Date("2023-03-22"),
    merchant: "Staples",
    amount: 200.0,
    currency: "EUR",
    category: "office",
    status: "approved",
  },
  {
    id: "EXP-0007",
    date: new Date("2023-04-05"),
    merchant: "WeWork",
    amount: 1100.75,
    currency: "EUR",
    category: "other",
    status: "approved",
  },
  {
    id: "EXP-0008",
    date: new Date("2023-04-18"),
    merchant: "Local Cafe",
    amount: 35.5,
    currency: "EUR",
    category: "meals",
    status: "pending",
  },
];
