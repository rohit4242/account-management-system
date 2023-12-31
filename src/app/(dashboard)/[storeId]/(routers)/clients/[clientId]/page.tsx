import {db} from "@/lib/db";

import { ProductForm } from "./components/billboard-form";

const BillboardPage = async ({
  params
}: {
  params: { clientId: string }
}) => {
  const billboard = await db.client.findUnique({
    where: {
      id: params.clientId
    }
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ProductForm  initialData={billboard} />
      </div>
    </div>
  );
}

export default BillboardPage;
