import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <section className="bg-white py-8 lg:py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column - Horizontal Carousel */}
        <div className="lg:w-1/2 items-center">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="w-full aspect-square border-2 border-gray-200 shadow-md">
                      <CardContent className="flex aspect-square items-center justify-center p-8">
                        <span className="text-6xl font-semibold text-emerald-700">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Right Column - Vertical Carousel */}
        <div className="lg:w-1/2 flex flex-col items-center">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="w-full max-w-md p-1 -mt-1 h-[245px]">
              <Card className="w-full h-full border-2 border-gray-200 shadow-md">
                <CardContent className="flex items-center justify-center h-full">
                  <span className="text-5xl font-semibold text-emerald-700">
                    {index + 2}
                  </span>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
