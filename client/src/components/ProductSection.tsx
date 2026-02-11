/*
Design Philosophy: Neo-Fashion Editorial
- Full-width hero sections per ogni categoria
- Layout asimmetrico con immagine e testo
- Tipografia oversized e impattante
- Animazioni cinematiche al scroll
*/

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
  highlights: string[];
  backgroundColor?: "light" | "dark";
}

export default function ProductSection({
  title,
  subtitle,
  description,
  image,
  imagePosition = "right",
  highlights,
  backgroundColor = "light"
}: ProductSectionProps) {
  const bgClass = backgroundColor === "dark" ? "bg-foreground text-background" : "bg-background text-foreground";
  const textColorClass = backgroundColor === "dark" ? "text-background" : "text-foreground";
  const mutedColorClass = backgroundColor === "dark" ? "text-background/70" : "text-muted-foreground";
  const accentColorClass = backgroundColor === "dark" ? "text-secondary" : "text-accent";

  const contentOrder = imagePosition === "right" ? "md:order-1" : "md:order-2";
  const imageOrder = imagePosition === "right" ? "md:order-2" : "md:order-1";

  return (
    <section className={`py-32 ${bgClass} observe-scroll`}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className={contentOrder}>
            <p className={`label-text ${accentColorClass} mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700`}>
              {subtitle}
            </p>
            <h2 className={`text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100 ${textColorClass}`}>
              {title}
            </h2>
            <p className={`text-xl leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 ${mutedColorClass}`}>
              {description}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${accentColorClass === "text-secondary" ? "bg-secondary" : "bg-accent"}`}></div>
                  <p className={`text-lg ${mutedColorClass}`}>{highlight}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className={`px-8 py-6 text-base group animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400 ${
                backgroundColor === "dark"
                  ? "bg-background text-foreground hover:bg-background/90"
                  : "bg-foreground text-background hover:bg-foreground/90"
              }`}
            >
              Scopri di Più
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image */}
          <div className={`${imageOrder} relative h-[600px] md:h-[700px] overflow-hidden shadow-2xl group`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay accent */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
