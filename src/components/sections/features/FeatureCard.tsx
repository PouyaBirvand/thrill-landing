import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FeatureCard() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="relative w-[592px] h-auto transition-all duration-500 ease-out">
            {/* Gradient Border با SVG - حالا responsive */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 490 490"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <defs>
                    {/* گرادیان متناظر با border-image */}
                    <linearGradient
                        id="borderGradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0" y1="0" x2="490" y2="0"
                        gradientTransform="rotate(158.39 245 245)"
                    >
                        <stop offset="14.19%" stopColor="#ffffff" stopOpacity="0.06" />
                        <stop offset="50.59%" stopColor="#ffffff" stopOpacity="0.000015" />
                        <stop offset="68.79%" stopColor="#ffffff" stopOpacity="0.000015" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.015" />
                    </linearGradient>

                    {/* گرادیان برای افکت نورانی */}
                    <radialGradient
                        id="glowGradient"
                        cx="50%" cy="100%"
                        r="60%"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                        <stop offset="30%" stopColor="#ffffff" stopOpacity="0.04" />
                        <stop offset="60%" stopColor="#ffffff" stopOpacity="0.01" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* استروک پایه: یکنواخت و نازک (روی همه‌ی مسیر) */}
                <rect
                    x="0.75" y="0.75"
                    width="488.5" height="488.5"
                    rx="29" ry="29"
                    fill="none"
                    stroke="url(#borderGradient)"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    shapeRendering="geometricPrecision"
                />

                {/* سوییپ‌های ضخیم‌تر: دقیقاً وسط ضلع‌ها، دور از گوشه‌های راست */}
                {/* pathLength=100 ⇒ درصدی کنترل می‌کنیم تا روی گوشه‌ها نیفتند */}

                {/* وسطِ بالایی (0%→22.6% خط بالا؛ سوییپ: 6% تا 16%) */}
                <rect
                    x="0.75" y="0.75"
                    width="488.5" height="488.5"
                    rx="29" ry="29"
                    fill="none"
                    stroke="url(#borderGradient)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="10 90"
                    strokeDashoffset="6"
                    vectorEffect="non-scaling-stroke"
                />

                {/* وسطِ پایینی (50%→72.6% خط پایین؛ سوییپ: 56% تا 66%) */}
                <rect
                    x="0.75" y="0.75"
                    width="488.5" height="488.5"
                    rx="29" ry="29"
                    fill="none"
                    stroke="url(#borderGradient)"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="10 90"
                    strokeDashoffset="56"
                    vectorEffect="non-scaling-stroke"
                />

                {/* وسطِ چپی (75%→97.6% خط چپ؛ سوییپ: 81% تا 90%) */}
                <rect
                    x="0.75" y="0.75"
                    width="488.5" height="488.5"
                    rx="29" ry="29"
                    fill="none"
                    stroke="url(#borderGradient)"
                    strokeWidth=".3"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="9 91"
                    strokeDashoffset="81"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>

            {/* محتوای کارت */}
            <div className="relative w-full h-full rounded-3xl bg-[#F8F8F805] p-6 flex pb-14 flex-col justify-between overflow-hidden">
                {/* تصویر اصلی */}
                <div className="flex-1 flex mt-8 justify-center">
                    <div className="w-[369px] h-[263px] bg-gradient-to-br from-gray-200/10 to-gray-400/5 rounded-xl flex items-center justify-center border border-white/5 backdrop-blur-sm">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                            <Image alt="feat" src="/image7.png" fill />
                        </div>
                    </div>
                </div>

                {/* Header با دکمه */}
                <div className="flex items-center justify-between mt-6">
                    <h2 className="text-neutral-white text-[32px] font-semibold uppercase leading-tight">Creative support</h2>
                    <button
                        onClick={toggleExpanded}
                        className={`relative bg-[#858FA640] hover:bg-[#858FA660] p-3 rounded-full border border-[#858FA640] transition-all duration-300 transform hover:scale-110 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}
                        aria-label="Toggle creative support details"
                    >
                        <Plus size={20} color="white" className="opacity-60 transition-opacity duration-300" />
                    </button>
                </div>

                {/* جزئیات قابل گسترش */}
                <div className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                    }`}>
                    <div className="space-y-6">
                        <p className="text-neutral-lightGray text-lg text-left leading-relaxed">
                            Premier on-demand design tailored for campaigns — from attention-grabbing banners and immersive landing pages to targeted promo kits. Everything is crafted for conversion and brand alignment.
                        </p>

                        <div className="grid grid-cols-2 gap-6 relative pt-28">
                            <div className="flex flex-col items-start">
                                <span className="text-white/70 text-[45px] font-bold">
                                    24/7
                                </span>
                                <span className="text-neutral-lightGray text-xl leading-relaxed">
                                    partner support and <br /> creative setup
                                </span>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-white/70 text-[45px] font-bold">
                                    Flexible
                                </span>
                                <span className="text-neutral-lightGray text-xl leading-relaxed">
                                    custom visuals for any <br /> campaign type
                                </span>
                            </div>

                            {/* افکت نورانی پایین */}

                        </div>

                        {/*  */}
                    </div>
                </div>

                <div
                    className="absolute -bottom-[11rem] left-1/2 transform -translate-x-1/2 w-[1000px] h-[600px] transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `
      linear-gradient(0deg, rgba(248,248,248,0.02), rgba(248,248,248,0.02)),
      radial-gradient(160% 80% at 75% 130%, rgba(93,255,194,0.18) 0%, rgba(27,29,41,0) 100%),
      radial-gradient(220% 120% at 30% 120%, rgba(93,255,194,0.25) 0%, rgba(27,29,41,0) 100%),
      radial-gradient(200% 90% at 50% 110%, rgba(93,255,194,0.20) 0%, rgba(27,29,41,0) 100%),
      radial-gradient(150% 70% at 60% 140%, rgba(93,255,194,0.12) 0%, rgba(27,29,41,0) 100%)
    `,
                        filter: "blur(50px)",
                        opacity: isExpanded ? 1 : 0.4,
                    }}
                />



            </div>
        </div>
    );
}