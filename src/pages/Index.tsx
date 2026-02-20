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
      <div className="max-w-2xl mx-auto px-6 py-10 space-y-8">
      {/* Hero */}
      <section className="border border-border rounded-lg px-6 py-16 md:py-20 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            What is Vibe Coding?
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            A live session where we build a real app together using AI. No setup. No experience needed.
          </p>
      </section>

      {/* Agenda */}
      <section className="border border-border rounded-lg px-6 py-12">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
            Agenda
          </h2>
          <ol className="space-y-4 max-w-md mx-auto">
            {[
              "Intros and goals",
              "How I got here and what I do — framing",
              "We live vibe code an app",
              "Next logical steps you can take",
              "Questions and answers",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-muted-foreground font-heading text-lg font-semibold shrink-0 w-6 text-right">{i + 1}.</span>
                <span className="text-foreground text-sm leading-relaxed pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
      </section>

      <section className="border border-border rounded-lg px-6 py-12 text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
            Get Ready
          </h2>
          <p className="text-muted-foreground mb-6">
            Sign up for a free Lovable account before the session so you can vibe along.
          </p>
          <div className="bg-secondary rounded-lg p-4 flex items-center gap-3 max-w-lg mx-auto">
            <span className="flex-1 text-sm text-foreground truncate text-left">
              {AFFILIATE_LINK}
            </span>
            <button
              onClick={handleCopyLink}
              className="shrink-0 p-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Copy link"
            >
              {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Open link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          {copiedLink && (
            <p className="text-sm text-muted-foreground mt-3">Link copied!</p>
          )}
      </section>

      <section className="border border-border rounded-lg px-6 py-12 text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
            Your First Prompt
          </h2>
          <p className="text-muted-foreground mb-6">
            Once you're in Lovable, paste this prompt to get started. Or just follow along and watch.
          </p>
          <div className="bg-secondary rounded-lg p-5 text-left relative">
            <p className="text-foreground text-sm leading-relaxed pr-12">
              {STARTER_PROMPT}
            </p>
            <button
              onClick={handleCopyPrompt}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Copy prompt"
            >
              {copiedPrompt ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          {copiedPrompt && (
            <p className="text-sm text-muted-foreground mt-3">Copied to clipboard!</p>
          )}
      </section>

      <section className="border border-border rounded-lg px-6 py-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <img
            src={stephanPhoto}
            alt="Stephan Smith"
            className="w-24 h-24 rounded-full object-cover shrink-0"
          />
          <div className="text-center sm:text-left">
            <h2 className="font-heading text-xl font-semibold text-foreground">Stephan Smith</h2>
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
      <section className="border border-border rounded-lg px-6 py-12 text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
            Newsletter
          </h2>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-lg mx-auto">
            I write about the headspace and patterns I see in my fractional CTO work — how technology decisions compound, and what to do about it.
          </p>
          <a
            href="https://lowcodecto.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Read the Newsletter →
          </a>
      </section>

      {/* My Ask */}
      <section className="border border-border rounded-lg px-6 py-12">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 text-center">
            My Ask
          </h2>
          <div className="max-w-lg mx-auto space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              I have a superpower. I help companies cut their tech budget while giving the team perspective on their technology patterns.
            </p>
            <p>
              I do this via a fixed-price, fixed-time package. I come in, work with the CFO — and maybe the CEO and tech lead — to cut tech spend.
            </p>
            <p className="text-foreground font-medium">
              In my last 11 fractional CTO engagements, I've found companies overspend on cloud costs by 10×.
            </p>
            <p>
              If you know someone who could use this, I'd appreciate the introduction.
            </p>
          </div>
      </section>
      </div>
    </div>
  );
};

export default Index;
