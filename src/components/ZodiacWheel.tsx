import { motion } from "framer-motion";

const zodiacSymbols = [
  "♈", "♎", "♉", "♏", "♊", "♐",
  "♋", "♑", "♌", "♒", "♍", "♓"
];

const ZodiacWheel = () => {
  const size = 480;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 220;
  const middleR = 170;
  const innerR = 130;
  const coreR = 80;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]"
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full drop-shadow-[0_0_80px_hsl(258,80%,50%,0.25)]">
        <defs>
          <radialGradient id="wheelGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(258, 60%, 30%)" stopOpacity="0.15" />
            <stop offset="70%" stopColor="hsl(258, 40%, 15%)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <circle cx={cx} cy={cy} r={outerR + 10} fill="url(#wheelGlow)" />

        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="hsl(0, 0%, 70%)" strokeWidth="1.5" opacity="0.5" />
        
        {/* Middle ring */}
        <circle cx={cx} cy={cy} r={middleR} fill="none" stroke="hsl(0, 0%, 70%)" strokeWidth="1.5" opacity="0.5" />
        
        {/* Inner ring */}
        <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="hsl(0, 0%, 60%)" strokeWidth="1" opacity="0.4" />
        
        {/* Core ring */}
        <circle cx={cx} cy={cy} r={coreR} fill="none" stroke="hsl(0, 0%, 50%)" strokeWidth="0.8" opacity="0.3" />
        
        {/* Small center circle */}
        <circle cx={cx} cy={cy} r={20} fill="none" stroke="hsl(0, 0%, 50%)" strokeWidth="0.5" opacity="0.3" />

        {/* Cross lines through full wheel */}
        <line x1={cx} y1={cy - outerR} x2={cx} y2={cy + outerR} stroke="hsl(0, 0%, 60%)" strokeWidth="0.5" opacity="0.35" />
        <line x1={cx - outerR} y1={cy} x2={cx + outerR} y2={cy} stroke="hsl(0, 0%, 60%)" strokeWidth="0.5" opacity="0.35" />

        {/* Division lines (12 segments) */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={`div-${i}`}
              x1={cx + Math.cos(angle) * coreR}
              y1={cy + Math.sin(angle) * coreR}
              x2={cx + Math.cos(angle) * outerR}
              y2={cy + Math.sin(angle) * outerR}
              stroke="hsl(0, 0%, 55%)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}

        {/* Star of David / Hexagram - Triangle 1 */}
        <polygon
          points={[0, 1, 2].map((i) => {
            const angle = ((i * 120 - 90) * Math.PI) / 180;
            return `${cx + Math.cos(angle) * innerR},${cy + Math.sin(angle) * innerR}`;
          }).join(" ")}
          fill="none"
          stroke="hsl(0, 0%, 65%)"
          strokeWidth="1"
          opacity="0.45"
        />
        
        {/* Star of David / Hexagram - Triangle 2 */}
        <polygon
          points={[0, 1, 2].map((i) => {
            const angle = ((i * 120 + 30) * Math.PI) / 180;
            return `${cx + Math.cos(angle) * innerR},${cy + Math.sin(angle) * innerR}`;
          }).join(" ")}
          fill="none"
          stroke="hsl(0, 0%, 65%)"
          strokeWidth="1"
          opacity="0.45"
        />

        {/* Inner hexagram connecting lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle1 = ((i * 60 - 90) * Math.PI) / 180;
          const angle2 = (((i + 2) * 60 - 90) * Math.PI) / 180;
          return (
            <line
              key={`hex-line-${i}`}
              x1={cx + Math.cos(angle1) * coreR}
              y1={cy + Math.sin(angle1) * coreR}
              x2={cx + Math.cos(angle2) * coreR}
              y2={cy + Math.sin(angle2) * coreR}
              stroke="hsl(0, 0%, 55%)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}

        {/* Zodiac symbols - placed between middle and outer rings */}
        {zodiacSymbols.map((symbol, i) => {
          const angle = ((i * 30 + 15 - 90) * Math.PI) / 180;
          const r = (middleR + outerR) / 2;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          return (
            <text
              key={`symbol-${i}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="hsl(0, 0%, 85%)"
              fontSize="22"
              fontFamily="serif"
              opacity="0.85"
            >
              {symbol}
            </text>
          );
        })}

        {/* Center dot */}
        <circle cx={cx} cy={cy} r="3" fill="hsl(0, 0%, 80%)" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

export default ZodiacWheel;
