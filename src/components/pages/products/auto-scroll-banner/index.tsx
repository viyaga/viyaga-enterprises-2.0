"use client"

const logos = [
  { src: "/images/american-express.svg", name: "American Express" },
  { src: "/images/united-parcel-service.svg", name: "United Parcel Service" },
  { src: "/images/verizon.svg", name: "Verizon" },
  { src: "/images/AT&T.svg", name: "AT&T" },
  { src: "/images/nike.svg", name: "Nike" },
  { src: "/images/Aliexpress.svg", name: "Aliexpress" },
  { src: "/images/mckinsey-company.svg", name: "McKinsey & Company" },
  { src: "/images/PricewaterhouseCoopers.svg", name: "PwC" },
]

export default function AutoScrollBanner() {
  return (
    <div
      className="w-full overflow-hidden py-6 border-t border-b bg-white"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div
        className="flex animate-scroll whitespace-nowrap gap-16 px-8"
        style={{
          animation: "scroll 40s linear infinite",
        }}
      >
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            className="h-10 object-contain opacity-80 transition duration-300 md:grayscale md:hover:grayscale-0 md:opacity-70 md:hover:opacity-100"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
