import Feature1SvgComponent from "../../../public/feature/Feature1SvgComponent";
import Feature2SvgComponent from "../../../public/feature/Feature2SvgComponent";
import Feature3SvgComponent from "../../../public/feature/Feature3SvgComponent";
import Feature5SvgComponent from "../../../public/feature/Feature5SvgComponent";

export const features = [
  {
    title: "Built for affiliates",
    description:
      "We’ve run affiliate programs. We know what you need – real payouts, fast tracking, and support that actually helps. That’s why everything at Thrill is built to boost your earnings and cut the noise. From custom CPA deals to weekly payments and dedicated reports – we’ve got your back.",
    more_detail:
      "At Thrill, you’re not just another signup - you’re a partner.",
    // svgPath: "/feature/feature1.svg",
    svgComponent: Feature1SvgComponent,
    imagePath: "/feature/feature1.png",
    stats: {
      primary: {
        value: "1,200",
        label: "trusted by over affiliates",
      },
      secondary: {
        value: "$2.5M",
        label: "paying out in commissions annually",
      },
    },
  },
  {
    title: "Custom Bonuses",
    description:
      "Tailored for performance — personalized offers from Thrill boost conversions, increase player retention, and drive stronger ROI for both affiliates and players. From high rakeback to time-based rewards and VIP perks, every bonus is aligned with player behavior to keep engagement at its peak.",
    // svgPath: "/feature/feature2.svg",
    svgComponent: Feature2SvgComponent, 
    imagePath: "/feature/feature2.png",
    stats: {
      primary: {
        value: "Up to 70%",
        label: "rakeback based on user wagers",
      },
      secondary: {
        value: "Rewards",
        label: "bonuses to keep players active",
      },
    },
  },
  {
    title: "Creative Support",
    description:
      "Premier on-demand design tailored for campaigns — from attention-grabbing banners and immersive landing pages to targeted promos kits. Everything is crafted for conversion and brand alignment.",
    // svgPath: "/feature/feature3.svg",
    svgComponent: Feature3SvgComponent ,
    imagePath: "/feature/feature3.png",
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
    title: "Fastest Payouts",
    description:
      "When you’re running traffic, every second counts. Thrill makes sure your earnings hit your account fast, so you can reinvest and scale without delays. From flexible deals to real-time tracking, we’re built to keep your momentum going. No waiting for end-of-month cycles — you get paid quickly, reliably, and with full transparency.",
    // svgPath: "/feature/feature4.svg",
    // svgComponent: Feature1SvgComponent , // If no specific SVG, you can set to null or a default component
    imagePath: "/feature/feature4.png",
    stats: {
      primary: {
        value: "Referrals",
        label: "payouts right after approval",
      },
      secondary: {
        value: "Instant",
        label: "payout options that fit cashflow",
      },
    },
  },
  {
    title: "No Red Tape",
    description:
      "Thrill cuts through the slow approval chains and corporate noise. You talk directly to the people who can say “yes” and make things happen, without endless forms or delays. The result — faster launches, smoother campaigns, and support that actually understands your goals.",
    // svgPath: "/feature/feature5.svg",
    svgComponent: Feature5SvgComponent ,
    imagePath: "/feature/feature5.png",
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