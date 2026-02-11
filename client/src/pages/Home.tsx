/*
Design Philosophy: Neo-Fashion Editorial
- Hero full-viewport con immagine drammatica e testo sovrapposto
- Layout asimmetrico magazine-style
- Contrasti forti e tipografia oversized
- Animazioni cinematiche al scroll
*/

import { useEffect, useRef, useState } from "react";
import { Star, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { MapView } from "@/components/Map";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Messaggio inviato! Ti contatteremo presto.");
    setFormData({ name: "", email: "", message: "" });
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4");
            entry.target.classList.add("duration-700");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".observe-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const reviews = [
    { text: "Ottime occasioni capi firmati commesse splendide", author: "Maria R.", rating: 5 },
    { text: "Cordiali e simpatici tantissimo assortimento", author: "Giuseppe T.", rating: 5 },
    { text: "Personale gentilissimo e prezzi ottimi: difficile trovare posto auto", author: "Laura B.", rating: 4 },
    { text: "Tanto assortimento uomo/donna, sportivo, elegante e casual. Molti giacconi, pantaloni, maglieria, si possono trovare delle buone occasioni a prezzi scontati.", author: "Marco F.", rating: 5 },
  ];

  const products = [
    {
      title: "Collezione Uomo",
      description: "Blazer, camicie, jeans e accessori delle migliori marche",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/818fBqIteXCkMCFUDKnq3i/sandbox/Zlb1VHBizqmhXFH5lpd4xf-img-2_1770488408000_na1fn_bWVucy1jb2xsZWN0aW9uLWVkaXRvcmlhbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODE4ZkJxSXRlWENrTUNGVURLbnEzaS9zYW5kYm94L1psYjFWSEJpenFtaFhGSDVscGQ0eGYtaW1nLTJfMTc3MDQ4ODQwODAwMF9uYTFmbl9iV1Z1Y3kxamIyeHNaV04wYVc5dUxXVmthWFJ2Y21saGJBLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MJX6qD0IdnRURykO-tbq-5nnemAe3o7p9S1KRPQM4Ze2quYHFdcktMRmkmvufFAsbrrTFFG2IOgFUZodBgGuiC-COuzSBrBshHCBqfKr6Krk6BuU0URcIUc0WpqEbsE-YIRDL~g-l-QXPbEIvxEoBbSuB7t8dfGmJAWizrWPqVridv5F2PovKAEkwz9LLytEBUhUY0wYkbnTezwlhHm3l5mDF8BSJZkhl4uvtRoD6-AzG7NOIYpEIt2KQE~QWqGrkPkPx2ozqERNgmhxUi8X0ZMlvHM7RXxfl0WmjseH13qz1RMRFEt4e70gJbwbVcw8-gVl8DLQmGEo7InK0mpOFg__",
      id: "uomo"
    },
    {
      title: "Collezione Donna",
      description: "Eleganza e stile con capi firmati per ogni occasione",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/818fBqIteXCkMCFUDKnq3i/sandbox/Zlb1VHBizqmhXFH5lpd4xf-img-3_1770488408000_na1fn_d29tZW5zLWNvbGxlY3Rpb24tZWRpdG9yaWFs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODE4ZkJxSXRlWENrTUNGVURLbnEzaS9zYW5kYm94L1psYjFWSEJpenFtaFhGSDVscGQ0eGYtaW1nLTNfMTc3MDQ4ODQwODAwMF9uYTFmbl9kMjl0Wlc1ekxXTnZiR3hsWTNScGIyNDRaV1JwZEc5eWFXRnMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nnT5iFapl~AtYB1GzaNQaKueMvBaonfz6Sp~-sx62uUdJu8o340v3-RwX6DcaGGETFLCSgIOh2hKuPQ9DtwZiyQyBaxpqFavQbwtppzBDwouXvjluECDhqxBjevhJD6HZGMgJwVAyY2-9tECEq6NSVTXQl2IQGcmBnokdChbAs74F1AMhj~6J~OhKyQ9h389gOngL4Sc~DZc32AWox0fPpas-IjEe2DS4RUDDOl5KBEqlurf~tJ5LCGdjjH8wEwJZ-Gq9qU~w53sXY8i0o2FSg5FyogEKyOy6Zx4ACC5Qan1OhVB6vLHSf4hqoV57IV7SN7L2o3oevYOQntB9kB0wQ__",
      id: "donna"
    },
    {
      title: "Outlet & Sconti",
      description: "Occasioni imperdibili su capi di alta qualità",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/818fBqIteXCkMCFUDKnq3i/sandbox/Zlb1VHBizqmhXFH5lpd4xf-img-4_1770488410000_na1fn_b3V0bGV0LXNhbGUtZWRpdG9yaWFs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODE4ZkJxSXRlWENrTUNGVURLbnEzaS9zYW5kYm94L1psYjFWSEJpenFtaFhGSDVscGQ0eGYtaW1nLTRfMTc3MDQ4ODQxMDAwMF9uYTFmbl9iM1YwYkdWMExYTmhiR1V0WldScGRHOXlhV0ZzLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YIspClqdvn02ydKa6-YzC~OitM0b~kK9mxqMzqh~Uayz7QraNx0K8qifK6fTrCV0~HXqjgkorMW7EJVn2vwOtC6TDql0bi2D92~Uj2yr4GnWHudjT0NO1nIDe4KHVaui3KWlY8tm62AIRnhmkAm962biZmud36K89iFMjYESCs4Nio2JFbD4FlLwqTf9l5gByaoiwVhgU8SDY8DnFy9zOd4Ca80EoHRo6boHGNAFJjtyOM2LU5mr6RAoMtrC-qUqtXZHaWzUgP63NjzxcPh4328YppJYnyPiU8EPvqq-PHybAwyzEfEnUijS-uxPqZqOM-FqOH7-51FeJPPERXazmw__",
      id: "outlet"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Full viewport with dramatic image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/818fBqIteXCkMCFUDKnq3i/sandbox/Zlb1VHBizqmhXFH5lpd4xf-img-1_1770488400000_na1fn_aGVyby1mYXNoaW9uLWVkaXRvcmlhbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODE4ZkJxSXRlWENrTUNGVURLbnEzaS9zYW5kYm94L1psYjFWSEJpenFtaFhGSDVscGQ0eGYtaW1nLTFfMTc3MDQ4ODQwMDAwMF9uYTFmbl9hR1Z5YnkxbVlYTm9hVzl1TFdWa2FYUnZjbWxoYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=p~~9vq1VsZS5RHy88u4SusixipjUWKlMv4OLj0It6KGEahUpEEna6BlSmCbF6FxR0~3iS4TesZgksKEqx4NqpJTleO5BpbGlsWWGd8M9GlSSBMzFgHWbu2jsLV5lX1oThZZSz3F9QvsaBWpoKx9jHtJGVzAbQgF0uRLzob~1J~UvHhXiJmoKgTe6YyMTPUQLmilk6VhBWuW8hFWmSG1gGG~ljFsrwfMRi1DUxnIKbELrvNDmtubI0IUluMfBnTaw2FUguTwTz7Oq0TGW4PS0M2bs4uCpKm1uqRSthmzSE-oZdIE8QQ0QDUSMdtfxqSZWEeRK2~rvMmacgYZVOGBzzg__')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="label-text text-accent mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">PRATO • DAL 1985</p>
            <h1 className="display-text text-foreground mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
              Eleganza Firmata a Prezzi Outlet
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Scopri le migliori collezioni uomo e donna delle grandi marche. Qualità, stile e convenienza nel cuore di Prato.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
              <a href="#prodotti" className="inline-block">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base">
                  Scopri le Collezioni
                </Button>
              </a>
              <a href="#contatti" className="inline-block">
                <Button size="lg" variant="outline" className="px-8 py-6 text-base border-2 border-foreground hover:bg-foreground hover:text-background">
                  Contattaci
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="py-24 bg-background observe-scroll">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-text text-accent mb-4">LA NOSTRA STORIA</p>
              <h2 className="heading-text mb-6">Stock House Prato</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Da oltre trent'anni siamo il punto di riferimento a Prato per chi cerca abbigliamento firmato a prezzi outlet. La nostra passione per la moda e l'attenzione al cliente ci hanno permesso di costruire una reputazione solida basata su qualità, convenienza e servizio eccellente.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Offriamo un vasto assortimento di capi per uomo e donna: dall'elegante al casual, dallo sportivo al formale. Ogni stagione selezioniamo le migliori collezioni delle grandi marche per garantire ai nostri clienti scelte sempre aggiornate e di qualità.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="text-4xl font-bold text-foreground">4.5</div>
                  <div className="text-secondary text-xl">★★★★★</div>
                  <div className="text-sm text-muted-foreground mt-1">298 recensioni</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div>
                  <div className="text-4xl font-bold text-foreground">30+</div>
                  <div className="text-sm text-muted-foreground mt-1">Anni di esperienza</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/818fBqIteXCkMCFUDKnq3i/sandbox/Zlb1VHBizqmhXFH5lpd4xf-img-5_1770488409000_na1fn_c3RvcmUtaW50ZXJpb3ItZWRpdG9yaWFs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODE4ZkJxSXRlWENrTUNGVURLbnEzaS9zYW5kYm94L1psYjFWSEJpenFtaFhGSDVscGQ0eGYtaW1nLTVfMTc3MDQ4ODQwOTAwMF9uYTFmbl9jM1J2Y21VdGFXNTBaWEpwYjNJdFpXUnBkRzl5YVdGcy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZBanLZuJ788btemcL1OxbJwRTK7MgyVvAABxtq-CmcpyANY4eOtJo5V1aRSVeaL~1TR~yLaKm444AqJVihNZj048KTsZIcN3khNDZXEB99zIlGJavCMk-uNjP6tIl-idguxVLOAFF47qO9M2fcREQIb8MB1gKnVKc7bzEqtlAPU14dODfREZ-USuxUuMBielZ2xUxV4DkksiO25LMC-1-G8zdvLYPR1KvBBKBxzg9A0LcE3C7uzCm9gr9AYWStwpAqlNlj9KT~pF8iXFf6N24ue54orHzdqV95gx0si~zWYZKfxWwbNEHQoFxdxJbclnhzMbQauuCxICV6smGNQvxw__"
                alt="Store Interior"
                className="w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-secondary text-foreground p-8 max-w-xs">
                <p className="quote-text">"Personale gentilissimo e prezzi ottimi"</p>
                <p className="text-sm mt-2">— Cliente verificato</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collezione Uomo */}
      <ProductSection
        title="Collezione Uomo"
        subtitle="ELEGANZA MASCHILE"
        description="Scopri la nostra selezione esclusiva di capi uomo dalle migliori marche internazionali. Blazer, camicie, jeans premium e accessori sofisticati per uno stile impeccabile in ogni occasione."
        image="https://private-us-east-1.manuscdn.com/sessionFile/818fBqIteXCkMCFUDKnq3i/sandbox/vJTl542OgY6y9tW2h6vnn7-img-1_1770547490000_na1fn_Y29sbGV6aW9uZS11b21vLW5ldw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODE4ZkJxSXRlWENrTUNGVURLbnEzaS9zYW5kYm94L3ZKVGw1NDJPZ1k2eTl0VzJoNnZubjctaW1nLTFfMTc3MDU0NzQ5MDAwMF9uYTFmbl9ZMjlzYkdWNmFXOXVaUzExYjIxdkxXNWxkdy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D5hGNpb~eXU73YaRwEiGU4X-imuZDiTk5hC6mL02JTQXja-gcxMjNQm4DJ6xvvvNNsZxeYf0-SZXrQRxilWuA5GFfdSEf39nLXO0ZbyQg-K3021ax7f9QiEz-VbV~b-Kl~hryWBHvYhaVCwMcbkpf7wH8-7eUUcwEqPFHhfap71uM1Q7Bort1bE-Ay9V~F9RijgATwA7XMvN9gyVbCv0BD9-mXG1J~P1Eosa~jiMaA7kBO6VwDeAJlxI~xIEcmfXaiN8aeCU4ZY~aey6L~z-B4e-KQ1RsFia-2sd2UqGQRmMcGlMWfgsvoH1sIIALC04EGB78KVZ-VCyqTuaWu4KYQ__"
        imagePosition="right"
        highlights={[
          "Blazer e giacche di lusso da grandi designer",
          "Camicie e maglieria in fibre pregiate",
          "Jeans premium e pantaloni eleganti",
          "Accessori e scarpe di qualità certificata"
        ]}
        backgroundColor="light"
      />

      {/* Collezione Donna */}
      <ProductSection
        title="Collezione Donna"
        subtitle="FEMMINILITÀ E STILE"
        description="Eleganza senza compromessi. La nostra collezione donna racchiude i capi più ricercati delle grandi maison: abiti, bluse, pantaloni e accessori che esprimono personalità e sofisticatezza."
        image="https://private-us-east-1.manuscdn.com/sessionFile/818fBqIteXCkMCFUDKnq3i/sandbox/vJTl542OgY6y9tW2h6vnn7-img-2_1770547490000_na1fn_Y29sbGV6aW9uZS1kb25uYS1uZXc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvODE4ZkJxSXRlWENrTUNGVURLbnEzaS9zYW5kYm94L3ZKVGw1NDJPZ1k2eTl0VzJoNnZubjctaW1nLTJfMTc3MDU0NzQ5MDAwMF9uYTFmbl9ZMjlzYkdWNmFXOXVaUzFrYjI1dVlTMXVaWGMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=L53WQgBZKx1hrHzgScbMB0yV~jiXI17JuZnK2iJ2WSEJIVqHDw4-Vw-YNjE8z8m6XMX6rIeVbG4yaN3ltjvLv-1svYAEBqTnu-ns1QVguPokQ4Sm7lKnUDIZAUw4bMVPYARwOkChn6rkLIExdTutxMvuNtQ0CS4~82inn4FTem25AvXeujG1LvuRT5elP11MudwTgJqpa5-cNAYJuDqLZ~JHK2RKACYeexzLv5hRHAnma8cROVJHnaQKRfa~SQhyEORNKAaE3ManR42I3YxkxP31iCTGYPuEz84AXauqY5A2Yw4M4UpuKV6HZ-cFMvx1SVP5fz19GsHhFactcY0Iww__"
        imagePosition="left"
        highlights={[
          "Abiti e bluse dalle collezioni esclusive",
          "Pantaloni e gonne in tessuti pregiati",
          "Maglieria e cardigan di lusso",
          "Accessori e borse delle migliori marche"
        ]}
        backgroundColor="dark"
      />

      {/* Outlet & Sconti */}
      <ProductSection
        title="Outlet & Sconti"
        subtitle="OCCASIONI IMPERDIBILI"
        description="Scopri le migliori occasioni su capi firmati a prezzi straordinari. Collezioni precedenti, fine serie e outlet esclusivo: qualità garantita con sconti fino al 70%."
        image={products[2].image}
        imagePosition="right"
        highlights={[
          "Sconti fino al 70% su capi selezionati",
          "Marche di lusso a prezzi outlet",
          "Collezioni stagionali in liquidazione",
          "Qualità certificata e garanzia autenticità"
        ]}
        backgroundColor="light"
      />

      {/* Reviews Section */}
      <section className="py-24 bg-background observe-scroll">
        <div className="container">
          <div className="text-center mb-16">
            <p className="label-text text-accent mb-4">COSA DICONO I CLIENTI</p>
            <h2 className="heading-text mb-6">Recensioni Verificate</h2>
            <div className="flex items-center justify-center gap-2 text-secondary text-3xl mb-2">
              ★★★★★
            </div>
            <p className="text-lg text-muted-foreground">4.5 su 5 • 298 recensioni Google</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 bg-muted border-0 hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 text-secondary text-xl mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="quote-text text-foreground mb-4">"{review.text}"</p>
                <p className="text-sm text-muted-foreground font-semibold">— {review.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-24 bg-muted observe-scroll">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info & Form */}
            <div>
              <p className="label-text text-accent mb-4">VIENI A TROVARCI</p>
              <h2 className="heading-text mb-8">Contatti</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Indirizzo</h4>
                    <p className="text-muted-foreground">Via Roma, 306/L</p>
                    <p className="text-muted-foreground">59100 Prato PO</p>
                    <p className="text-sm text-muted-foreground mt-1">Codice Plus: V37M+99 Prato</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Telefono</h4>
                    <a href="tel:0574634614" className="text-accent hover:underline text-lg">
                      0574 634614
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-8 bg-background border-2 border-border">
                <h3 className="font-serif font-semibold text-2xl mb-6">Inviaci un messaggio</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="label-text text-foreground mb-2 block">NOME</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="label-text text-foreground mb-2 block">EMAIL</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="label-text text-foreground mb-2 block">MESSAGGIO</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="border-2"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90 py-6">
                    Invia Messaggio
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map */}
            <div>
              <div className="sticky top-24">
                <div className="h-[600px] bg-muted border-2 border-border overflow-hidden">
                  <MapView
                    initialCenter={{ lat: 43.8937, lng: 11.0833 }}
                    initialZoom={16}
                    onMapReady={(map) => {
                      new google.maps.marker.AdvancedMarkerElement({
                        map: map,
                        position: { lat: 43.8937, lng: 11.0833 },
                        title: "Stock House Prato"
                      });
                    }}
                  />
                </div>
                <div className="mt-6 p-6 bg-background border-2 border-border">
                  <h4 className="label-text text-foreground mb-4">ORARI DI APERTURA</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold">Sabato</span>
                      <span className="text-muted-foreground">10:00 - 13:00 / 15:30 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Domenica</span>
                      <span className="text-muted-foreground">Chiuso</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Lunedi</span>
                      <span className="text-muted-foreground">15:30 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Martedi - Venerdi</span>
                      <span className="text-muted-foreground">10:00 - 13:00 / 15:30 - 20:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
