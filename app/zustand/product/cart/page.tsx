"use client";

import { useCartStore } from "@/stores/useCartStore";
import { CartCard } from "./cart-item";

export default function CartPage() {
  const { items, getTotalPrice } = useCartStore();

  const subtotal = getTotalPrice();
  const serviceTax = Math.round(subtotal * 0.1);
  const total = subtotal + serviceTax;
  return (
    <div className="grid grid-cols-3 max-w-3xl gap-3">
      {/* card item */}
      <div className="col-span-2">
        {items.map((item) => (
          <CartCard item={item} key={item.id} />
        ))}
      </div>

      {/* subtotal */}
      <div className="border rounded-xl p-3 h-fit">
        <div className="space-y-2 ">
          <div className="flex justify-between">
            <span>Subtotal ({items.length})</span>
            <span className="font-medium">
              ${subtotal.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Service Tax</span>
            <span className="font-medium">
              ${serviceTax.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total payment</span>
            <span>${total.toLocaleString("id-ID")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
