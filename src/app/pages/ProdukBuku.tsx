import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ProdukBuku = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Produk*/}

        <div className="flex items-center justify-start px-16">
          <ToggleGroup size={"lg"} variant="outline" type="single">
            <ToggleGroupItem value="a" className="px-6 py-3 text-center">
              Semua
            </ToggleGroupItem>
            <ToggleGroupItem value="b" className="px-6 py-3 text-center">
              Fiksi
            </ToggleGroupItem>
            <ToggleGroupItem value="c" className="px-6 py-3 text-center">
              Non Fiksi
            </ToggleGroupItem>
            <ToggleGroupItem value="d" className="px-6 py-3 text-center">
              Majalah
            </ToggleGroupItem>
            <ToggleGroupItem value="e" className="px-6 py-3 text-center">
              Referensi
            </ToggleGroupItem>
            <ToggleGroupItem value="f" className="px-6 py-3 text-center">
              Jurnal
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Nanti bukunya disini fik</p>
        </div>
      </div>
    </div>
  );
};

export default ProdukBuku;
