import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wind, Shield, Volume2, Usb, Leaf, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import productHero from "@/assets/product-hero.png";

const features = [
  { icon: Shield, title: "Nanocellulose Filtration", desc: "Removes 99% of dust, pollen, and airborne particles with medical-grade HEPA technology." },
  { icon: Wind, title: "Activated Carbon Filter", desc: "Eliminates odors, smoke, and harmful VOCs for truly fresh indoor air." },
  { icon: Volume2, title: "Silent Fan Operation", desc: "Whisper-quiet internal fan runs below 30dB — quieter than a library." },
  { icon: Usb, title: "USB Type-C Power", desc: "Universal USB-C connectivity. Power it from any laptop, power bank, or adapter." },
];

const benefits = [
  { icon: Heart, title: "Healthier Living", desc: "Reduce allergens and respiratory irritants in your home." },
  { icon: Leaf, title: "Eco-Friendly", desc: "Low energy consumption with long-lasting, replaceable filters." },
  { icon: Zap, title: "Compact & Portable", desc: "Sleek design fits anywhere — desk, nightstand, or car." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center gradient-mesh overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">
              Next-Gen Air Purification
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              Breathe Clean.{" "}
              <span className="text-primary text-glow">Live Better.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              AOB purifies indoor air by removing dust, pollutants, and allergens through advanced nanocellulose and activated carbon filtration in a sleek, portable design.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="box-glow hover:box-glow-strong transition-shadow">
                <Link to="/buy">Buy Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
              <img
                src={productHero}
                alt="AlienOnBoard Air Purifier"
                className="relative w-full max-w-md animate-float rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} custom={0} className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Technology
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold">
            Engineered for <span className="text-primary">Pure Air</span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all hover:box-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-24 gradient-mesh border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} custom={0} className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold">
            Benefits That <span className="text-primary">Matter</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <b.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Index;
