import Link from "next/link";

interface InvoiceStatus {
  Paid: string;
  Unpaid: string;
  Overdue: string;
}
interface Period {}
interface InvoiceCardProps {
  id: string;
  invoiceNumber: string;
  invoiceDate: Date;
  dueDate: Date;
  totalAmount: number;
  status?: InvoiceStatus;
  period?: Period;
}

export const InvoiceCard = ({
  id,
  invoiceNumber,
  invoiceDate,
  dueDate,
  totalAmount,
  status,
  period,
}: InvoiceCardProps) => {
  return (
    <Link
      key={id}
      href={`invoice/${id}`}
      className="flex p-4 bg-white rounded-lg shadow"
    >
      <div className="pr-6">
        <p className="text-sm font-medium text-gray-600">#{invoiceNumber}</p>
        <p className="text-xl font-bold">${totalAmount}</p>
      </div>

      
    </Link>
  );
};
