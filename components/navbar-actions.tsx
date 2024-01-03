"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {

  const cart = useCart();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  //   use case for useEffect to check if the component is mounted or not before rendering the component itself and its children in the DOM using the useState hook.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex ml-auto items-center gap-x-4">
      <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
