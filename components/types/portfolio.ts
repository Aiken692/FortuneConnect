export type Portfolio = {
  title: string;
  amount: number;
  currency: string;
  dateOfYear: string;
};

export type Counter = {
  name: string;
  count: number;
  fill: string;
};

export type Investment = {
  name: string;
  revenue: number;
  arrears: number;
};

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  name: string;
};

export type MonthlyData = {
  name: string;
  income: number;
  expense: number;
};

export type CardProps = {
  color: string; // The background color class (e.g., 'bg-lamaSkyLight')
  title: string; // The title of the card
  date: string; // The date displayed in the card
  content: string; // The text content of the card
};

export type Event = {
  id: number;
  title: string;
  time: string;
  description: string;
  date: string; // The date is represented as a string in ISO format (YYYY-MM-DD)
};
