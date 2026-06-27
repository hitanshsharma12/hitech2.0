"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { courseData } from "./data/courseData";


// Razorpay is loaded via <Script> in CourseEnrollSection
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

type FormState = {
  name: string;
  email: string;
  phone: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function CheckoutForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "" });
  const [addOn, setAddOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  /* ── Validation ─────────────────────────────────────────────────────────── */
  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.phone.trim() || !/^\d{10,12}$/.test(form.phone.replace(/\s|-/g, "")))
      e.phone = "Enter a valid 10-digit phone number.";
    return e;
  };

  /* ── Razorpay handler ───────────────────────────────────────────────────── */
  const handlePay = () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    const totalAmount =
      courseData.price.razorpayAmount +
      (addOn ? courseData.addOn.razorpayAmount : 0);

    const options = {
      key: courseData.razorpayKey,
      amount: totalAmount,
      currency: "INR",
      name: courseData.razorpayCourseName,
      description: "Course Enrollment",
      prefill: {
        name: form.name,
        email: form.email,
        contact: `+91${form.phone.replace(/\D/g, "")}`,
      },
      theme: { color: "#7c3aed" },
      handler: (_response: unknown) => {
        setLoading(false);
        setSuccess(true);
        // ── Post-enrollment actions ──────────────────────────────────────────
        // 1. Redirect student to WhatsApp community:
        window.open(courseData.whatsappGroupLink, "_blank");
        // 2. TODO: Call your backend/API to unlock video access for this student
        // 3. TODO: Send enrollment confirmation email
      },
      modal: {
        ondismiss: () => setLoading(false),
      },
    };

    if (typeof window.Razorpay !== "undefined") {
      const rz = new window.Razorpay(options);
      rz.open();
    } else {
      setLoading(false);
      alert("Razorpay could not load. Please refresh and try again.");
    }
  };

  /* ── Computed total display ─────────────────────────────────────────────── */
  const totalRaw =
    courseData.price.razorpayAmount / 100 +
    (addOn ? courseData.addOn.razorpayAmount / 100 : 0);
  const totalDisplay = `₹${totalRaw.toLocaleString("en-IN")}`;

  /* ── Success state ──────────────────────────────────────────────────────── */
  if (success) {
    return (
      <div className="text-center py-8 space-y-3">
        <div className="text-5xl">🎉</div>
        <h3 className="text-xl font-bold text-foreground">Welcome aboard!</h3>
        <p className="text-muted-foreground text-sm">
          Your enrollment is confirmed. Check WhatsApp for your community invite
          and video access.
        </p>
      </div>
    );
  }

  /* ── Field helper ───────────────────────────────────────────────────────── */
  const Field = ({
    label,
    name,
    type,
    placeholder,
  }: {
    label: string;
    name: keyof FormState;
    type: string;
    placeholder: string;
  }) => (
    <div>
      <label className="block text-[11px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest">
        {label} <span className="text-accent">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[name]}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, [name]: e.target.value }))
        }
        className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200 focus:bg-white/[0.07] ${
          errors[name]
            ? "border-red-500/60 focus:border-red-500"
            : "border-white/10 focus:border-accent/60"
        }`}
      />
      {errors[name] && (
        <p className="text-red-400 text-xs mt-1 pl-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* ── Fields ─────────────────────────────────────────────────────────── */}
      <Field label="Full Name" name="name" type="text" placeholder="Enter your full name" />
      <Field label="Email Address" name="email" type="email" placeholder="you@example.com" />
      <Field label="Phone Number" name="phone" type="tel" placeholder="9XXXXXXXXX" />

      {/* ── Add-on upsell ──────────────────────────────────────────────────── */}
      <div
        onClick={() => setAddOn(!addOn)}
        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
          addOn
            ? "border-accent/40 bg-accent/5"
            : "border-white/10 bg-white/[0.02] hover:border-white/20"
        }`}
      >
        {/* Checkbox */}
        <div
          className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
            addOn
              ? "bg-accent border-accent"
              : "border-white/30 bg-transparent"
          }`}
        >
          {addOn && (
            <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 10" fill="none">
              <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground leading-tight">
            {courseData.addOn.label}{" "}
            <span className="text-accent">— {courseData.addOn.price}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {courseData.addOn.description}
          </p>
        </div>
      </div>

      {/* ── Total ──────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between pt-1 pb-1">
        <span className="text-sm text-muted-foreground">Total Due</span>
        <span className="text-3xl font-black gradient-text-accent">
          {totalDisplay}
        </span>
      </div>

      {/* ── Checkout button ────────────────────────────────────────────────── */}
      <button
        onClick={handlePay}
        disabled={loading}
        className="w-full py-4 rounded-2xl font-bold text-background text-sm tracking-wide bg-accent hover:bg-accent/90 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-accent/25"
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        Secure Checkout → {totalDisplay}
      </button>

      {/* ── Trust line ────────────────────────────────────────────────────── */}
      <p className="text-center text-xs text-muted-foreground/60 flex items-center justify-center gap-1.5">
        <span>🔒</span>
        Powered by Razorpay · No subscriptions · One-time payment
      </p>
    </div>
  );
}