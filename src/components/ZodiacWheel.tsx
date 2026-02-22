import { motion } from "framer-motion";

const zodiacSymbols = [
  "♈", "♉", "♊", "♋", "♌", "♍",
  "♎", "♏", "♐", "♑", "♒", "♓"
];

const ZodiacWheel = () => {
  const radius = 160;
  const innerRadius = 110;
  const centerX = 200;
  const centerY = 200;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      className="relative w-[400px] h-[400px] animate-float"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_60px_hsl(258,100%,65%,0.3)]">
        {/* Outer circle */}
        <circle cx={centerX} cy={centerY} r={185} fill="none" stroke="hsl(258, 40%, 25%)" strokeWidth="1" opacity="0.6" />
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="hsl(258, 60%, 35%)" strokeWidth="1.5" opacity="0.8" />
        <circle cx={centerX} cy={centerY} r={innerRadius} fill="none" stroke="hsl(258, 40%, 25%)" strokeWidth="1" opacity="0.6" />
        <circle cx={centerX} cy={centerY} r={60} fill="none" stroke="hsl(258, 40%, 20%)" strokeWidth="0.8" opacity="0.4" />

        {/* Cross lines */}
        <line x1={centerX} y1={centerY - 185} x2={centerX} y2={centerY + 185} stroke="hsl(258, 30%, 25%)" strokeWidth="0.5" opacity="0.4" />
        <line x1={centerX - 185} y1={centerY} x2={centerX + 185} y2={centerY} stroke="hsl(258, 30%, 25%)" strokeWidth="0.5" opacity="0.4" />

        {/* Diagonal lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={`line-${i}`}
              x1={centerX + Math.cos(angle) * 60}
              y1={centerY + Math.sin(angle) * 60}
              x2={centerX + Math.cos(angle) * 185}
              y2={centerY + Math.sin(angle) * 185}
              stroke="hsl(258, 30%, 22%)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}

        {/* Inner star hexagram */}
        {[0, 1].map((offset) => (
          <polygon
            key={`hex-${offset}`}
            points={[0, 1, 2].map((i) => {
              const angle = ((i * 120 + offset * 60 - 90) * Math.PI) / 180;
              return `${centerX + Math.cos(angle) * 70},${centerY + Math.sin(angle) * 70}`;
            }).join(" ")}
            fill="none"
            stroke="hsl(258, 50%, 35%)"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}

        {/* Zodiac symbols */}
        {zodiacSymbols.map((symbol, i) => {
          const angle = ((i * 30 - 90) * Math.PI) / 180;
          const x = centerX + Math.cos(angle) * ((radius + 185) / 2);
          const y = centerY + Math.sin(angle) * ((radius + 185) / 2);
          return (
            <text
              key={symbol}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="hsl(258, 100%, 80%)"
              fontSize="18"
              fontFamily="serif"
              opacity="0.9"
            >
              {symbol}
            </text>
          );
        })}

        {/* Center dot */}
        <circle cx={centerX} cy={centerY} r="4" fill="hsl(258, 100%, 65%)" opacity="0.8" />
      </svg>
    </motion.div>
  );
};

export default ZodiacWheel;
