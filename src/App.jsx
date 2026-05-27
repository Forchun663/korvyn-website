import React, { useEffect, useMemo, useState } from "react";
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
    id: "start",
    number: "01",
    world: "Sky Gate",
    eyebrow: "Start here",
    title: "A professional website helps customers trust you before they call.",
    body: "Work with a direct project contact to turn your business details into a clean, modern website with clear pricing and a simple build process.",
    icon: BriefcaseBusiness,
    theme: "from-sky-300 via-cyan-300 to-blue-700",
    bg: "from-slate-950 via-blue-950 to-sky-950",
    visual: "clouds",
    creature: "whale",
    points: ["Clean professional design", "Built around your business", "Simple launch process", "Easy call and email actions", "Clear next step", "Support after launch"],
  },
  {
    id: "custom",
    number: "02",
    world: "Violet Orbit",
    eyebrow: "Custom fit",
    title: "Your website should match your business, not a random template.",
    body: "Your project contact learns what you need, then shapes the right website structure for your services, menu, hours, location, contact details, or internal tools.",
    icon: Rocket,
    theme: "from-violet-300 via-fuchsia-400 to-indigo-700",
    bg: "from-indigo-950 via-purple-950 to-slate-950",
    visual: "orbits",
    creature: "fish",
    points: ["Mobile friendly", "Easy to understand", "Clean sections", "Simple to launch", "Custom business structure", "Clear customer journey"],
  },
  {
    id: "different",
    number: "03",
    world: "Neon Forest",
    eyebrow: "What makes Korvyn different",
    title: "No confusing packages. No copy-and-paste website feel.",
    body: "The process stays personal, affordable, and easy to understand, so your website feels specific to your business instead of recycled from someone else.",
    icon: WandSparkles,
    theme: "from-emerald-300 via-lime-300 to-cyan-400",
    bg: "from-emerald-950 via-green-950 to-slate-950",
    visual: "leaves",
    creature: "sparkles",
    points: ["No confusing packages", "No unnecessary features", "No complicated tech talk", "Custom designs", "Direct project contact"],
  },
  {
    id: "why-us",
    number: "04",
    world: "Decision Bridge",
    eyebrow: "Why choose Korvyn",
    title: "Your website should make it easier for people to choose you.",
    body: "The goal is not just a good-looking page. The goal is to make your offer clear, reduce doubt, and help customers know exactly how to contact you.",
    icon: ShieldCheck,
    theme: "from-rose-300 via-orange-400 to-yellow-300",
    bg: "from-rose-950 via-orange-950 to-slate-950",
    visual: "wheels",
    creature: "sparkles",
    points: ["Clear offer on the page", "Strong first impression", "Simple contact buttons", "Mobile-friendly layout", "Pricing confirmed before work starts", "Direct project contact", "Support after launch", "Less guesswork for your customers"],
  },
  {
    id: "customer-path",
    number: "05",
    world: "Customer Path",
    eyebrow: "How the website helps sell",
    title: "Your website should guide visitors from interest to action.",
    body: "A strong website does not leave people guessing. It shows what you offer, why it matters, why they can trust you, and how to reach you next.",
    icon: ArrowRight,
    theme: "from-blue-300 via-cyan-300 to-emerald-400",
    bg: "from-blue-950 via-cyan-950 to-slate-950",
    visual: "orbits",
    creature: "fish",
    points: ["Clear headline", "Easy service explanation", "Trust-building layout", "Visible call and email buttons", "Mobile-first sections", "Simple path from interest to contact"],
  },
  {
    id: "builds",
    number: "06",
    world: "Code Lab",
    eyebrow: "What Korvyn builds",
    title: "Websites, forms, dashboards, menus, trackers, and tools.",
    body: "Korvyn provides custom websites and simple digital tools based on what your business needs most, from public pages to practical business systems.",
    icon: Code2,
    theme: "from-cyan-300 via-blue-500 to-violet-500",
    bg: "from-slate-950 via-cyan-950 to-indigo-950",
    visual: "code",
    creature: "sparkles",
    points: ["Restaurant websites", "Service websites", "Portfolio websites", "Menu websites", "Contact forms", "Dashboards", "Inventory trackers", "Sign-in systems", "Internal business tools"],
  },
  {
    id: "benefits",
    number: "07",
    world: "Trust Valley",
    eyebrow: "Business benefits",
    title: "A clear website helps customers understand your business faster.",
    body: "Customers often check online before they call, visit, or choose a business. A clear website helps you look active, reliable, and easy to work with.",
    icon: ShieldCheck,
    theme: "from-amber-300 via-orange-400 to-rose-500",
    bg: "from-orange-950 via-amber-950 to-stone-950",
    visual: "wheels",
    creature: "sparkles",
    points: ["Better first impression", "Build customer trust", "Make your services easier to understand", "Give customers a faster way to contact you", "Show hours, location, services, and details", "Make your business look active online"],
  },
  {
    id: "pricing",
    number: "08",
    world: "Pricing Portal",
    eyebrow: "Pricing",
    title: "Starter websites range from $250–$450. Larger builds can grow from there.",
    body: "Your price is discussed clearly and confirmed before work begins, so you know what is included before the project starts.",
    icon: BadgeDollarSign,
    theme: "from-yellow-300 via-orange-400 to-cyan-300",
    bg: "from-yellow-950 via-orange-950 to-slate-950",
    visual: "coins",
    creature: "sparkles",
    priceCards: [
      {
        name: "Starter Website",
        price: "$250–$450",
        text: "For a simple, professional website built around your basic business needs.",
        list: ["Custom website design", "Mobile-friendly layout", "Business information", "Services or menu section", "Phone and email section", "Business hours", "Social links", "Basic launch support"],
      },
      {
        name: "Larger Custom Project",
        price: "$800–$1,700+",
        text: "For advanced layouts, dashboards, forms, booking buttons, trackers, or custom business tools built around your workflow.",
        list: ["Advanced layouts", "Customer forms", "Booking buttons", "Inventory systems", "Sign-in systems", "Dashboards", "Custom business tools"],
      },
    ],
    points: [],
  },
  {
    id: "support",
    number: "09",
    world: "Repair Garden",
    eyebrow: "Support",
    title: "Two weeks of post-launch support are included.",
    body: "After launch, you get support for small fixes, mobile display issues, contact form testing, text updates, image corrections, and basic website guidance.",
    icon: CheckCircle2,
    theme: "from-lime-300 via-emerald-400 to-cyan-400",
    bg: "from-lime-950 via-emerald-950 to-slate-950",
    visual: "leaves",
    creature: "sparkles",
    points: ["Bug fixes", "Display fixes", "Contact form testing", "Small corrections", "Website checkups", "Help understanding the completed website"],
  },
  {
    id: "process",
    number: "10",
    world: "Launch Mountain",
    eyebrow: "How it works",
    title: "The project moves step by step before launch.",
    body: "Your project contact prepares a preview or idea for your website, you review it, changes are discussed, the price is confirmed, the website is built, and the completed project is launched or handed off.",
    icon: Rocket,
    theme: "from-cyan-300 via-sky-400 to-blue-700",
    bg: "from-sky-950 via-cyan-950 to-blue-950",
    visual: "stars",
    creature: "rocket",
    points: ["Preview sent", "You review the idea", "Changes discussed", "Price confirmed", "Work begins", "Website launched", "Two weeks of support included"],
  },
  {
    id: "ready",
    number: "11",
    world: "Project Checklist",
    eyebrow: "What helps start faster",
    title: "A few details help Korvyn shape the website around you.",
    body: "You can start with basic information. Your project contact will organize it into a clear website structure that fits your business.",
    icon: CheckCircle2,
    theme: "from-teal-300 via-cyan-400 to-blue-500",
    bg: "from-teal-950 via-cyan-950 to-slate-950",
    visual: "code",
    creature: "fish",
    points: ["Your business name", "Your services or menu", "Your phone and email", "Your hours and location", "Photos or logo if available", "Design ideas or examples"],
  },
  {
    id: "next-step",
    number: "12",
    world: "Final Portal",
    eyebrow: "Next steps",
    title: "Start the conversation with Korvyn.",
    body: "Discuss your website ideas, business needs, design direction, pricing, timeline, and final project details with your direct project contact. Forchun can guide the conversation and help move the project forward.",
    icon: Globe2,
    theme: "from-orange-300 via-cyan-300 to-blue-600",
    bg: "from-cyan-950 via-blue-950 to-orange-950",
    visual: "portal",
    creature: "whale",
    points: ["Discuss your website ideas", "Discuss your business needs", "Discuss pricing", "Discuss timeline", "Confirm final project details", "Project contact: Forchun"],
  },
];

function KorvynMark({ size = "h-16 w-16" }) {
  return (
    <div className={`relative flex ${size} shrink-0 items-center justify-center`}>
      <div className="absolute inset-0 rounded-2xl bg-cyan-400/30 blur-2xl animate-[pulse_3s_infinite]" />
      <div className="relative h-[82%] w-[82%] rotate-45 rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-300 via-blue-600 to-blue-950 shadow-xl shadow-cyan-400/40" />
      <div className="absolute h-[16%] w-[70%] -rotate-12 rounded-full bg-black/90" />
      <div className="absolute bottom-[14%] right-[6%] h-[16%] w-[55%] rotate-45 rounded-full bg-blue-300/90" />
    </div>
  );
}

function WhaleIcon({ className = "" }) {
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
}

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

function CodeCube({ theme, smoothX, smoothY, isLeft }) {
  const rotateX = useTransform(smoothY, [-400, 400], [10, -10]);
  const rotateY = useTransform(smoothX, [-600, 600], [-15, 15]);
  const x = useTransform(smoothX, [-600, 600], [isLeft ? 15 : -15, isLeft ? -15 : 15]);
  const y = useTransform(smoothY, [-400, 400], [-12, 12]);
  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`absolute ${
        isLeft ? "left-8 xl:left-24" : "right-8 xl:right-24"
      } top-1/2 -translate-y-1/2 hidden h-56 w-56 rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${theme} p-[1px] shadow-3xl lg:block z-0`}
    >
      <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-br from-white/[0.08] to-transparent opacity-30 blur-sm" />
      <div className="absolute inset-[1px] rounded-[2.3rem] border border-white/10 bg-black/75 p-6 shadow-3xl backdrop-blur-xl flex flex-col justify-center">
        {["<div>", "const site", "deploy()", "</web>"].map((line, i) => (
          <motion.div
            key={line}
            className="mb-3 rounded-full bg-white/5 border border-white/5 px-4 py-2 text-xs font-bold text-cyan-100/90 font-space text-center"
            animate={{ x: [0, i % 2 ? 8 : -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Creature({ type = "sparkles", theme, index, smoothX, smoothY, isLeft }) {
  const x = useTransform(smoothX, [-600, 600], [isLeft ? 15 : -15, isLeft ? -15 : 15]);
  const y = useTransform(smoothY, [-400, 400], [index % 2 ? -12 : 12, index % 2 ? 12 : -12]);
  const rotateX = useTransform(smoothY, [-400, 400], [6, -6]);
  const rotateY = useTransform(smoothX, [-600, 600], [-10, 10]);
  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
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
}

function DotSwarm({ theme, index }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
      {Array.from({ length: 5 }).map((_, group) => (
        <motion.div
          key={`swarm-${index}-${group}`}
          className="absolute"
          style={{
            left: `${4 + ((group * 21 + index * 11) % 92)}%`,
            top: `${8 + ((group * 17 + index * 7) % 80)}%`,
          }}
          animate={{
            x: [0, group % 2 ? 90 : -90, 0],
            y: [0, group % 2 ? -45 : 45, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 16 + group * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: group * 0.4,
          }}
        >
          <div className="relative h-14 w-24">
            {Array.from({ length: 12 }).map((_, dot) => (
              <span
                key={`dot-${dot}`}
                className={`absolute h-1.5 w-1.5 rounded-full bg-gradient-to-br ${theme} opacity-70`}
                style={{
                  left: `${10 + (dot % 6) * 15}%`,
                  top: `${20 + Math.sin(dot) * 12 + Math.floor(dot / 6) * 20}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function WorldPieces({ type, theme, index }) {
  const count = type === "clouds" ? 14 : type === "leaves" ? 22 : type === "wheels" ? 8 : 14;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
      {Array.from({ length: count }).map((_, i) => {
        const left = 1 + ((i * 23 + index * 13) % 98);
        const top = 3 + ((i * 19 + index * 11) % 92);
        const size =
          type === "clouds" ? 90 + (i % 3) * 40 : type === "leaves" ? 24 + (i % 4) * 8 : type === "wheels" ? 80 + (i % 2) * 40 : 32 + (i % 5) * 12;
        const height = type === "clouds" ? size * 0.45 : size;
        const shape = type === "leaves" ? "rounded-[60%_40%_70%_30%]" : "rounded-full";
        return (
          <motion.span
            key={`${type}-${index}-${i}`}
            className={`absolute border border-white/5 bg-gradient-to-br ${theme} ${shape} opacity-15 backdrop-blur-md`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height,
              transformStyle: "preserve-3d",
            }}
            animate={{
              y: type === "leaves" ? [0, 160, 0] : [0, -35, 0],
              x: type === "leaves" ? [0, i % 2 ? 45 : -45, 0] : [0, i % 2 ? 22 : -22, 0],
              rotateX: type === "wheels" ? [0, 360] : [0, i % 2 ? 20 : -20, 0],
              rotateY: type === "wheels" ? [0, -360] : [0, i % 2 ? -18 : 18, 0],
              rotateZ: type === "wheels" ? [0, 360] : [0, i % 2 ? 30 : -30, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: type === "wheels" ? 15 + i : 10 + (i % 5),
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

function GlowOrbs({ theme, index }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className={`absolute -left-20 top-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br ${theme} opacity-25 blur-[120px]`}
        animate={{ y: [0, -60, 0], x: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14 + index * 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -right-20 bottom-10 h-[700px] w-[700px] rounded-full bg-gradient-to-br ${theme} opacity-20 blur-[150px]`}
        animate={{ y: [0, 60, 0], x: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16 + index * 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br ${theme} opacity-15 blur-[90px]`}
        animate={{ scale: [1, 1.35, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function FloatingWorld({ item, index, smoothX, smoothY }) {
  const visualType = item.visual === "wheels" ? "wheels" : item.visual;
  const isEven = index % 2 === 0;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <GlowOrbs theme={item.theme} index={index} />
      <WorldPieces type={visualType || "orbs"} theme={item.theme} index={index} />
      <DotSwarm theme={item.theme} index={index} />
      {(item.visual === "code" || item.id === "builds" || item.id === "ready") && (
        <CodeCube theme={item.theme} smoothX={smoothX} smoothY={smoothY} isLeft={isEven} />
      )}
      {item.creature && (
        <Creature type={item.creature} theme={item.theme} index={index} smoothX={smoothX} smoothY={smoothY} isLeft={!isEven} />
      )}
    </div>
  );
}

function SectionTransition({ theme, flip = false, index = -1 }) {
  return (
    <div className={`pointer-events-none absolute left-0 right-0 z-20 overflow-hidden ${flip ? "top-0 -scale-y-100" : "bottom-0"}`}>
      <div className="relative h-32 md:h-48 w-full">
        <motion.div
          className={`absolute inset-x-[-10%] bottom-0 h-32 rounded-t-[100%] bg-gradient-to-r ${theme} opacity-20 blur-[80px] md:h-44`}
          animate={{ x: [-40, 40, -40], scaleX: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-[1px] opacity-75" />

        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`trans-cloud-${i}`}
            className="absolute bottom-1 rounded-full bg-white/[0.04] backdrop-blur-xl"
            style={{
              left: `${5 + i * 12}%`,
              width: `${100 + (i % 3) * 40}px`,
              height: `${30 + (i % 3) * 15}px`,
            }}
            animate={{
              y: [0, -12, 0],
              x: [0, i % 2 ? 15 : -15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 0.5,
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
              x: { duration: 32, repeat: Infinity, ease: "linear" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <WhaleIcon className="w-full h-full opacity-35" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function TrailConnector({ theme }) {
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
}

function PricingCards({ item }) {
  if (!item.priceCards) return null;
  return (
    <div className="mt-10 grid max-w-6xl gap-8 md:grid-cols-2 text-left mx-auto w-full z-10 relative">
      {item.priceCards.map((card, index) => (
        <motion.div
          key={card.name}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.01] p-[1px] hover:border-white/20 transition-all duration-500 shadow-2xl hover:scale-[1.01] group`}
        >
          <div className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${item.theme} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

          <div className="relative h-full rounded-[2.7rem] bg-black/60 p-8 md:p-10 backdrop-blur-3xl flex flex-col justify-between">
            <div>
              <p className="font-accent text-xs font-black uppercase tracking-[0.25em] text-orange-300">{card.name}</p>
              <h3 className="mt-4 font-display text-5xl font-bold tracking-tight text-white md:text-6xl">{card.price}</h3>
              <p className="mt-4 text-sm leading-8 text-white/70">{card.text}</p>
              <div className="mt-8 grid gap-2.5">
                {card.list.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/[0.03] p-3.5 hover:bg-white/[0.06] hover:border-white/10 transition duration-300"
                  >
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${item.theme} shadow-lg`} />
                    <span className="text-sm font-semibold text-white/85">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TrailNode({ item, index, smoothX, smoothY }) {
  const Icon = item.icon;
  const isEven = index % 2 === 0;

  return (
    <section id={item.id} className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-br ${item.bg} text-white flex items-center`}>
      {/* Full-width environmental layer */}
      <FloatingWorld item={item} index={index} smoothX={smoothX} smoothY={smoothY} />
      <SectionTransition theme={item.theme} flip index={index} />
      {index < trail.length - 1 && <TrailConnector theme={item.theme} />}

      {/* Medium-width content container - centered vertically and horizontally */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-24 flex flex-col items-center justify-center min-h-screen text-center">
        
        {/* Stage Identification Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3.5 rounded-full border border-white/8 bg-white/5 px-5 py-2 font-space text-xs font-bold tracking-widest text-cyan-300"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-md shadow-cyan-400 animate-pulse" />
          STAGE {item.number} // {item.world.toUpperCase()}
        </motion.div>

        {/* Eyebrow Label */}
        <p className="font-accent text-xs font-black uppercase tracking-[0.4em] text-orange-400 mb-4">{item.eyebrow}</p>

        {/* Giant Title */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6 max-w-4xl mx-auto">
          {item.title}
        </h2>

        {/* Supporting description */}
        <p className="text-base md:text-lg leading-relaxed text-white/70 mb-10 max-w-2xl mx-auto">
          {item.body}
        </p>

        {/* Content Cards Grid or Pricing */}
        {item.priceCards ? (
          <PricingCards item={item} />
        ) : (
          <div className="grid sm:grid-cols-2 gap-4 w-full max-w-3xl mb-10 text-left mx-auto">
            {item.points.map((point, pointIndex) => (
              <motion.div
                key={`${item.id}-${point}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pointIndex * 0.05, duration: 0.5 }}
                className="flex items-center gap-3.5 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 p-4.5 backdrop-blur-xl transition duration-300 hover:scale-[1.02] shadow-sm"
              >
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${item.theme} shadow-md`} />
                <span className="text-sm font-semibold leading-relaxed text-white/85">{point}</span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Node action buttons */}
        <div className="flex flex-col items-center justify-center gap-4.5 sm:flex-row w-full sm:w-auto z-10 relative">
          {index < trail.length - 1 ? (
            <a
              href={`#${trail[index + 1].id}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-space text-sm font-black text-black shadow-xl hover:bg-orange-200 transition duration-300 hover:scale-[1.03] w-full sm:w-auto"
            >
              Next Stage ({trail[index + 1].number})
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          ) : (
            <a
              href={owner.mailHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-space text-sm font-black text-black shadow-xl hover:bg-cyan-200 transition duration-300 hover:scale-[1.03] w-full sm:w-auto"
            >
              Email Forchun
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          )}
          <a
            href={owner.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black px-6 py-4 font-space text-sm font-black text-white transition duration-300 hover:scale-[1.03] backdrop-blur-xl w-full sm:w-auto"
          >
            <PhoneCall className="h-5 w-5" />
            Call Forchun
          </a>
        </div>

      </div>

      {index < trail.length - 1 && <SectionTransition theme={item.theme} index={index} />}
    </section>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-orange-400 to-blue-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function MiniMap() {
  const [active, setActive] = useState("start");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { threshold: 0.3 }
    );
    const elements = trail.map((item) => document.getElementById(item.id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 rounded-[2rem] border border-white/8 bg-black/60 p-2.5 shadow-2xl backdrop-blur-2xl lg:block">
      <div className="w-[1.5px] bg-gradient-to-b from-cyan-500/20 via-orange-500/20 to-blue-500/20 absolute left-[22.5px] top-4 bottom-4 z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-2">
        {trail.map((item) => {
          const isActive = active === item.id;
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

              <div className="absolute right-13 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 origin-right rounded-xl border border-white/10 bg-black/85 px-3.5 py-2 text-[9px] font-accent uppercase tracking-widest text-cyan-300 backdrop-blur-2xl whitespace-nowrap shadow-3xl pointer-events-none">
                <span className="mr-1.5 opacity-40">{item.number}</span>
                {item.world}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function Hero({ smoothX, smoothY }) {
  const x = useTransform(smoothX, [-600, 600], [-20, 20]);
  const y = useTransform(smoothY, [-400, 400], [-15, 15]);
  const rotateX = useTransform(smoothY, [-400, 400], [8, -8]);
  const rotateY = useTransform(smoothX, [-600, 600], [-8, 8]);
  
  const outerRotate = useSpring(useTransform(smoothX, [-600, 600], [-150, 150]), { stiffness: 60, damping: 25 });
  const innerRotate = useSpring(useTransform(smoothY, [-400, 400], [180, -180]), { stiffness: 60, damping: 25 });

  const heroWorld = { theme: "from-cyan-300 via-blue-500 to-orange-400", visual: "clouds", creature: "whale" };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030712] text-white flex items-center">
      <FloatingWorld item={heroWorld} index={0} smoothX={smoothX} smoothY={smoothY} />

      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 flex flex-col items-center text-center">
        <motion.div
          style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative mb-12 cursor-pointer group"
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
            className="rounded-[3.2rem] border border-white/15 bg-white/[0.03] p-8 shadow-3xl backdrop-blur-3xl"
            animate={{
              boxShadow: [
                "0 0 50px rgba(34,211,238,0.12)",
                "0 0 100px rgba(34,211,238,0.28)",
                "0 0 50px rgba(34,211,238,0.12)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <KorvynMark size="h-32 w-32" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3.5 rounded-full border border-orange-400/30 bg-orange-400/10 px-5.5 py-2 text-xs font-accent uppercase tracking-[0.3em] text-orange-200 backdrop-blur-xl"
        >
          <Sparkles className="h-4.5 w-4.5 text-orange-300" />
          Korvyn Website Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold leading-[1.0] tracking-tight text-white"
        >
          Custom websites built around{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 via-violet-400 to-orange-400 bg-clip-text text-transparent">
            your business.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-9 max-w-3xl text-base md:text-lg leading-relaxed text-white/60 font-medium"
        >
          Get a direct project contact who helps turn your business information into a clean, professional website with clear pricing, simple steps, and support after launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-3"
        >
          {[
            ["Starter range", "$250–$450"],
            ["Support", "2 weeks included"],
            ["Contact", owner.phone],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-5.5 backdrop-blur-xl text-center hover:bg-white/[0.06] hover:border-white/15 transition duration-300 shadow-sm"
            >
              <p className="font-accent text-[9px] font-black uppercase tracking-[0.25em] text-white/40">{label}</p>
              <p className="mt-2.5 font-space text-base font-black text-white">{value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-12 flex flex-col items-center gap-4.5 sm:flex-row z-10"
        >
          <a
            href="#start"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-400 px-8 py-4 font-space text-sm font-black text-black shadow-2xl shadow-cyan-500/20 hover:opacity-90 transition duration-300 hover:scale-[1.03]"
          >
            Start Stage 01
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={owner.mailHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-4 font-space text-sm font-bold text-white backdrop-blur-xl hover:bg-white hover:text-black transition duration-300 hover:scale-[1.03]"
          >
            <Mail className="h-5 w-5" />
            Email Forchun
          </a>
          <a
            href={owner.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-4 font-space text-sm font-bold text-white backdrop-blur-xl hover:bg-white hover:text-black transition duration-300 hover:scale-[1.03]"
          >
            <PhoneCall className="h-5 w-5" />
            Call Forchun
          </a>
        </motion.div>
      </div>

      <SectionTransition theme={heroWorld.theme} index={0} />
    </section>
  );
}

export default function KorvynCandyTrailWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useMemo(() => trail, []);
  const { smoothX, smoothY } = useMouseParallax();

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#030712] text-white selection:bg-orange-400 selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800;900&family=Orbitron:wght@500;700;900&display=swap');
        
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { background: #030712; overflow-x: hidden; margin: 0; padding: 0; }
        main { font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif; }
        .font-display { font-family: 'Space Grotesk', 'Manrope', ui-sans-serif, system-ui, sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-accent { font-family: 'Orbitron', sans-serif; }
      `}</style>

      <ScrollProgress />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16">
          <a href="#top" className="flex items-center gap-3.5 group">
            <KorvynMark size="h-12 w-12" />
            <div className="text-left">
              <p className="font-display text-base font-bold tracking-[0.25em] text-white group-hover:text-cyan-300 transition-colors">KORVYN</p>
              <p className="text-[9px] font-accent font-bold text-cyan-400/80 tracking-widest uppercase">Website Services</p>
            </div>
          </a>

          <div className="hidden items-center gap-3.5 lg:flex">
            <a
              href={owner.phoneHref}
              className="rounded-full border border-white/12 bg-white/5 px-6 py-2.5 font-space text-xs font-bold text-white/80 backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              Call Forchun
            </a>
            <a
              href={owner.mailHref}
              className="rounded-full bg-white px-6 py-2.5 font-space text-xs font-black text-black shadow-lg transition hover:bg-cyan-200"
            >
              Email Forchun
            </a>
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
          <div className="max-h-[80vh] overflow-auto border-t border-white/5 bg-black/95 px-6 py-6 lg:hidden text-left shadow-2xl">
            <div className="grid gap-1.5">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4.5 py-3.5 font-space text-sm text-white/80 hover:bg-white/5 transition"
                >
                  <span>
                    <span className="mr-3 font-black text-cyan-400">{item.number}</span>
                    {item.eyebrow}
                  </span>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-accent">{item.world}</span>
                </a>
              ))}
            </div>
            <div className="mt-6 grid gap-3 border-t border-white/5 pt-6">
              <a
                href={owner.phoneHref}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl bg-white py-3.5 text-center font-space font-black text-black"
              >
                Call Forchun ({owner.phone})
              </a>
              <a
                href={owner.mailHref}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 py-3.5 text-center font-space font-black text-white"
              >
                Email Forchun ({owner.email})
              </a>
            </div>
          </div>
        )}
      </nav>

      <MiniMap />
      <div id="top" />
      <Hero smoothX={smoothX} smoothY={smoothY} />

      {trail.map((item, index) => (
        <TrailNode key={item.id} item={item} index={index} smoothX={smoothX} smoothY={smoothY} />
      ))}

      <footer className="relative w-full overflow-hidden bg-black px-6 py-28 text-center md:px-12 border-t border-white/5">
        <FloatingWorld
          item={{ theme: "from-orange-300 via-cyan-300 to-blue-600", visual: "portal", creature: "whale" }}
          index={14}
          smoothX={smoothX}
          smoothY={smoothY}
        />

        <div className="font-display text-[15vw] font-bold leading-none tracking-tighter opacity-5 bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 select-none">
          KORVYN
        </div>

        <div className="relative z-10 mx-auto max-w-4xl rounded-[3rem] border border-white/10 bg-white/[0.02] p-8 shadow-3xl backdrop-blur-3xl md:p-16">
          <div className="flex justify-center">
            <KorvynMark size="h-24 w-24" />
          </div>
          <h2 className="mt-8 font-display text-5xl font-bold tracking-tight text-white md:text-7xl">Korvyn</h2>
          <p className="mt-3 font-accent text-xs tracking-[0.3em] text-cyan-400 uppercase">Custom Website Services</p>
          
          <div className="mx-auto mt-10 max-w-md text-left">
            <div className="space-y-4 rounded-3rem border border-white/8 bg-black/40 p-7 backdrop-blur text-sm text-white/70">
              <div>
                <span className="font-accent text-[9px] font-black text-white/40 uppercase tracking-widest">Website Portal</span>
                <p className="text-base font-bold text-white mt-1">korvyn.site</p>
              </div>
              <div className="border-t border-white/5 pt-3">
                <span className="font-accent text-[9px] font-black text-white/40 uppercase tracking-widest">Project Manager</span>
                <p className="text-base font-bold text-white mt-1">{owner.name}</p>
              </div>
              <div className="border-t border-white/5 pt-3">
                <span className="font-accent text-[9px] font-black text-white/40 uppercase tracking-widest">Email Channel</span>
                <p className="text-base font-bold text-white mt-1">{owner.email}</p>
              </div>
              <div className="border-t border-white/5 pt-3">
                <span className="font-accent text-[9px] font-black text-white/40 uppercase tracking-widest">Direct Phone Line</span>
                <p className="text-base font-bold text-white mt-1">{owner.phone}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center justify-center gap-4.5 sm:flex-row">
            <a
              href={owner.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-8 py-4 font-space font-bold text-white backdrop-blur-xl hover:bg-white hover:text-black transition duration-300 hover:scale-[1.03]"
            >
              Visit Website
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href={owner.mailHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-space font-black text-black shadow-2xl transition hover:bg-cyan-200 duration-300 hover:scale-[1.03]"
            >
              Email Forchun
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={owner.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-8 py-4 font-space font-bold text-white backdrop-blur-xl hover:bg-white hover:text-black transition duration-300 hover:scale-[1.03]"
            >
              Call Forchun
              <PhoneCall className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
