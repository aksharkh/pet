export const MarqueeDivider = () => {
  return (
    <div className="w-full overflow-hidden bg-[var(--color-bruniverse-dark)] py-4 neo-border -rotate-2 transform scale-105 my-8 z-20 relative shadow-[0_10px_0_0_rgba(0,0,0,0.2)]">
      <div className="animate-marquee inline-block">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[var(--color-bruniverse-yellow)] font-fredoka font-bold text-2xl uppercase tracking-widest mx-8">
            🐾 WE LOVE PETS • PREMIUM CARE • HEALTHY TREATS • HAPPY TAILS 
          </span>
        ))}
      </div>
    </div>
  );
};
