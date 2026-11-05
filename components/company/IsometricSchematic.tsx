const rackBlocks = [
  { id: "rack-1", x: 140, label: "Compute rack 1" },
  { id: "rack-2", x: 320, label: "Compute rack 2" },
] as const;

/** Isometric CAD-style wireframe of a high-density compute bay with overhead busway and CDU. */
export function IsometricSchematic() {
  return (
    <svg
      viewBox="0 0 760 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="iso-title iso-desc"
      className="h-full w-full"
    >
      <title id="iso-title">Isometric data hall schematic</title>
      <desc id="iso-desc">
        Wireframe isometric drawing of two high-density compute racks and a CDU rack, with an overhead power busway and an
        underfloor liquid manifold.
      </desc>

      <defs>
        <pattern id="cad-grid" width="40" height="24" patternUnits="userSpaceOnUse">
          <path d="M 0,24 L 40,0 M 0,0 L 40,24" stroke="#E2E0D8" strokeOpacity="0.7" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="760" height="480" fill="url(#cad-grid)" />

      {/* Structural grid */}
      <g stroke="#8F98A1" strokeDasharray="3 3" strokeWidth="0.8">
        <line x1="120" y1="40" x2="120" y2="440" />
        <line x1="380" y1="40" x2="380" y2="440" />
        <line x1="640" y1="40" x2="640" y2="440" />
        <line x1="40" y1="400" x2="720" y2="400" />
      </g>

      {/* Overhead busway, tap-offs and drops */}
      <g stroke="#8F98A1" strokeWidth="1.2">
        <path d="M 80 110 L 680 110" />
        <path d="M 80 126 L 680 126" />
        {[180, 360, 540].map((x) => (
          <rect key={x} x={x} y="102" width="28" height="32" fill="#F7F6F3" strokeWidth="1" />
        ))}
        {[194, 374, 554].map((x) => (
          <line key={x} x1={x} y1="134" x2={x} y2="230" strokeDasharray="2 2" strokeWidth="0.9" />
        ))}
      </g>

      {/* Compute racks (isometric faces + blade slots) */}
      {rackBlocks.map(({ id, x }) => (
        <g key={id}>
          <g fill="#F7F6F3" fillOpacity="0.8" stroke="#8F98A1" strokeWidth="1.2">
            <polygon points={`${x},240 ${x + 70},200 ${x + 130},235 ${x + 60},275`} />
            <polygon points={`${x},240 ${x},380 ${x + 60},415 ${x + 60},275`} />
            <polygon points={`${x + 60},275 ${x + 60},415 ${x + 130},375 ${x + 130},235`} />
          </g>
          <g stroke="#A0A9B2" strokeWidth="0.8">
            {[290, 310, 330, 350, 370, 390].map((y) => (
              <line key={y} x1={x + 65} y1={y} x2={x + 125} y2={y - 35} />
            ))}
          </g>
        </g>
      ))}

      {/* CDU rack */}
      <g fill="#F7F6F3" fillOpacity="0.8" stroke="#8F98A1" strokeWidth="1.2">
        <polygon points="500,240 570,200 630,235 560,275" />
        <polygon points="500,240 500,380 560,415 560,275" />
        <polygon points="560,275 560,415 630,375 630,235" />
      </g>
      <g stroke="#A0A9B2" strokeWidth="0.8">
        <circle cx="595" cy="300" r="14" />
        <circle cx="595" cy="345" r="14" />
        <line x1="595" y1="314" x2="595" y2="331" />
      </g>

      {/* Underfloor secondary loop */}
      <g stroke="#8F98A1" strokeWidth="1.4">
        <path d="M 100 435 L 680 435" strokeDasharray="6 3" />
        <path d="M 100 447 L 680 447" strokeDasharray="6 3" />
        <line x1="200" y1="415" x2="200" y2="447" />
        <line x1="380" y1="415" x2="380" y2="447" />
        <line x1="560" y1="415" x2="560" y2="447" />
      </g>

      {/* Callouts */}
      <g stroke="#8F98A1" strokeWidth="0.8">
        <polyline points="374,102 430,70 520,70" />
        <polyline points="270,300 320,290 350,290" />
        <polyline points="630,320 670,320 690,340" />
      </g>
      <g fill="#5B636B" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" letterSpacing="0.05em">
        <text x="525" y="73">
          POWER DISTRIBUTION (OVERHEAD BUSWAY)
        </text>
        <text x="355" y="293">
          HIGH-DENSITY COMPUTE BAY (100kW+)
        </text>
        <text x="630" y="312">
          CDU LIQUID MANIFOLD
        </text>
      </g>
    </svg>
  );
}
