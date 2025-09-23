'use client'

import { motion, easeOut, useInView } from 'framer-motion'
import { Dot } from 'lucide-react'
import { Button } from '../ui/Button'
import Image from 'next/image'
import Container from '../common/Container'
import { useRef } from 'react'
import { useNavigate } from '@/hooks/useNavigate'
import Link from 'next/link'
import WavyLines from '@/app/WavyLines'

export default function Footer() {
    const ref = useRef<HTMLElement | null>(null)
    const isInView = useInView(ref, { once: false, amount: 0.5 })
    const { navigate } = useNavigate([], 0)

    const mainVariants = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
    }

    const buttonVariants = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, delay: 0.3 } }
    }

    const bottomVariants = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, delay: 0.6 } }
    }

    return (
        <footer ref={ref} id="footer" className="text-white py-16 md:pt-[18rem] pt-[15rem] relative overflow-hidden z-0">
            {/* Wavy Lines Background */}
            <div className="bottomLeftWavyLines">
                <WavyLines />
            </div>
            <div className="bottomRightWavyLines">
                <WavyLines />
            </div>
            
            <Container className='z-[10] relative'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row justify-between gap-16">
                        {/* Left Section */}
                        <motion.div
                            className="max-w-xl"
                            initial="hidden"
                            animate={isInView ? "show" : "hidden"}
                            variants={mainVariants}
                        >
                            <h2 className="text-[28px] md:text-[45px] font-semibold mb-3">
                                REFER, EARN, GROW
                            </h2>
                            <p className="text-white/70 mb-10 leading-relaxed">
                                Thrill is a performance-first iGaming platform built by industry pros. With our casino and sportsbook expertise, bold design, smooth UX, and transparent terms, we give you the tools to maximise value for both your audience and your business.
                            </p>
                        </motion.div>

                        {/* Links (right section) */}
                        <motion.div
                            className="flex flex-col md:flex-row gap-12 sm:gap-10"
                            initial="hidden"
                            animate={isInView ? "show" : "hidden"}
                            variants={mainVariants}
                        >
                            {/* Explore */}
                            <div>
                                <h3 className="font-semibold mb-3">Explore</h3>
                                <ul className="space-y-2 text-white/70">
                                    <li><a target="_blank" href="https://thrill.com/en/casino" className="transition-colors hover:text-accent-green_light">Casino</a></li>
                                    <li><a target="_blank" href="https://thrill.com/en/sports" className="transition-colors hover:text-accent-green_light">Sports</a></li>
                                </ul>
                            </div>

                            {/* Connect */}
                            <div>
                                <h3 className="font-semibold mb-3">Connect</h3>
                                <ul className="space-y-2 text-white/70">
                                    <li>
                                        <a href="mailto:affiliates@thrill.com" className="transition-colors hover:text-accent-green_light">
                                            E-mail us
                                        </a>
                                        <div className="text-xs text-white/50 mt-1">affiliates@thrill.com</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Partner */}
                            <div>
                                <h3 className="font-semibold mb-3">Partner</h3>
                                <ul className="space-y-2 text-white/70">
                                    <li>
                                        <a
                                            href="#hero"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate({ label: 'Program Overview', url: '#hero' });
                                            }}
                                            className="transition-colors hover:text-accent-green_light"
                                        >
                                            Program Overview
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#commissions"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate({ label: 'Commission Details', url: '#plan' });
                                            }}
                                            className="transition-colors hover:text-accent-green_light"
                                        >
                                            Commission Details
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank"
                                            href="https://thrill.framer.website/"
                                            className="transition-colors hover:text-accent-green_light"
                                        >
                                            Brand Assets & Promo Materials
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Button */}
                    <motion.div
                        initial="hidden"
                        className='lg:mt-0 mt-12'
                        animate={isInView ? "show" : "hidden"}
                        variants={buttonVariants}
                    >
                        <Link
                            href="https://dashboard.thrillaffiliates.com/partner/register"
                            rel="noopener noreferrer"
                        >
                            <Button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.001, ease: 'easeOut' }}
                                className="!shadow-signin-glow !p-0 w-[258px]"
                                size="lg"
                            >
                                BECOME AN AFFILIATE
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Bottom Section */}
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-center mt-12 pt-2 gap-6"
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        variants={bottomVariants}
                    >
                        {/* Logo + Text + Links */}
                        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                            <div className="text-[#A0ACC7] flex flex-row items-center gap-3">
                                <Image
                                    alt="footer_logo"
                                    width={32}
                                    height={32}
                                    src="/Footerlogo.png"
                                    className="mb-3 md:mb-0 md:mr-4"
                                />
                                <a href='https://www.thrill.com' target='_blank'>© 2024 Thrill.com</a>
                                <div className="flex items-center gap-4">
                                    <Dot className="hidden md:block" color="#A0ACC7" />
                                    <a target='_blank' href="https://dashboard.thrillaffiliates.com/partner/terms_and_conditions" className="underline transition-colors hover:text-accent-green_light">Terms</a>
                                    <a target='_blank' href="https://thrill.com/en/policies/privacy-policy" className="underline transition-colors hover:text-accent-green_light">Privacy</a>
                                </div>
                            </div>
                        </div>
                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="https://x.com/Thrill_com" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-accent-social hover:scale-110">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.29619 0.482532C3.64857 0.443172 3.11059 0.433669 2.5275 0.45153C1.48103 0.483589 0.953027 1.6557 1.5175 2.47812C3.13853 4.83991 4.48313 6.74581 5.82631 8.54885L1.03596 13.8714C0.689589 14.2563 0.720789 14.8491 1.10564 15.1954C1.4905 15.5418 2.08327 15.5106 2.42963 15.1257L6.97887 10.0711C8.13353 11.5713 9.34321 13.0698 10.7745 14.7805C11.1111 15.1827 11.5953 15.4501 12.1328 15.4979C12.8061 15.5579 13.3702 15.5716 13.9986 15.5413C15.0381 15.4913 15.5253 14.3267 14.9771 13.5245C13.0856 10.7567 11.5741 8.60499 10.0831 6.62188L14.1596 2.09249C14.5059 1.70763 14.4747 1.11486 14.0899 0.768492C13.705 0.422127 13.1123 0.453323 12.7659 0.838178L8.92306 5.108C7.91854 3.8222 6.88159 2.55997 5.70522 1.18812C5.35257 0.776839 4.84666 0.515982 4.29619 0.482532Z"
                                    />
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/thrill_com/" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-accent-social hover:scale-110">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.67141 0.661564C5.79574 0.604946 7.22918 0.5625 9 0.5625C10.7708 0.5625 12.2043 0.60495 13.3286 0.661564C15.5374 0.772789 17.2272 2.46263 17.3384 4.67138C17.3951 5.79574 17.4375 7.22918 17.4375 9C17.4375 10.7708 17.3951 12.2043 17.3384 13.3286C17.2272 15.5374 15.5374 17.2272 13.3286 17.3384C12.2043 17.3951 10.7708 17.4375 9 17.4375C7.22918 17.4375 5.79574 17.3951 4.67141 17.3384C2.46263 17.2272 0.772789 15.5374 0.661564 13.3286C0.604946 12.2043 0.5625 10.7708 0.5625 9C0.5625 7.22918 0.60495 5.79574 0.661564 4.67138C0.772789 2.46262 2.46263 0.772789 4.67141 0.661564ZM13.125 3.75C13.125 3.33579 13.4608 3 13.875 3H14.25C14.6642 3 15 3.33579 15 3.75C15 4.16423 14.6642 4.5 14.25 4.5H13.875C13.4608 4.5 13.125 4.16423 13.125 3.75ZM9 6C7.34314 6 6 7.34314 6 9C6 10.6569 7.34314 12 9 12C10.6569 12 12 10.6569 12 9C12 7.34314 10.6569 6 9 6ZM4.5 9C4.5 6.51473 6.51473 4.5 9 4.5C11.4853 4.5 13.5 6.51473 13.5 9C13.5 11.4853 11.4853 13.5 9 13.5C6.51473 13.5 4.5 11.4853 4.5 9Z"
                                    />
                                </svg>
                            </a>

                            <a href="https://discord.com/invite/YqA2Kn32xP" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-accent-social hover:scale-110">
                                <svg
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.47025 0.0671951C6.71846 0.0589976 6.93488 0.219276 7.01066 0.448428L7.22029 1.08206C7.2522 1.17853 7.36395 1.24588 7.48181 1.2236C7.80431 1.16263 8.32358 1.09246 9.00533 1.09246C9.68288 1.09246 10.1966 1.16177 10.5168 1.22253C10.6355 1.24507 10.7483 1.17721 10.7802 1.08047L10.9893 0.448428C11.065 0.219678 11.2812 0.0583003 11.5307 0.0682078C12.8937 0.122339 14.2635 0.553934 14.8463 0.759145C15.0769 0.840318 15.2756 0.992103 15.4096 1.2013C16.0103 2.1388 17.8765 5.50079 17.8108 10.9931C17.8069 11.3226 17.6723 11.6473 17.4053 11.8639C16.8456 12.3179 15.5923 13.1869 13.5807 13.8054C13.2546 13.9057 12.8764 13.8148 12.6689 13.5099C12.3941 13.1063 12.1538 12.5934 11.9915 12.21C11.9507 12.1135 11.8403 12.0609 11.7352 12.0921C11.0343 12.3007 10.1302 12.4603 9.00533 12.4603C7.87676 12.4603 6.96915 12.2997 6.26561 12.0901C6.16061 12.0588 6.05018 12.1114 6.00934 12.2079C5.847 12.5916 5.6064 13.1056 5.33115 13.5099C5.12359 13.8148 4.7454 13.9057 4.4193 13.8054C2.40772 13.1869 1.1544 12.3179 0.594746 11.8639C0.327727 11.6473 0.193134 11.3226 0.189192 10.9931C0.122942 5.4553 2.02074 2.08323 2.605 1.1785C2.72978 0.985278 2.90976 0.84232 3.1224 0.760934C3.66646 0.552693 4.9701 0.116729 6.47025 0.0671951ZM7.5 7.375C7.5 8.41053 6.74449 9.25 5.8125 9.25C4.88051 9.25 4.125 8.41053 4.125 7.375C4.125 6.33948 4.88051 5.5 5.8125 5.5C6.74449 5.5 7.5 6.33948 7.5 7.375ZM10.5 7.375C10.5 8.41053 11.2555 9.25 12.1875 9.25C13.1195 9.25 13.875 8.41053 13.875 7.375C13.875 6.33948 13.1195 5.5 12.1875 5.5C11.2555 5.5 10.5 6.33948 10.5 7.375Z"
                                    />
                                </svg>
                            </a>

                            <a href="https://t.me/Thrillcom" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-accent-social hover:scale-110">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.4356 1.45756C17.4628 0.936599 17.0368 0.498097 16.5002 0.570318C14.5304 0.835424 11.3849 1.98661 8.37262 3.30486C5.3559 4.62506 2.44356 6.12585 0.93433 7.10565C0.650497 7.28993 0.529945 7.58381 0.56998 7.86893C0.609494 8.15036 0.802316 8.40578 1.10472 8.53342L5.44582 10.3661C5.63595 10.4464 5.85476 10.4161 6.01594 10.2872L6.24563 10.1034C7.70299 8.93719 9.64901 7.38 11.2674 6.1506C12.077 5.53556 12.8016 5.0049 13.3407 4.6467C13.5908 4.4805 13.7964 4.35457 13.9498 4.2747C13.9205 4.32506 13.8846 4.38247 13.8418 4.44694C13.6546 4.72894 13.3581 5.11335 12.9827 5.57197C12.2331 6.48784 11.1852 7.68026 10.11 8.90355L10.1095 8.90415C9.34714 9.77156 8.57156 10.654 7.8822 11.461C7.69054 11.6854 7.70602 12.0191 7.91561 12.2255L12.9477 17.1824C13.1277 17.3598 13.365 17.4519 13.5964 17.4361C13.8324 17.4199 14.0523 17.2911 14.1782 17.0509C14.536 16.3685 14.9037 15.2979 15.2568 14.0258C15.6109 12.7501 15.9536 11.2598 16.2588 9.73042C16.8689 6.67369 17.3317 3.44862 17.4356 1.45756Z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </footer>
    )
}