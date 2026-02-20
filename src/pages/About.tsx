import { Link } from "react-router-dom";
import harshaFounder from "@/assets/harsha-founder.jpg";

const About = () => {
  return (
    <main>
      {/* HERO */}
      <section className="section-padding bg-sage min-h-[50vh] flex flex-col justify-end pt-36">
        <div className="max-w-4xl">
          <p className="eyebrow text-accent mb-8">About</p>
          <h1 className="display-serif text-5xl md:text-7xl text-foreground">
            On stillness, presence,<br />
            <em>and traveling slowly.</em>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding bg-beige">
        <div className="max-w-2xl mx-auto">
          <div className="divider-thin mb-12" />
          <p className="display-serif text-3xl text-foreground mb-8">
            PuraVida with Harsha is a boutique transformational travel company based in Dubai.
          </p>
          <p className="body-sans text-foreground/60 mb-4">
            We design intimate journeys for professionals aged 35–60 who value depth over speed and meaning over movement.
          </p>
          <div className="mt-10 space-y-1">
            {["Our groups are small.", "Our approach is personal.", "Our journeys are led, in full, by the founder."].map((line) => (
              <p key={line} className="display-serif-italic text-2xl text-foreground">{line}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-sage">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="section-padding flex flex-col justify-center order-2 md:order-1">
            <p className="eyebrow text-accent mb-6">The Founder</p>
            <h2 className="display-serif text-4xl md:text-5xl text-foreground mb-8">Meet Harsha</h2>
            <p className="body-sans text-foreground/60 mb-4">
              I created PuraVida from a belief that travel is not about escape, but about remembering who you are beneath the noise.
            </p>
            <p className="body-sans text-foreground/60 mb-4">
              I lead every journey personally.
            </p>
            <p className="display-serif-italic text-xl text-foreground/80 mb-2">
              I walk alongside you, hold the space, and ensure that the experience feels grounded, human, and deeply present.
            </p>
          </div>
          <div className="h-96 md:h-auto min-h-96 overflow-hidden order-1 md:order-2">
            <img
              src={harshaFounder}
              alt="Harsha, founder"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padding bg-foreground">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow text-primary-foreground/40 mb-8">The way we travel</p>
          <div className="space-y-6 mb-16">
            {[
              "Stillness over noise.",
              "Presence over performance.",
              "Depth over checklists.",
            ].map((line) => (
              <p key={line} className="display-serif text-3xl md:text-4xl text-primary-foreground">{line}</p>
            ))}
          </div>
          <div className="border-t border-primary-foreground/10 pt-10">
            <p className="body-sans text-primary-foreground/50 mb-10">
              This philosophy guides every decision we make.
            </p>
            <Link to="/begin-here" className="btn-ghost-light">
              Travel with me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
