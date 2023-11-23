"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-men"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "tops",
    description:
      "We have colection of  beautiful tops  evry one wonto by  it .",
  },
  {
    title: "Acessries",
    href: "/acessries",
    description:
      "We have colection of  beautiful Acessries  evry one wonto by  it .",
  },
  {
    title: "Pants",
    href: "/pants",
    description:
      "We have colection of  beautiful Pants  evry one wonto by  it .",
  },
  {
    title: "Shoes",
    href: "/shoes",
    description:
      "We have colection of  beautiful Shoes  evry one wonto by  it .",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu >
      <NavigationMenuList  >
      <NavigationMenuItem >
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] bg-mywighy gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link key={component.title}
               
                href={component.href}>
                <ListItem   title={component.title}>
                  {component.description}
                </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent >
        </NavigationMenuItem>
        <NavigationMenuItem >
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
            "block select-none space-y-1 group rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-green-400">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
