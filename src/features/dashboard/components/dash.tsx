import { Header } from "./header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { useTheme } from "@/services/useTheme";
import { useLayoutEffect } from "react";
import { Pages } from "./pages";

export function DashBoard() {
  const { setDark } = useTheme();
  useLayoutEffect(() => {
    setDark();
  }, []);
  return (
    <div className="w-full flex flex-col">
      <Header />
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
            <Pages />
          </TabsContent>
          <TabsContent value="metrics">
            <p>There is no metric yet</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
