import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Sparkles } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
  });

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your full name.";
    if (!form.phone.trim() || !/^\+?[\d\s-]{7,15}$/.test(form.phone.trim()))
      errs.phone = "Valid phone number required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Please enter a valid email.";
    if (!form.reason.trim()) errs.reason = "Tell us briefly why you are booking.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setErrors({});
      setForm({ name: "", phone: "", email: "", reason: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl p-6 sm:p-8 glow-border"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Request Received!
                </h3>
                <p className="text-muted-foreground">
                  Your request has been received. We will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
                    Reserve Your Free Destiny Clarity Session
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill in your details to receive your free mini report and schedule your call.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder={`"I want clarity about my career direction and financial growth."\n"I am facing delays in marriage and need guidance."\n"I feel stuck in life and need direction."`}
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    />
                    {errors.reason && <p className="text-destructive text-xs mt-1">{errors.reason}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-accent text-primary-foreground py-4 rounded-full text-base font-semibold transition-all duration-300 glow-border hover:scale-[1.02]"
                  >
                    Get My Free Report & Call
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
