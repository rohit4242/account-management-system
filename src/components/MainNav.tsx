"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { FC, HTMLAttributes } from "react";

interface MainNavProps {
  className: string;
  clientId?: string;
  props?: HTMLAttributes<HTMLElement>;
}

const MainNav: FC<MainNavProps> = ({ className, props }) => {
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
      label: "Clients ",
      active: pathname === `/${params.storeId}/clients`,
    },
    {
      href: `/${params.storeId}/clients/${params.clientId}/invoices`,
      label: "Invoices",
      active: pathname === `/${params.storeId}/clients/${params.clientId}/invoices`,
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
    <nav
      className={cn(
        "hidden lg:flex items-center space-x-4 lg:space-x-6 ",
        className
      )}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
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
      ))}
    </nav>
  );
};

export default MainNav;
