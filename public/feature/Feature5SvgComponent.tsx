import React from 'react';
import { easeInOut, easeOut, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Feature5SvgComponent = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Original dimensions for aspect ratio
  const originalWidth = 528;
  const originalHeight = 357;

  // Variants for appearance animation
  const pathAppearVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: 'spring',
          duration: 2,
          bounce: 0.4,
          delay: i * 0.15,
        },
        opacity: { duration: 0.8, delay: i * 0.15 },
      },
    }),
  };

  const circleAppearVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      y: -26 / originalHeight * 100, // Scale relative to original height
      x: 4 / originalWidth * 100, // Scale relative to original width
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 1.2,
      },
    },
  };

  const rectAppearVariants = {
    hidden: { opacity: 0, y: 30 / originalHeight * 100 },
    visible: {
      opacity: 0,
      y: 10 / originalHeight * 100,
      transition: { duration: 1, ease: easeOut },
    },
  };

  // Variants for infinite animation
  const pathInfiniteVariants = {
    visible: (i) => ({
      scale: [1, 1.02, 1],
      rotate: [0, 2, -2, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 3 + i * 0.2,
        ease: easeInOut,
        delay: i * 0.3,
      },
    }),
  };

  const circleInfiniteVariants = {
    visible: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.9, 1],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 2,
        ease: easeInOut,
      },
    },
  };

  const rectInfiniteVariants = {
    visible: {
      y: [0, -5 / originalHeight * 100, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 2.5,
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <svg
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <motion.g
          clipPath="url(#clip0_450_12523)"
          initial={{ x: 30 / originalWidth * 100, opacity: 0 }}
          whileInView={{ x: 20 / originalWidth * 100, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.path
            initial={{ x: -30 / originalWidth * 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            d="M-102.061 103.677V219.195C-102.061 228.364 -102.061 232.948 -100.491 236.805C-99.1049 240.21 -96.8608 243.197 -93.9771 245.477C-90.7101 248.059 -86.307 249.336 -77.5008 251.89L-77.5006 251.89L86.4454 299.444C93.1401 301.386 96.4875 302.357 99.7771 302.276C102.688 302.204 105.554 301.536 108.196 300.312C111.182 298.929 113.755 296.577 118.899 291.874L118.899 291.874L159.567 254.696C163.645 250.967 165.685 249.103 167.147 246.877C168.443 244.903 169.401 242.728 169.983 240.441C170.64 237.859 170.64 235.096 170.64 229.57V128.41C170.64 122.887 170.64 120.126 169.984 117.546C169.403 115.259 168.446 113.085 167.151 111.113C165.691 108.888 163.654 107.024 159.58 103.295L159.58 103.295L132.554 78.5628C128.946 75.2615 127.143 73.6109 125.08 72.4333C123.251 71.3889 121.277 70.6219 119.222 70.1574C116.906 69.6337 114.461 69.6337 109.571 69.6337H-68.017C-79.9334 69.6337 -85.8916 69.6337 -90.443 71.9527C-94.4466 73.9927 -97.7016 77.2477 -99.7415 81.2512C-102.061 85.8027 -102.061 91.7609 -102.061 103.677Z"
            fill="url(#paint0_linear_450_12523)"
            fillOpacity="0.05"
            style={{ mixBlendMode: 'luminosity' }}
          />
          <motion.path
            initial={{ x: -30 / originalWidth * 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            d="M-102.061 103.677V219.195C-102.061 228.364 -102.061 232.948 -100.491 236.805C-99.1049 240.21 -96.8608 243.197 -93.9771 245.477C-90.7101 248.059 -86.307 249.336 -77.5008 251.89L-77.5006 251.89L86.4454 299.444C93.1401 301.386 96.4875 302.357 99.7771 302.276C102.688 302.204 105.554 301.536 108.196 300.312C111.182 298.929 113.755 296.577 118.899 291.874L118.899 291.874L159.567 254.696C163.645 250.967 165.685 249.103 167.147 246.877C168.443 244.903 169.401 242.728 169.983 240.441C170.64 237.859 170.64 235.096 170.64 229.57V128.41C170.64 122.887 170.64 120.126 169.984 117.546C169.403 115.259 168.446 113.085 167.151 111.113C165.691 108.888 163.654 107.024 159.58 103.295L159.58 103.295L132.554 78.5628C128.946 75.2615 127.143 73.6109 125.08 72.4333C123.251 71.3889 121.277 70.6219 119.222 70.1574C116.906 69.6337 114.461 69.6337 109.571 69.6337H-68.017C-79.9334 69.6337 -85.8916 69.6337 -90.443 71.9527C-94.4466 73.9927 -97.7016 77.2477 -99.7415 81.2512C-102.061 85.8027 -102.061 91.7609 -102.061 103.677Z"
            stroke="url(#paint1_linear_450_12523)"
            strokeOpacity="0.25"
            strokeWidth="1.99474"
          />
          <motion.path
            initial={{ x: 30 / originalWidth * 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            d="M628.08 103.677V219.195C628.08 228.364 628.08 232.948 626.51 236.805C625.124 240.21 622.88 243.197 619.997 245.477C616.73 248.059 612.326 249.336 603.52 251.89L603.52 251.89L439.574 299.444C432.879 301.386 429.532 302.357 426.242 302.276C423.331 302.204 420.466 301.536 417.823 300.312C414.837 298.929 412.265 296.577 407.12 291.874L407.12 291.874L366.453 254.696C362.374 250.967 360.335 249.103 358.873 246.877C357.577 244.903 356.618 242.728 356.036 240.441C355.38 237.859 355.38 235.096 355.38 229.57V128.41C355.38 122.887 355.38 120.126 356.035 117.546C356.617 115.259 357.574 113.085 358.868 111.113C360.329 108.888 362.366 107.024 366.44 103.295L366.44 103.295L393.466 78.5628C397.073 75.2615 398.877 73.6109 400.939 72.4333C402.769 71.3889 404.743 70.6219 406.797 70.1574C409.114 69.6337 411.559 69.6337 416.449 69.6337H594.037C605.953 69.6337 611.911 69.6337 616.463 71.9527C620.466 73.9927 623.721 77.2477 625.761 81.2512C628.08 85.8027 628.08 91.7609 628.08 103.677Z"
            fill="url(#paint2_linear_450_12523)"
            fillOpacity="0.05"
            style={{ mixBlendMode: 'luminosity' }}
          />
          <motion.path
            custom={3}
            // @ts-ignore
            variants={pathAppearVariants}
            animate={inView ? pathInfiniteVariants : {}}
            d="M628.08 103.677V219.195C628.08 228.364 628.08 232.948 626.51 236.805C625.124 240.21 622.88 243.197 619.997 245.477C616.73 248.059 612.326 249.336 603.52 251.89L603.52 251.89L439.574 299.444C432.879 301.386 429.532 302.357 426.242 302.276C423.331 302.204 420.466 301.536 417.823 300.312C414.837 298.929 412.265 296.577 407.12 291.874L407.12 291.874L366.453 254.696C362.374 250.967 360.335 249.103 358.873 246.877C357.577 244.903 356.618 242.728 356.036 240.441C355.38 237.859 355.38 235.096 355.38 229.57V128.41C355.38 122.887 355.38 120.126 356.035 117.546C356.617 115.259 357.574 113.085 358.868 111.113C360.329 108.888 362.366 107.024 366.44 103.295L366.44 103.295L393.466 78.5628C397.073 75.2615 398.877 73.6109 400.939 72.4333C402.769 71.3889 404.743 70.6219 406.797 70.1574C409.114 69.6337 411.559 69.6337 416.449 69.6337H594.037C605.953 69.6337 611.911 69.6337 616.463 71.9527C620.466 73.9927 623.721 77.2477 625.761 81.2512C628.08 85.8027 628.08 91.7609 628.08 103.677Z"
            stroke="url(#paint3_linear_450_12523)"
            strokeOpacity="0.25"
            strokeWidth="1.99474"
          />
          <mask
            id="mask0_450_12523"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x={33 / originalWidth * 100 + '%'}
            y={52 / originalHeight * 100 + '%'}
            width={462 / originalWidth * 100 + '%'}
            height={266 / originalHeight * 100 + '%'}
          >
            <ellipse
              cx={263.999 / originalWidth * 100 + '%'}
              cy={185.231 / originalHeight * 100 + '%'}
              rx={230.304 / originalWidth * 100 + '%'}
              ry={132.297 / originalHeight * 100 + '%'}
              fill="url(#paint4_radial_450_12523)"
            />
          </mask>
          <motion.g
            mask="url(#mask0_450_12523)"
            initial={{ y: 30 / originalHeight * 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <path
              d="M99.8428 26.1051L170.613 97.0331L201.742 129.459"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth={1.29703 / originalWidth * 100 + '%'}
              strokeDasharray="6.38 6.38"
            />
            <path
              d="M440.982 5.89543L356.987 97.0331L325.858 129.459"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth={1.29703 / originalWidth * 100 + '%'}
              strokeDasharray="6.38 6.38"
            />
            <path
              d="M79.6326 371.286L168.018 282.508L199.147 250.083"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth={1.29703 / originalWidth * 100 + '%'}
              strokeDasharray="6.38 6.38"
            />
            <path
              d="M451.491 373.711L362.175 285.102L331.047 252.677"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth={1.29703 / originalWidth * 100 + '%'}
              strokeDasharray="6.38 6.38"
            />
            <path
              opacity="0.5"
              d="M211.366 269.46C212.083 268.922 212.442 268.653 212.812 268.4C213.14 268.175 213.475 267.96 213.816 267.754C214.2 267.523 214.593 267.308 215.381 266.878L226.835 260.626C229.606 259.114 230.991 258.358 232.455 257.824C233.755 257.35 235.099 257.007 236.467 256.8C238.008 256.567 239.586 256.567 242.743 256.567H289.036C292.213 256.567 293.802 256.567 295.352 256.803C296.729 257.012 298.081 257.36 299.388 257.84C300.86 258.38 302.252 259.146 305.036 260.677L319.533 268.649L333.794 278.124C335.287 279.116 336.034 279.612 336.732 280.168C337.352 280.662 337.944 281.191 338.504 281.753C339.134 282.385 339.71 283.072 340.862 284.446L360.49 307.855C373.911 323.86 380.621 331.863 380.904 338.94C381.15 345.102 378.643 351.054 374.063 355.183C368.802 359.926 358.388 360.716 337.561 362.297L191.624 373.377C167.151 375.235 154.915 376.164 148.764 371.726C143.424 367.873 140.23 361.715 140.156 355.13C140.071 347.546 147.879 338.078 163.494 319.143L190.757 286.084C191.702 284.938 192.174 284.366 192.685 283.83C193.138 283.353 193.614 282.899 194.111 282.467C194.67 281.982 195.264 281.537 196.451 280.646L211.366 269.46Z"
              fill="#E1E0E0"
              fillOpacity="0.32"
              stroke="#F8F8F8"
              strokeWidth={1.94554 / originalWidth * 100 + '%'}
            />
            <foreignObject
              x={163.279 / originalWidth * 100 + '%'}
              y={219.013 / originalHeight * 100 + '%'}
              width={202.738 / originalWidth * 100 + '%'}
              height={198.644 / originalHeight * 100 + '%'}
            >
              <div
                style={{
                  backdropFilter: 'blur(21.28px)',
                  clipPath: 'url(#bgblur_1_450_12523_clip_path)',
                  height: '100%',
                  width: '100%',
                }}
              ></div>
            </foreignObject>
            <g filter="url(#filter0_d_450_12523)">
              <motion.path
                custom={9}
                // @ts-ignore
                variants={pathAppearVariants}
                animate={inView ? pathInfiniteVariants : {}}
                d="M221.201 276.958L232.438 267.234C234.435 265.506 235.433 264.642 236.562 264.026C237.563 263.48 238.637 263.08 239.751 262.838C241.007 262.565 242.328 262.565 244.969 262.565H285.816C288.727 262.565 290.182 262.565 291.553 262.892C292.768 263.182 293.931 263.661 294.998 264.311C296.201 265.044 297.235 266.069 299.301 268.119L306.923 275.679L316.313 284.357C318.58 286.451 319.713 287.499 320.525 288.746C321.245 289.851 321.778 291.068 322.101 292.347C322.465 293.79 322.465 295.333 322.465 298.42V333.679C322.465 340.382 322.465 343.733 321.161 346.293C320.013 348.545 318.182 350.376 315.93 351.524C313.37 352.828 310.019 352.828 303.316 352.828H225.98C219.277 352.828 215.926 352.828 213.365 351.524C211.113 350.376 209.282 348.545 208.135 346.293C206.831 343.733 206.831 340.382 206.831 333.679V298.505C206.831 295.388 206.831 293.829 207.202 292.374C207.531 291.084 208.072 289.858 208.805 288.747C209.631 287.493 210.783 286.444 213.088 284.345L221.201 276.958Z"
                fill="#F8F8F8"
                fillOpacity="0.05"
                style={{ mixBlendMode: 'luminosity' }}
                shapeRendering="crispEdges"
              />
              <motion.path
                custom={10}
                // @ts-ignore
                variants={pathAppearVariants}
                animate={inView ? pathInfiniteVariants : {}}
                d="M221.201 276.958L232.438 267.234C234.435 265.506 235.433 264.642 236.562 264.026C237.563 263.48 238.637 263.08 239.751 262.838C241.007 262.565 242.328 262.565 244.969 262.565H285.816C288.727 262.565 290.182 262.565 291.553 262.892C292.768 263.182 293.931 263.661 294.998 264.311C296.201 265.044 297.235 266.069 299.301 268.119L306.923 275.679L316.313 284.357C318.58 286.451 319.713 287.499 320.525 288.746C321.245 289.851 321.778 291.068 322.101 292.347C322.465 293.79 322.465 295.333 322.465 298.42V333.679C322.465 340.382 322.465 343.733 321.161 346.293C320.013 348.545 318.182 350.376 315.93 351.524C313.37 352.828 310.019 352.828 303.316 352.828H225.98C219.277 352.828 215.926 352.828 213.365 351.524C211.113 350.376 209.282 348.545 208.135 346.293C206.831 343.733 206.831 340.382 206.831 333.679V298.505C206.831 295.388 206.831 293.829 207.202 292.374C207.531 291.084 208.072 289.858 208.805 288.747C209.631 287.493 210.783 286.444 213.088 284.345L221.201 276.958Z"
                stroke="url(#paint5_linear_450_12523)"
                strokeOpacity="0.25"
                strokeWidth={1.99474 / originalWidth * 100 + '%'}
                shapeRendering="crispEdges"
              />
            </g>
            <motion.rect
              x={199.148 / originalWidth * 100 + '%'}
              y={121.677 / originalHeight * 100 + '%'}
              width={129.703 / originalWidth * 100 + '%'}
              height={129.703 / originalHeight * 100 + '%'}
              rx={20.7525 / originalWidth * 100 + '%'}
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth={1.29703 / originalWidth * 100 + '%'}
              strokeDasharray="6.38 6.38"
              variants={rectAppearVariants}
              animate={inView ? rectInfiniteVariants : {}}
            />
          </motion.g>

          <motion.rect
            x={120.114 / originalWidth * 100 + '%'}
            y={41.9344 / originalHeight * 100 + '%'}
            width={295.772 / originalWidth * 100 + '%'}
            height={295.772 / originalHeight * 100 + '%'}
            fill="url(#pattern0_450_12523)"
            variants={rectAppearVariants}
            animate={inView ? rectInfiniteVariants : {}}
          />
          <foreignObject
            x={245.747 / originalWidth * 100 + '%'}
            y={84.6275 / originalHeight * 100 + '%'}
            width={36.3169 / originalWidth * 100 + '%'}
            height={60.528 / originalHeight * 100 + '%'}
          >
            <div
              style={{
                backdropFilter: 'blur(5.19px)',
                clipPath: 'url(#bgblur_2_450_12523_clip_path)',
                height: '100%',
                width: '100%',
              }}
            ></div>
          </foreignObject>
          <g filter="url(#filter1_di_450_12523)">
            <motion.circle
              cx={263.905 / originalWidth * 100 + '%'}
              cy={102.786 / originalHeight * 100 + '%'}
              r={7.78218 / originalWidth * 100 + '%'}
              fill="#F8F8F8"
              fillOpacity="0.01"
              shapeRendering="crispEdges"
              // @ts-ignore
              variants={circleAppearVariants}
              animate={inView ? circleInfiniteVariants : {}}
            />
            <motion.circle
              cx={263.905 / originalWidth * 100 + '%'}
              cy={102.786 / originalHeight * 100 + '%'}
              r={7.78218 / originalWidth * 100 + '%'}
              fill="#121212"
              fillOpacity="0.3"
              shapeRendering="crispEdges"
              // @ts-ignore
              variants={circleAppearVariants}
              animate={inView ? circleInfiniteVariants : {}}
            />
            <motion.circle
              cx={263.905 / originalWidth * 100 + '%'}
              cy={102.786 / originalHeight * 100 + '%'}
              r={6.80941 / originalWidth * 100 + '%'}
              stroke="url(#paint6_linear_450_12523)"
              strokeOpacity="0.25"
              strokeWidth={1.94554 / originalWidth * 100 + '%'}
              shapeRendering="crispEdges"
              // @ts-ignore
              variants={circleAppearVariants}
              animate={inView ? circleInfiniteVariants : {}}
            />
          </g>
          <motion.circle
            cx={263.907 / originalWidth * 100 + '%'}
            cy={102.785 / originalHeight * 100 + '%'}
            r={3.89109 / originalWidth * 100 + '%'}
            fill="#F8F8F8"
            // @ts-ignore
            variants={circleAppearVariants}
            animate={inView ? circleInfiniteVariants : {}}
          />
        </motion.g>
        <defs>
          <filter
            id="filter0_d_450_12523"
            x={163.279 / originalWidth * 100 + '%'}
            y={219.013 / originalHeight * 100 + '%'}
            width={202.738 / originalWidth * 100 + '%'}
            height={198.644 / originalHeight * 100 + '%'}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={31.9158 / originalHeight * 100 + '%'} />
            <feGaussianBlur stdDeviation={15.9579 / originalWidth * 100 + '%'} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_450_12523"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_450_12523"
              result="shape"
            />
          </filter>
          <clipPath
            id="bgblur_1_450_12523_clip_path"
            transform={`translate(${-163.279 / originalWidth * 100}% ${-219.013 / originalHeight * 100}%) scale(${100 / originalWidth}, ${100 / originalHeight})`}
          >
            <path d="M221.201 276.958L232.438 267.234C234.435 265.506 235.433 264.642 236.562 264.026C237.563 263.48 238.637 263.08 239.751 262.838C241.007 262.565 242.328 262.565 244.969 262.565H285.816C288.727 262.565 290.182 262.565 291.553 262.892C292.768 263.182 293.931 263.661 294.998 264.311C296.201 265.044 297.235 266.069 299.301 268.119L306.923 275.679L316.313 284.357C318.58 286.451 319.713 287.499 320.525 288.746C321.245 289.851 321.778 291.068 322.101 292.347C322.465 293.79 322.465 295.333 322.465 298.42V333.679C322.465 340.382 322.465 343.733 321.161 346.293C320.013 348.545 318.182 350.376 315.93 351.524C313.37 352.828 310.019 352.828 303.316 352.828H225.98C219.277 352.828 215.926 352.828 213.365 351.524C211.113 350.376 209.282 348.545 208.135 346.293C206.831 343.733 206.831 340.382 206.831 333.679V298.505C206.831 295.388 206.831 293.829 207.202 292.374C207.531 291.084 208.072 289.858 208.805 288.747C209.631 287.493 210.783 286.444 213.088 284.345L221.201 276.958Z" />
          </clipPath>
          <pattern
            id="pattern0_450_12523"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_450_12523" transform="scale(0.000976562)" />
          </pattern>
          <filter
            id="filter1_di_450_12523"
            x={245.747 / originalWidth * 100 + '%'}
            y={84.6275 / originalHeight * 100 + '%'}
            width={36.3169 / originalWidth * 100 + '%'}
            height={60.528 / originalHeight * 100 + '%'}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius={13.835 / originalWidth * 100 + '%'}
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_450_12523"
            />
            <feOffset dy={27.67 / originalHeight * 100 + '%'} />
            <feGaussianBlur stdDeviation={10.3762 / originalWidth * 100 + '%'} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
            />
            <feBlend
              mode="multiply"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_450_12523"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_450_12523"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={3.45875 / originalWidth * 100 + '%'} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_450_12523"
            />
          </filter>
          <clipPath
            id="bgblur_2_450_12523_clip_path"
            transform={`translate(${-245.747 / originalWidth * 100}% ${-84.6275 / originalHeight * 100}%) scale(${100 / originalWidth}, ${100 / originalHeight})`}
          >
            <circle cx="263.905" cy="102.786" r="7.78218" />
          </clipPath>
          <linearGradient
            id="paint0_linear_450_12523"
            x1={186.622 / originalWidth * 100 + '%'}
            y1={132.206 / originalHeight * 100 + '%'}
            x2={55.9688 / originalWidth * 100 + '%'}
            y2={186.783 / originalHeight * 100 + '%'}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F8F8F8" />
            <stop offset="1" stopColor="#929292" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_450_12523"
            x1={161.72 / originalWidth * 100 + '%'}
            y1={180.883 / originalHeight * 100 + '%'}
            x2={35.5525 / originalWidth * 100 + '%'}
            y2={217.144 / originalHeight * 100 + '%'}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
            <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_450_12523"
            x1={339.397 / originalWidth * 100 + '%'}
            y1={132.206 / originalHeight * 100 + '%'}
            x2={470.051 / originalWidth * 100 + '%'}
            y2={186.783 / originalHeight * 100 + '%'}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F8F8F8" />
            <stop offset="1" stopColor="#929292" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_450_12523"
            x1={364.3 / originalWidth * 100 + '%'}
            y1={180.883 / originalHeight * 100 + '%'}
            x2={490.467 / originalWidth * 100 + '%'}
            y2={217.144 / originalHeight * 100 + '%'}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
            <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
          <radialGradient
            id="paint4_radial_450_12523"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`translate(${263.999 / originalWidth * 100}% ${185.231 / originalHeight * 100}%) rotate(90) scale(${132.297 / originalHeight * 100}%, ${230.304 / originalWidth * 100}%)`}
          >
            <stop stopColor="#D9D9D9" />
            <stop offset="1" stopColor="#737373" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint5_linear_450_12523"
            x1={264.648 / originalWidth * 100 + '%'}
            y1={262.565 / originalHeight * 100 + '%'}
            x2={297.014 / originalWidth * 100 + '%'}
            y2={367.232 / originalHeight * 100 + '%'}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
            <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
            <stop offset="1" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_450_12523"
            x1={263.905 / originalWidth * 100 + '%'}
            y1={95.0038 / originalHeight * 100 + '%'}
            x2={270.676 / originalWidth * 100 + '%'}
            y2={112.095 / originalHeight * 100 + '%'}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
            <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
            <stop offset="1" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
          <clipPath id="clip0_450_12523">
            <rect
              width="100%"
              height="100%"
              fill="white"
              transform="translate(0 0.528198)"
            />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Feature5SvgComponent;
