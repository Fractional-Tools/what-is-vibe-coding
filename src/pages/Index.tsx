import stephanPhoto from "@/assets/stephan-smith.png";
import { Copy, Check, ExternalLink, Linkedin } from "lucide-react";
import { useState } from "react";

const AFFILIATE_LINK = "https://lovable.dev?ref=YOUR_PROMO_CODE";

const STARTER_PROMPT = `Build me a simple landing page for a consulting business. Include a hero section with a headline, a short bio section with a photo, and a contact form. Use a clean, minimal design.`;


const Index = () => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(STARTER_PROMPT);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(AFFILIATE_LINK);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">

        {/* Hero */}
        <header className="text-center mb-16 md:mb-20">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
            What is Vibe Coding?
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            A live session where we build a real app together using AI. No setup. No experience needed.
          </p>
        </header>

        <div className="space-y-6">

          {/* Agenda */}
          <section className="border border-border rounded-lg shadow-sm px-5 py-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Agenda
                </h2>
                <ol className="space-y-3">
                  {[
                    "Intros and goals",
                    "How I got here and what I do — framing",
                    "We live vibe code an app",
                    "Next logical steps you can take",
                    "Questions and answers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-baseline gap-4">
                      <span className="text-muted-foreground text-sm font-medium shrink-0 w-5 text-right">{i + 1}</span>
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Get Ready
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Sign up for a free Lovable account before the session so you can vibe along.
                </p>
                <div className="bg-secondary rounded-md p-3 flex items-center gap-2">
                  <span className="flex-1 text-xs text-foreground truncate">
                    {AFFILIATE_LINK}
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="shrink-0 p-1.5 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Copy link"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-1.5 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Open link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                {copiedLink && (
                  <p className="text-xs text-muted-foreground mt-2">Link copied!</p>
                )}
              </div>
            </div>
          </section>

          {/* Prompt */}
          <section className="border border-border rounded-lg shadow-sm px-5 py-6">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
              Your First Prompt
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Paste this into Lovable to get started, or just watch.
            </p>
            <div className="bg-secondary rounded-md p-4 text-left relative">
              <p className="text-foreground text-xs leading-relaxed pr-8">
                {STARTER_PROMPT}
              </p>
              <button
                onClick={handleCopyPrompt}
                className="absolute top-3 right-3 p-1.5 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Copy prompt"
              >
                {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            {copiedPrompt && (
              <p className="text-xs text-muted-foreground mt-2">Copied!</p>
            )}
          </section>

          {/* About */}
          <section className="border border-border rounded-lg shadow-sm px-5 py-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <img
              src={stephanPhoto}
              alt="Stephan Smith"
              className="w-20 h-20 rounded-full object-cover shrink-0"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-heading text-lg font-semibold text-foreground">Stephan Smith</h2>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                Boston-based serial founder and fractional CTO. I help startups and SMBs make better technology decisions. Previously co-founded a company in the Techstars Boston cohort.
              </p>
              <a
                href="https://www.linkedin.com/in/stephansmithbc93/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </section>

          {/* Newsletter */}
          <section className="border border-border rounded-lg shadow-sm px-5 py-6">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
              Newsletter
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I write about Founder Mindset, Economics of Code, and The Wrong-Right Way — inspired by thinkers like <a href="https://paulkrugman.substack.com/" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:opacity-80 transition-opacity">Paul Krugman</a> and Chris Voss.{" "}
              <a
                href="https://lowcodecto.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:opacity-80 transition-opacity"
              >
                Read the newsletter →
              </a>
            </p>
          </section>

          {/* My Ask */}
          <section className="border border-border rounded-lg shadow-sm px-5 py-6">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              My Ask
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                I have a superpower. I help companies cut their tech budget while giving the team perspective on their technology patterns.
              </p>
              <p>
                I do this via a fixed-price, fixed-time package. I come in, work with the CFO — and maybe the CEO and tech lead — to cut tech spend.
              </p>
              <p className="text-foreground font-medium text-base">
                In my last 11 fractional CTO engagements, I've found companies overspend on cloud costs by 10×.
              </p>
              <p>
                If you know someone who could use this, I'd appreciate the introduction.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Index;
