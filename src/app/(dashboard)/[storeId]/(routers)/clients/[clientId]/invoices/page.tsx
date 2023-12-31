import { format } from "date-fns";

import {db} from "@/lib/db";

import { ColorColumn } from "./components/columns"
import { ColorClient } from "./components/client";

const ColorsPage = async ({
  params
}: {
  params: { clientId: string }
}) => {
  const colors = await db.invoice.findMany({
    where: {
      clientId: params.clientId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    number: item.invoiceNumber,
    amount: item.totalAmount,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ColorClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
