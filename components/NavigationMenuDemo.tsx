"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Robot Kol Bileşeni",
    href: "/workshop/components/robot-arm",
    description:
      "Lazer kesimle üretilen hassas robot kol parçalarını monte etme ve test etme yöntemleri.",
  },
  {
    title: "Kontrol Kartı Kılavuzu",
    href: "/workshop/components/control-board",
    description:
      "Robotların ana kontrol sistemi için tasarlanmış devre kartlarının kurulumu ve test edilmesi.",
  },
  {
    title: "Şasi ve Gövde Tasarımı",
    href: "/workshop/components/chassis-design",
    description:
      "Lazer kesimle hazırlanan şasi parçalarının montajı ve dayanıklılık testleri.",
  },
  {
    title: "Sensör Entegrasyonu",
    href: "/workshop/components/sensor-integration",
    description:
      "Robotik sensörlerin doğru şekilde bağlanması ve kalibrasyon süreçleri.",
  },
  {
    title: "Motor ve Aktüatör Montajı",
    href: "/workshop/components/motor-actuator",
    description:
      "Lazer kesimle hazırlanan bileşenlere motor ve aktüatör entegrasyonu.",
  },
  {
    title: "Kablo ve Bağlantılar",
    href: "/workshop/components/wiring-connections",
    description:
      "Robotlarda kullanılan kablo düzenleme ve bağlantı oluşturma teknikleri.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recent Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
              <li className="text-sm">
                <Link href={"/kuzu"}>Kuzu Robot</Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit">
            Getting Started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
