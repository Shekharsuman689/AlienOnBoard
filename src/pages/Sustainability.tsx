import { motion } from "framer-motion";
import { Zap, Leaf, BatteryCharging, TreePine, Recycle, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const points = [
  { icon: Zap, title: "Energy-Efficient Design", desc: "AlienOnBoard consumes less than 5W of power — equivalent to a small LED bulb. Designed to run 24/7 without significantly impacting your electricity bill." },
  { icon: Leaf, title: "Long-Life Filters", desc: "Our biodegradable nanocellulose and activated carbon filters last up to 45-60 days, reducing waste and long-term costs." },
  { icon: BatteryCharging, title: "Reduced Electricity Consumption", desc: "USB Type-C powered design means you can use renewable energy sources like solar power banks to run the device." },
  { icon: TreePine, title: "Improved Indoor Air Quality", desc: "By removing pollutants at the source, AlienOnBoard reduces the need for energy-intensive HVAC systems and central air purifiers." },
  { icon: Recycle, title: "Recyclable Materials", desc: "The housing is made from recyclable ABS plastic, and all packaging is made from 100% recycled cardboard." },
  { icon: Globe, title: "Sustainable Living", desc: "Clean air is a fundamental right. AlienOnBoard supports sustainable indoor living by making air purification accessible, affordable, and eco-friendly." },
];

const Sustainability = () => (
  <div className="min-h-screen pt-24">
    <section className="py-20 gradient-mesh">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Sustainability Report</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Building a <span className="text-primary text-glow">Greener Future</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At AOB, sustainability isn't an afterthought — it's at the core of everything we design. Here's how we're making air purification environmentally responsible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all hover:box-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Sustainability;
