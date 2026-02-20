import { useParams, Link } from "react-router-dom";
import bhutanHero from "@/assets/bhutan-hero.jpg";
import japanJourney from "@/assets/japan-journey.jpg";
import jordanJourney from "@/assets/jordan-journey.jpg";
import srilankaJourney from "@/assets/srilanka-journey.jpg";

const journeyData: Record<string, {
  name: string;
  tagline: string;
  image: string;
  month: string;
  priceMin: number;
  priceMax: number;
}> = {
  bhutan: {
    name: "Bhutan",
    tagline: "The Kingdom of Stillness",
    image: bhutanHero,
    month: "April 2025",
    priceMin: 15000,
    priceMax: 21000,
  },
  japan: {
    name: "Japan",
    tagline: "Ritual, rhythm, and quiet beauty",
    image: japanJourney,
    month: "October 2025",
    priceMin: 18000,
    priceMax: 25000,
  },
  jordan: {
    name: "Jordan",
    tagline: "Land, silence, and ancient presence",
    image: jordanJourney,
    month: "November 2025",
    priceMin: 15000,
    priceMax: 22000,
  },
  "sri-lanka": {
    name: "Sri Lanka",
    tagline: "Nature, culture, and spacious time",
    image: srilankaJourney,
    month: "February 2026",
    priceMin: 15000,
    priceMax: 29000,
  },
};

const Journey = () => {
  const { slug } = useParams<{ slug: string }>();
  const journey = slug ? journeyData[slug] : null;

  if (!journey) {
    return (
      <main className="section-padding bg-beige min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="display-serif text-3xl text-foreground mb-6">Journey not found.</p>
          <Link to="/journeys" className="btn-ghost-dark">View all journeys</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${journey.image})` }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 section-padding pb-24">
          <p className="eyebrow text-primary-foreground/60 mb-6">{journey.month}</p>
          <h1 className="display-serif text-5xl md:text-7xl text-primary-foreground mb-3">{journey.name}</h1>
          <p className="display-serif-italic text-2xl text-accent">{journey.tagline}</p>
        </div>
      </section>

      {/* WHY THIS PLACE */}
      <section className="section-padding bg-beige">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent mb-8">Why this place</p>
          <p className="display-serif text-3xl text-foreground mb-10">
            This destination was chosen not for sightseeing, but for the way it slows you down.
          </p>
          <div className="space-y-4 body-sans text-foreground/60">
            <p>Quiet mornings.</p>
            <p>Unhurried days.</p>
            <p>Space to notice.</p>
          </div>
        </div>
      </section>

      {/* HOW THE DAYS FEEL */}
      <section className="section-padding bg-sage">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow text-accent mb-8">How the days feel</p>
            <p className="display-serif text-3xl text-foreground mb-8">
              Days unfold gently, with intention and room to breathe.
            </p>
            <p className="body-sans text-foreground/60">
              There is structure, but never rushing.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6">
            {["Silence is welcomed.", "Presence is encouraged.", "The rhythm is yours to follow."].map((line) => (
              <div key={line} className="flex items-start gap-4">
                <div className="w-1 h-1 rounded-full bg-accent mt-3 flex-shrink-0" />
                <p className="display-serif-italic text-2xl text-foreground">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP & PRICING */}
      <section className="section-padding bg-foreground">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="eyebrow text-primary-foreground/40 mb-4">Group Size</p>
            <p className="display-serif text-4xl text-primary-foreground">8–20</p>
            <p className="body-sans text-primary-foreground/50 mt-2 text-sm">travellers</p>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/40 mb-4">Experience</p>
            <p className="display-serif text-4xl text-primary-foreground">Premium</p>
            <p className="body-sans text-primary-foreground/50 mt-2 text-sm">founder-led</p>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/40 mb-4">Investment</p>
            <p className="display-serif text-4xl text-primary-foreground">
              AED {journey.priceMin.toLocaleString()}
            </p>
            <p className="body-sans text-primary-foreground/50 mt-2 text-sm">
              to AED {journey.priceMax.toLocaleString()} per person
            </p>
          </div>
        </div>
      </section>

      {/* IS THIS FOR YOU */}
      <section className="section-padding bg-beige">
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow text-accent mb-8">Is this for you</p>
          <div className="space-y-4 mb-16">
            {[
              "This journey may be right for you if you're ready to slow down.",
              "If you value depth over distraction.",
              "If something inside you has already said yes.",
            ].map((line, i) => (
              <p key={i} className={`display-serif text-2xl md:text-3xl ${i === 0 ? "text-foreground" : "text-foreground/50"}`}>
                {line}
              </p>
            ))}
          </div>
          <div className="divider-thin mb-10" />
          <Link to="/begin-here" className="btn-ghost-dark">
            Apply to join this journey
          </Link>
        </div>
      </section>

      {/* NAV to all journeys */}
      <section className="section-padding-sm bg-sage flex items-center justify-between">
        <Link to="/journeys" className="btn-ghost-dark">← All journeys</Link>
        <Link to="/begin-here" className="btn-ghost-dark">Begin here →</Link>
      </section>
    </main>
  );
};

export default Journey;
