import { format } from "date-fns";

import { db } from "@/lib/db";

import { BillboardColumn } from "./components/Columns";
import { BillboardClient } from "./components/Client";

const ClientsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await db.client.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    name: item.name,
    phone: item.phone ?? '',
    email: item.email ?? '',
    address: item.address ?? '',
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default ClientsPage;
