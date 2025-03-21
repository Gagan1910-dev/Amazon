import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export function HomePage() {
  // Sample categories for the grid
  const categories = [
    { id: 1, name: "Electronics", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" },
    { id: 2, name: "Home & Kitchen", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" },
    { id: 3, name: "Beauty picks", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" },
    { id: 4, name: "Computer & Accessories", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" },
    { id: 5, name: "Find your ideal TV", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg" },
    { id: 6, name: "Toys & Games", image: "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg" },
    { id: 7, name: "Shop Pet supplies", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg" },
    { id: 8, name: "Fashion trends", image: "https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_379x304_1._SY304_CB612639047_.jpg" },
  ];

  // Carousel images for the hero banner
  const carouselImages = [
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
  ];

  return (
    <div className="w-full">
      {/* Hero Carousel Section */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[300px] md:h-[500px]">
                  <Image
                    src={image}
                    alt={`Hero image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2" />
          <CarouselNext className="absolute right-4 top-1/2" />
        </Carousel>
      </div>

      {/* Product Categories Grid - Positioned partially over the carousel */}
      <div className="max-w-screen-2xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card key={category.id} className="shadow-lg overflow-hidden">
              <CardContent className="p-4">
                <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                <div className="relative w-full h-[200px]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Link href={`/category/${category.id}`} className="text-[#007185] hover:text-[#C7511F] hover:underline mt-2 block">
                  Shop now
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Deals section */}
      <div className="max-w-screen-2xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-bold mb-4">Today's Deals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="relative w-full h-[150px] bg-gray-200 mb-2"></div>
                <div className="flex items-center mb-1">
                  <span className="bg-[#CC0C39] text-white text-xs font-bold px-2 py-1 mr-2">
                    Up to 40% off
                  </span>
                  <span className="text-[#CC0C39] text-xs">Deal</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  Popular product with amazing discount
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/deals" className="text-[#007185] hover:text-[#C7511F] hover:underline">
            See all deals
          </Link>
        </div>
      </div>

      {/* Recommendation section */}
      <div className="max-w-screen-2xl mx-auto px-4 mt-10 mb-10">
        <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="relative w-full h-[150px] bg-gray-200 mb-2"></div>
                <p className="text-sm font-medium line-clamp-2">
                  Product Name That Might Be Quite Long
                </p>
                <div className="mt-1">
                  <span className="font-bold">$24.99</span>
                </div>
                <div className="mt-1">
                  <span className="text-xs">Free delivery</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
