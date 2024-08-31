import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { CarouselComp } from "./carousel-comp";

type CompanyCardProps = {
  name: string;
  description: string;
  images: string[];
};

export default function CompanyCard({
  name,
  description,
  images,
}: CompanyCardProps) {
  return (
    <Card className="flex flex-col justify-between overflow-hidden sm:w-full md:w-80">
      <CardHeader>
        <CardTitle className="line-clamp-2">
          {name}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex w-full justify-center">
        <CarouselComp images={images} />
      </CardContent>
    </Card>
  );
}
