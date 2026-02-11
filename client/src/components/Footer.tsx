/*
Design Philosophy: Neo-Fashion Editorial
- Layout pulito con tipografia gerarchica
- Informazioni organizzate in colonne editoriali
- Contrasti e spazi bianchi strategici
*/

import { MapPin, Phone, Clock, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif font-bold text-3xl mb-2">STOCK HOUSE</h3>
            <p className="label-text text-background/70 mb-4">PRATO</p>
            <p className="text-sm text-background/80 leading-relaxed">
              Abbigliamento firmato a prezzi outlet. Scopri le migliori occasioni per uomo e donna nel cuore di Prato.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="flex items-center gap-1 text-secondary">
                <span className="text-2xl font-bold">4.5</span>
                <span className="text-sm">★★★★★</span>
              </div>
              <span className="text-sm text-background/70">(298 recensioni)</span>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="label-text text-background mb-6">CONTATTI</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm">Via Roma, 306/L</p>
                  <p className="text-sm">59100 Prato PO</p>
                  <p className="text-xs text-background/70 mt-1">V37M+99 Prato</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:0574634614" className="text-sm hover:text-secondary transition-colors">
                  0574 634614
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-secondary transition-colors">
                  Seguici su Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Orari */}
          <div>
            <h4 className="label-text text-background mb-6">ORARI DI APERTURA</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold">Sabato</p>
                  <p className="text-sm text-background/80">10:00 - 13:00 • 15:30 - 20:00</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Domenica</p>
                  <p className="text-sm text-background/80">Chiuso</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Lunedì</p>
                  <p className="text-sm text-background/80">15:30 - 20:00</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Martedì - Venerdì</p>
                  <p className="text-sm text-background/80">10:00 - 13:00 • 15:30 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© 2026 Stock House Prato. Tutti i diritti riservati.</p>
            <p>Negozio di abbigliamento firmato • Outlet Prato</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
