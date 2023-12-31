"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./CellAction"

export type BillboardColumn = {
  id: string
  name: string;
  phone: string;
  email: string;
  address: string;
  createdAt: string;
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];