'use client';

export default function AmbientLightning() {
  return (
    <div className="ambient-lightning-backdrop" aria-hidden="true">
      {/* Ambient atmospheric luminous glow layers */}
      <div className="lightning-glow-ambient glow-orbit-1" />
      <div className="lightning-glow-ambient glow-orbit-2" />

      {/* Looping faded lightning discharge arcs */}
      <svg
        className="lightning-svg-canvas"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lightning-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9D2C4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#E9D7B7" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="lightning-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B68B54" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#C9D2C4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>

          <filter id="lightning-blur-subtle" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="lightning-glow-wide" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {/* Primary branched lightning arc 1: sweeps diagonally across top-right in loop order */}
        <g className="lightning-branch branch-alpha" filter="url(#lightning-blur-subtle)">
          <path
            d="M 980,-20 L 920,110 L 950,150 L 870,260 L 895,310 L 810,430 L 830,470 L 760,590 L 710,680 L 640,780 L 590,920"
            stroke="url(#lightning-grad-1)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subtle sub-branches */}
          <path
            d="M 920,110 L 970,160 L 990,220"
            stroke="url(#lightning-grad-1)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M 870,260 L 830,300 L 790,320"
            stroke="url(#lightning-grad-1)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M 810,430 L 860,490 L 880,540"
            stroke="url(#lightning-grad-1)"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path
            d="M 760,590 L 710,640 L 670,660"
            stroke="url(#lightning-grad-1)"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
        </g>

        {/* Ambient wide glow following branch alpha */}
        <g className="lightning-branch branch-alpha-glow" filter="url(#lightning-glow-wide)">
          <path
            d="M 980,-20 L 920,110 L 870,260 L 810,430 L 760,590 L 640,780 L 590,920"
            stroke="#E9D7B7"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Secondary branched lightning arc 2: subtle counter-pulse from upper-left to center */}
        <g className="lightning-branch branch-beta" filter="url(#lightning-blur-subtle)">
          <path
            d="M 220,-30 L 260,90 L 235,140 L 310,240 L 290,290 L 380,410 L 350,460 L 440,580 L 480,690 L 530,820 L 510,930"
            stroke="url(#lightning-grad-2)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Tributary branches */}
          <path
            d="M 260,90 L 210,140 L 190,190"
            stroke="url(#lightning-grad-2)"
            strokeWidth="0.95"
            strokeLinecap="round"
          />
          <path
            d="M 310,240 L 360,290 L 390,320"
            stroke="url(#lightning-grad-2)"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path
            d="M 380,410 L 330,460 L 310,500"
            stroke="url(#lightning-grad-2)"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <path
            d="M 440,580 L 500,630 L 530,680"
            stroke="url(#lightning-grad-2)"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
        </g>

        {/* Ambient wide glow following branch beta */}
        <g className="lightning-branch branch-beta-glow" filter="url(#lightning-glow-wide)">
          <path
            d="M 220,-30 L 260,90 L 310,240 L 380,410 L 440,580 L 530,820 L 510,930"
            stroke="#C9D2C4"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Tertiary sheet flash: subtle horizontal horizon discharge */}
        <g className="lightning-branch branch-gamma" filter="url(#lightning-blur-subtle)">
          <path
            d="M 50,480 L 180,460 L 290,490 L 450,440 L 610,470 L 780,430 L 940,460 L 1100,420 L 1260,450 L 1420,430"
            stroke="url(#lightning-grad-1)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
