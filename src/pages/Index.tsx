import { Link } from "react-router-dom";
import bhutanHero from "@/assets/bhutan-hero.jpg";
import harshaFounder from "@/assets/harsha-founder.jpg";

const Index = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bhutanHero})` }}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 section-padding pb-28 max-w-4xl">
          <p className="eyebrow text-primary-foreground/70 mb-8 animate-fade-up">PuraVida with Harsha</p>
          <h1 className="display-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Travel not to escape,<br />but to return<br />
            <em>to yourself.</em>
          </h1>
          <p className="body-sans text-base text-primary-foreground/70 mb-12 max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Founder-led journeys into stillness, presence, and meaning.
          </p>
          <Link to="/begin-here" className="btn-ghost-light animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Begin Here
          </Link>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="section-padding bg-beige">
        <div className="max-w-2xl mx-auto text-center">
          <div className="divider-thin mx-auto mb-10" />
          <p className="display-serif text-3xl md:text-4xl text-foreground leading-relaxed mb-6">
            PuraVida with Harsha is a boutique transformational travel company based in Dubai.
          </p>
          <p className="body-sans text-foreground/60 text-base mb-4">
            We curate intimate group journeys to destinations like Bhutan, Japan, Jordan, and Sri Lanka for professionals across the UAE and India.
          </p>
          <p className="display-serif-italic text-2xl text-foreground mt-8">
            We are not a travel agency.<br />We are a soul-centered experience company.
          </p>
        </div>
      </section>

      {/* FEATURES — Why small groups matter */}
      <section className="section-padding bg-sage">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow text-foreground/50 mb-16 text-center">Why small groups matter</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { number: "01", text: "Big groups rush." },
              { number: "02", text: "Small groups stay." },
              { number: "03", text: "That's the difference." },
            ].map((f) => (
              <div key={f.number} className="bg-beige p-12 flex flex-col gap-6">
                <span className="eyebrow text-accent">{f.number}</span>
                <p className="display-serif text-2xl md:text-3xl text-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SPLIT */}
      <section className="bg-beige">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-96 md:h-auto min-h-96 overflow-hidden">
            <img
              src={harshaFounder}
              alt="Harsha, founder of PuraVida"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="section-padding flex flex-col justify-center">
            <p className="eyebrow text-accent mb-6">The Founder</p>
            <h2 className="display-serif text-4xl md:text-5xl text-foreground mb-8">
              Every journey is personally led by Harsha.
            </h2>
            <p className="body-sans text-foreground/60 mb-4">
              Her voice, her long-standing relationships with local cultural partners, and her philosophy of stillness and presence shape every experience.
            </p>
            <p className="display-serif-italic text-xl text-foreground/80 mb-10">
              Nothing is outsourced. Nothing is rushed.
            </p>
            <Link to="/about" className="btn-ghost-dark self-start">
              Meet Harsha
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED JOURNEY */}
      <section className="section-padding bg-foreground">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <p className="eyebrow text-primary-foreground/40 mb-4">Featured Journey</p>
            <h2 className="display-serif text-5xl md:text-6xl text-primary-foreground mb-3">Bhutan</h2>
            <p className="display-serif-italic text-xl text-accent mb-8">The Kingdom of Stillness</p>
            <p className="body-sans text-primary-foreground/60 max-w-md mb-12">
              A founder-led journey for a small group of travellers ready to slow down, breathe, and reconnect with what matters.
            </p>
            <Link to="/journeys/bhutan" className="btn-ghost-light">
              Explore this journey
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <p className="display-serif text-8xl md:text-9xl text-primary-foreground/10 select-none font-light">
              April
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-sage">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", label: "Feel the call" },
              { step: "02", label: "We connect" },
              { step: "03", label: "The journey begins" },
            ].map((s, i) => (
              <div key={s.step} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="eyebrow text-accent">{s.step}</span>
                  {i < 2 && <div className="flex-1 h-px bg-accent/30 hidden md:block" />}
                </div>
                <p className="display-serif text-3xl text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POETIC TEXT */}
      <section className="section-padding bg-beige text-center">
        <div className="max-w-lg mx-auto">
          <div className="divider-thin mx-auto mb-12" />
          <p className="display-serif-italic text-3xl md:text-4xl text-foreground leading-relaxed">
            The journey doesn't end when you return.<br />
            <span className="text-foreground/50">It settles into how you live.</span>
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-sage text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="display-serif text-4xl md:text-5xl text-foreground mb-10">
            If something in you is saying yes, begin the conversation.
          </h2>
          <Link to="/begin-here" className="btn-ghost-dark">
            Message Harsha
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
