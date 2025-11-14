import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { Button } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    ListItem
} from "@/components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";

const defaultLinks = [
  { 
    title: "HOME", 
    href: "/" 
  },

  {
    title: "COLLECTION",
    options: [
      { 
        link: "Casual Wear", 
        desc: "T-shirts, shirts, jeans, joggers, casual dresses." 
      },
      { 
        link: "Formal Wear", 
        desc: "Formal shirts, trousers, blazers, office dresses." 
      },
      { 
        link: "Sports & Activewear", 
        desc: "Gym wear, track pants, leggings, dry-fit tops." 
      },
      { 
        link: "Winter Wear", 
        desc: "Jackets, sweaters, hoodies, coats, thermals." 
      },
      { 
        link: "Traditional Wear", 
        desc: "Kurtas, sarees, lehengas, salwar suits, sherwanis." 
      },
      { 
        link: "Party & Occasion Wear", 
        desc: "Party dresses, gowns, blazers, fancy tops." 
      },
      { 
        link: "Accessories", 
        desc: "Belts, caps, scarves, watches, sunglasses." 
      },
      { 
        link: "Footwear", 
        desc: "Sneakers, sandals, boots, formal shoes." 
      },
    ],
  },

  { 
    title: "ABOUT", 
    href: "/about" 
  },

  { 
    title: "CONTACT", 
    href: "/contact" 
  },
];


const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "-and-")
    .replace(/[\s\W-]+/g, "-");

const Header = () => {
    return (
        <div className="bg-primary-foreground shadow-md">
            <Container className="flex justify-between items-center py-5 font-medium px-4 sm:px-10">
                {/* Logo / brand */}
                <Link to="/" className="flex items-center gap-3 no-underline">
                    <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent tracking-wide">
                        ClothHub
                    </h3>
                </Link>

                {/* Desktop navigation (hidden on small screens) */}
                <DesktopView />
                {/* Sign up Buttons */}
                <div className="flex gap-2 items-center">
                    <ShoppingCart />

                    <Button variant="link" size="lg">Sign in</Button>
                    <Button>Sign up</Button>
                </div>
            </Container>
        </div>
    );
};

const DesktopView = () => {
    return (
        <nav className="hidden md:block">
            <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-2">
                    {defaultLinks.map((item) => {
                        if (item.options && Array.isArray(item.options)) {
                            return (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger className={`bg-white`}>{item.title}</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-2 sm:w-[320px] md:w-[420px] md:grid-cols-2 lg:w-[520px]">
                                            {item.options.map((opt) => {
                                                // build href for option, e.g. /collection/casual-wear
                                                const href =
                                                    (item.href ? item.href.replace(/\/$/, "") : "/collection") +
                                                    "/" +
                                                    slugify(opt.link);
                                                return (
                                                    <ListItem key={opt.link} title={opt.link} href={href}>
                                                        {opt.desc}
                                                    </ListItem>
                                                );
                                            })}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            );
                        }
                        return (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuLink href={item.href ?? "#"} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent">
                                    {item.title}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
};

export default Header;
