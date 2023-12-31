import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
// let date = new Date().toLocaleDateString();
const dueDate = new Date().toISOString();
const invoiceDate = new Date().toISOString();

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const client = await db.client.create({
      data: {
        userId,
        name: "Rohit Luni",
      }
    });

    const invoice = await db.invoice.create( {
      data: {
        dueDate,
        invoiceDate,
        invoiceNumber: '20',
        status: "PENDING",
        totalAmount: 1000,
        clientId: client.id
      }
    })

    const product = await db.product.create({
      data: {
        name: "sugar",
        price: 43,
        description: "Khand",
        inventory: {
          create: {
            quantity: 10,

          }
        }
      }
    })

    const invoiceItem = await db.invoiceItem.create({
      data: {
        price: 10,
        quantity: 100,
        invoiceId: invoice.id,
        productId: product.id
      }
    })

    return NextResponse.json(invoice);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
