"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "@/components/DataTable"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  name: string
}

const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    name: "stocks",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    name: "bonds",
  },
  {
    id: "d7e2f401",
    amount: 200,
    status: "success",
    name: "real estate",
  },
  {
    id: "3b18c9d1",
    amount: 80,
    status: "failed",
    name: "mutual funds",
  },
  {
    id: "9f5e21c7",
    amount: 150,
    status: "processing",
    name: "ETFs",
  },
  {
    id: "b482a3fd",
    amount: 50,
    status: "success",
    name: "cryptocurrency",
  },
  {
    id: "c12a4d78",
    amount: 300,
    status: "pending",
    name: "precious metals",
  },
  {
    id: "a8f1bc93",
    amount: 220,
    status: "success",
    name: "private equity",
  },
  {
    id: "7f3d5a68",
    amount: 175,
    status: "failed",
    name: "venture capital",
  },
  {
    id: "e36d9b4f",
    amount: 95,
    status: "processing",
    name: "commodities",
  },
]

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "UGX",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


const Investments = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
    </div>
  )
}

export default Investments