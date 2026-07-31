/**
 * Dance 4 You Konstanz – Hero-Choreografie
 *
 * Die Tänzerin (Referenzbild) sitzt auf einer 3D-Scheibe (rotationY).
 * Beim Scrollen wird die Hero-Section gepinnt und die Scheibe dreht sich
 * über die gepinnte Scrolldistanz exakt zwei volle Umdrehungen (720deg).
 * Erst danach löst sich der Pin und die nächste Sektion wird erreichbar.
 *
 * Hinweis: Es handelt sich um eine gestalterische 2.5D-Drehung des Bildes
 * (CSS 3D-Transform), nicht um ein echtes geriggtes 3D-Modell der Person.
 */
(function () {
  "use strict";

  var hero = document.querySelector("[data-hero]");
  var disc = document.querySelector("[data-hero-disc]");
  if (!hero || !disc) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  // Ohne GSAP/ScrollTrigger oder bei Reduced Motion: statisches Bild, kein Pin.
  // Text, CTAs und Navigation funktionieren unabhängig davon vollständig (progressive enhancement).
  if (reduceMotion || !hasGsap) {
    disc.style.transform = "rotateY(0deg)";
    hero.classList.add("hero--static");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var ROTATIONS = 2;
  var isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  var isSmallScreen = window.innerWidth < 700;

  // Hinweis: Die Intro-Einblendung von Text und Bühne läuft bewusst rein über CSS-Keyframes
  // (siehe css/style.css, .hero__eyebrow/.hero__title/... und .hero__stage), nicht über GSAP.
  // So bleibt der Inhalt garantiert sichtbar, selbst wenn der rAF-Ticker (z. B. in
  // Hintergrund-Tabs) verzögert anläuft.

  // Scrollgekoppelte Drehung: gepinnt bis exakt 2 Umdrehungen erreicht sind
  var pinDistance = function () {
    var vh = window.innerHeight;
    return isSmallScreen ? vh * 1.15 : vh * 1.6;
  };

  // Rotation und Hintergrund-Lichtwanderung teilen sich EINE ScrollTrigger-Instanz
  // (eine gemeinsame Timeline). Zwei getrennte ScrollTrigger auf demselben gepinnten
  // Element würden sich beim Refresh gegenseitig verschieben (zweiter Trigger würde
  // fälschlich erst nach Ablauf der Pin-Distanz des ersten starten).
  var heroTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: function () {
        return "+=" + pinDistance();
      },
      scrub: 0.6,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });

  heroTimeline
    .to(disc, { rotationY: 360 * ROTATIONS, ease: "none" }, 0)
    .to(hero, { "--glow-x": "30%", "--glow-y": "65%", ease: "none" }, 0);

  // Pointer-Parallaxe (nur bei feinem Zeigegerät, keine Reduced-Motion-Verletzung)
  if (!isCoarsePointer) {
    var xToStage = gsap.quickTo("[data-hero-stage]", "x", { duration: 0.6, ease: "power3.out" });
    var yToStage = gsap.quickTo("[data-hero-stage]", "y", { duration: 0.6, ease: "power3.out" });
    var xToCopy = gsap.quickTo("[data-hero-copy]", "x", { duration: 0.7, ease: "power3.out" });

    hero.addEventListener("pointermove", function (e) {
      var rect = hero.getBoundingClientRect();
      var relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      var relY = (e.clientY - rect.top) / rect.height - 0.5;

      xToStage(relX * 18);
      yToStage(relY * 12);
      xToCopy(relX * -6);
    });

    hero.addEventListener("pointerleave", function () {
      xToStage(0);
      yToStage(0);
      xToCopy(0);
    });
  }
})();
