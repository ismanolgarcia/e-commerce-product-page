import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import iconCart from '@/assets/icon-cart.svg';

export const Cart = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Image src={iconCart} alt="iconCart" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="w-96 h-80 flex flex-col ">
                <div className="border-b-2  p-6">
                  <span className="font-bold">Cart</span>
                </div>
                <div className=" h-full w-full flex items-center justify-center">
                  <p className="font-semibold text-gray-500">
                    Your cart is empty.
                  </p>
                </div>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
