'use client';
import { easeInOut, easeOut, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as React from 'react';
import { useEffect } from 'react';

const Feature2SvgComponent = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const gridLineVariants = {
    hidden: { strokeDashoffset: 0 },
    visible: {
      strokeDashoffset: [-13.46, 0],
      transition: { duration: 2, repeat: Infinity, ease: 'linear' },
    },
  };

  const card1Variants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const card2Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.2 },
    },
  };

  const card3Variants = {
    hidden: { x: 100, opacity: 0, rotate: 5 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: easeOut, delay: 0.4 },
    },
  };

  const card4Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, type: 'spring', stiffness: 100, delay: 0.6 },
    },
  };

  const rectVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOut, delay: 0.8 },
    },
  };

  const smallRectVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOut, delay: 1 },
    },
  };

  const buttonVariants = {
    hidden: { y: 0, scale: 1 },
    visible: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: easeInOut,
        delay: (index) => 1.2 + index * 0.3,
      },
    },
  };

  return (
    <motion.svg
      ref={ref}
      width={592}
      height={418}
      viewBox="0 0 592 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <mask
        id="mask0_450_12732"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={-29}
        y={35}
        width={627}
        height={333}
      >
        <ellipse
          cx={284.538}
          cy={201.13}
          rx={313.229}
          ry={165.917}
          fill="url(#paint0_radial_450_12732)"
        />
      </mask>
      <g mask="url(#mask0_450_12732)">
        <motion.path
          d="M14.021 9.09937L14.021 479.087"
          stroke="url(#paint1_linear_450_12732)"
          strokeOpacity={0.3}
          strokeWidth={1.85782}
          strokeDasharray="6.73 6.73"
          // @ts-ignore
          variants={gridLineVariants}
          initial="hidden"
          animate={controls}
        />
<motion.path
  d="M599.256 205.075L22.0312 205.075"
  stroke="url(#paint2_linear_450_12732)"
  strokeOpacity={0.3}
  strokeWidth={1.85782}
  strokeDasharray="6.73 6.73"
  // @ts-ignore
  variants={gridLineVariants}
  initial="hidden"
  animate={controls}
  transform="translate(0, -7)" // جابجایی 20 واحد به بالا
/>
        <foreignObject x={202.077} y={-121.127} width={314.643} height={314.643}>
          <div
          // @ts-ignore
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: 'blur(50.83px)',
              clipPath: 'url(#bgblur_0_450_12732_clip_path)',
              height: '100%',
              width: '100%',
            }}
          />
        </foreignObject>
        <motion.g
          filter="url(#filter0_i_450_12732)"
          data-figma-bg-blur-radius={101.651}
          variants={card1Variants}
          initial="hidden"
          animate={controls}
        >
          <path
            d="M303.728 0.0417538C303.728 -6.78987 303.728 -10.2057 305.058 -12.815C306.227 -15.1103 308.093 -16.9763 310.388 -18.1458C312.998 -19.4753 316.413 -19.4753 323.245 -19.4753H395.551C402.382 -19.4753 405.798 -19.4753 408.407 -18.1458C410.703 -16.9763 412.569 -15.1103 413.738 -12.815C415.068 -10.2057 415.068 -6.78988 415.068 0.0417442V72.3472C415.068 79.1789 415.068 82.5947 413.738 85.204C412.569 87.4992 410.703 89.3653 408.407 90.5348C405.798 91.8643 402.382 91.8643 395.551 91.8643H323.245C316.413 91.8643 312.998 91.8643 310.388 90.5348C308.093 89.3653 306.227 87.4992 305.058 85.204C303.728 82.5947 303.728 79.1789 303.728 72.3473V0.0417538Z"
            fill="white"
            fillOpacity={0.01}
            style={{ mixBlendMode: 'luminosity' }}
          />
          <motion.path
            d="M323.245 -18.7126H395.55C398.979 -18.7126 401.505 -18.7126 403.5 -18.5496C405.487 -18.3872 406.882 -18.0673 408.061 -17.4666C410.213 -16.3702 411.963 -14.6203 413.059 -12.4685C413.66 -11.2893 413.98 -9.89466 414.142 -7.90796C414.305 -5.91223 414.305 -3.38688 414.305 0.0412598V72.3469C414.305 75.7753 414.305 78.3013 414.142 80.2971C413.98 82.2838 413.66 83.6785 413.059 84.8577C411.963 87.0094 410.213 88.7593 408.061 89.8557C406.882 90.4565 405.487 90.7764 403.5 90.9387C401.505 91.1018 398.979 91.1018 395.55 91.1018H323.246C319.817 91.1018 317.291 91.1018 315.295 90.9387C313.309 90.7764 311.914 90.4565 310.735 89.8557C308.583 88.7593 306.833 87.0094 305.737 84.8577C305.136 83.6785 304.816 82.2838 304.654 80.2971C304.491 78.3013 304.491 75.7753 304.491 72.3469V0.0422363C304.491 -3.38616 304.491 -5.91213 304.654 -7.90796C304.816 -9.89469 305.136 -11.2893 305.737 -12.4685C306.833 -14.6203 308.583 -16.3702 310.735 -17.4666C311.914 -18.0673 313.309 -18.3872 315.295 -18.5496C317.291 -18.7126 319.816 -18.7126 323.245 -18.7126Z"
            stroke="url(#paint3_linear_450_12732)"
            strokeOpacity={0.25}
            strokeWidth={1.52477}
            animate={{ strokeOpacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <g clipPath="url(#clip1_450_12732)">
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M355.65 22.6439C355.295 22.6439 354.99 22.6702 354.736 22.7077C354.015 22.8142 353.631 23.4658 353.631 24.1117V26.0931C353.118 26.1728 352.624 26.2753 352.173 26.4076L352.17 26.4082C351.76 26.5321 351.418 26.7039 351.163 26.9351C350.874 27.1975 350.748 27.5654 350.748 27.9906V43.3571C350.748 43.8378 350.898 44.259 351.206 44.6021C351.509 44.9394 351.947 45.1816 352.491 45.3459L352.495 45.3471C352.851 45.4492 353.234 45.536 353.631 45.6098V48.2772C353.631 48.923 354.015 49.5747 354.736 49.6811C354.99 49.7187 355.295 49.7449 355.65 49.7449C356.005 49.7449 356.309 49.7187 356.563 49.6811C357.284 49.5746 357.667 48.9231 357.667 48.2773V45.9857C357.979 45.9935 358.279 45.9969 358.564 45.9969C358.649 45.9969 358.734 45.9962 358.821 45.9946V48.2772C358.821 48.923 359.205 49.5747 359.926 49.6811C360.179 49.7187 360.484 49.7449 360.839 49.7449C361.194 49.7449 361.499 49.7187 361.753 49.6811C362.473 49.5746 362.857 48.9231 362.857 48.2773V45.3845C365.527 44.589 368.047 42.8874 368.047 39.7101C368.047 37.5378 366.579 36.1101 364.805 35.3891C365.369 35.0751 365.833 34.6665 366.179 34.161C366.652 33.4704 366.893 32.619 366.893 31.6241C366.893 28.945 365.01 27.396 362.857 26.59V24.1114C362.857 23.4658 362.473 22.8142 361.753 22.7077C361.499 22.6702 361.194 22.6439 360.839 22.6439C360.484 22.6439 360.18 22.6702 359.926 22.7077C359.205 22.8142 358.821 23.4658 358.821 24.1117V25.8232C358.668 25.8179 358.519 25.8153 358.372 25.8153C358.147 25.8153 357.911 25.8162 357.667 25.8188V24.1115C357.667 23.4658 357.284 22.8142 356.563 22.7077C356.309 22.6702 356.005 22.6439 355.65 22.6439ZM355.361 33.053V30.1148C356.232 30.0146 357.405 29.9958 358.244 29.9958C359.528 29.9958 360.406 30.182 360.954 30.4898C361.479 30.7849 361.704 31.191 361.704 31.7063C361.704 32.0212 361.615 32.2525 361.471 32.4309C361.323 32.614 361.101 32.7609 360.807 32.874C360.212 33.1033 359.394 33.1672 358.532 33.1672C357.674 33.1672 356.815 33.134 356.169 33.1006C355.846 33.084 355.577 33.0674 355.389 33.0549L355.361 33.053ZM355.361 41.1657V37.7515L355.393 37.7494C355.586 37.7368 355.863 37.72 356.204 37.7032C356.886 37.6696 357.818 37.6359 358.821 37.6359C359.815 37.6359 360.777 37.7575 361.48 38.0653C361.829 38.2182 362.1 38.4109 362.283 38.6441C362.463 38.8731 362.569 39.1544 362.569 39.51C362.569 39.9207 362.433 40.2272 362.212 40.4669C361.984 40.7132 361.653 40.9023 361.246 41.0428C360.429 41.3253 359.389 41.3839 358.532 41.3839C357.684 41.3839 356.829 41.3213 356.185 41.2582C355.863 41.2267 355.595 41.1951 355.407 41.1716L355.361 41.1657Z"
              fill="white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            />
          </g>
        </motion.g>
        <foreignObject x={-126.164} y={127.643} width={314.333} height={314.333}>
          <div
          // @ts-ignore
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: 'blur(50.83px)',
              clipPath: 'url(#bgblur_2_450_12732_clip_path)',
              height: '100%',
              width: '100%',
            }}
          />
        </foreignObject>
        <motion.g
          filter="url(#filter1_i_450_12732)"
          data-figma-bg-blur-radius={101.651}
          // @ts-ignore
          variants={card2Variants}
          initial="hidden"
          animate={controls}
        >
          <rect
            x={-24.5122}
            y={229.294}
            width={111.031}
            height={111.031}
            rx={12.1982}
            fill="white"
            fillOpacity={0.01}
            style={{ mixBlendMode: 'luminosity' }}
          />
          <motion.rect
            x={-23.7498}
            y={230.056}
            width={109.506}
            height={109.506}
            rx={11.4358}
            stroke="url(#paint4_linear_450_12732)"
            strokeOpacity={0.25}
            strokeWidth={1.52477}
            animate={{ strokeOpacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <g clipPath="url(#clip3_450_12732)">
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.1387 271.259C28.8414 271.259 24.2688 275.011 22.5477 280.225C21.5898 280.236 20.8811 280.249 20.4015 280.259C19.8383 280.271 19.2128 280.55 19.0491 281.204C18.9822 281.472 18.9336 281.807 18.9336 282.215C18.9336 282.622 18.9822 282.957 19.0491 283.225C19.2128 283.879 19.8383 284.158 20.4016 284.17C20.7523 284.177 21.2255 284.186 21.8293 284.195C21.8209 284.399 21.8166 284.603 21.8166 284.809C21.8166 285.015 21.8209 285.22 21.8293 285.423C21.2255 285.432 20.7523 285.441 20.4015 285.449C19.8383 285.461 19.2128 285.739 19.0491 286.394C18.9822 286.661 18.9336 286.996 18.9336 287.404C18.9336 287.812 18.9822 288.147 19.0491 288.414C19.2128 289.069 19.8383 289.347 20.4015 289.359C20.8811 289.37 21.5898 289.383 22.5478 289.394C24.2688 294.608 28.8414 298.36 34.1387 298.36C38.6448 298.36 41.3441 296.533 42.4704 295.549C42.9387 295.14 43.1972 294.504 43.0129 293.867C42.819 293.195 42.4389 292.493 41.9901 291.918C41.343 291.088 40.2288 291.203 39.4561 291.682C37.9661 292.605 36.0165 293.441 34.1663 293.263C31.2382 292.982 29.4709 291.436 28.5074 289.422C32.0688 289.418 34.2729 289.382 35.3408 289.359C35.9039 289.347 36.5294 289.069 36.6932 288.414C36.7601 288.147 36.8087 287.812 36.8087 287.404C36.8087 286.996 36.7601 286.661 36.6932 286.394C36.5295 285.739 35.9039 285.461 35.3408 285.449C34.2107 285.424 31.8081 285.386 27.8712 285.386L27.5683 285.386C27.5599 285.193 27.5557 285.001 27.5557 284.809C27.5557 284.617 27.5599 284.425 27.5683 284.233H27.8712C31.8081 284.233 34.2107 284.194 35.3408 284.17C35.9039 284.158 36.5294 283.879 36.6932 283.225C36.7601 282.957 36.8087 282.622 36.8087 282.215C36.8087 281.807 36.7601 281.472 36.6932 281.204C36.5294 280.55 35.9039 280.271 35.3408 280.259C34.2729 280.236 32.0688 280.201 28.5074 280.197C29.4709 278.183 31.2382 276.637 34.1663 276.355C36.0165 276.177 37.9661 277.014 39.4561 277.937C40.2288 278.416 41.343 278.531 41.9901 277.701C42.439 277.125 42.819 276.423 43.0129 275.752C43.1972 275.114 42.9387 274.479 42.4704 274.07C41.3441 273.085 38.6448 271.259 34.1387 271.259Z"
              fill="white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            />
          </g>
        </motion.g>
        <foreignObject x={386.056} y={157.944} width={276.161} height={276.161}>
          <div
          // @ts-ignore
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: 'blur(48.57px)',
              clipPath: 'url(#bgblur_4_450_12732_clip_path)',
              height: '100%',
              width: '100%',
            }}
          />
        </foreignObject>
        <motion.g
          filter="url(#filter2_i_450_12732)"
          data-figma-bg-blur-radius={97.1483}
          variants={card3Variants}
          initial="hidden"
          animate={controls}
        >
          <rect
            x={483.204}
            y={255.092}
            width={81.8646}
            height={81.8646}
            rx={11.6578}
            fill="white"
            fillOpacity={0.01}
            style={{ mixBlendMode: 'luminosity' }}
          />
          <motion.rect
            x={483.933}
            y={255.821}
            width={80.4074}
            height={80.4074}
            rx={10.9292}
            stroke="url(#paint5_linear_450_12732)"
            strokeOpacity={0.25}
            strokeWidth={1.45723}
            animate={{ strokeOpacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <g clipPath="url(#clip5_450_12732)">
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M523.283 281.518C522.13 281.479 520.96 282.098 520.192 282.609C519.461 283.094 519.323 284.066 519.727 284.805L525.179 294.785C523.544 294.8 522.421 294.819 521.753 294.834C521.206 294.846 520.589 295.115 520.409 295.774C520.331 296.063 520.272 296.429 520.272 296.881C520.272 297.332 520.331 297.699 520.409 297.988C520.589 298.647 521.206 298.916 521.753 298.928C522.666 298.948 524.432 298.977 527.192 298.99L527.223 300.21C524.445 300.222 522.669 300.252 521.753 300.271C521.206 300.283 520.589 300.552 520.409 301.212C520.331 301.5 520.272 301.867 520.272 302.318C520.272 302.77 520.331 303.137 520.409 303.425C520.589 304.085 521.206 304.354 521.753 304.365C522.681 304.385 524.491 304.416 527.33 304.428L527.425 308.156C527.447 309.043 528.093 309.8 528.973 309.847C529.255 309.863 529.568 309.873 529.897 309.873C530.225 309.873 530.539 309.863 530.82 309.847C531.701 309.8 532.347 309.043 532.369 308.156L532.464 304.428C535.303 404.416 537.114 304.385 538.041 304.365C538.589 304.354 539.206 304.085 539.386 303.425C539.464 303.137 539.522 302.77 539.522 302.318C539.522 301.867 539.464 301.5 539.386 301.212C539.206 300.552 538.589 300.283 538.041 300.271C537.125 300.252 535.349 300.222 532.571 300.21L532.602 298.99C535.362 298.977 537.129 298.948 538.041 298.928C538.589 298.916 539.206 298.647 539.386 297.988C539.464 297.699 539.522 297.332 539.522 296.881C539.522 296.429 539.464 296.063 539.386 295.774C539.206 295.115 538.589 294.846 538.041 294.834C537.374 294.819 536.25 294.8 534.615 294.785L540.068 284.805C540.472 284.066 540.333 283.094 539.602 282.609C538.834 282.098 537.664 281.479 536.51 281.518C535.926 281.538 535.493 281.958 535.249 282.411C534.251 284.258 531.278 289.782 529.897 292.594C528.515 289.782 525.543 284.258 524.545 282.411C524.3 281.958 523.868 281.538 523.283 281.518Z"
              fill="white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            />
          </g>
        </motion.g>
        <foreignObject x={-74.8295} y={-83.0465} width={358.777} height={358.777}>
          <div
          // @ts-ignore
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: 'blur(50.83px)',
              clipPath: 'url(#bgblur_6_450_12732_clip_path)',
              height: '100%',
              width: '100%',
            }}
          />
        </foreignObject>
        <motion.g
          filter="url(#filter3_i_450_12732)"
          data-figma-bg-blur-radius={101.651}
          // @ts-ignore
          variants={card4Variants}
          initial="hidden"
          animate={controls}
        >
          <path
            d="M26.822 38.122C26.822 31.2904 26.822 27.8746 28.1515 25.2653C29.321 22.9701 31.1871 21.104 33.4823 19.9345C36.0917 18.605 39.5075 18.605 46.3391 18.605H162.779C169.61 18.605 173.026 18.605 175.636 19.9345C177.931 21.104 179.797 22.9701 180.966 25.2653C182.296 27.8746 182.296 31.2904 182.296 38.1221V154.562C182.296 161.393 182.296 164.809 180.966 167.419C179.797 169.714 177.931 171.58 175.636 172.749C173.026 174.079 169.61 174.079 162.779 174.079H46.3391C39.5075 174.079 36.0917 174.079 33.4823 172.749C31.1871 171.58 29.321 169.714 28.1515 167.419C26.822 164.809 26.822 161.393 26.822 154.562V38.122Z"
            fill="white"
            fillOpacity={0.01}
            style={{ mixBlendMode: 'luminosity' }}
          />
          <motion.path
            d="M46.3386 19.3677H162.779C166.207 19.3677 168.733 19.3677 170.728 19.5308C172.715 19.6931 174.111 20.0129 175.29 20.6138C177.441 21.7102 179.191 23.4601 180.287 25.6118C180.888 26.791 181.208 28.1856 181.37 30.1724C181.533 32.1681 181.534 34.6934 181.534 38.1216V154.562C181.534 157.99 181.533 160.515 181.37 162.511C181.208 164.498 180.888 165.893 180.287 167.073C179.191 169.224 177.441 170.973 175.29 172.07C174.111 172.671 172.715 172.99 170.728 173.153C168.733 173.316 166.207 173.317 162.779 173.317H46.3386C42.9105 173.317 40.3851 173.316 38.3894 173.153C36.4026 172.991 35.0081 172.671 33.8289 172.07C31.6772 170.973 29.9272 169.224 28.8308 167.073C28.2299 165.893 27.9101 164.498 27.7478 162.511C27.5848 160.515 27.5847 157.99 27.5847 154.562V38.1216C27.5847 34.6934 27.5847 32.1681 27.7478 30.1724C27.9101 28.1856 28.23 26.791 28.8308 25.6118C29.9272 23.46 31.6771 21.7102 33.8289 20.6138C35.0081 20.013 36.4027 19.6931 38.3894 19.5308C40.3851 19.3677 42.9105 19.3677 46.3386 19.3677Z"
            stroke="url(#paint6_linear_450_12732)"
            strokeOpacity={0.25}
            strokeWidth={1.52477}
            animate={{ strokeOpacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <g clipPath="url(#clip7_450_12732)">
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M110.68 87.4232C109.581 86.4883 108.055 86.1486 106.575 86.0306V84.3366C106.575 83.5927 106.095 82.9292 105.356 82.8475C105.114 82.8208 104.845 82.803 104.559 82.803C104.273 82.803 104.004 82.8208 103.762 82.8475C103.023 82.9292 102.542 83.5927 102.542 84.3366V86.1647C99.4427 86.6969 96.4932 88.3912 96.4932 92.0035C96.4932 95.888 100.013 97.2023 103.1 98.2261C103.297 98.2892 103.546 98.3526 103.82 98.4226C105.062 98.7389 106.84 99.1921 106.84 100.387C106.84 101.846 104.739 102.103 103.695 102.103C102.238 102.103 100.654 101.743 99.3686 101.065C98.6774 100.701 97.8279 100.557 97.2819 101.119C96.8712 101.541 96.4932 102.159 96.4932 103.003C96.4932 103.798 96.8174 104.476 97.4657 105.035C98.8201 106.203 100.743 106.58 102.542 106.68V108.347C102.542 109.091 103.023 109.755 103.762 109.836C104.004 109.863 104.273 109.881 104.559 109.881C104.845 109.881 105.114 109.863 105.356 109.836C106.095 109.755 106.575 109.091 106.575 108.347V106.451C109.684 105.853 112.625 104.148 112.625 100.519C112.625 96.6969 109.25 94.9462 106.025 93.9667C105.839 93.9093 105.578 93.8503 105.278 93.7827C104.061 93.5085 102.214 93.092 102.214 92.0636C102.214 90.7538 104.544 90.5807 105.423 90.5807C106.519 90.5807 107.684 90.9019 108.751 91.342C109.572 91.6804 110.568 91.6753 111.033 90.9125C111.346 90.397 111.551 89.81 111.551 89.2618C111.551 88.5092 111.261 87.8963 110.68 87.4232Z"
              fill="white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            />
          </g>
        </motion.g>
        <motion.rect
          x={150.645}
          y={93.5415}
          width={290.711}
          height={232.832}
          fill="url(#pattern0_450_12732)"
          variants={rectVariants}
          initial="hidden"
          animate={controls}
        />
        <motion.rect
          x={373.756}
          y={112.314}
          width={30.5587}
          height={24.7594}
          rx={12.3797}
          transform="rotate(-5.58577 373.756 112.314)"
          fill="url(#pattern1_450_12732)"
          variants={smallRectVariants}
          initial="hidden"
          animate={controls}
        />
      </g>
      <foreignObject x={419.471} y={181.408} width={43.4226} height={73.8178}>
        <div
        // @ts-ignore
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: 'blur(6.51px)',
            clipPath: 'url(#bgblur_8_450_12732_clip_path)',
            height: '100%',
            width: '100%',
          }}
        />
      </foreignObject>
      <motion.g
        filter="url(#filter4_di_450_12732)"
        data-figma-bg-blur-radius={13.0265}
        custom={0}
        // @ts-ignore
        variants={buttonVariants}
        initial="hidden"
        animate={controls}
      >
        <rect
          x={432.497}
          y={194.435}
          width={17.3697}
          height={17.3697}
          rx={8.68486}
          fill="#282828"
          fillOpacity={0.7}
          style={{ mixBlendMode: 'luminosity' }}
          shapeRendering="crispEdges"
        />
        <motion.rect
          x={433.311}
          y={195.249}
          width={15.7414}
          height={15.7414}
          rx={7.87071}
          stroke="url(#paint7_linear_450_12732)"
          strokeOpacity={0.25}
          strokeWidth={1.62831}
          shapeRendering="crispEdges"
          animate={{ strokeOpacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx={441.178}
          cy={203.119}
          r={3.25682}
          transform="rotate(180 441.178 203.119)"
          fill="#F8F8F8"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.g>
      {/* <foreignObject x={135.471} y={181.408} width={43.4226} height={73.8178}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: 'blur(6.51px)',
            clipPath: 'url(#bgblur_9_450_12732_clip_path)',
            height: '100%',
            width: '100%',
          }}
        />
      </foreignObject> */}
      <motion.g
        filter="url(#filter5_di_450_12732)"
        data-figma-bg-blur-radius={13.0265}
        custom={1}
        // @ts-ignore
        variants={buttonVariants}
        initial="hidden"
        animate={controls}
      >
        <rect
          x={148.497}
          y={194.435}
          width={17.3697}
          height={17.3697}
          rx={8.68486}
          fill="#282828"
          fillOpacity={0.7}
          style={{ mixBlendMode: 'luminosity' }}
          shapeRendering="crispEdges"
        />
        <motion.rect
          x={149.311}
          y={195.249}
          width={15.7414}
          height={15.7414}
          rx={7.87071}
          stroke="url(#paint7_linear_450_12732)"
          strokeOpacity={0.25}
          strokeWidth={1.62831}
          shapeRendering="crispEdges"
          animate={{ strokeOpacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx={157.178}
          cy={203.119}
          r={3.25682}
          transform="rotate(180 157.178 203.119)"
          fill="#F8F8F8"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.g>
      <defs>
        <filter
          id="filter0_i_450_12732"
          x={202.077}
          y={-121.127}
          width={314.643}
          height={314.643}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2.03303} dy={4.06606} />
          <feGaussianBlur stdDeviation={8.13212} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_450_12732"
          />
        </filter>
        <clipPath
          id="bgblur_0_450_12732_clip_path"
          transform="translate(-202.077 121.127)"
        >
          <path
            d="M303.728 0.0417538C303.728 -6.78987 303.728 -10.2057 305.058 -12.815C306.227 -15.1103 308.093 -16.9763 310.388 -18.1458C312.998 -19.4753 316.413 -19.4753 323.245 -19.4753H395.551C402.382 -19.4753 405.798 -19.4753 408.407 -18.1458C410.703 -16.9763 412.569 -15.1103 413.738 -12.815C415.068 -10.2057 415.068 -6.78988 415.068 0.0417442V72.3472C415.068 79.1789 415.068 82.5947 413.738 85.204C412.569 87.4992 410.703 89.3653 408.407 90.5348C405.798 91.8643 402.382 91.8643 395.551 91.8643H323.245C316.413 91.8643 312.998 91.8643 310.388 90.5348C308.093 89.3653 306.227 87.4992 305.058 85.204C303.728 82.5947 303.728 79.1789 303.728 72.3473V0.0417538Z"
          />
        </clipPath>
        <filter
          id="filter1_i_450_12732"
          x={-126.164}
          y={127.643}
          width={314.333}
          height={314.333}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2.03303} dy={4.06606} />
          <feGaussianBlur stdDeviation={8.13212} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_450_12732"
          />
        </filter>
        <clipPath
          id="bgblur_2_450_12732_clip_path"
          transform="translate(126.164 -127.643)"
        >
          <rect
            x={-24.5122}
            y={229.294}
            width={111.031}
            height={111.031}
            rx={12.1982}
          />
        </clipPath>
        <filter
          id="filter2_i_450_12732"
          x={386.056}
          y={157.944}
          width={276.161}
          height={276.161}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1.94297} dy={3.88593} />
          <feGaussianBlur stdDeviation={7.77187} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_450_12732"
          />
        </filter>
        <clipPath
          id="bgblur_4_450_12732_clip_path"
          transform="translate(-386.056 -157.944)"
        >
          <rect
            x={483.204}
            y={255.092}
            width={81.8646}
            height={81.8646}
            rx={11.6578}
          />
        </clipPath>
        <filter
          id="filter3_i_450_12732"
          x={-74.8295}
          y={-83.0465}
          width={358.777}
          height={358.777}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2.03303} dy={4.06606} />
          <feGaussianBlur stdDeviation={8.13212} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_450_12732"
          />
        </filter>
        <clipPath
          id="bgblur_6_450_12732_clip_path"
          transform="translate(74.8295 83.0465)"
        >
          <path
            d="M26.822 38.122C26.822 31.2904 26.822 27.8746 28.1515 25.2653C29.321 22.9701 31.1871 21.104 33.4823 19.9345C36.0917 18.605 39.5075 18.605 46.3391 18.605H162.779C169.61 18.605 173.026 18.605 175.636 19.9345C177.931 21.104 179.797 22.9701 180.966 25.2653C182.296 27.8746 182.296 31.2904 182.296 38.1221V154.562C182.296 161.393 182.296 164.809 180.966 167.419C179.797 169.714 177.931 171.58 175.636 172.749C173.026 174.079 169.61 174.079 162.779 174.079H46.3391C39.5075 174.079 36.0917 174.079 33.4823 172.749C31.1871 171.58 29.321 169.714 28.1515 167.419C26.822 164.809 26.822 161.393 26.822 154.562V38.122Z"
          />
        </clipPath>
        <pattern
          id="pattern0_450_12732"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_450_12732"
            transform="matrix(0.00114476 0 0 0.00142932 -0.101302 -0.166019)"
          />
        </pattern>
        <pattern
          id="pattern1_450_12732"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image1_450_12732"
            transform="matrix(0.00770797 0.000485312 -0.000393211 0.00951338 -0.233073 -0.243402)"
          />
        </pattern>
        <filter
          id="filter4_di_450_12732"
          x={419.471}
          y={181.408}
          width={43.4226}
          height={73.8178}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={17.3686}
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_450_12732"
          />
          <feOffset dy={34.7372} />
          <feGaussianBlur stdDeviation={13.0265} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_450_12732"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_450_12732"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={4.34215} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_450_12732"
          />
        </filter>
        <clipPath
          id="bgblur_8_450_12732_clip_path"
          transform="translate(0)"
        >
          <rect
            x={432.497}
            y={194.435}
            width={17.3697}
            height={17.3697}
            rx={8.68486}
          />
        </clipPath>
        <filter
          id="filter5_di_450_12732"
          x={135.471}
          y={181.408}
          width={43.4226}
          height={73.8178}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={17.3686}
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_450_12732"
          />
          <feOffset dy={34.7372} />
          <feGaussianBlur stdDeviation={13.0265} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_450_12732"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_450_12732"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={4.34215} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_450_12732"
          />
        </filter>
        <clipPath
          id="bgblur_9_450_12732_clip_path"
          transform="translate(-135.471 -181.408)"
        >
          <rect
            x={148.497}
            y={194.435}
            width={17.3697}
            height={17.3697}
            rx={8.68486}
          />
        </clipPath>
        <radialGradient
          id="paint0_radial_450_12732"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(39.0854 160.424 -303.329 19.0922 292.691 206.623)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset={0.615385} stopColor="#D8D8D8" stopOpacity={0.985577} />
          <stop offset={1} stopColor="#737373" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id="paint1_linear_450_12732"
          x1={14.521}
          y1={9.09937}
          x2={14.521}
          y2={479.087}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={0.770675} stopColor="white" stopOpacity={0.2} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_450_12732"
          x1={599.256}
          y1={205.575}
          x2={22.0312}
          y2={205.575}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={0.770675} stopColor="white" stopOpacity={0.2} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_450_12732"
          x1={335.331}
          y1={123.467}
          x2={463.909}
          y2={20.8621}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.4} />
          <stop offset={0.4} stopColor="white" stopOpacity={0.01} />
          <stop offset={0.6} stopColor="white" stopOpacity={0.01} />
          <stop offset={1} stopColor="white" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="paint4_linear_450_12732"
          x1={7.00306}
          y1={371.84}
          x2={135.224}
          y2={269.52}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.4} />
          <stop offset={0.4} stopColor="white" stopOpacity={0.01} />
          <stop offset={0.6} stopColor="white" stopOpacity={0.01} />
          <stop offset={1} stopColor="white" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="paint5_linear_450_12732"
          x1={524.136}
          y1={255.092}
          x2={559.749}
          y2={344.989}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.4} />
          <stop offset={0.4} stopColor="white" stopOpacity={0.01} />
          <stop offset={0.6} stopColor="white" stopOpacity={0.01} />
          <stop offset={1} stopColor="white" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="paint6_linear_450_12732"
          x1={68.9474}
          y1={188.524}
          x2={256.806}
          y2={109.639}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.4} />
          <stop offset={0.4} stopColor="white" stopOpacity={0.01} />
          <stop offset={0.6} stopColor="white" stopOpacity={0.01} />
          <stop offset={1} stopColor="white" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="paint7_linear_450_12732"
          x1={441.182}
          y1={194.435}
          x2={448.738}
          y2={213.509}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.4} />
          <stop offset={0.4} stopColor="white" stopOpacity={0.01} />
          <stop offset={0.6} stopColor="white" stopOpacity={0.01} />
          <stop offset={1} stopColor="white" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="paint8_linear_450_12732"
          x1={157.182}
          y1={194.435}
          x2={164.738}
          y2={213.509}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.4} />
          <stop offset={0.4} stopColor="white" stopOpacity={0.01} />
          <stop offset={0.6} stopColor="white" stopOpacity={0.01} />
          <stop offset={1} stopColor="white" stopOpacity={0.1} />
        </linearGradient>
        <clipPath id="clip1_450_12732">
          <rect
            width={27.6541}
            height={27.6541}
            fill="white"
            transform="translate(345.571 22.3674)"
          />
        </clipPath>
        <clipPath id="clip3_450_12732">
          <rect
            width={27.6541}
            height={27.6541}
            fill="white"
            transform="translate(17.176 270.982)"
          />
        </clipPath>
        <clipPath id="clip5_450_12732">
          <rect
            width={28}
            height={29}
            fill="white"
            transform="translate(515.896 281.172)"
          />
        </clipPath>
        <clipPath id="clip7_450_12732">
          <rect
            width={27.6541}
            height={27.6541}
            fill="white"
            transform="translate(90.7319 82.5149)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default Feature2SvgComponent;
