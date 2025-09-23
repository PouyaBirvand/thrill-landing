import { boolean } from "mathjs";
import Feature1SvgComponent from "../../../public/feature/Feature1SvgComponent";
import Feature2SvgComponent from "../../../public/feature/Feature2SvgComponent";
import Feature3SvgComponent from "../../../public/feature/Feature3SvgComponent";
import Feature5SvgComponent from "../../../public/feature/Feature5SvgComponent";

export const featuresDesktop = [
  {
    title: "Built for affiliates",
    description:
      "We've run affiliate programs. We know what you need – real payouts, fast tracking, and support that actually helps. That's why everything at Thrill is built to boost your earnings and cut the noise. From custom CPA deals to weekly payments and dedicated reports – we've got your back.",
    more_detail:
      "At Thrill, you're not just another affiliate - you're a partner.",
    svgComponent: Feature1SvgComponent,
    imagePath: "/feature/feature1.png",
    stats: {
      primary: {
        value: "200+",
        label: "affiliates trust us",
      },
      secondary: {
        value: "24 hours",
        label:
          "onboarding time. Kick-start your campaign immediately after approval.",
      },
    },
  },
  {
    title: "Custom Bonuses",
    description:
      "Personalised offers from an industry leading VIP team - designed to boost conversions and increase player retention. From high-value rakebacks and time-based bonuses to exclusive VIP perks, every offer is aligned with player behaviour to keep engagement at its peak so that you can earn more.",
    svgComponent: Feature5SvgComponent,
    imagePath: "/feature/feature5.png",
    maxstack: true,
    size: true,
    stats: {
      primary: {
        value: "Up to 70%",
        label: "rakeback based on user wagers",
      },
      secondary: {
        value: "up to 20% Lossback",
        label: "Special lossback rewards for VIP players.",
      },
    },
  },
  {
    title: "Creative Support",
    description:
      "A premier on-demand design system tailored for efficient campaigns. We deliver attention-grabbing banners, immersive landing pages, and targeted promo kits - all crafted to boost conversions and reinforce brand recognition.",
    imagePath: "/feature/feature4.png",
    stats: {
      primary: {
        value: "24/7",
        label: "partner support and creative setup",
      },
      secondary: {
        value: "Flexible",
        label: "custom visuals for any campaign type",
      },
    },
  },
  {
    title: "Fast Payouts",
    description:
      "When you’re running traffic, every second counts. Thrill makes sure your earnings hit your account fast, so you can reinvest and scale without delays. No waiting for end-of-month cycles - you get paid quickly, reliably, and with full transparency.",
    svgComponent: Feature2SvgComponent,
    imagePath: "/feature/feature2.png",
    maxstack: true,
    stats: {
      primary: {
        value: "Instant Payouts",
        label: "right after approval and processed in the first few days of the new month",
      },
      secondary: {
        value: "Commission Estimate",
        label: "Track potential commission realtime",
      },
    },
  },
  {
    title: "No Red Tape",
    description:
      "Thrill cuts through the slow approval chains and corporate noise. You talk directly to the people who can say “yes” and make things happen, without endless forms or delays. The result - faster launches, smoother campaigns, and support that actually understands your goals.",
    svgComponent: Feature3SvgComponent,
    imagePath: "/feature/feature3.png",
    stats: {
      primary: {
        value: "Direct",
        label: "access to key team members",
      },
      secondary: {
        value: "Fast",
        label: "action as soon as your request lands",
      },
    },
  },

];