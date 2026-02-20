import heroBanner from "@/assets/hero-banner.jpg";
import { Copy, Check, Eye, Code2, Sparkles } from "lucide-react";
import { useState } from "react";

const PROMO_LINK = "https://lovable.dev?ref=YOUR_PROMO_CODE";

const Index = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMO_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Vibe Coding Class Workshop banner with floating code"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24 md:py-36 text-center">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 animate-pulse-glow">
            Live Workshop
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
            <span className="gradient-text">Vibe Coding</span>
            <br />
            <span className="text-foreground">Class</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Build real apps live using AI-powered tools. No experience needed — just vibes.
          </p>
          <a
            href="#join"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity box-glow"
          >
            Join the Session
          </a>
        </div>
      </section>

      {/* Promo Code Section */}
      <section className="py-20 px-6" id="promo">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 box-glow">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-display mb-3 text-foreground">
              Get Started with Lovable
            </h2>
            <p className="text-muted-foreground mb-8">
              Use my promo link below to sign up and get bonus credits to start building.
            </p>
            <div className="flex items-center gap-3 bg-muted rounded-lg p-3 max-w-lg mx-auto">
              <code className="flex-1 text-primary text-sm font-mono truncate text-left">
                {PROMO_LINK}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <section className="py-20 px-6" id="join">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4 text-foreground">
            How to Participate
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Choose your own adventure — code along or just hang out.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Option 1: Vibe Along */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                🎧 Vibe Along With Me
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Follow along in real time! I'll share my prompts so you can build the same app
                on your own Lovable account. Great for hands-on learners.
              </p>
            </div>

            {/* Option 2: Just Watch */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                👀 Just Watch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Prefer to sit back? No problem. Watch the magic happen live and pick up tips,
                tricks, and inspiration for your own projects later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-muted-foreground text-sm font-mono">
          Built with vibes ✨ Powered by Lovable
        </p>
      </footer>
    </div>
  );
};

export default Index;
