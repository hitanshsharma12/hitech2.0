// ─────────────────────────────────────────────────────────────────────────────
// courseData.ts  —  Single source of truth for your Courses + Enroll sections
// Edit ONLY this file to update copy, pricing, features, seats, and media.
// ─────────────────────────────────────────────────────────────────────────────

export const courseData = {
  // ─── Instructor ──────────────────────────────────────────────────────────
  instructorName: "Hitansh",
  instructorRole: "Freelancing Coach",

  // ─── Video (place your video file in /public/videos/) ────────────────────
  videoSrc:    "/videos/course-intro.mp4",     // ← your video file
  videoPoster: "/images/course-poster.jpg",    // ← thumbnail shown before play

  // ─── Course meta ─────────────────────────────────────────────────────────
  courseTitle:   "Freelancing Mastery Cohort",
  watchLabel:    "WATCH HOW IT WORKS",
  sectionTitle:  { white: "Featured", accent: "Cohorts" },

  // ─── Feature grid (2-column, left-bar style like Image 1) ────────────────
  features: [
    { label: "6 Hours+",          sublabel: "Recorded Training"    },
    { label: "3 Live Sessions",   sublabel: "Every Week"           },
    { label: "WhatsApp Access",   sublabel: "Private Community"    },
    { label: "QnA Support",       sublabel: "Ask Me Anytime"       },
    { label: "₹80K Blueprint",    sublabel: "Earning System"       },
    { label: "Foreign Clients",   sublabel: "Proven Acquisition"   },
  ],

  // ─── Pricing ─────────────────────────────────────────────────────────────
  price: {
    display:        "999",
    original:       "₹4,999",
    discount:       "80% OFF",
    razorpayAmount: 99900,           // paise  (₹999 × 100)
  },

  // ─── Add-on upsell (checkbox in checkout form) ───────────────────────────
  addOn: {
    label:          "Add Client Acquisition Toolkit",
    price:          "₹499",
    description:
      "Cold DM scripts, email templates, proposal formats & proven closing scripts to land clients fast.",
    razorpayAmount: 49900,           // paise  (₹499 × 100)
  },

  // ─── Live seat counter ───────────────────────────────────────────────────
  seats: {
    claimed: 114,   // ← update this number live as enrollments come in
    total:   500,
  },

  // ─── CTA copy ────────────────────────────────────────────────────────────
  ctaMain: "CLAIM YOUR SPOT FOR ₹999",
  ctaSub:  "Instant Access · WhatsApp Community · 3 Live Sessions / Week",

  // ─── Enroll section (Image 2) ─────────────────────────────────────────────
  enrollHeadline: {
    white:  "SELL WEBSITES.",
    accent: "EARN UP TO ₹80,000",
  },
  enrollSubtitle:
    "A complete system to attract, position, and close premium clients — locally and globally.",

  bullets: [
    "Sell websites to local businesses and earn ₹20,000–₹80,000 per project.",
    "Land foreign clients and charge in dollars — zero prior experience needed.",
    "Get personal guidance from me directly on WhatsApp, any time you're stuck.",
    "Join 3 live strategy sessions every week for real-time feedback.",
    "All video training unlocks instantly the moment you enroll.",
    "Build a repeatable lead pipeline that brings client inquiries weekly.",
  ],

  // ─── Trust badges (bottom of left column) ────────────────────────────────
  badges: [
    { icon: "🔒", text: "Secure Razorpay" },
    { icon: "⚡", text: "Instant Dashboard Access" },
    { icon: "📹", text: "Live Execution Training" },
  ],

  // ─── Razorpay ─────────────────────────────────────────────────────────────
  // Replace with your actual credentials from dashboard.razorpay.com
  razorpayKey:         "YOUR_RAZORPAY_KEY_ID",
  razorpayCourseName:  "Freelancing Mastery",

  // ─── WhatsApp (used for post-enrollment redirect) ─────────────────────────
  whatsappNumber: "7018796714",
  whatsappGroupLink: "https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK", // ← replace
};