import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InvestmentPhilosophy() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-[#0D2266] to-navy-900" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold-500/[0.03] blur-[120px] animate-[float1_30s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-navy-400/[0.05] blur-[100px] animate-[float2_25s_ease-in-out_infinite]" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative diagonal line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="section-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-gold-400 block mb-4">
                OUR PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                LAND TODAY.
                <br />
                <span className="text-gold-400">POSSIBILITIES TOMORROW.</span>
              </h2>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-12 h-0.5 bg-gold-500" />
                <div className="w-2 h-2 rotate-45 border border-gold-500/50" />
              </div>

              <p className="mt-8 text-neutral-300 text-lg leading-relaxed max-w-lg">
                Land represents one of the most tangible forms of property ownership. We seek opportunities where location, planning and surrounding development can contribute to long-term value.
              </p>

              {/* Premium disclaimer card */}
              <div className="mt-8 p-5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Any information regarding location advantages or future development potential should not be interpreted as a guarantee of appreciation, returns or investment performance. Independent verification is recommended.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side — image with premium frame */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Gold frame accent */}
              <div className="absolute -inset-3 border border-gold-500/15 rounded-2xl" />
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80"
                  alt="Aerial view of land development"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-elevated px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Location Value</p>
                  <p className="text-sm font-bold text-neutral-900">Strategic Growth</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
