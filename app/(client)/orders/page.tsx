import Container from "@/components/Container";
import OrderComponent from "@/components/OrderComponent";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getMyOrders } from "@/sanity/helpers/queries";
import { auth } from "@clerk/nextjs/server";
import { FileX } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const OrdersPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const orders = await getMyOrders(userId);
  return (
    <Container className="py-10">
      {orders?.length ? (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-montserrat">Order List</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-auto">Order Number</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden sm:table-cell">Invoice Number</TableHead>
                  </TableRow>
                </TableHeader>
                <OrderComponent orders={orders}/>
                <ScrollBar orientation="horizontal"/>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center py-5 md:py-10 px-4">
          <FileX className="h-24 w-24  text-gray-400 mb-4"/>
          <Title>No Orders Found!</Title>
          <p className="mt-2 text-sm font-montserrat text-gray-600 text-center max-w-md">It looks like there are no orders available at the moment. If you have recently placed an order, please check back later or ensure that you are logged into the correct account. If you haven't made a purchase yet, explore our products and place your first order today. Start shopping now to see your orders here! If you believe this is an error, feel free to contact our support team for assistance.</p>
          <Button asChild className="mt-6 font-agrandir">
            <Link href={"/"}>Browse Products</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default OrdersPage;
