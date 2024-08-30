import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

export default function CompanyCard() {
  return (
    <Card
      className="overflow-hidden sm:w-full md:w-80"
      x-chunk="dashboard-07-chunk-4"
    >
      <CardHeader>
        <CardTitle>Tokyo Cement</CardTitle>
        <CardDescription className="line-clamp-3">
          Tokyo Cement Company (Lanka) PLC was established in 1982, as a joint
          venture between Japan &apos; s Mitsui Mining Co (Later absorbed by Nippon
          Coke & Engineering Company) and Sri Lanka&apos;s St. Anthony&apos;s
          Consolidated, under the visionary leadership of Founder Chairman, late
          Deshamanya A.Y.S.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt="Product image"
            className="aspect-square sm:w-full md:w-80 rounded-md object-cover"
            height="320"
            src="/image/tokyo_cement.jpg"
            width="320"
          />
          <div className="grid grid-cols-3 gap-2">
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="/image/tokyo_cement_truck.jpg"
                width="84"
              />
            </button>
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="/image/tokyo_cement_truck.jpg"
                width="84"
              />
            </button>
            <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
              {/* <Upload className="h-4 w-4 text-muted-foreground" /> */}
              <span className="sr-only">Upload</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
