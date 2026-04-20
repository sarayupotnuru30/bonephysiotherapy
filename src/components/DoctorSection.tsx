import { Link } from "react-router-dom";
import { GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import drChaitanya from "@/assets/services/dr-chaitanya.png";

const qualifications = [
  "MBBS",
  "MS Ortho",
  "Fellow in Joint Replacement",
  "Fellow in Spine Surgery",
  "Fellow in Trauma Surgery",
  "PGCC in Rheumatology (IMA)",
];

const expertise = [
  "Knee Replacement",
  "Hip Replacement",
  "Arthroscopy Surgery",
  "Sports Injury",
  "Joint Care",
];

interface DoctorSectionProps {
  variant?: "home" | "about";
}

export function DoctorSection({ variant = "home" }: DoctorSectionProps) {
  return (
    <section className={variant === "home" ? "py-20 sm:py-24" : "py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Meet Your Doctor
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Expert care from a trusted specialist
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Doctor image */}
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div
                className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-hero)] opacity-20 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-medical-light shadow-[var(--shadow-elegant)]">
                <img
                  src={drChaitanya}
                  alt="Dr. Chaitanya Reddy Chintham — Consultant Orthopaedic Surgeon"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Doctor details */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Dr. Chaitanya Reddy Chintham
            </h3>
            <p className="mt-2 text-base font-semibold text-primary">
              Consultant Orthopaedic Surgeon
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Bone Orthopaedic Clinic, in association with Oxycare Hospitals (ECIL | Safilguda)
            </p>

            {/* Qualifications */}
            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                <GraduationCap className="h-4 w-4 text-primary" /> Qualifications
              </div>
              <div className="flex flex-wrap gap-2">
                {qualifications.map((q) => (
                  <span
                    key={q}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Joint pain doesn't just affect movement — it changes your routine, your confidence, and sometimes even your sleep. Whether it's a persistent knee problem, a hip issue, or a sports injury that refuses to heal, early expert care makes all the difference.
              </p>
              <p>
                From knee replacement and hip replacement to arthroscopy surgery and sports injury treatment, care is focused on restoring mobility and improving long-term joint health.
              </p>
              <p>
                If you are searching for a top orthopaedic surgeon in ECIL, Hyderabad, personalized evaluation and advanced surgical expertise are available close to you.
              </p>
            </div>

            {/* Areas of Expertise */}
            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                <Stethoscope className="h-4 w-4 text-primary" /> Areas of Expertise
              </div>
              <div className="flex flex-wrap gap-2">
                {expertise.map((e) => (
                  <span
                    key={e}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
              >
                Book a Consultation
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
