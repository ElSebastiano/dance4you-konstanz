# Vor-Übergabe-Checkliste – Dance 4 You Konstanz

Diese Website ist ein automatisiert erstellter Entwurf (Website-Projekt von Aurora Innovations) und muss vor der
tatsächlichen Übergabe an Dance 4 You bzw. vor öffentlicher Nutzung durch den Kunden geprüft werden.

## Rechtliches
- [ ] **Impressum** (`impressum.html`) juristisch prüfen und freigeben – aktuell deutlich als „ENTWURF – JURISTISCHE
      PRÜFUNG ERFORDERLICH" markiert.
- [ ] **Datenschutzerklärung** (`datenschutz.html`) juristisch prüfen und freigeben – aktuell ebenfalls als Entwurf
      markiert, inkl. Hinweisen zu Google Maps und optionalem Calendly.

## Inhalte, die mit dem Kunden abzustimmen sind
- [ ] Freigabe der Marken-Hex-Codes / Logo-Nutzungsrechte (aktuell wurde eine aus dem Referenzbild abgeleitete
      Bühnen-Palette verwendet, siehe `phase2_markenanalyse.md`).
- [ ] Vollständiger, aktueller Stundenplan (Uhrzeiten je Kurs) – auf `kurse.html` bisher nur Preise, kein Stundenplan.
- [ ] Allgemeine Öffnungszeiten außerhalb der Kurs-/Kartenverkaufszeiten.
- [ ] Rechte an echtem Foto-/Videomaterial, um das aktuelle KI-generierte Referenzbild in der Hero-Section zu
      ersetzen bzw. zu ergänzen.
- [ ] Calendly-Link, falls eine Online-Terminbuchung gewünscht ist (Platzhalter ist bereits vorbereitet).
- [ ] Google Maps API-Key, falls die volle interaktive JS-API anstelle der aktuell funktionierenden Karten-Einbettung
      ohne Key gewünscht ist.

## Technisch
- [x] Responsive Design (Desktop/Tablet/Smartphone).
- [x] `prefers-reduced-motion` respektiert.
- [x] Hero-Rotationsanimation lokal getestet (Pin + 2 Umdrehungen + Freigabe der nächsten Sektion).
- [x] Canonical-URLs, robots.txt und sitemap.xml zeigen konsistent auf die finale Domain.
- [ ] Nach Live-Schaltung: Seite in mehreren echten Browsern/Geräten erneut prüfen (diese Prüfung erfolgte in einer
      automatisierten Testumgebung).

## Deployment-Status
Siehe Chat-Zusammenfassung bzw. Commit-Historie im Repository für den aktuellen Stand von GitHub Pages und DNS.
