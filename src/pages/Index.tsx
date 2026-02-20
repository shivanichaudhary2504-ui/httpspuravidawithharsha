import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import bhutanHero from "@/assets/bhutan-hero.jpg";
import harshaFounder from "@/assets/harsha-founder.jpg";
import flowerLine from "@/assets/flower-line.png";
import { Phone, MessageCircle, Compass } from "lucide-react";
import { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const softFadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

interface Step {
  step: string;
  label: string;
  icon: ReactNode;
}

const steps: Step[] = [
  { step: "01", label: "Feel the call", icon: <Compass size={26} strokeWidth={1.5} /> },
  { step: "02", label: "We connect", icon: <MessageCircle size={26} strokeWidth={1.5} /> },
  { step: "03", label: "The journey begins", icon: <Phone size={26} strokeWidth={1.5} /> },
];

const Index = (): JSX.Element => {
  return (
    <main>

      {/* HERO */}
      <section className="relative max-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bhutanHero})` }}
        />
        <div className="absolute inset-0 bg-foreground/40" />

        <motion.div
          className="relative z-10 section-padding max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="eyebrow text-primary-foreground/70 mb-8">
            PuraVida with Harsha
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="display-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-8 leading-tight"
          >
            Travel not to escape,<br />
            but to return<br />
            <em>to yourself.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="body-sans text-base text-primary-foreground/70 mb-12 max-w-md"
          >
            Founder-led journeys into stillness, presence, and meaning.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link to="/begin-here" className="btn-ghost-light">
              Begin Here
            </Link>
          </motion.div>
        </motion.div>
      </section>


      {/* WHY SMALL GROUPS */}
      <section className="relative section-padding bg-sage overflow-hidden">

        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-[0.08] pointer-events-none"
          style={{ backgroundImage: `url(${flowerLine})`, backgroundSize: "cover" }}
        />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow text-foreground/50 mb-20 text-center font-bold tracking-[0.2em]"
          >
            WHY SMALL GROUPS MATTER
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "01", text: "Big groups rush." },
              { number: "02", text: "Small groups stay." },
              { number: "03", text: "That's the difference." },
            ].map((f) => (
              <motion.div
                key={f.number}
                variants={fadeUp}
                className="bg-beige p-14 border border-sage/40 flex flex-col items-center text-center"
              >
                <span className="text-xs tracking-[0.3em] text-accent mb-8">
                  {f.number}
                </span>
                <p className="display-serif text-2xl md:text-3xl text-foreground">
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* FOUNDER */}
      <section className="relative min-h-screen bg-beige flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `url(${flowerLine})`, backgroundSize: "cover" }}
        />

        <motion.div
          className="relative z-10 section-padding w-full max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <div className="flex flex-col md:flex-row gap-20 items-center">

            <motion.div variants={fadeUp} className="w-full md:w-1/2">
              <img
                src={harshaFounder}
                alt="Harsha"
                className="w-full h-[500px] md:h-[650px] object-cover object-top"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="w-full md:w-1/2">
              <p className="eyebrow text-accent mb-6">The Founder</p>

              <h2 className="display-serif text-4xl md:text-6xl text-foreground mb-8 leading-tight">
                Every journey is personally led by Harsha.
              </h2>

              <p className="body-sans text-foreground/60 mb-6">
                Her voice. Her long-standing cultural relationships.
                Her philosophy of stillness and presence.
              </p>

              <p className="display-serif-italic text-2xl text-foreground/80 mb-10">
                Nothing is outsourced.<br />
                Nothing is rushed.
              </p>

              <Link to="/about" className="btn-ghost-dark">
                Meet Harsha
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </section>


      {/* PROGRESS */}
      <section className="section-padding bg-sage">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="display-serif text-4xl md:text-5xl text-foreground mb-6"
          >
            The Journey Begins
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="body-sans text-foreground/60 max-w-xl mx-auto mb-20"
          >
            A quiet, intentional process. No pressure. No urgency.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="bg-beige border border-sage/40 rounded-xl py-16 px-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
              {steps.map((s) => (
                <motion.div
                  key={s.step}
                  variants={fadeUp}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="text-accent">{s.icon}</div>
                  <span className="text-xs tracking-[0.3em] text-foreground/40">
                    {s.step}
                  </span>
                  <p className="display-serif text-2xl md:text-3xl text-foreground">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-beige text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            variants={softFadeUp}
            className="display-serif text-4xl md:text-5xl text-foreground mb-10"
          >
            If something in you is saying yes, begin the conversation.
          </motion.h2>

          <motion.div variants={softFadeUp}>
            <Link to="/begin-here" className="btn-ghost-dark">
              Message Harsha
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Index;