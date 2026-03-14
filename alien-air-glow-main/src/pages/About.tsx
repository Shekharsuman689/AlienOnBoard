import { motion } from "framer-motion";
import { Shield, Wind, Volume2, Layers } from "lucide-react";
import productImg from "@/assets/product-secondary.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const components = [
  { icon: Shield, title: "HEPA Filter", desc: "Medical-grade HEPA filter captures 99% of dust particles, pollen, pet dander, and microscopic allergens as small as 0.3 microns." },
  { icon: Wind, title: "Activated Carbon Filter", desc: "Premium activated carbon layer absorbs odors, cigarette smoke, cooking fumes, and volatile organic compounds (VOCs)." },
  { icon: Volume2, title: "Silent Internal Fan", desc: "A precision-engineered brushless fan pulls polluted air through the filtration system and releases purified, clean air — all while operating below 30dB." },
  { icon: Layers, title: "Compact Housing", desc: "Sleek cylindrical design with a premium fabric base and clean white finish. Designed to complement any modern living space." },
];

const About = () => (
  <div className="min-h-screen pt-24">
    {/* Hero */}
    <section className="py-20 gradient-mesh">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              The Science Behind <span className="text-primary text-glow">Clean Air</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              AlienOnBoard is a compact, high-performance air purifier designed for everyday use. It combines multi-stage filtration technology with ultra-quiet operation to deliver fresh, clean indoor air.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're in your bedroom, office, or car — AlienOnBoard works silently in the background, removing harmful particles and leaving you with nothing but pure air.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
            <img src={productImg} alt="AlienOnBoard Purifier" className="w-full max-w-sm rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Components */}
    <section className="py-24 border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Inside the Purifier</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold">
            What's <span className="text-primary">Inside</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {components.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="flex gap-5 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all hover:box-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
