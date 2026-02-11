/*
Design Philosophy: Neo-Fashion Editorial
- Layout editoriale con tipografia drammatica
- Navigazione minimal e sofisticata
- Contrasti netti bianco/nero
*/

import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Uomo", href: "#uomo" },
    { label: "Donna", href: "#donna" },
    { label: "Outlet", href: "#outlet" },
    { label: "Contatti", href: "#contatti" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex flex-col">
              <span className="font-serif font-bold text-2xl tracking-tight">STOCK HOUSE</span>
              <span className="label-text text-muted-foreground">PRATO</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="label-text text-foreground hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0574634614" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">0574 634614</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="label-text text-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:0574634614"
                className="flex items-center gap-2 text-sm font-semibold py-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                0574 634614
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
