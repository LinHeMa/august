import CompanyCard from "./components/company-card";

export default function Home() {
  return (
    <main className="px-4 flex flex-col gap-2 md:grid md:grid-cols-2 md:justify-items-center lg:grid-cols-3 xl:grid-cols-4">
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </main>
  );
}
