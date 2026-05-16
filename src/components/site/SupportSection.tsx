import { Zap, CheckCircle2, MessageSquare, Lock } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Human Support, Not Ticket Numbers",
    desc: "You're assisted by real people who understand your booking — not automated responses or disconnected vendors.",
  },
  {
    icon: CheckCircle2,
    title: "On-Ground Coordination in Critical Situations",
    desc: "Support during delays, missed confirmations, medical issues, or other unforeseen events while travelling.",
  },
  {
    icon: MessageSquare,
    title: "24×7 Access to Our Operations Team",
    desc: "Reach our team anytime via WhatsApp or call for clarity, reassurance, or intervention.",
  },
  {
    icon: Lock,
    title: "Accountability Beyond Booking",
    desc: "We don't disappear after payment. Our responsibility continues through your journey.",
  },
];

const chat = [
  { from: "user", text: "Hi, I need some help with my booking." },
  { from: "agent", text: "Hi 👋 We're here to help.\n📋 Please share your booking ID so we can check the details." },
  { from: "user", text: "Here is my booking PNR – BKD93735638" },
  { from: "agent", text: "Thanks. We've reviewed your booking.\nLet us coordinate and get back to you shortly." },
  { from: "agent", text: "We've checked with our partners and reconfirmed the details." },
];

export const SupportSection = () => {
  return (
    <section className="py-14 bg-muted/40">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        {/* Phone mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            <div className="relative w-[300px] h-[600px] rounded-[3rem] bg-secondary p-3 shadow-elevated">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-secondary rounded-full z-10" />
              <div className="h-full w-full rounded-[2.4rem] bg-card overflow-hidden flex flex-col">
                {/* header */}
                <div className="px-4 pt-8 pb-3 border-b border-border">
                  <p className="text-[10px] text-muted-foreground mb-1">9:41</p>
                  <p className="text-sm font-bold text-secondary">← PP The Traveller Support</p>
                </div>
                {/* messages */}
                <div className="flex-1 overflow-hidden p-3 space-y-2 bg-muted/30">
                  {chat.map((m, i) => (
                    <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs whitespace-pre-line ${
                        m.from === "user"
                          ? "bg-gradient-sunset text-white rounded-br-sm"
                          : "bg-card border border-border text-secondary rounded-bl-sm"
                      }`}>
                        {m.from === "agent" && <p className="text-[10px] font-bold text-primary mb-0.5">PP The Traveller</p>}
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* floating chat bubbles */}
            <span className="absolute -left-3 top-32 h-9 w-9 rounded-full bg-gradient-sunset flex items-center justify-center text-white text-sm font-bold shadow-glow">W</span>
            <span className="absolute -right-3 top-44 h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-white text-sm font-bold">K</span>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.1] mb-4">
            When Something Unexpected <br/> Happens, We're There
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl">
            On-ground teams and real humans supporting you, before, during, and after your tour. Help when it truly matters.
          </p>

          <div className="space-y-3">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-card border border-border rounded-2xl p-5 hover:shadow-card hover:-translate-y-0.5 transition-all">
                <span className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-bold text-secondary mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
