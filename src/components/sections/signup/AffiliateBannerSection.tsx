import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export default function AffiliateBannerSection() {
    return (
        <section id="signin" className="w-full pt-[8rem] md:pt-[6rem]">
            <div className="relative rounded-[32px]  overflow-hidden border-[#FFFFFF1F] border">

                {/* Corner Plus Icons */}
                <div className="absolute top-6 left-6 z-[2]">
                    <Plus className="w-4 h-4 text-[#FFFFFF1F]" />
                </div>
                <div className="absolute top-6 right-6 z-[2]">
                    <Plus className="w-4 h-4 text-[#FFFFFF1F]" />
                </div>
                <div className="absolute bottom-6 left-6 z-[2]">
                    <Plus className="w-4 h-4 text-[#FFFFFF1F]" />
                </div>
                <div className="absolute bottom-6 right-6 z-[2]">
                    <Plus className="w-4 h-4 text-[#FFFFFF1F]" />
                </div>

                {/* Content Container */}
                <div className="relative z-[3] flex flex-col lg:flex-row lg:items-start items-center justify-between p-12 lg:p-12 xl:p-16 gap-8 lg:gap-12 h-auto lg:h-[265px]">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        {/* Green Subtitle */}
                        <div className="text-[#5CFFC1] text-sm lg:text-lg font-medium tracking-wider uppercase">
                            YOUR AUDIENCE. YOUR PROFIT.
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-2">
                            <h1 className="text-white text-3xl lg:text-5xl xl:text-5xl font-semibold leading-tight">
                                DARE TO EARN.
                            </h1>
                            <h1 className="text-white text-3xl lg:text-5xl xl:text-5xl font-semibold leading-tight">
                                GET AFFILIATE ACCESS.
                            </h1>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-shrink-0 text-center lg:text-right space-y-6 lg:space-y-8">
                        {/* Description */}
                        <p className="text-white/50 text-sm lg:text-base max-w-md lg:max-w-[435px] lg:text-left text-center leading-relaxed">
                            It's time to make your streams Thrilling - join the best
                            casino affiliate program built around creators.
                        </p>

                        {/* CTA Button */}
                        <Button className="!w-full !shadow-signin-glow !z-[9999]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.001, ease: 'easeOut' }}
                        >
                            BECOME AN AFFILIATE
                        </Button>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 right-0 w-[1400px] h-[300px] pointer-events-none z-[1]"
                    style={{
                        background: `
              radial-gradient(ellipse at 100% 100%, rgba(92,255,193,0.22) 0%, rgba(92,255,193,0.08) 40%, transparent 45%)
            `,
                        filter: "blur(50px)",
                        opacity: 1,
                    }}
                />
            </div>
        </section>
    );
}