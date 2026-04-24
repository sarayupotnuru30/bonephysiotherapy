// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { services, categories } from "@/data/services";
// import { cn } from "@/lib/utils";
// import logo from "@/assets/logo.png";

// // Updated order in the array for mobile mapping
// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// export function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
//       <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
//         {/* Logo and Tagline */}
//         <Link to="/" className="flex flex-col items-center group py-2" aria-label="Bone Physiotherapy Clinic">
//           <img
//             src={logo}
//             alt="Bone Physiotherapy Clinic logo"
//             className="h-20 w-auto transition-transform group-hover:scale-105"
//           />
//           <span className="mt-0.5 text-[9px] font-bold tracking-[0.15em] text-primary uppercase leading-none">
//             Recover, Rebuild, Return stronger
//           </span>
//         </Link>

//         {/* Desktop nav - Reordered */}
//         <nav className="hidden items-center gap-1 lg:flex">
//           {/* 1. Home */}
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               `rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
//             }
//           >
//             Home
//           </NavLink>

//           {/* 2. About */}
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
//             }
//           >
//             About
//           </NavLink>

//           {/* 3. Services dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setServicesOpen(true)}
//             onMouseLeave={() => setServicesOpen(false)}
//           >
//             <NavLink
//               to="/services"
//               className={({ isActive }) =>
//                 `flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
//               }
//             >
//               Services
//               <ChevronDown className="h-4 w-4 transition-transform" style={{ transform: servicesOpen ? "rotate(180deg)" : undefined }} />
//             </NavLink>
//             <div
//               className={cn(
//                 "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200",
//                 servicesOpen ? "visible opacity-100" : "invisible opacity-0",
//               )}
//             >
//               <div className="grid w-[640px] grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-[var(--shadow-elegant)]">
//                 {categories.map((cat) => (
//                   <div key={cat} className="space-y-1">
//                     <div className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
//                       {cat}
//                     </div>
//                     {services
//                       .filter((s) => s.category === cat)
//                       .map((s) => (
//                         <Link
//                           key={s.slug}
//                           to={`/services/${s.slug}`}
//                           className="block rounded-md px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-medical-light hover:text-primary"
//                         >
//                           {s.title}
//                         </Link>
//                       ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* 4. Contact */}
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
//             }
//           >
//             Contact
//           </NavLink>

//           {/* 5. Book Appointment */}
//           <Link
//             to="/contact"
//             className="ml-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5"
//           >
//             Book Appointment
//           </Link>
//         </nav>

//         <button
//           className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
//           onClick={() => setOpen((o) => !o)}
//           aria-label="Toggle menu"
//         >
//           {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </button>
//       </div>

//       {/* Mobile menu - Reordered */}
//       {open && (
//         <div className="lg:hidden border-t border-border bg-background">
//           <div className="space-y-1 px-4 py-4">
//             {/* Home and About */}
//             {navLinks.slice(0, 2).map((l) => (
//               <Link
//                 key={l.to}
//                 to={l.to}
//                 onClick={() => setOpen(false)}
//                 className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
//               >
//                 {l.label}
//               </Link>
//             ))}

//             {/* Services Dropdown */}
//             <details className="group">
//               <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted">
//                 Services
//                 <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
//               </summary>
//               <div className="mt-1 space-y-3 px-2 py-2">
//                 <Link
//                   to="/services"
//                   onClick={() => setOpen(false)}
//                   className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-medical-light"
//                 >
//                   All Services →
//                 </Link>
//                 {categories.map((cat) => (
//                   <div key={cat}>
//                     <div className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
//                       {cat}
//                     </div>
//                     {services
//                       .filter((s) => s.category === cat)
//                       .map((s) => (
//                         <Link
//                           key={s.slug}
//                           to={`/services/${s.slug}`}
//                           onClick={() => setOpen(false)}
//                           className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
//                         >
//                           {s.title}
//                         </Link>
//                       ))}
//                   </div>
//                 ))}
//               </div>
//             </details>

//             {/* Contact */}
//             {navLinks.slice(2).map((l) => (
//               <Link
//                 key={l.to}
//                 to={l.to}
//                 onClick={() => setOpen(false)}
//                 className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
//               >
//                 {l.label}
//               </Link>
//             ))}

//             {/* Book Appointment */}
//             <Link
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
//             >
//               Book Appointment
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

















import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { services, categories } from "@/data/services";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const whatsappNumber = "+919390370782";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Tagline */}
        <Link to="/" className="flex flex-col items-center group py-2" aria-label="Bone Physiotherapy Clinic">
          <img
            src={logo}
            alt="Bone Physiotherapy Clinic logo"
            className="h-20 w-auto transition-transform group-hover:scale-105"
          />
          <span className="mt-0.5 text-[9px] font-bold tracking-[0.15em] text-primary uppercase leading-none">
            Recover, Rebuild, Return stronger
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            About
          </NavLink>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
              }
            >
              Services
              <ChevronDown className="h-4 w-4 transition-transform" style={{ transform: servicesOpen ? "rotate(180deg)" : undefined }} />
            </NavLink>
            <div
              className={cn(
                "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200",
                servicesOpen ? "visible opacity-100" : "invisible opacity-0",
              )}
            >
              <div className="grid w-[640px] grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-[var(--shadow-elegant)]">
                {categories.map((cat) => (
                  <div key={cat} className="space-y-1">
                    <div className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {cat}
                    </div>
                    {services
                      .filter((s) => s.category === cat)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block rounded-md px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-medical-light hover:text-primary"
                        >
                          {s.title}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            Contact
          </NavLink>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#20ba5a] hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            WhatsApp
          </a>

          <Link
            to="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 py-4">
            {navLinks.slice(0, 2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}

            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted">
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-1 space-y-3 px-2 py-2">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-medical-light"
                >
                  All Services →
                </Link>
                {categories.map((cat) => (
                  <div key={cat}>
                    <div className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {cat}
                    </div>
                    {services
                      .filter((s) => s.category === cat)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
                        >
                          {s.title}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </details>

            {navLinks.slice(2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}

            {/* Mobile WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              Chat on WhatsApp
            </a>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
