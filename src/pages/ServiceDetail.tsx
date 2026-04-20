import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  ListChecks,
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceCard } from "@/components/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";
import NotFoundPage from "@/pages/NotFound";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    document.title = service
      ? `${service.title} — Bone Physiotherapy`
      : "Service — Bone Physiotherapy";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [service]);

  if (!service) return <NotFoundPage />;

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[44vh] min-h-[340px] w-full">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
              <div className="text-white animate-fade-in-up">
                <span className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {service.category}
                </span>
                <h1 className="mt-4 font-heading text-3xl font-bold text-white md:text-5xl text-balance">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-border bg-medical-light/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: service.title },
            ]}
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-14 lg:col-span-2">
            {/* Intro */}
            <div>
              <p className="text-lg leading-relaxed text-foreground/90">
                {service.intro}
              </p>
            </div>

            {/* Understanding (optional) */}
            {service.understanding && (
              <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Stethoscope className="h-5 w-5" />
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {service.understanding.heading}
                  </h2>
                </div>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
                  {service.understanding.body}
                </p>
                {service.understanding.bullets && (
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {service.understanding.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-foreground/85"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.understanding.closingNote && (
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    {service.understanding.closingNote}
                  </p>
                )}
              </div>
            )}

            {/* Conditions (optional) */}
            {service.conditions && (
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-teal/15 text-accent-teal">
                    <ListChecks className="h-5 w-5" />
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {service.conditions.heading ?? "Conditions We Treat"}
                  </h2>
                </div>
                {service.conditions.intro && (
                  <p className="mt-3 text-base leading-relaxed text-foreground/85">
                    {service.conditions.intro}
                  </p>
                )}
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.conditions.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why Important + Key Benefits (optional) */}
            {(service.whyImportant || service.keyBenefits) && (
              <div className="rounded-2xl bg-medical-light/60 p-7">
                {service.whyImportant && (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <HeartPulse className="h-5 w-5" />
                      </span>
                      <h2 className="font-heading text-2xl font-bold text-foreground">
                        {service.whyImportant.heading ?? "How We Help"}
                      </h2>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-foreground/85">
                      {service.whyImportant.body}
                    </p>
                  </>
                )}
                {service.keyBenefits && service.keyBenefits.length > 0 && (
                  <>
                    <h3 className="mt-6 font-heading text-base font-bold uppercase tracking-wider text-primary">
                      Key Benefits
                    </h3>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {service.keyBenefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 rounded-lg bg-card/80 px-3 py-2.5 text-sm text-foreground/90 shadow-[var(--shadow-soft)]"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-teal" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}

            {/* Highlights (always) */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                What we focus on
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach (always) */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Our approach
              </h2>
              <ol className="mt-5 space-y-4">
                {service.approach.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <p className="pt-1.5 text-sm leading-relaxed text-foreground/90">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Techniques (optional) */}
            {service.techniques && service.techniques.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Effective Physiotherapy Techniques
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {service.techniques.map((t, i) => (
                    <div
                      key={t.title}
                      className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-teal/15 font-heading text-sm font-bold text-accent-teal">
                          {i + 1}
                        </span>
                        <h3 className="font-heading text-base font-bold text-foreground">
                          {t.title}
                        </h3>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-foreground/80">
                        {t.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us (optional) */}
            {service.whyChooseUs && service.whyChooseUs.length > 0 && (
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Why Choose Us?
                  </h2>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.whyChooseUs.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground/90">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Closing CTA card (always) */}
            <div className="rounded-2xl bg-[image:var(--gradient-hero)] p-8 text-white shadow-[var(--shadow-elegant)]">
              <Sparkles className="h-6 w-6" />
              {service.ctaTitle && (
                <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-white text-balance">
                  {service.ctaTitle}
                </h2>
              )}
              <p className="mt-3 text-base leading-relaxed text-white/90 text-balance">
                {service.closing}
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Book a consultation
              </Link>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/70">
                Recover • Rebuild • Return Stronger
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-heading text-lg font-bold text-foreground">
                Quick overview
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.shortDescription}
              </p>
              <div className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium text-foreground">
                    {service.category.split(" & ")[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Approach</span>
                  <span className="font-medium text-foreground">Personalized</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sessions</span>
                  <span className="font-medium text-foreground">Tailored to you</span>
                </div>
              </div>
            </div>

            {related.length > 0 && (
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Related services
                </h3>
                <div className="mt-4 space-y-4">
                  {related.map((s, i) => (
                    <ServiceCard key={s.slug} service={s} index={i} />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
