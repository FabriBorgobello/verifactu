export type Invoice = {
  id: `INV-${number}`;
  date: Date;
  recipient: string;
  amount: number;
  currency: string;
  status: "paid" | "pending" | "overdue";
};

// Mock data for invoices
export const invoices: Invoice[] = [
  {
    id: "INV-0001",
    date: new Date("2023-01-15"),
    recipient: "Acme Corp",
    amount: 1250.0,
    currency: "EUR",
    status: "paid",
  },
  {
    id: "INV-0002",
    date: new Date("2023-02-03"),
    recipient: "Globex Industries",
    amount: 3450.75,
    currency: "EUR",
    status: "pending",
  },
  {
    id: "INV-0003",
    date: new Date("2023-02-15"),
    recipient: "Stark Enterprises",
    amount: 5000.0,
    currency: "EUR",
    status: "paid",
  },
  {
    id: "INV-0004",
    date: new Date("2023-03-01"),
    recipient: "Wayne Industries",
    amount: 2750.5,
    currency: "EUR",
    status: "overdue",
  },
  {
    id: "INV-0005",
    date: new Date("2023-03-10"),
    recipient: "Umbrella Corporation",
    amount: 1800.25,
    currency: "EUR",
    status: "pending",
  },
  {
    id: "INV-0006",
    date: new Date("2023-03-22"),
    recipient: "Oscorp",
    amount: 4200.0,
    currency: "EUR",
    status: "paid",
  },
  {
    id: "INV-0007",
    date: new Date("2023-04-05"),
    recipient: "LexCorp",
    amount: 3100.75,
    currency: "EUR",
    status: "overdue",
  },
  {
    id: "INV-0008",
    date: new Date("2023-04-18"),
    recipient: "Cyberdyne Systems",
    amount: 2900.5,
    currency: "EUR",
    status: "pending",
  },
];
