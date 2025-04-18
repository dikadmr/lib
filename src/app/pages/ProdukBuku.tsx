import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ProdukBuku = () => {
  const [activeCategory, setActiveCategory] = useState("a");

  const categories = [
    { value: "a", label: "Semua" },
    { value: "b", label: "Fiksi" },
    { value: "c", label: "Non Fiksi" },
    { value: "d", label: "Majalah" },
    { value: "e", label: "Referensi" },
    { value: "f", label: "Jurnal" },
  ];

  return (
    <div className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        {/* Produk */}
        <div className="px-2 md:px-16">
          <div className="hidden md:block">
            <ToggleGroup
              size="lg"
              variant="outline"
              type="single"
              value={activeCategory}
              onValueChange={(value) => value && setActiveCategory(value)}
            >
              {categories.map((category) => (
                <ToggleGroupItem
                  key={category.value}
                  value={category.value}
                  className="px-4 md:px-6 py-3 text-center"
                >
                  {category.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* For mobile */}
          <div className="md:hidden overflow-x-auto pb-2">
            <div className="flex min-w-max">
              <ToggleGroup
                size="sm"
                variant="outline"
                type="single"
                value={activeCategory}
                onValueChange={(value) => value && setActiveCategory(value)}
                className="flex"
              >
                {categories.map((category) => (
                  <ToggleGroupItem
                    key={category.value}
                    value={category.value}
                    className="px-3 py-2 text-center text-sm whitespace-nowrap"
                  >
                    {category.label}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
        </div>

        <div className="h-48 md:h-64 flex items-center justify-center mt-4">
          <p className="text-gray-500 text-lg">Nanti bukunya disini fik</p>
        </div>
      </div>
    </div>
  );
};

export default ProdukBuku;
