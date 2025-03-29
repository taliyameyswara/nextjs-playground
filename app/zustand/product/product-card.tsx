"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAddToCart } from "@/stores/useCartStore";
import type { Product } from "@/types/Product";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const addToCart = useAddToCart();

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          fill
          alt={product.title}
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold line-clamp-1">
              {product.title}
            </CardTitle>
            <CardDescription className="text-primary font-medium text-lg mt-1">
              $ {product.price}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full gap-2 transition-colors"
          onClick={() => addToCart(product)}
        >
          Add to cart
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
