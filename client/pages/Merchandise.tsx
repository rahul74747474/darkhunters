import { useState } from "react";
import { MERCHANDISE } from "@shared/data";
import { Button } from "@/components/Button";
import { ShoppingCart } from "lucide-react";

export default function Merchandise() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [cart, setCart] = useState<Array<{ id: string; size: string; quantity: number }>>([]);

  const handleAddToCart = (productId: string, size: string) => {
    const existingItem = cart.find((item) => item.id === productId && item.size === size);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === productId && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { id: productId, size, quantity: 1 }]);
    }
  };

  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-dh-gold">Merchandise</h1>
          <div className="relative">
            <button className="p-3 bg-dh-charcoal border border-dh-silver/20 rounded-lg hover:border-dh-gold transition-colors">
              <ShoppingCart className="text-dh-gold" size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-dh-red rounded-full text-dh-white text-xs font-bold flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MERCHANDISE.map((product) => (
            <div
              key={product.id}
              className="bg-dh-charcoal border border-dh-silver/20 rounded-xl overflow-hidden hover:border-dh-gold/50 transition-all hover:shadow-gold-glow group"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-dh-gold/20 to-dh-gold/5 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                {product.type === "jersey" && "👕"}
                {product.type === "cap" && "🧢"}
                {product.type === "hoodie" && "🧥"}
                {product.type === "scarf" && "🧣"}
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-dh-white text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-dh-gold">₹{product.price}</span>
                    <span className="text-dh-silver/60 text-sm">{product.stock} in stock</span>
                  </div>
                </div>

                {/* Size selector */}
                {product.sizes.length > 1 && (
                  <div>
                    <label className="text-dh-silver/70 text-sm block mb-2">Size</label>
                    <select className="w-full px-3 py-2 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white text-sm focus:outline-none focus:border-dh-gold">
                      {product.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Customization */}
                {product.type === "jersey" && (
                  <div>
                    <label className="text-dh-silver/70 text-sm block mb-2">Player Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="Leave blank for default"
                      className="w-full px-3 py-2 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white text-sm focus:outline-none focus:border-dh-gold placeholder:text-dh-silver/30"
                    />
                  </div>
                )}

                <Button variant="primary" size="md" className="w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-dh-charcoal border-t border-dh-silver/20 p-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div>
                <p className="text-dh-silver/70">Items in cart: {cart.length}</p>
              </div>
              <Button variant="primary" size="lg">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
