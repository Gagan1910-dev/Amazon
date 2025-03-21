import Link from 'next/link';

export function AmazonFooter() {
  return (
    <footer className="bg-[#232f3e] text-white w-full">
      {/* Back to top button */}
      <div className="bg-[#37475a] hover:bg-[#485769] text-center py-3 cursor-pointer">
        <span className="text-sm">Back to top</span>
      </div>

      {/* Main footer content */}
      <div className="max-w-screen-2xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm pb-10">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold mb-3">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:underline">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Blog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">About Amazon</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Investor Relations</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon Devices</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon Science</Link></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold mb-3">Make Money with Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:underline">Sell products on Amazon</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Sell on Amazon Business</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Sell apps on Amazon</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Become an Affiliate</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Advertise Your Products</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Self-Publish with Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Host an Amazon Hub</Link></li>
            </ul>
          </div>

          {/* Amazon Payment Products */}
          <div>
            <h3 className="font-bold mb-3">Amazon Payment Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon Business Card</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Shop with Points</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Reload Your Balance</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon Currency Converter</Link></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="font-bold mb-3">Let Us Help You</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon and COVID-19</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Your Account</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Your Orders</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Shipping Rates & Policies</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Returns & Replacements</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Manage Your Content and Devices</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon Assistant</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Help</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Amazon logo and country selection */}
      <div className="border-t border-gray-700 py-6 text-center">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-4">
            <span className="bg-white text-[#131921] font-bold text-sm px-6 py-2 rounded inline-block">
              amazon
            </span>
          </div>
          <div className="text-xs text-gray-300 space-x-4 mb-2">
            <Link href="#" className="hover:underline">Conditions of Use</Link>
            <Link href="#" className="hover:underline">Privacy Notice</Link>
            <Link href="#" className="hover:underline">Your Ads Privacy Choices</Link>
          </div>
          <div className="text-xs text-gray-300">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </footer>
  );
}
