import React, { useEffect, useMemo, useState, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Fish,
  Globe2,
  Mail,
  Menu,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";

const owner = {
  name: "Forchun",
  email: "Forchun@korvyn.site",
  phone: "(202) 838-6984",
  phoneHref: "tel:+12028386984",
  site: "https://korvyn.site",
  mailHref:
    "mailto:Forchun@korvyn.site?subject=Korvyn%20Website%20Project&body=Hi%20Forchun%2C%0D%0AI%20am%20interested%20in%20a%20website%20for%20my%20business.%0D%0A%0D%0ABusiness%20name%3A%0D%0AWhat%20I%20need%3A%0D%0ABest%20time%20to%20talk%3A",
};

const trail = [
  {
    id: "why-different",
    number: "01",
    world: "How It Works",
    eyebrow: "Why Korvyn is different",
    title: "Most web designers ask for payment before showing you anything.",
    body: "I do things differently.",
    icon: WandSparkles,
    theme: "from-cyan-300 via-blue-500 to-violet-500",
    bg: "from-slate-950 via-blue-950 to-cyan-950",
    visual: "clouds",
    creature: "whale",
    steps: [
      { number: "1", text: "Tell me about your business." },
      { number: "2", text: "I build a custom website based on your goals." },
      { number: "3", text: "Review it and decide if you'd like to move forward.", note: "Additional pages, features, integrations, and custom functionality can be added after approval." },
    ],
    pills: ["No pressure.", "No upfront payment.", "No risk."],
    points: [],
  },
  {
    id: "what-i-build",
    number: "02",
    world: "Services",
    eyebrow: "What I build",
    title: "Custom Websites And Business Software Built Around Your Business.",
    body: "",
    icon: Code2,
    theme: "from-violet-300 via-fuchsia-400 to-indigo-700",
    bg: "from-indigo-950 via-purple-950 to-slate-950",
    visual: "orbits",
    creature: "fish",
    points: [
      "Business Websites",
      "Restaurant Websites",
      "Contractor Websites",
      "Service Business Websites",
      "Appointment Booking Systems",
      "Inventory Tracking Systems",
      "Employee Management Systems",
      "Internal Dashboards",
      "Custom Software Solutions",
    ],
  },
  {
    id: "more-than-websites",
    number: "03",
    world: "Beyond Websites",
    eyebrow: "More than just websites",
    title: "Many Businesses Need More Than A Website.",
    body: "They need systems that save time, reduce mistakes, and simplify daily operations.",
    icon: BriefcaseBusiness,
    theme: "from-emerald-300 via-lime-300 to-cyan-400",
    bg: "from-emerald-950 via-green-950 to-slate-950",
    visual: "leaves",
    creature: "sparkles",
    points: [
      "Inventory Management Systems",
      "Employee Tracking Systems",
      "Booking Platforms",
      "Customer Management Tools",
      "Internal Dashboards",
      "Business Automation Tools",
      "Custom Software Solutions",
    ],
    suffix: "If you can describe it, I can probably build it.",
    suffixCta: "Need something custom? Let\u2019s talk.",
  },
  {
    id: "about",
    number: "04",
    world: "About Forchun",
    eyebrow: "About Forchun",
    title: "Work Directly With The Developer Building Your Project.",
    body: "I\u2019ve been building websites and softwares for eight years.",
    icon: ShieldCheck,
    theme: "from-rose-300 via-orange-400 to-yellow-300",
    bg: "from-rose-950 via-orange-950 to-slate-950",
    visual: "wheels",
    creature: "sparkles",
    points: [
      "No outsourcing.",
      "No middlemen.",
      "No sales team.",
      "No templates copied from somewhere else.",
      "Direct communication throughout the project.",
      "Custom work built around your business.",
      "Built by the person you talk to.",
    ],
  },
  {
    id: "pricing",
    number: "05",
    world: "Pricing",
    eyebrow: "Pricing",
    title: "Transparent Pricing With No Upfront Payment Required.",
    body: "Review before you decide.",
    icon: BadgeDollarSign,
    theme: "from-yellow-300 via-orange-400 to-cyan-300",
    bg: "from-yellow-950 via-orange-950 to-slate-950",
    visual: "coins",
    creature: "sparkles",
    priceCards: [
      {
        name: "No Upfront Payment",
        price: "Website Built First",
        text: "See your custom website before spending anything.",
        list: ["Custom website built first", "Review before deciding", "No payment required", "No obligation"],
      },
      {
        name: "Starter Websites",
        price: "Starting At $450",
        text: "Professional design built around your business.",
        list: [
          "Professional Design",
          "Mobile Friendly",
          "Contact Forms",
          "Business Information Pages",
          "Launch Support Included",
        ],
      },
      {
        name: "Advanced Projects",
        price: "Custom Quote",
        text: "For complex systems and custom software solutions.",
        list: [
          "Inventory Systems",
          "Business Dashboards",
          "Booking Platforms",
          "Business Automation",
          "Custom Software",
        ],
      },
    ],
    points: [],
  },
];

const KorvynMark = React.memo(function KorvynMark({ size = "h-16 w-16" }) {
  return (
    <div className={`relative flex ${size} shrink-0 items-center justify-center`}>
      <div className="absolute inset-0 rounded-2xl bg-cyan-400/30 blur-2xl animate-[pulse_3s_infinite]" />
      <div className="relative h-[82%] w-[82%] rotate-45 rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-300 via-blue-600 to-blue-950 shadow-xl shadow-cyan-400/40" />
      <div className="absolute h-[16%] w-[70%] -rotate-12 rounded-full bg-black/90" />
      <div className="absolute bottom-[14%] right-[6%] h-[16%] w-[55%] rotate-45 rounded-full bg-blue-300/90" />
    </div>
  );
});

const WhaleIcon = React.memo(function WhaleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 120 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 43C21 22 49 14 75 21C94 26 105 39 109 52C94 50 79 57 61 57H32C20 57 10 53 14 43Z" fill="currentColor" opacity="0.92" />
      <path d="M88 24C98 13 110 11 116 20C106 23 100 30 98 41" fill="currentColor" opacity="0.75" />
      <path d="M83 25C85 11 94 3 105 6C98 15 96 25 99 38" fill="currentColor" opacity="0.55" />
      <circle cx="37" cy="37" r="4" fill="#020617" />
      <path d="M22 54C18 65 8 69 2 63C9 58 13 53 14 45" fill="currentColor" opacity="0.65" />
      <path d="M48 57C53 66 67 66 73 57" stroke="#020617" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
});

function useMouseParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 45, damping: 20 });
  useEffect(() => {
    const h = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => window.removeEventListener("mousemove", h);
  }, [mouseX, mouseY]);
  return { smoothX, smoothY };
}

function CreatureIcon({ type }) {
  if (type === "whale") return <WhaleIcon className="h-20 w-24 text-white" />;
  if (type === "fish") return <Fish className="h-16 w-16 text-white" />;
  if (type === "rocket") return <Rocket className="h-16 w-16 text-white animate-pulse" />;
  return <Sparkles className="h-16 w-16 text-white" />;
}

const CodeCube = React.memo(function CodeCube({ theme, smoothX, smoothY, isLeft, isInView }) {
  if (!isInView) return null;
  const rotateX = useTransform(smoothY, [-400, 400], [10, -10]);
  const rotateY = useTransform(smoothX, [-600, 600], [-15, 15]);
  const x = useTransform(smoothX, [-600, 600], [isLeft ? 15 : -15, isLeft ? -15 : 15]);
  const y = useTransform(smoothY, [-400, 400], [-12, 12]);
  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }}
      className={`absolute ${
        isLeft ? "left-8 xl:left-24" : "right-8 xl:right-24"
      } top-1/2 -translate-y-1/2 hidden h-56 w-56 rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${theme} p-[1px] shadow-3xl lg:block z-0`}
    >
      <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-br from-white/[0.08] to-transparent opacity-30 blur-sm" />
      <div className="absolute inset-[1px] rounded-[2.3rem] border border-white/10 bg-black/75 p-6 shadow-3xl backdrop-blur-xl flex flex-col justify-center font-space">
        {["<div>", "const site", "deploy()", "</web>"].map((line, i) => (
          <motion.div
            key={line}
            className="mb-3 rounded-full bg-white/5 border border-white/5 px-4 py-2 text-xs font-bold text-cyan-100/90 font-space text-center animate-pulse"
            animate={{ x: [0, i % 2 ? 8 : -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

const Creature = React.memo(function Creature({ type = "sparkles", theme, index, smoothX, smoothY, isLeft, isInView }) {
  if (!isInView) return null;
  const x = useTransform(smoothX, [-600, 600], [isLeft ? 15 : -15, isLeft ? -15 : 15]);
  const y = useTransform(smoothY, [-400, 400], [index % 2 ? -12 : 12, index % 2 ? 12 : -12]);
  const rotateX = useTransform(smoothY, [-400, 400], [6, -6]);
  const rotateY = useTransform(smoothX, [-600, 600], [-10, 10]);
  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }}
      className={`absolute ${
        isLeft ? "left-8 xl:left-24" : "right-8 xl:right-24"
      } top-1/2 -translate-y-1/2 hidden h-56 w-56 rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${theme} p-[1px] shadow-3xl lg:block z-0`}
      animate={{ rotateZ: [0, 2, -2, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-black/60 backdrop-blur-xl flex items-center justify-center">
        <motion.div
          className="absolute inset-6 rounded-[1.8rem] border border-white/5 bg-white/[0.02]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.8rem] bg-white/10 shadow-lg"
          animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <CreatureIcon type={type} />
        </motion.div>
      </div>
    </motion.div>
  );
});

const DotSwarm = React.memo(function DotSwarm({ theme, index, isInView }) {
  if (!isInView) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      {Array.from({ length: 3 }).map((_, group) => (
        <motion.div
          key={`swarm-${index}-${group}`}
          className="absolute"
          style={{
            left: `${10 + ((group * 25 + index * 13) % 80)}%`,
            top: `${15 + ((group * 20 + index * 9) % 70)}%`,
            willChange: "transform",
          }}
          animate={{
            x: [0, group % 2 ? 60 : -60, 0],
            y: [0, group % 2 ? -30 : 30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 18 + group * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: group * 0.5,
          }}
        >
          <div className="relative h-12 w-20">
            {Array.from({ length: 8 }).map((_, dot) => (
              <span
                key={`dot-${dot}`}
                className={`absolute h-1.5 w-1.5 rounded-full bg-gradient-to-br ${theme} opacity-60`}
                style={{
                  left: `${15 + (dot % 4) * 20}%`,
                  top: `${25 + Math.sin(dot) * 8 + Math.floor(dot / 4) * 25}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
});

const WorldPieces = React.memo(function WorldPieces({ type, theme, index, isInView }) {
  if (!isInView) return null;
  const count = type === "clouds" ? 8 : type === "leaves" ? 12 : type === "wheels" ? 5 : 8;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      {Array.from({ length: count }).map((_, i) => {
        const left = 2 + ((i * 27 + index * 17) % 94);
        const top = 5 + ((i * 21 + index * 13) % 86);
        const size =
          type === "clouds" ? 80 + (i % 3) * 30 : type === "leaves" ? 20 + (i % 4) * 6 : type === "wheels" ? 60 + (i % 2) * 30 : 28 + (i % 5) * 10;
        const height = type === "clouds" ? size * 0.45 : size;
        const shape = type === "leaves" ? "rounded-[60%_40%_70%_30%]" : "rounded-full";
        return (
          <motion.span
            key={`${type}-${index}-${i}`}
            className={`absolute border border-white/5 bg-gradient-to-br ${theme} ${shape} opacity-10`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            animate={{
              y: type === "leaves" ? [0, 100, 0] : [0, -25, 0],
              x: type === "leaves" ? [0, i % 2 ? 30 : -30, 0] : [0, i % 2 ? 15 : -15, 0],
              rotateX: type === "wheels" ? [0, 360] : [0, i % 2 ? 15 : -15, 0],
              rotateY: type === "wheels" ? [0, -360] : [0, i % 2 ? -12 : 12, 0],
              rotateZ: type === "wheels" ? [0, 360] : [0, i % 2 ? 20 : -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: type === "wheels" ? 18 + i : 12 + (i % 5),
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
});

const GlowOrbs = React.memo(function GlowOrbs({ theme, index, isInView }) {
  if (!isInView) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className={`absolute -left-20 top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br ${theme} opacity-20 blur-[100px]`}
        animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16 + index * 0.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />
      <motion.div
        className={`absolute -right-20 bottom-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br ${theme} opacity-15 blur-[120px]`}
        animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18 + index * 0.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />
    </div>
  );
});

const FloatingWorld = React.memo(function FloatingWorld({ item, index, smoothX, smoothY, isInView }) {
  const visualType = item.visual === "wheels" ? "wheels" : item.visual;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {isInView && (
        <>
          <GlowOrbs theme={item.theme} index={index} isInView={isInView} />
          <WorldPieces type={visualType || "orbs"} theme={item.theme} index={index} isInView={isInView} />
          <DotSwarm theme={item.theme} index={index} isInView={isInView} />
          {(item.visual === "code" || item.id === "builds" || item.id === "ready") && (
            <CodeCube theme={item.theme} smoothX={smoothX} smoothY={smoothY} isLeft={isEven} isInView={isInView} />
          )}
          {item.creature && (
            <Creature type={item.creature} theme={item.theme} index={index} smoothX={smoothX} smoothY={smoothY} isLeft={index % 2 !== 0} isInView={isInView} />
          )}
        </>
      )}
    </motion.div>
  );
});

const SectionTransition = React.memo(function SectionTransition({ theme, flip = false, index = -1, isInView }) {
  if (!isInView) return null;
  return (
    <div className={`pointer-events-none absolute left-0 right-0 z-20 overflow-hidden ${flip ? "top-0 -scale-y-100" : "bottom-0"}`}>
      <div className="relative h-28 md:h-36 w-full">
        <motion.div
          className={`absolute inset-x-[-10%] bottom-0 h-28 rounded-t-[100%] bg-gradient-to-r ${theme} opacity-15 blur-[60px] md:h-36`}
          animate={{ x: [-30, 30, -30], scaleX: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-[1px] opacity-60" />

        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`trans-cloud-${i}`}
            className="absolute bottom-1 rounded-full bg-white/[0.02]"
            style={{
              left: `${10 + i * 20}%`,
              width: `${80 + (i % 3) * 30}px`,
              height: `${20 + (i % 3) * 10}px`,
            }}
            animate={{
              y: [0, -8, 0],
              x: [0, i % 2 ? 10 : -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {index === 0 && (
          <motion.div
            className="absolute bottom-6 left-[-200px] text-white/5 w-44 h-24 hidden lg:block"
            animate={{
              x: ["0vw", "120vw"],
              y: [0, -10, 5, -5, 0],
            }}
            transition={{
              x: { duration: 36, repeat: Infinity, ease: "linear" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <WhaleIcon className="w-full h-full opacity-20" />
          </motion.div>
        )}
      </div>
    </div>
  );
});

const TrailConnector = React.memo(function TrailConnector({ theme }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
      <motion.div
        className={`h-full w-[2px] origin-top rounded-full bg-gradient-to-b ${theme} opacity-20 shadow-xl`}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
});

const PricingCards = React.memo(function PricingCards({ item }) {
  if (!item.priceCards) return null;
  return (
    <div className="mt-3 grid max-w-5xl gap-4 md:grid-cols-3 text-left mx-auto w-full z-10 relative items-stretch">
      {item.priceCards.map((card, cardIndex) => {
        const isStarter = card.name === "Starter Websites";
        return (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: cardIndex * 0.1, duration: 0.5 }}
            className={`relative overflow-hidden rounded-[2rem] p-[1px] transition-all duration-300 shadow-xl hover:scale-[1.01] group flex flex-col ${
              isStarter
                ? "border-2 border-cyan-400/40 bg-gradient-to-b from-cyan-400/20 to-cyan-400/5 hover:border-cyan-400/60"
                : "border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.01] hover:border-white/20"
            }`}
          >
            {isStarter && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <span className="inline-block rounded-full bg-cyan-400 px-4 py-1 text-[10px] font-black text-black uppercase tracking-widest shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${item.theme} opacity-10 blur-2xl group-hover:opacity-15 transition-opacity duration-300`} />

            <div className="relative rounded-[1.95rem] bg-black/60 p-5 sm:p-6 backdrop-blur-2xl flex flex-col flex-grow h-full">
              <div className="flex flex-col gap-1 mb-3">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-300">{card.name}</p>
                <h3 className={`font-display font-extrabold tracking-tight ${
                  isStarter ? "text-2xl sm:text-3xl text-cyan-300" : "text-xl sm:text-2xl text-white"
                }`}>{card.price}</h3>
              </div>

              <p className="text-xs leading-relaxed text-white/55 mb-4">{card.text}</p>

              <div className="grid grid-cols-1 gap-1.5 mt-auto">
                {card.list.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 hover:bg-white/[0.05] transition duration-300 w-full"
                  >
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${item.theme} shadow-sm`} />
                    <span className="text-xs font-semibold text-white/85">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
});

const StepsDisplay = React.memo(function StepsDisplay({ steps, pills, theme }) {
  if (!steps) return null;
  return (
    <div className="w-full max-w-3xl mx-auto z-10 relative mt-2 mb-5">
      {/* Process timeline */}
      <div className="relative">
        {/* Connector line (desktop only) */}
        <div className="hidden sm:block absolute top-[28px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-[2px] bg-gradient-to-r from-white/10 via-white/20 to-white/10 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 pt-6 backdrop-blur-xl text-center hover:bg-white/[0.07] hover:border-white/20 transition duration-300 shadow-sm"
            >
              <span className={`h-11 w-11 flex items-center justify-center rounded-full bg-gradient-to-br ${theme} text-black font-black text-base font-space shadow-lg ring-4 ring-black/40`}>
                {step.number}
              </span>
              <p className="text-sm sm:text-[15px] font-semibold leading-snug text-white/90 font-space">{step.text}</p>
              {step.note && (
                <p className="text-[11px] leading-snug text-white/40 font-space font-medium">{step.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {pills && (
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {pills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.36 + i * 0.08, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold text-white/80 font-space backdrop-blur-xl"
            >
              <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${theme} shadow-sm`} />
              {pill}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
});

const TrailNode = React.memo(function TrailNode({ item, index, smoothX, smoothY, isInView }) {
  const isPricing = item.id === "pricing";
  const isAbout = item.id === "about";
  const hasSteps = !!item.steps;

  return (
    <section 
      id={item.id} 
      className="relative min-h-screen py-24 md:py-0 md:h-screen md:min-h-screen w-full overflow-visible md:overflow-hidden bg-[#030712] text-white flex items-center snap-start"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
      
      <FloatingWorld item={item} index={index} smoothX={smoothX} smoothY={smoothY} isInView={isInView} />
      <SectionTransition theme={item.theme} flip index={index} isInView={isInView} />
      {index < trail.length - 1 && <TrailConnector theme={item.theme} />}

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-8 flex flex-col items-center justify-start md:justify-center h-full text-center">
        <div className="my-auto w-full flex flex-col items-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex flex-wrap items-center justify-center gap-3 font-space text-[10px] sm:text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400 animate-pulse" />
            {item.eyebrow}
            <span className="text-white/20">|</span>
            <span className="text-orange-400">STAGE {item.number} // {item.world}</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className={`font-display font-extrabold leading-[1.15] tracking-tight text-white mb-5 max-w-3xl mx-auto ${
              isPricing 
                ? "text-xl sm:text-2xl md:text-3xl lg:text-[2rem]" 
                : "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem]"
            }`}
          >
            {item.title}
          </motion.h2>

          {/* Body */}
          {item.body && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className={`leading-[1.75] text-white/75 mx-auto font-medium font-space ${
                isPricing 
                  ? "text-sm md:text-base mb-6 max-w-xl" 
                  : "text-sm md:text-base mb-8 max-w-2xl"
              }`}
            >
              {item.body}
            </motion.p>
          )}

          {/* Steps (Why Different section) */}
          {hasSteps && (
            <StepsDisplay steps={item.steps} pills={item.pills} theme={item.theme} />
          )}

          {/* Pricing cards */}
          {item.priceCards ? (
            <PricingCards item={item} />
          ) : !hasSteps && item.points.length > 0 ? (
            <div className={`grid gap-2.5 w-full max-w-3xl mb-6 text-left mx-auto ${
              isAbout ? "grid-cols-1 max-w-lg" : "grid-cols-1 sm:grid-cols-2"
            }`}>
              {item.points.map((point, pointIndex) => (
                <motion.div
                  key={`${item.id}-${point}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: pointIndex * 0.06, duration: 0.5 }}
                  className={`flex items-center gap-3 rounded-xl border backdrop-blur-xl transition duration-300 shadow-sm font-space ${
                    isAbout
                      ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07] p-4"
                      : "border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 p-3 sm:p-3.5 hover:scale-[1.02]"
                  }`}
                >
                  <span className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${item.theme} shadow-md`} />
                  <span className={`font-semibold leading-relaxed text-white/90 ${
                    isAbout ? "text-sm md:text-base" : "text-[11px] sm:text-xs md:text-sm"
                  }`}>{point}</span>
                </motion.div>
              ))}
            </div>
          ) : null}

          {/* Suffix text (More Than Websites section) */}
          {item.suffix && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-1 mb-5 text-center"
            >
              <p className="text-sm font-bold text-cyan-300 font-space">{item.suffix}</p>
              {item.suffixCta && (
                <p className="mt-1 text-sm text-white/50 font-space">{item.suffixCta}</p>
              )}
            </motion.div>
          )}

          {/* Pricing footnote */}
          {item.priceCards && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4 text-xs text-white/40 font-space text-center max-w-xl mx-auto leading-relaxed"
            >
              Need additional pages, features, integrations, or custom functionality? Everything can be added after approval.
            </motion.p>
          )}

          {/* Node action buttons — middle sections: Next only. Pricing: primary CTA + Call. Last: primary CTA + Call. */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row w-full sm:w-auto z-10 relative mt-4">
            {index < trail.length - 1 && item.id !== "pricing" ? (
              /* Middle sections: Next Stage only */
              <motion.a
                href={`#${trail[index + 1].id}`}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/15 px-7 py-3 font-space text-sm font-bold text-white backdrop-blur-xl transition duration-300 w-full sm:w-auto hover:bg-white/15"
              >
                Next Stage ({trail[index + 1].number})
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            ) : (
              /* Pricing + final: Tell Me About My Business primary + phone secondary */
              <>
                <motion.a
                  href={owner.mailHref}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(34, 211, 238, 0.45)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-8 py-3.5 font-space text-sm font-black text-black shadow-xl transition duration-300 w-full sm:w-auto"
                >
                  Tell Me About My Business
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href={owner.phoneHref}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-space text-sm font-bold text-white transition duration-300 backdrop-blur-xl w-full sm:w-auto"
                >
                  <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5" />
                  {owner.phone}
                </motion.a>
                <motion.a
                  href="#footer-section"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.10)", borderColor: "rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3.5 font-space text-sm font-bold text-white/80 backdrop-blur-xl transition duration-300 w-full sm:w-auto hover:bg-white/10"
                >
                  <span>View Contact Details</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 rotate-90 transition-transform group-hover:translate-y-0.5" />
                </motion.a>
              </>
            )}
          </div>
        </div>
      </div>

      {index < trail.length - 1 && <SectionTransition theme={item.theme} index={index} isInView={isInView} />}
    </section>
  );
});

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-orange-400 to-blue-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

const MiniMap = React.memo(function MiniMap({ activeSection }) {
  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 rounded-[2rem] border border-white/8 bg-black/60 p-2.5 shadow-2xl backdrop-blur-2xl lg:block font-space">
      <div className="w-[1.5px] bg-gradient-to-b from-cyan-500/20 via-orange-500/20 to-blue-500/20 absolute left-[22.5px] top-4 bottom-4 z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-2">
        {trail.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={`Go to ${item.world}`}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full font-space text-[10px] font-black transition-all duration-300 group ${
                isActive
                  ? "bg-white text-black shadow-2xl shadow-white/30 scale-110"
                  : "bg-white/5 text-white/50 hover:bg-white/15 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              {Number(item.number)}

              <div className="absolute right-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 origin-right rounded-xl border border-white/10 bg-black/85 px-3.5 py-2 text-[9px] font-space uppercase tracking-widest text-cyan-300 backdrop-blur-2xl whitespace-nowrap shadow-3xl pointer-events-none">
                <span className="mr-1.5 opacity-40">{item.number}</span>
                {item.world}
              </div>
            </a>
          );
        })}

        {/* Footer Navigation Link */}
        {(() => {
          const isFooterActive = activeSection === "footer-section";
          return (
            <a
              href="#footer-section"
              aria-label="Go to Contact Details"
              className={`relative flex h-10 w-10 items-center justify-center rounded-full font-space text-[10px] font-black transition-all duration-300 group ${
                isFooterActive
                  ? "bg-white text-black shadow-2xl shadow-white/30 scale-110"
                  : "bg-white/5 text-white/50 hover:bg-white/15 hover:text-white"
              }`}
            >
              {isFooterActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              06

              <div className="absolute right-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 origin-right rounded-xl border border-white/10 bg-black/85 px-3.5 py-2 text-[9px] font-space uppercase tracking-widest text-cyan-300 backdrop-blur-2xl whitespace-nowrap shadow-3xl pointer-events-none">
                <span className="mr-1.5 opacity-40">06</span>
                Contact Details
              </div>
            </a>
          );
        })()}
      </div>
    </div>
  );
});

const Hero = React.memo(function Hero({ smoothX, smoothY, isInView }) {
  const x = useTransform(smoothX, [-600, 600], [-20, 20]);
  const y = useTransform(smoothY, [-400, 400], [-15, 15]);
  const rotateX = useTransform(smoothY, [-400, 400], [8, -8]);
  const rotateY = useTransform(smoothX, [-600, 600], [-8, 8]);
  
  const outerRotate = useSpring(useTransform(smoothX, [-600, 600], [-150, 150]), { stiffness: 60, damping: 25 });
  const innerRotate = useSpring(useTransform(smoothY, [-400, 400], [180, -180]), { stiffness: 60, damping: 25 });

  const heroWorld = { theme: "from-cyan-300 via-blue-500 to-orange-400", visual: "clouds", creature: "whale" };

  return (
    <section 
      id="top-section" 
      className="relative min-h-screen py-24 md:py-0 md:h-screen md:min-h-screen w-full overflow-visible md:overflow-hidden bg-[#030712] text-white flex items-center snap-start"
    >
      <FloatingWorld item={heroWorld} index={0} smoothX={smoothX} smoothY={smoothY} isInView={isInView} />

      {isInView && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-40">
          <motion.div
            className="absolute left-[15%] top-0 h-[150%] w-[3px] origin-top rotate-12 bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md"
            animate={{ opacity: [0.3, 0.9, 0.3], scaleX: [1, 2.5, 1], x: [-30, 30, -30] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[25%] top-0 h-[150%] w-[3px] origin-top -rotate-12 bg-gradient-to-b from-orange-400/35 via-amber-500/15 to-transparent blur-md"
            animate={{ opacity: [0.2, 0.7, 0.2], scaleX: [1, 3, 1], x: [40, -40, 40] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute left-[45%] top-0 h-[150%] w-[2px] origin-top rotate-[6deg] bg-gradient-to-b from-violet-400/30 via-purple-500/10 to-transparent blur-[3px]"
            animate={{ opacity: [0.15, 0.6, 0.15], x: [-20, 20, -20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          />
          <motion.div
            className="absolute right-[45%] top-0 h-[150%] w-[2px] origin-top -rotate-[6deg] bg-gradient-to-b from-emerald-400/20 via-teal-500/10 to-transparent blur-[3px]"
            animate={{ opacity: [0.1, 0.5, 0.1], x: [20, -20, 20] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-8 flex flex-col items-center text-center justify-start md:justify-center h-full">
        <div className="my-auto w-full flex flex-col items-center">
          
          {/* Animated Centered Mark */}
          <motion.div
            style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative mb-8 cursor-pointer group"
          >
            <div className="absolute inset-0 rounded-[3.5rem] bg-cyan-400/20 blur-3xl scale-150 group-hover:scale-175 transition-all duration-500" />
            
            <motion.div
              style={{ rotate: outerRotate }}
              className="absolute inset-[-15px] rounded-[3.8rem] border border-dashed border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors"
            />

            <motion.div
              style={{ rotate: innerRotate }}
              className="absolute inset-[-25px] rounded-[4.5rem] border border-double border-white/5"
            />

            <motion.div
              className="rounded-[3.2rem] border border-white/15 bg-white/[0.03] p-6 shadow-3xl backdrop-blur-3xl"
              animate={{
                boxShadow: [
                  "0 0 50px rgba(34,211,238,0.12)",
                  "0 0 80px rgba(34,211,238,0.22)",
                  "0 0 50px rgba(34,211,238,0.12)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <KorvynMark size="h-20 w-20 md:h-28 md:w-28" />
            </motion.div>
          </motion.div>

          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-3.5 rounded-full border border-orange-400/30 bg-orange-400/10 px-5 py-1.5 text-xs font-space font-bold uppercase tracking-[0.25em] text-orange-200 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-orange-300 animate-pulse" />
            Korvyn Website Services
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-white max-w-4xl"
          >
            Get a Custom Website Built for Your Business{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 via-violet-400 to-orange-400 bg-clip-text text-transparent">
              Before You Pay a Dollar.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 max-w-2xl font-space space-y-1.5"
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/70 font-semibold">
              Most web designers ask for payment before showing you anything.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-cyan-300 font-extrabold mt-1">
              I build your website first. Review it before deciding.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/60 font-medium">
              Projects start at $450 with no obligation if it isn't the right fit.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row z-10 font-space"
          >
            {/* Primary */}
            <motion.a
              href={owner.mailHref}
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(34, 211, 238, 0.55)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-9 py-3.5 font-space text-sm sm:text-base font-black text-black shadow-2xl transition duration-300"
            >
              Tell Me About Your Business
              <ArrowRight className="h-5 w-5" />
            </motion.a>
            {/* Secondary */}
            <motion.a
              href="#what-i-build"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.10)", borderColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-7 py-3.5 font-space text-sm font-bold text-white/80 backdrop-blur-xl transition duration-300"
            >
              View Recent Projects
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-2.5 font-space"
          >
            {[
              "✓ No Upfront Payment",
              "✓ Review Before You Decide",
              "✓ Projects Start At $450",
              "✓ Built Directly By The Developer",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-block rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-white/65 backdrop-blur-xl"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Social proof stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-6 font-space"
          >
            {[
              { stat: "25+", label: "Projects Completed" },
              { stat: "8 Years", label: "Sites & Software" },
              { stat: "100%", label: "Custom Work Only" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p className="text-lg sm:text-xl font-black text-white">{stat}</p>
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <SectionTransition theme={heroWorld.theme} index={0} isInView={isInView} />
    </section>
  );
});

const Footer = React.memo(function Footer({ smoothX, smoothY, isInView }) {
  return (
    <footer id="footer-section" className="relative min-h-screen py-24 md:py-0 md:h-screen md:min-h-screen w-full overflow-visible md:overflow-hidden bg-black text-center border-t border-white/5 flex items-center justify-center snap-start font-space">
      <FloatingWorld
        item={{ theme: "from-orange-300 via-cyan-300 to-blue-600", visual: "portal", creature: "whale" }}
        index={14}
        smoothX={smoothX}
        smoothY={smoothY}
        isInView={isInView}
      />

      <div className="font-display text-[15vw] font-bold leading-none tracking-tighter opacity-5 bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 select-none">
        KORVYN
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-8 flex flex-col items-center justify-start md:justify-center h-full">
        <div className="my-auto w-full flex flex-col items-center">
          <div className="rounded-[3rem] border border-white/10 bg-white/[0.02] p-6 md:p-10 shadow-3xl backdrop-blur-3xl w-full flex flex-col items-center">
            <div className="flex justify-center">
              <KorvynMark size="h-16 w-16" />
            </div>

            <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-[2.4rem] font-extrabold leading-[1.15] tracking-tight text-white max-w-lg">
              Ready To Talk About Your Business?
            </h2>

            <p className="mt-4 font-space text-sm sm:text-base text-white/65 max-w-sm leading-[1.7]">
              Tell me about your business and I'll show you exactly what I can build for you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
              {["No Upfront Payment", "No Pressure", "No Obligation"].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/70 font-space">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                  {pill}
                </span>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row w-full sm:w-auto">
              <motion.a
                href={owner.mailHref}
                whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(34, 211, 238, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-10 py-4 font-space font-black text-base sm:text-lg text-black shadow-2xl transition duration-300 w-full sm:w-auto"
              >
                Tell Me About My Business
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={owner.phoneHref}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.10)", borderColor: "rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-space font-bold text-sm text-white backdrop-blur-xl transition duration-300 w-full sm:w-auto"
              >
                <PhoneCall className="h-4 w-4" />
                {owner.phone}
              </motion.a>
            </div>

            {/* Contact info strip */}
            <div className="mx-auto mt-7 max-w-md w-full text-left">
              <div className="space-y-3 rounded-[2rem] border border-white/8 bg-black/40 p-5 md:p-6 backdrop-blur text-xs sm:text-sm text-white/70">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">Website</span>
                  <p className="font-bold text-white">korvyn.site</p>
                </div>
                <div className="border-t border-white/5 pt-2.5 flex justify-between items-center">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">Developer</span>
                  <p className="font-bold text-white">{owner.name}</p>
                </div>
                <div className="border-t border-white/5 pt-2.5 flex justify-between items-center">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">Email</span>
                  <a href={owner.mailHref} className="font-bold text-white hover:text-cyan-300 transition-colors">{owner.email}</a>
                </div>
                <div className="border-t border-white/5 pt-2.5 flex justify-between items-center">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">Phone</span>
                  <a href={owner.phoneHref} className="font-bold text-white hover:text-cyan-300 transition-colors">{owner.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default function KorvynCandyTrailWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("why-different");
  const nav = useMemo(() => trail, []);
  const { smoothX, smoothY } = useMouseParallax();

  useEffect(() => {
    const container = document.querySelector(".scroll-container");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: container,
        threshold: 0.2,
        rootMargin: "-25% 0px -25% 0px"
      }
    );
    
    const heroEl = document.getElementById("top-section");
    if (heroEl) observer.observe(heroEl);
    
    const elements = trail.map((item) => document.getElementById(item.id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el));
    
    const footerEl = document.getElementById("footer-section");
    if (footerEl) observer.observe(footerEl);

    return () => {
      if (heroEl) observer.unobserve(heroEl);
      elements.forEach((el) => observer.unobserve(el));
      if (footerEl) observer.unobserve(footerEl);
      observer.disconnect();
    };
  }, []);

  const getIsInView = (id, index) => {
    if (activeSection === id) return true;
    if (activeSection === "top-section" && id === "why-different") return true;
    if (activeSection === "footer-section" && id === "pricing") return true;
    
    const activeIndex = trail.findIndex((t) => t.id === activeSection);
    if (activeIndex !== -1) {
      return Math.abs(activeIndex - index) <= 1;
    }
    return false;
  };

  return (
    <main className="scroll-container w-full bg-[#030712] text-white selection:bg-orange-400 selection:text-black font-space">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800;900&display=swap');
        
        *, *::before, *::after { box-sizing: border-box; }
        html, body { 
          height: 100%;
          margin: 0; 
          padding: 0; 
          overflow: hidden;
          background: #030712;
        }
        .scroll-container {
          height: 100vh;
          height: 100dvh;
          width: 100%;
          overflow-y: auto;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        @media (min-width: 768px) {
          .scroll-container {
            scroll-snap-type: y mandatory;
          }
        }
        main { font-family: 'Inter', 'Manrope', ui-sans-serif, system-ui, sans-serif; }
        section, footer {
          min-height: 100vh;
          min-height: 100dvh;
          flex-shrink: 0;
          position: relative;
        }
        @media (min-width: 768px) {
          section, footer {
            height: 100vh;
            height: 100dvh;
            scroll-snap-align: start;
            scroll-snap-stop: always;
            overflow: hidden;
          }
        }
        .font-display { font-family: 'Inter', 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        .font-space { font-family: 'Inter', 'Space Grotesk', sans-serif; }
        .font-accent { font-family: 'Inter', sans-serif; text-transform: uppercase; letter-spacing: 0.25em; }
      `}</style>

      <ScrollProgress />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16">
          <a href="#top" className="flex items-center gap-3.5 group">
            <KorvynMark size="h-12 w-12" />
            <div className="text-left">
              <p className="font-display text-base font-bold tracking-[0.25em] text-white group-hover:text-cyan-300 transition-colors">KORVYN</p>
              <p className="text-[9px] font-space font-bold text-cyan-400/80 tracking-widest uppercase">Website Services</p>
            </div>
          </a>

          {/* Desktop nav right side: phone + email text + single CTA */}
          <div className="hidden items-center gap-5 lg:flex">
            <div className="flex flex-col items-end gap-0.5">
              <a
                href={owner.phoneHref}
                className="text-xs font-bold text-white/70 hover:text-white transition-colors font-space tracking-wide"
              >
                {owner.phone}
              </a>
              <a
                href={owner.mailHref}
                className="text-[10px] font-medium text-white/40 hover:text-cyan-300 transition-colors font-space"
              >
                {owner.email}
              </a>
            </div>
            <motion.a
              href={owner.mailHref}
              whileHover={{ scale: 1.03, backgroundColor: "rgb(204, 251, 241)", boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-white px-6 py-2.5 font-space text-xs font-black text-black shadow-lg transition duration-300 whitespace-nowrap"
            >
              Tell Me About My Business
            </motion.a>
          </div>

          <button
            className="rounded-xl border border-white/10 bg-white/5 p-2 lg:hidden transition hover:bg-white/10"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="max-h-[80vh] overflow-auto border-t border-white/5 bg-black/95 px-6 py-6 lg:hidden text-left shadow-2xl font-space">
            <div className="grid gap-1">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/5 transition"
                >
                  <span>
                    <span className="mr-3 font-black text-cyan-400">{item.number}</span>
                    {item.eyebrow}
                  </span>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-space">{item.world}</span>
                </a>
              ))}
              <a
                href="#footer-section"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/5 transition"
              >
                <span>
                  <span className="mr-3 font-black text-cyan-400">06</span>
                  Contact details
                </span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-space">Contact</span>
              </a>
            </div>
            <div className="mt-6 grid gap-3 border-t border-white/5 pt-6">
              <a
                href={owner.phoneHref}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl bg-white py-3.5 text-center font-space font-black text-black"
              >
                {owner.phone}
              </a>
              <a
                href={owner.mailHref}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 py-3.5 text-center font-space font-black text-white"
              >
                Tell Me About My Business
              </a>
            </div>
          </div>
        )}
      </nav>

      <MiniMap activeSection={activeSection} />
      <div id="top" />
      
      <Hero smoothX={smoothX} smoothY={smoothY} isInView={activeSection === "top-section" || activeSection === "why-different"} />

      {trail.map((item, index) => (
        <TrailNode 
          key={item.id} 
          item={item} 
          index={index} 
          smoothX={smoothX} 
          smoothY={smoothY} 
          isInView={getIsInView(item.id, index)}
        />
      ))}

      <Footer smoothX={smoothX} smoothY={smoothY} isInView={activeSection === "footer-section" || activeSection === "pricing"} />
    </main>
  );
}
