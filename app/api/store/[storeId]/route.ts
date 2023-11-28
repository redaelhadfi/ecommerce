
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { use } from "react";



export async function PATCH(
    req: Request,
    { params }: { params: { storeId: string } }
) {



    const body = await req.json();

    const { storeId } = params;
    const { userId } = await auth();
    

    if(!userId) return       new NextResponse("Unauthenticated", { status: 403 });
    if(!storeId) return      new NextResponse("Store not found", { status: 404 });
    if(!body.name) return    new NextResponse("Name is required", { status: 400 });



try {
    const store = await prismadb.store.updateMany({
        where: {
            id: storeId,
            userId
        },
        data: {
            name: body.name,
        }
    });

    return NextResponse.json(userId);
 } catch (error) {
        console.log("[patch] [store] error", error )
        return new NextResponse("Something went wrong", { status: 500 });
    }


}






export async function DELETE(
    req: Request,
    { params }: { params: { storeId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.storeId) {
        return new NextResponse("Store id is required", { status: 400 });
      }
  
      const store = await prismadb.store.deleteMany({
        where: {
          id: params.storeId,
          userId
        }
      });
    
      return NextResponse.json(store);
    } catch (error) {
      console.log('[STORE_DELETE]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };