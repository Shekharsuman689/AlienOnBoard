import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import productImg from "@/assets/product-hero.png";

const Buy = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", address: "", phone: "", quantity: "1" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 gradient-mesh">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Product Display */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">Shop</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Get Your <span className="text-primary text-glow">AlienOnBoard</span>
              </h1>
              <div className="relative flex justify-center my-8">
                <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
                <img src={productImg} alt="AlienOnBoard Purifier" className="relative w-full max-w-xs rounded-2xl" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-3xl font-bold text-primary">₹2,499</span>
                <span className="text-muted-foreground text-sm line-through">₹3,999</span>
              </div>
              <p className="text-sm text-muted-foreground">Free shipping across India</p>
            </motion.div>

            {/* Order Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center p-12 rounded-xl bg-card border border-primary/30 box-glow">
                  <CheckCircle className="w-16 h-16 text-primary mb-6" />
                  <h2 className="font-display text-2xl font-bold mb-3">Order Placed!</h2>
                  <p className="text-muted-foreground">Thank you, {form.name}! Your order for {form.quantity} unit(s) has been received. We'll contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-card border border-border/50 space-y-6">
                  <h2 className="font-display text-2xl font-bold mb-2">Place Your Order</h2>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input id="address" required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="123 Main Street, City" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" type="number" min="1" required value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full box-glow hover:box-glow-strong transition-shadow">
                    Place Order
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;
