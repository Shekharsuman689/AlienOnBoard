import { motion } from "framer-motion";
import { Shield, Wind, Volume2, Layers } from "lucide-react";
import productImg from "@/assets/product-secondary.png";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
// };

// const components = [
//   { icon: Shield, title: "Nanocellulose", desc: "Advanced nanocellulose filter captures up to 99% of airborne pollutants like dust, pollen, smoke, and microscopic allergens." },
//   { icon: Wind, title: "Activated Carbon Filter", desc: "Premium activated carbon layer absorbs odors, cigarette smoke, cooking fumes, and volatile organic compounds (VOCs)." },
//   { icon: Volume2, title: "Silent Internal Fan", desc: "A precision-engineered brushless fan pulls polluted air through the filtration system and releases purified, clean air — all while operating below 30dB." },
//   { icon: Layers, title: "Compact Housing", desc: "Sleek cylindrical design with a premium fabric base and clean white finish. Designed to complement any modern living space." },
// ];

// const About = () => (
//   <div className="min-h-screen pt-24">
//     {/* Hero */}
//     <section className="py-20 gradient-mesh">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
//             <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">About Us</p>
//             <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
//               The Science Behind <span className="text-primary text-glow">Clean Air</span>
//             </h1>
//             <p className="text-muted-foreground text-lg leading-relaxed mb-4">
//               AlienOnBoard is a compact, high-performance air purifier designed for everyday use. It combines multi-stage filtration technology with ultra-quiet operation to deliver fresh, clean indoor air.
//             </p>
//             <p className="text-muted-foreground leading-relaxed">
//               Whether you're in your bedroom, office, or car — AlienOnBoard works silently in the background, removing harmful particles and leaving you with nothing but pure air.
//             </p>
//           </motion.div>
//           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
//             <img src={productImg} alt="AlienOnBoard Purifier" className="w-full max-w-sm rounded-2xl" />
//           </motion.div>
//         </div>
//       </div>
//     </section>

//     {/* Components */}
//     <section className="py-24 border-t border-border/30">
//       <div className="container mx-auto px-6">
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
//           <motion.p variants={fadeUp} custom={0} className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Inside the Purifier</motion.p>
//           <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold">
//             What's <span className="text-primary">Inside</span>
//           </motion.h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {components.map((c, i) => (
//             <motion.div
//               key={c.title}
//               initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
//               className="flex gap-5 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all hover:box-glow"
//             >
//               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
//                 <c.icon className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="font-display text-lg font-semibold mb-2">{c.title}</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   </div>
// );

// export default About;

// import { motion } from "framer-motion";
// import productImg from "@/assets/product-secondary.png";

import member1 from "@/assets/member1.jpeg";
import member2 from "@/assets/member2.jpeg";
import member3 from "@/assets/member3.jpeg";
import member4 from "@/assets/member4.jpeg";
import member5 from "@/assets/member5.jpeg";
import member6 from "@/assets/member6.jpeg";
import member7 from "@/assets/member7.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const team = [
  { img: member1, name: "Santanu Das", role: "Co-Founder & Researcher Lead" },
  { img: member2, name: "Debashmita Paul", role: "Co-Founder & Researcher Lead" },
  { img: member3, name: "Avinash Jha", role: "Co-Founder & Finance Manager" },
  { img: member4, name: "Seema Tasneem", role: "Co-Founder & Human Resource Manager" },
  { img: member5, name: "Shivam Kumar", role: "Co-Founder & Finance Manager" },
  { img: member6, name: "Shekhar Suman", role: "Co-Founder & Technical Lead" },
  { img: member7, name: "Shuvashree Das", role: "Co-Founder & Human Resource Manager" },
];

const About = () => (
  <div className="min-h-screen pt-24">

    {/* Hero */}
    <section className="py-20 gradient-mesh">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>

            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Meet The <span className="text-primary text-glow">Team Behind AOB</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              AlienOnBoard is built by a passionate team focused on clean air
              technology and innovative design. Our goal is to make air
              purification simple, portable, and accessible for everyone.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Each member of our team contributes expertise in technology,
              design, marketing, and operations to bring the AlienOnBoard
              vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={productImg}
              alt="AlienOnBoard"
              className="w-full max-w-sm rounded-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>


    {/* Team Section */}
    <section className="py-24 border-t border-border/30">
      <div className="container mx-auto px-6">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-display text-4xl md:text-5xl font-bold"
          >
            Our <span className="text-primary">Team</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="p-6 rounded-xl bg-card border border-border/50 text-center hover:border-primary/40 hover:box-glow transition-all"
            >

              <img
                src={member.img}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="font-display text-xl font-bold">
                {member.name}
              </h3>

              <p className="text-muted-foreground text-sm">
                {member.role}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>

  </div>
);

export default About;