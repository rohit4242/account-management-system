"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, BillboardColumn } from "./Columns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();
  const [searchKey, setSearchKey] = useState("name");

  const handleSearchKeyChange = (value: string) => {
    setSearchKey(value);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Clients (${data.length})`}
          description="Manage clients for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/clients/new`)}>
          <Plus className="w-4 h-4 mr-2" /> Add New
        </Button>
      </div>
      <Separator />

      <Select onValueChange={handleSearchKeyChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Search By" defaultValue={"name"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="email">Email</SelectItem>
          <SelectItem value="phone">Phone</SelectItem>
        </SelectContent>
      </Select>

      <DataTable searchKey={searchKey} columns={columns} data={data} />
    </>
  );
};
