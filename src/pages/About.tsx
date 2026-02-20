import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import harshaFounder from "@/assets/harsha-founder.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const About = (): JSX.Element => {
  return (
    <main>

      {/* HERO */}
      <section className="section-padding bg-sage min-h-[60vh] flex items-end pt-36 pb-24">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow text-accent mb-8 tracking-[0.2em]"
          >
            ABOUT
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="display-serif text-5xl md:text-7xl text-foreground leading-tight"
          >
            On stillness, presence,<br />
            <em>and traveling slowly.</em>
          </motion.h1>
        </motion.div>
      </section>


      {/* INTRO */}
      <section className="section-padding bg-beige">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="divider-thin mb-16"
          />

          <motion.p
            variants={fadeUp}
            className="display-serif text-3xl md:text-4xl text-foreground mb-10 leading-snug"
          >
            PuraVida with Harsha is a boutique transformational travel company based in Dubai.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="body-sans text-foreground/60 mb-8"
          >
            We design intimate journeys for professionals aged 35–60 who value
            depth over speed and meaning over movement.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-3 mt-12">
            {[
              "Our groups are small.",
              "Our approach is personal.",
              "Our journeys are led, in full, by the founder.",
            ].map((line) => (
              <p
                key={line}
                className="display-serif-italic text-2xl text-foreground"
              >
                {line}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </section>


      {/* FOUNDER – EDITORIAL LAYOUT */}
      <section className="section-padding bg-sage">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >

          {/* Image */}
          <motion.div variants={fadeUp} className="w-full md:w-1/2">
            <img
              src={harshaFounder}
              alt="Harsha, founder"
              className="w-full h-[500px] md:h-[650px] object-cover object-top"
            />
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeUp} className="w-full md:w-1/2">
            <p className="eyebrow text-accent mb-6 tracking-[0.2em]">
              THE FOUNDER
            </p>

            <h2 className="display-serif text-4xl md:text-5xl text-foreground mb-10 leading-tight">
              Meet Harsha
            </h2>

            <p className="body-sans text-foreground/60 mb-6">
              I created PuraVida from a belief that travel is not about escape,
              but about remembering who you are beneath the noise.
            </p>

            <p className="body-sans text-foreground/60 mb-6">
              I lead every journey personally.
            </p>

            <p className="display-serif-italic text-xl text-foreground/80">
              I walk alongside you, hold the space, and ensure that the experience
              feels grounded, human, and deeply present.
            </p>
          </motion.div>

        </motion.div>
      </section>


      {/* PHILOSOPHY */}
      <section className="section-padding bg-foreground">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow text-primary-foreground/40 mb-10 tracking-[0.2em]"
          >
            THE WAY WE TRAVEL
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-8 mb-20">
            {[
              "Stillness over noise.",
              "Presence over performance.",
              "Depth over checklists.",
            ].map((line) => (
              <p
                key={line}
                className="display-serif text-3xl md:text-4xl text-primary-foreground"
              >
                {line}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="border-t border-primary-foreground/10 pt-12"
          >
            <p className="body-sans text-primary-foreground/50 mb-12">
              This philosophy guides every decision we make.
            </p>

            <Link to="/begin-here" className="btn-ghost-light">
              Travel with me
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
};

export default About;