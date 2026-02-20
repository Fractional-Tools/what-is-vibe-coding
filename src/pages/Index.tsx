import stephanPhoto from "@/assets/stephan-smith.png";
import { Copy, Check, ExternalLink, Linkedin } from "lucide-react";
import { useState } from "react";

const AFFILIATE_LINK = "https://lovable.dev/invite/6NNQZW1";

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
          <div className="mt-8 mx-auto max-w-lg rounded-xl bg-gradient-to-br from-[hsl(48_100%_92%)] to-[hsl(40_100%_88%)] border border-[hsl(42_80%_75%)] shadow-lg px-8 py-6 text-center">
            <p className="text-foreground text-base font-semibold leading-relaxed tracking-tight">
              🎯 The goal: get you to the <em>aha</em> moment where you can see yourself building that app you always wanted.
            </p>
          </div>
        </header>

        <div className="space-y-6">

          {/* Agenda */}
          <section className="border border-border rounded-lg shadow-md px-5 py-6">
            <div className="grid md:grid-cols-[1fr_40%] gap-6">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-1">
                  Agenda
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Loose outline of what we'll build together.
                </p>
                <ol className="divide-y divide-border">
                  {[
                    { title: "Intros and goals", time: "5 min" },
                    { title: "How I got here and what I do — framing", time: "10 min" },
                    { title: "We live vibe code an app", time: "25 min" },
                    { title: "Next logical steps you can take", time: "10 min" },
                    { title: "Questions and answers", time: "10 min" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-baseline gap-4 py-2.5">
                      <span className="text-muted-foreground text-sm font-medium shrink-0 w-5 text-right">{i + 1}</span>
                      <span className="text-foreground text-sm flex-1">{item.title}</span>
                      <span className="text-muted-foreground text-xs shrink-0">{item.time}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Prepare for the Session
                </h2>
                <p className="text-muted-foreground text-sm mb-1">
                  Sign up for a free Lovable account before the session so you can vibe along.
                </p>
                <p className="text-muted-foreground text-xs italic mb-4">
                  This is optional — just watching is totally fine.
                </p>
                <div className="bg-[hsl(140_40%_93%)] rounded-md p-3 flex items-center gap-2">
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

          {/* Terms */}
          <section className="border border-border rounded-lg shadow-md px-5 py-6">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              Terms We'll Cover
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Vibe Coding", "LLM", "Memory", "Scaling", "Co-building", "Bolt", "Yolo", "FUD", "Cursor", "Claude Code", "Warp"].map((term) => (
                <span
                  key={term}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-foreground"
                >
                  {term}
                </span>
              ))}
            </div>
          </section>

          {/* Won't Cover */}
          <section className="border border-border rounded-lg shadow-md px-5 py-6">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
              What We Won't Cover
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              These are important topics, but outside the scope of this session.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Model Training", "Vector DBs", "Ethics of AI", "Job Risk for Developers"].map((term) => (
                <span
                  key={term}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-muted-foreground line-through"
                >
                  {term}
                </span>
              ))}
            </div>
          </section>

          <section className="border border-border rounded-lg shadow-md px-5 py-6">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
              Prompt Along
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              These are the prompts I'll use during the session. I'll pause and explain how I think about things and why I prompt in a given order. If you want to build along with me, copy each prompt as we go.
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
          <section className="border border-border rounded-lg shadow-md px-5 py-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
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
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <a
                  href="https://www.linkedin.com/in/stephansmithbc93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://stephansmith.solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  stephansmith.solutions
                </a>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="border border-border rounded-lg shadow-md px-5 py-6">
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

          {/* Referral */}
          <section className="border border-border rounded-lg shadow-md px-5 py-6">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              Can You Refer Me?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I help companies cut their tech budget via a fixed-price, fixed-time package — working with the CFO, CEO, and tech lead to find savings. <span className="text-foreground font-medium">In my last 11 engagements, I've found companies overspend on cloud costs by 10×.</span> If you know someone who could use this, I'd appreciate the introduction.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Index;
