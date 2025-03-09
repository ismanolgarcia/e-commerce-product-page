'use client';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const components: { title: string }[] = [
  {
    title: 'Collections',
  },
  {
    title: 'Men',
  },
  {
    title: ' Women',
  },
  {
    title: 'About',
  },
  {
    title: 'Contact',
  },
];
export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-8">
        {components.map((component) => (
          <NavigationMenuLink
            className="cursor-pointer text-gray-500 hover:text-gray-900 hover:border-b-4 hover:border-orange-400  h-28 flex justify-center items-center"
            key={component.title}
          >
            {component.title}
          </NavigationMenuLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
