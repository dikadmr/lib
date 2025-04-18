import Hero from "./Hero";
import ProdukBuku from "./ProdukBuku";
import TerlarisBuku from "./TerlarisBuku";
import { Separator } from "@/components/ui/separator";

const Pages = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <main className="pt-16">
        <Hero />
        <Separator />
        <ProdukBuku />
        <Separator />
        <TerlarisBuku />
      </main>
    </div>
  );
};

export default Pages;
