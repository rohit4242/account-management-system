"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";

import { cn } from "@/lib/utils";

import { FC } from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

const MobileNav: FC = () => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storeId}`,
    },

    {
      href: `/${params.storeId}/clients`,
      label: "Clients",
      active: pathname === `/${params.storeId}/clients`,
    },
    {
      href: `/${params.storeId}/invoices`,
      label: "Invoices",
      active: pathname === `/${params.storeId}/invoices`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <Menubar className="lg:hidden">
      <MenubarMenu>
        <MenubarTrigger>
          <AlignJustify size={20} />
        </MenubarTrigger>
        <MenubarContent className="mr-2">
          {routes.map((route) => (
            <MenubarItem key={route.href}>
              {" "}
              {/* Add key prop here */}
              <Link
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MobileNav;
