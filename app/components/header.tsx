import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchSlashIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Header() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <section className="flex items-center justify-center">
        <Button variant="ghost" size="icon">
          <SearchSlashIcon className="h-4 w-4" />
        </Button>
        <Input type="text" placeholder="keyword" />
      </section>
      <section className="flex items-center justify-center overflow-x-scroll no-scrollbar">
        <Tabs defaultValue="inner-design" className="w-full">
          <TabsList>
            <TabsTrigger value="inner-design">室內設計</TabsTrigger>
            <TabsTrigger value="water">水路管線</TabsTrigger>
            <TabsTrigger value="electricity">電路管線</TabsTrigger>
            <TabsTrigger value="custom">客制</TabsTrigger>
            <TabsTrigger value="custom2">客制</TabsTrigger>
            <TabsTrigger value="custom3">客制</TabsTrigger>
            <TabsTrigger value="custom4">客制</TabsTrigger>
            <TabsTrigger value="custom5">客制</TabsTrigger>
            <TabsTrigger value="custom6">客制</TabsTrigger>
          </TabsList>
        </Tabs>
      </section>
    </div>
  );
}
