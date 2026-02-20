import { Link } from "react-router-dom";

const BeginHere = () => {
  return (
    <main>
      {/* HERO */}
      <section className="section-padding bg-foreground min-h-[50vh] flex flex-col justify-end pt-36">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary-foreground/40 mb-8">Begin Here</p>
          <h1 className="display-serif text-5xl md:text-7xl text-primary-foreground">
            Begin<br />
            <em>the conversation.</em>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding bg-beige">
        <div className="max-w-xl">
          <div className="divider-thin mb-12" />
          <p className="display-serif text-3xl text-foreground mb-8">
            This is not a booking form.
          </p>
          <p className="body-sans text-foreground/60 mb-4">
            It's the start of a dialogue.
          </p>
          <p className="display-serif-italic text-xl text-foreground/70">
            Reach out, and we'll explore whether the journey feels aligned.
          </p>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="section-padding bg-sage">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* WhatsApp */}
          <div className="bg-beige p-14 flex flex-col gap-8">
            <p className="eyebrow text-accent">Immediate</p>
            <h2 className="display-serif text-4xl text-foreground">Message on WhatsApp</h2>
            <p className="body-sans text-foreground/50 text-sm">
              If something feels right and you want to reach out directly, this is the fastest way to connect.
            </p>
            <a
              href="https://wa.me/971000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark self-start"
            >
              Open WhatsApp
            </a>
          </div>

          {/* Application */}
          <div className="bg-foreground p-14 flex flex-col gap-8">
            <p className="eyebrow text-primary-foreground/40">Considered</p>
            <h2 className="display-serif text-4xl text-primary-foreground">Begin the application</h2>
            <p className="body-sans text-primary-foreground/50 text-sm">
              Share a little about yourself and what you're seeking. Harsha will respond personally within a few days.
            </p>
            <button className="btn-ghost-light self-start">
              Start the form
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section-padding bg-beige">
        <div className="max-w-xl mx-auto">
          <p className="eyebrow text-accent mb-10">Or write to us directly</p>
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="eyebrow text-foreground/50">Your name</label>
              <input
                type="text"
                className="bg-transparent border-b border-foreground/30 pb-3 body-sans text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                placeholder="How shall we address you?"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="eyebrow text-foreground/50">Email</label>
              <input
                type="email"
                className="bg-transparent border-b border-foreground/30 pb-3 body-sans text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="eyebrow text-foreground/50">Which journey calls to you?</label>
              <select className="bg-transparent border-b border-foreground/30 pb-3 body-sans text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none">
                <option value="">Select a destination</option>
                <option>Bhutan</option>
                <option>Japan</option>
                <option>Jordan</option>
                <option>Sri Lanka</option>
                <option>I'm not sure yet</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="eyebrow text-foreground/50">What are you seeking?</label>
              <textarea
                rows={4}
                className="bg-transparent border-b border-foreground/30 pb-3 body-sans text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Share whatever feels right..."
              />
            </div>
            <button type="submit" className="btn-ghost-dark self-start mt-4">
              Send →
            </button>
          </form>
        </div>
      </section>

      {/* CLOSING */}
      <section className="section-padding bg-foreground text-center">
        <div className="max-w-lg mx-auto">
          <p className="display-serif-italic text-3xl md:text-4xl text-primary-foreground">
            We respond to every message personally.
          </p>
        </div>
      </section>
    </main>
  );
};

export default BeginHere;
