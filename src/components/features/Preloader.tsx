import { useEffect, useState } from "react";
import { PHOTOS } from "@/constants/data";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setLogoVisible(true), 100);
    const t2 = setTimeout(() => setTextVisible(true), 400);
    const t3 = setTimeout(() => setBarWidth(100), 500);
    const t4 = setTimeout(() => setHidden(true), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className={`preloader ${hidden ? "hidden" : ""}`} aria-hidden="true">
      <div
        className="transition-all duration-500"
        style={{ opacity: logoVisible ? 1 : 0, transform: logoVisible ? "scale(1)" : "scale(0.8)" }}
      >
        <img
          src={PHOTOS.logoFull}
          alt="SaiNex Technologies"
          className="h-20 w-auto object-contain"
          style={{ filter: "drop-shadow(0 0 20px rgba(0,196,245,0.4))" }}
        />
      </div>
      <div
        className="text-center transition-all duration-500"
        style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? "translateY(0)" : "translateY(8px)" }}
      >
        <p className="text-electric text-sm font-semibold tracking-widest uppercase">
          Dhananjeyan S
        </p>
        <p className="text-muted-foreground text-xs mt-1 tracking-wider">
          Portfolio Loading...
        </p>
      </div>
      <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-electric-400 to-electric-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </div>
  );
}
