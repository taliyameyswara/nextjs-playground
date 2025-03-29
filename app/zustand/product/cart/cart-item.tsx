import {
  CartItem,
  useRemoveFromCart,
  useUpdateQty,
} from "@/stores/useCartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

export const CartCard = ({ item }: { item: CartItem }) => {
  const updateQty = useUpdateQty();
  const removeFromCart = useRemoveFromCart();

  return (
    <div key={item.id} className="flex items-center p-3">
      <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="ml-3 flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.title}</h3>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            <Trash2 size={18} />
          </button>
        </div>
        {item.discountPrice && (
          <div className="flex items-center text-sm">
            <span className="text-gray-400 line-through">$ {item.price}</span>
            <span className="ml-2 text-red-500">
              {Math.round(
                ((item.price - item.discountPrice) / item.price) * 100
              )}
              % Off
            </span>
          </div>
        )}
        <div className="flex justify-between items-center mt-2 ">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateQty("decrement", item.id)}
              className="w-8 h-8 flex items-center justify-center border rounded-md"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQty("increment", item.id)}
              className="w-8 h-8 flex items-center justify-center border rounded-md"
            >
              <Plus size={16} />
            </button>
          </div>
          <span className="font-medium">
            ${(item.discountPrice || item.price) * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
};
