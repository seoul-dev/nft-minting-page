import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">NFT Minting Page</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* NFT Preview Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/nft-placeholder.png"
                  alt="NFT Preview"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">CryptoCampus NFT Collection</h2>
                <p className="text-gray-600">Exclusive digital collectibles from CryptoCampus</p>
              </div>
            </div>

            {/* Minting Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Price</h3>
                  <p className="text-2xl font-bold text-indigo-600">0.001 ETH</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Wallet</h3>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Connect Wallet
                  </button>
                </div>

                <div>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors" disabled>
                    Mint NFT
                  </button>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Collection Details</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Total Supply: 100</li>
                    <li>Minted: 0 / 100</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
