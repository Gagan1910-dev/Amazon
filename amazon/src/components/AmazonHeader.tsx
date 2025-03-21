import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, MapPin, Menu } from "lucide-react";
import Image from "next/image";

export function AmazonHeader() {
  return (
    <header className="flex flex-col w-full">
      {/* Top navigation bar */}
      <div className="bg-[#131921] text-white w-full p-2">
        <div className="max-w-screen-2xl mx-auto flex items-center gap-2">
          {/* Amazon Logo */}
          <Link href="/" className="mr-4 flex-shrink-0">
            <div className="relative h-8 w-24">
              <Image
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>

          {/* Deliver to section */}
          <div className="hidden md:flex items-center text-xs mr-4">
            <MapPin size={16} className="mr-1" />
            <div>
              <div className="text-gray-300">Deliver to</div>
              <div className="font-bold">United States</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex">
            <div className="w-full max-w-[800px] flex">
              <div className="bg-[#f3f3f3] text-black rounded-l-md px-2 flex items-center">
                <span className="text-xs">All</span>
              </div>
              <Input
                placeholder="Search Amazon"
                className="rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-[#febd69] hover:bg-[#f3a847] text-black rounded-r-md rounded-l-none">
                <Search size={20} />
              </Button>
            </div>
          </div>

          {/* Account & Lists */}
          <div className="hidden md:block text-xs whitespace-nowrap ml-4">
            <div className="text-gray-300">Hello, sign in</div>
            <div className="font-bold">Account & Lists</div>
          </div>

          {/* Returns & Orders */}
          <div className="hidden md:block text-xs whitespace-nowrap ml-4">
            <div className="text-gray-300">Returns</div>
            <div className="font-bold">& Orders</div>
          </div>

          {/* Cart */}
          <Link href="/cart" className="flex items-center ml-4">
            <div className="relative">
              <ShoppingCart size={30} />
              <span className="absolute -top-1 -right-1 bg-[#f08804] text-black font-bold rounded-full h-5 w-5 flex items-center justify-center text-xs">
                0
              </span>
            </div>
            <span className="hidden md:inline font-bold ml-1">Cart</span>
          </Link>
        </div>
      </div>

      {/* Sub-navigation bar */}
      <div className="bg-[#232f3e] text-white p-1">
        <div className="max-w-screen-2xl mx-auto flex items-center text-sm">
          <div className="flex items-center px-2 py-1 hover:border hover:border-white cursor-pointer">
            <Menu size={18} className="mr-1" />
            <span>All</span>
          </div>
          <div className="overflow-x-auto flex-1 flex items-center space-x-4 px-2">
            <div className="whitespace-nowrap hover:border hover:border-white px-2 py-1 cursor-pointer">Today's Deals</div>
            <div className="whitespace-nowrap hover:border hover:border-white px-2 py-1 cursor-pointer">Customer Service</div>
            <div className="whitespace-nowrap hover:border hover:border-white px-2 py-1 cursor-pointer">Registry</div>
            <div className="whitespace-nowrap hover:border hover:border-white px-2 py-1 cursor-pointer">Gift Cards</div>
            <div className="whitespace-nowrap hover:border hover:border-white px-2 py-1 cursor-pointer">Sell</div>
          </div>
        </div>
      </div>
    </header>
  );
}
