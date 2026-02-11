/*
Design Philosophy: Neo-Fashion Editorial
- Layout asimmetrico magazine-style con masonry grid
- Immagini full-bleed con overlay text
- Animazioni al scroll e hover effects sofisticati
*/

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(images);

  useEffect(() => {
    if (filter === "all") {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter((img) => img.category === filter));
    }
  }, [filter, images]);

  const categories = ["all", ...Array.from(new Set(images.map((img) => img.category)))];

  return (
    <section id="gallery" className="py-24 bg-background observe-scroll">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label-text text-accent mb-4">GALLERIA FOTOGRAFICA</p>
          <h2 className="heading-text mb-6">Il Nostro Negozio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri gli spazi eleganti di Stock House Prato e l'ampio assortimento di capi firmati
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`label-text px-6 py-3 border-2 transition-all duration-300 ${
                filter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-foreground hover:border-foreground"
              }`}
            >
              {cat === "all" ? "Tutti" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden cursor-pointer observe-scroll ${
                index === 0 || index === 4 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="label-text text-secondary mb-2">{image.category.toUpperCase()}</p>
                <h3 className="font-serif font-bold text-2xl text-background mb-2">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="text-background/90 text-sm line-clamp-2">{image.description}</p>
                )}
              </div>

              {/* Border accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background border-2 border-border">
          <DialogTitle className="sr-only">Visualizza immagine della galleria</DialogTitle>
          <div className="relative">
            {selectedImage && (
              <>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />
                <div className="p-8">
                  <p className="label-text text-accent mb-2">{selectedImage.category.toUpperCase()}</p>
                  <h2 className="heading-text mb-4">{selectedImage.title}</h2>
                  {selectedImage.description && (
                    <p className="text-lg text-muted-foreground">{selectedImage.description}</p>
                  )}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
