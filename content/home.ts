// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults — TASKPILOT BRANDING ──────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "TaskPilot",
    badgeOuter: "Take Flight with TaskPilot",
    titleBefore: "",
    titleHighlight: "Take Flight with TaskPilot",
    titleAfter: "",
    subtitle: "The collaborative project management platform for fast-moving teams.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See Live Demo", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "TaskPilot dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why TaskPilot",
    heading: "Organize Work with Ease",
    description:
      "Track issues, manage boards, and plan sprints—all in one streamlined workspace.",
    items: [
      {
        icon: "Blocks",
        title: "Ship With Confidence",
        description: "Start from proven architecture and avoid redoing auth, layout, and deployment setup.",
      },
      {
        icon: "LineChart",
        title: "Stay Aligned, Move Faster",
        description: "Bring your team together with powerful boards, flexible workflows, and real-time collaboration.",
      },
      {
        icon: "Wallet",
        title: "Built for Teams of Any Size",
        description: "From startups to enterprises, TaskPilot scales with your needs. Invite your team and get started in minutes.",
      },
      {
        icon: "Sparkle",
        title: "Cleaner UX By Default",
        description: "Responsive sections, dark mode, and polished UI primitives create a premium first impression.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Streamline Every Project",
    subtitle:
      "TaskPilot brings clarity and momentum to every project. Organize boards, track issues, and plan sprints with ease.",
    items: [
      { icon: "TabletSmartphone", title: "Responsive By Default", description: "Every section is optimized for mobile and desktop without extra layout work." },
      { icon: "BadgeCheck", title: "Collaborative Boards", description: "Visualize work for everyone—drag, drop, assign, and track with ease." },
      { icon: "Goal", title: "Sprint Planning", description: "Plan upcoming cycles, assign work and deliver on time." },
      { icon: "Users", title: "Real-Time Collaboration", description: "Keep everyone in sync with instant updates and notifications." },
      { icon: "MousePointerClick", title: "Intuitive Issue Tracking", description: "Log, prioritize, and resolve bugs or features in one place." },
      { icon: "Clock7", title: "Flexible Workflows", description: "Customize status workflows and adapt TaskPilot to your team’s needs." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Everything You Need to Move Fast",
    subtitle:
      "A pragmatic baseline for project-focused teams that need clarity and momentum.",
    items: [
      { title: "Boards & Projects", description: "Organize any work—tasks, bugs, features, and more.", pro: false },
      { title: "Sprint Planning", description: "Time-bound cycles drive focus and delivery.", pro: false },
      { title: "Permissions & Teams", description: "Invite your team and set access for smooth collaboration.", pro: false },
      { title: "Effortless Onboarding", description: "Get set up in minutes. No steep learning curve.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams shipping with TaskPilot",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, FinchFlow", comment: "TaskPilot gave us an edge over legacy PM tools—setup was quick, and the team onboarded painlessly.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Product Lead, OrbitDesk", comment: "We love the clarity and focus—everyone knows what to work on, and sprints are visible at a glance.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Sofia Green", role: "Founder, LaunchPad AI", comment: "Our distributed team stays perfectly aligned. The interface is clean, fast, and easy.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Engineering Manager, PulseOps", comment: "TaskPilot finally ended our spreadsheet pain. Issues, boards, and priorities just make sense.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Head of Growth, Nimbus", comment: "Our go-to solution for planning sprints. Fast, reliable, and no learning curve.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, TeamForge", comment: "TaskPilot’s boards and filters are lifesavers for a fast-paced dev team.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the TaskPilot Team",
    members: [
      // Leave as sample team, owner info used in contact
      {
        imageUrl: "/team1.jpg",
        firstName: "Adan",
        lastName: "Asim",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "#" },
          { name: "Github", url: "#" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, Transparent Pricing",
    subtitle: "Choose the plan that grows with your team. Start free, pay as you scale.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "Try TaskPilot with your team and upgrade anytime.",
        buttonText: "Get Started",
        benefits: [
          "Unlimited boards",
          "Unlimited sprints",
          "Up to 5 teammates",
          "Basic permission controls",
          "Community support",
        ],
      },
      {
        title: "Pro",
        popular: false,
        price: 49,
        description: "For teams that want advanced workflows and integrations.",
        buttonText: "Upgrade to Pro",
        benefits: [
          "All Free features",
          "Issue assignment",
          "Advanced filters",
          "Slack & GitHub integration",
          "Priority support",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "For large organizations requiring advanced controls.",
        buttonText: "Contact Sales",
        benefits: [
          "All Pro features",
          "Custom onboarding",
          "SSO/SAML integration",
          "Dedicated CSM",
          "Premium SLA",
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the TaskPilot Team",
    description:
      "Want help launching, customizing, or scaling? Let’s talk about your team’s goals.",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Global" },
      phone: { label: "—", value: "" },
      email: { label: "Email us", value: "adan@bidx.ai" },
      hours: { label: "—", value: "" },
    },
    formSubjects: [
      "Demo Request",
      "Pricing Inquiry",
      "Integration Question",
      "Team Onboarding",
      "General Question",
    ],
    formSubmitLabel: "Send inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      { question: "Is TaskPilot suitable for any team size?", answer: "Yes! TaskPilot works for startups, agencies, and enterprises alike." },
      { question: "Can we import issues from another tool?", answer: "Import coming soon, but our support team can help directly." },
      { question: "Does TaskPilot offer integrations?", answer: "Yes. Slack, GitHub, and more are available on Pro plans." },
      { question: "Do you offer discounts for NGOs or students?", answer: "Contact us for volume or social impact pricing." },
      { question: "Is there a free trial?", answer: "Always. The Free plan covers typical team needs with no time limit." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "TaskPilot",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "adan@bidx.ai", href: "mailto:adan@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
        ],
      },
    ],
    copyright: "© TaskPilot. Project management made effortless.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "TaskPilot",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "TaskPilot preview" },
    features: [
      { title: "Project Planning", description: "Boards, sprints, and issues for every workflow." },
      { title: "Real-Time Collaboration", description: "Assign, update, and discuss with your team instantly." },
      { title: "Simple Onboarding", description: "Ready to use for new teams or growing startups." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}