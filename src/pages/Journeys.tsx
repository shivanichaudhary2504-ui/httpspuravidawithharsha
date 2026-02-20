import { Link } from "react-router-dom";
import bhutanHero from "@/assets/bhutan-hero.jpg";
import japanJourney from "@/assets/japan-journey.jpg";
import jordanJourney from "@/assets/jordan-journey.jpg";
import srilankaJourney from "@/assets/srilanka-journey.jpg";

const journeys = [
  {
    slug: "bhutan",
    name: "Bhutan",
    sub: "The Kingdom of Stillness",
    image: bhutanHero,
    month: "April",
  },
  {
    slug: "japan",
    name: "Japan",
    sub: "Ritual, rhythm, and quiet beauty",
    image: japanJourney,
    month: "October",
  },
  {
    slug: "jordan",
    name: "Jordan",
    sub: "Land, silence, and ancient presence",
    image: jordanJourney,
    month: "November",
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    sub: "Nature, culture, and spacious time",
    image: srilankaJourney,
    month: "February",
  },
];

const Journeys = () => {
  return (
    <main>
      {/* HERO */}
      <section className="section-padding bg-sage min-h-[50vh] flex flex-col justify-end pt-36">
        <div className="max-w-4xl">
          <p className="eyebrow text-accent mb-8">All Journeys</p>
          <h1 className="display-serif text-5xl md:text-7xl text-foreground mb-6">
            Journeys into stillness.
          </h1>
          <p className="body-sans text-foreground/50 max-w-lg text-base">
            Each destination is chosen for how it invites you to be, not what it asks you to see.
          </p>
        </div>
      </section>

      {/* JOURNEY LIST */}
      <section className="bg-beige">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {journeys.map((j, i) => (
            <Link
              key={j.slug}
              to={`/journeys/${j.slug}`}
              className="group relative overflow-hidden"
            >
              <div className="h-80 md:h-96 relative overflow-hidden">
                <img
                  src={j.image}
                  alt={j.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="eyebrow text-primary-foreground/60 mb-2">{j.month}</p>
                  <h2 className="display-serif text-4xl text-primary-foreground mb-1">{j.name}</h2>
                  <p className="display-serif-italic text-lg text-primary-foreground/70">{j.sub}</p>
                </div>
              </div>
              <div className="bg-beige px-8 py-5 flex justify-between items-center border-b border-border">
                <p className="eyebrow text-foreground/40">Explore journey</p>
                <span className="text-foreground/40 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <p className="display-serif-italic text-3xl md:text-4xl text-primary-foreground mb-10">
            Not sure which journey calls to you?
          </p>
          <Link to="/begin-here" className="btn-ghost-light">
            Begin the conversation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Journeys;
