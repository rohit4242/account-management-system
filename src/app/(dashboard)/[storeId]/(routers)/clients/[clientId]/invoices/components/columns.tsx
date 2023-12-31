"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";

export type ColorColumn = {
  id: string;
  number: string;
  amount: number;
  createdAt: string;
};

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "number",
    header: "Number",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.number}
        {/* <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.value }}
        /> */}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
