import CompanyCard from "./components/company-card";
import { company } from "./mock";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 px-4 md:grid md:grid-cols-2 md:justify-items-center lg:grid-cols-3 xl:grid-cols-4">
      {company.map((co) => (
        <CompanyCard
          key={co.company_name}
          name={co.company_name}
          description={co.description}
          images={co.carousel_img}
        />
      ))}
    </main>
  );
}
