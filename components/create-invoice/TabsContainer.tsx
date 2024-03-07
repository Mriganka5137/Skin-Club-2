import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import CreateInvoiceTab from "./CreateInvoiceTab";
// min-w-[700px] w-full max-lg:min-w-full
const TabsContainer = () => {
  return (
    <div className="bg-white max-lg:bg-transparent  max-lg:text-[12px] pb-8  rounded-[14px] w-full ">
      <Tabs className="w-full h-full" defaultValue="create-invoice">
        <TabsList className="flex justify-start  bg-transparent gap-10  h-fit px-10 pt-5 max-sm:px-2 max-sm:pt-1 max-sm:gap-5 ">
          <TabsTrigger
            value="templates"
            className="data-[state=active]:bg-transparent data-[state=active]:text-color--4C4D4F data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none max-sm:text-[8px] max-sm:p-0"
          >
            Templates
          </TabsTrigger>
          <TabsTrigger
            value="create-invoice"
            className="data-[state=active]:bg-transparent data-[state=active]:text-color--4C4D4F data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none max-sm:text-[8px] max-sm:p-0 "
          >
            Create Invoice
          </TabsTrigger>
        </TabsList>
        <Separator className="-mt-1 " />
        <TabsContent value="templates"></TabsContent>
        <TabsContent value="create-invoice" className="px-10 pt-5 max-sm:p-0 ">
          <CreateInvoiceTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsContainer;
