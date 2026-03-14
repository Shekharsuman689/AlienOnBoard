import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Mail } from "lucide-react";

const Enquire = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-center mb-12">
              <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Have a <span className="text-primary text-glow">Question?</span>
              </h1>
              <p className="text-muted-foreground text-lg">We'd love to hear from you. Send us a message and we'll get back to you shortly.</p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center text-center p-12 rounded-xl bg-card border border-primary/30 box-glow">
                <CheckCircle className="w-16 h-16 text-primary mb-6" />
                <h2 className="font-display text-2xl font-bold mb-3">Message Sent!</h2>
                <p className="text-muted-foreground">Thank you for reaching out. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-card border border-border/50 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required placeholder="How can we help you?" rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full box-glow hover:box-glow-strong transition-shadow">
                  <Mail className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Enquire;
