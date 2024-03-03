"use client";

import { Page } from "@/entities/pages";
import { Pages } from "@/features/pages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { useTheme } from "next-themes";
import { useLayoutEffect } from "react";

export function DashBoard(props: { pages: Page[] }) {
  const { setTheme } = useTheme();

  useLayoutEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    setTheme("dark");
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="container mt-6">
        <Tabs defaultValue="pages" className="w-full flex flex-col gap-8">
          <TabsList className="w-72">
            <TabsTrigger value="pages" className="w-1/2">
              Pages
            </TabsTrigger>
            <TabsTrigger value="metrics" className="w-1/2">
              Metrics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pages">
            <Pages pages={props.pages} />
          </TabsContent>
          <TabsContent value="metrics">
            <p>There is no metric yet</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
