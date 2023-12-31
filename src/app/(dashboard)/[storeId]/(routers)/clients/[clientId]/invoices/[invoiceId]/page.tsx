import {db} from "@/lib/db";

import { ColorForm } from "./components/invoice-form";

const ColorPage = async ({
  params
}: {
  params: { invoiceId: string }
}) => {
  const color = await db.invoice.findUnique({
    where: {
      id: params.invoiceId
    }
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
}

export default ColorPage;
