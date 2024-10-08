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
    name: string,
    revenue: number,
    arrears: number,
};

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    name: string
  }

  export type MonthlyData = {
    name: string;
    income: number;
    expense: number;
};

