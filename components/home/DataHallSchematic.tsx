/**
 * Technical section drawing of a contained data hall pod (racks, central CDU,
 * subfloor liquid manifold and overhead busway). Pure SVG, no raster assets.
 */
const rackXs = [80, 160, 320, 400] as const; // regular racks (the CDU sits at x=250)
const unitYs = [120, 150, 180, 210, 240, 270] as const;
const stanchionXs = [90, 170, 250, 330, 410, 490] as const;
const manifoldXs = [110, 190, 270, 350, 430] as const;
const feedXs = [115, 195, 355, 435] as const;

export function DataHallSchematic() {
  return (
    <svg
      viewBox="0 0 540 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="data-hall-title data-hall-desc"
      className="h-auto w-full text-ink"
    >
      <title id="data-hall-title">Data hall section B-B</title>
      <desc id="data-hall-desc">
        Section drawing showing four 48U server racks and a 450kW cooling distribution unit inside a contained pod, fed by
        an overhead 415V busway and a subfloor liquid manifold.
      </desc>

      {/* Coordinate grid */}
      <path
        d="M20 20H520M20 70H520M20 120H520M20 170H520M20 220H520M20 270H520M20 320H520M20 360H520"
        stroke="#E5E3DE"
        strokeDasharray="2 4"
        strokeWidth="0.8"
      />
      <path
        d="M20 20V360M82 20V360M144 20V360M206 20V360M268 20V360M330 20V360M392 20V360M454 20V360M520 20V360"
        stroke="#E5E3DE"
        strokeDasharray="2 4"
        strokeWidth="0.8"
      />

      {/* Slab and raised floor */}
      <line x1="40" y1="310" x2="500" y2="310" stroke="#111A22" strokeWidth="2" />
      <line x1="40" y1="340" x2="500" y2="340" stroke="#5B636B" strokeWidth="1.5" />
      {stanchionXs.map((x) => (
        <line key={x} x1={x} y1="310" x2={x} y2="340" stroke="#5B636B" strokeWidth="1.5" />
      ))}

      {/* Subfloor liquid manifold */}
      <path d="M60 325H480" stroke="#B07A5B" strokeWidth="3" />
      {manifoldXs.map((x) => (
        <circle key={x} cx={x} cy="325" r="4" fill="#B07A5B" />
      ))}

      {/* Racks */}
      {rackXs.map((x) => (
        <g key={x}>
          <rect x={x} y="90" width="70" height="220" fill="#F7F6F3" stroke="#111A22" strokeWidth="1.5" />
          {unitYs.map((y) => (
            <line key={y} x1={x + 5} y1={y} x2={x + 65} y2={y} stroke="#5B636B" strokeWidth="1" />
          ))}
          <line x1={x + 35} y1="310" x2={x + 35} y2="280" stroke="#B07A5B" strokeWidth="2" />
        </g>
      ))}

      {/* Cold aisle containment roof */}
      <rect x="80" y="80" width="150" height="10" fill="#111A22" />
      <text x="120" y="72" fill="#5B636B" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="bold">
        CONTAINED POD
      </text>

      {/* Central CDU */}
      <rect x="250" y="70" width="50" height="240" fill="#EFECE6" stroke="#111A22" strokeWidth="2" />
      <text
        x="258"
        y="150"
        transform="rotate(-90 258 150)"
        fill="#111A22"
        fontFamily="Inter, sans-serif"
        fontSize="8"
        fontWeight="bold"
      >
        CDU 450kW
      </text>
      <circle cx="275" cy="285" r="8" stroke="#B07A5B" strokeWidth="1.5" />
      <circle cx="275" cy="285" r="3" fill="#B07A5B" />

      {/* Dimension marker */}
      <line x1="60" y1="90" x2="60" y2="310" stroke="#5B636B" strokeWidth="0.75" />
      <line x1="55" y1="90" x2="65" y2="90" stroke="#5B636B" strokeWidth="0.75" />
      <line x1="55" y1="310" x2="65" y2="310" stroke="#5B636B" strokeWidth="0.75" />
      <text x="35" y="205" fill="#5B636B" fontFamily="Inter, sans-serif" fontSize="8">
        48U
      </text>

      {/* Overhead busway and drops */}
      <rect x="50" y="38" width="440" height="12" fill="#E5E3DE" stroke="#5B636B" strokeWidth="1" />
      {feedXs.map((x) => (
        <line key={x} x1={x} y1="50" x2={x} y2="90" stroke="#5B636B" strokeDasharray="3 3" strokeWidth="1" />
      ))}
      <text x="210" y="32" fill="#111A22" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="bold">
        OVERHEAD 415V BUSWAY FEEDER
      </text>
    </svg>
  );
}
