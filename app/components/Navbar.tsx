"use client";

const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-[200px]" />
          <div className="w-[200px] flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;