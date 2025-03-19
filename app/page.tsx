import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mt-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/nft-1.jpg"
                    alt="NFT Preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Price</h3>
                    <p className="text-2xl font-bold text-blue-500">0.5 ETH</p>
                  </div>

                  <div className="border-t border-gray-200 pt-12">
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Collection Details</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Total Supply: 500</li>
                      <li>Minted: 100 / 500</li>
                    </ul>
                  </div>

                  <div className="mt-36">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-medium transition-colors cursor-pointer">
                      Whitelist Mint
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}