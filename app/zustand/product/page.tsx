import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";
import { getProducts } from "@/queries/products";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-medium">Product Page</h1>
          <p className="text-pink-200">
            Practicing zustand state management - Checkout Flow
          </p>
        </div>

        <Link href={"/zustand/product/cart"}>
          <Button variant={"ghost"}>
            <ShoppingCart className="size-4" />
            Cart
          </Button>
        </Link>
      </div>

      {/* Product list*/}
      <div className="grid grid-cols-4 gap-4 my-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
