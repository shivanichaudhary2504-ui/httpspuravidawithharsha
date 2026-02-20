import { Link } from "react-router-dom";

const Philosophy = () => {
  return (
    <main>
      {/* HERO */}
      <section className="section-padding bg-foreground min-h-[60vh] flex flex-col justify-end pt-36">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary-foreground/40 mb-8">Philosophy</p>
          <h1 className="display-serif text-5xl md:text-7xl text-primary-foreground">
            When you're ready,<br />
            <em>the destination is ready.</em>
          </h1>
        </div>
      </section>

      {/* TEXT BLOCK 1 */}
      <section className="section-padding bg-beige">
        <div className="max-w-2xl mx-auto">
          <div className="divider-thin mb-12" />
          <p className="display-serif text-3xl md:text-4xl text-foreground mb-10 leading-relaxed">
            PuraVida exists for travellers who feel the quiet pull toward something slower, deeper, and more intentional.
          </p>
          <div className="space-y-6 text-foreground/60 body-sans">
            <p>We believe readiness is felt, not scheduled.</p>
            <p>That transformation happens in stillness.</p>
            <p>And that travel can be a doorway back to yourself.</p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-padding bg-sage">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { word: "Stillness", sub: "We move slowly, deliberately — honoring the rhythm of each place." },
            { word: "Presence", sub: "No itinerary is more important than what is unfolding right now." },
            { word: "Depth", sub: "We go below the surface of every destination we visit." },
          ].map((p) => (
            <div key={p.word} className="bg-beige p-12">
              <p className="display-serif text-4xl text-foreground mb-6">{p.word}</p>
              <div className="divider-thin mb-6" />
              <p className="body-sans text-foreground/60 text-sm">{p.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEXT BLOCK 2 */}
      <section className="section-padding bg-beige text-center">
        <div className="max-w-xl mx-auto">
          <div className="divider-thin mx-auto mb-12" />
          <p className="display-serif-italic text-3xl md:text-4xl text-foreground mb-6">
            This is not about doing more.
          </p>
          <p className="display-serif text-3xl md:text-4xl text-foreground/50">
            It's about listening more.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage">
        <div className="max-w-2xl mx-auto text-center">
          <p className="body-sans text-foreground/50 mb-10">
            If this resonates with you, begin the conversation.
          </p>
          <Link to="/begin-here" className="btn-ghost-dark">
            Begin Here
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Philosophy;
