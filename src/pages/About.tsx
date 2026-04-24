// import { useEffect } from "react";
// import aboutMission from "@/assets/services/about-mission.jpg";
// import aboutTeam from "@/assets/services/about-team.jpg";
// import doctorImg from "@/assets/doctor.jpeg";
// import { CheckCircle2 } from "lucide-react";

// export default function AboutPage() {
//   useEffect(() => {
//     document.title = "About — Bone Physiotherapy";
//   }, []);

//   return (
//     <>
//       <section className="bg-medical-light py-20">
//         <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
//           <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">About Us</span>
//           <h1 className="mt-4 font-heading text-4xl font-bold text-foreground md:text-5xl text-balance">Care designed around you</h1>
//           <p className="mt-5 text-base text-muted-foreground md:text-lg">
//             We combine clinical expertise with a patient-first philosophy to help every individual move better, feel stronger, and live pain-free.
//           </p>
//         </div>
//       </section>

//       <section className="py-16 sm:py-20">
//         <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           <img src={aboutMission} alt="Our mission" className="rounded-3xl shadow-[var(--shadow-elegant)]" />
//           <div>
//             <h2 className="font-heading text-3xl font-bold text-foreground">Our mission</h2>
//             <p className="mt-4 text-base leading-relaxed text-muted-foreground">
//               To deliver expert orthopaedic and physiotherapy care that restores mobility, relieves pain, and improves quality of life — for every patient, at every stage of recovery.
//             </p>
//             <ul className="mt-6 space-y-3">
//               {["Evidence-based treatment plans", "Compassionate, patient-first care", "Long-term recovery and prevention"].map((p) => (
//                 <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
//                   <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> {p}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Doctor Details Section with Reduced Image Size */}
//       <section className="py-16 sm:py-20 border-t border-border">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           <div className="order-2 lg:order-1">
//             <span className="text-sm font-bold uppercase tracking-widest text-primary">Lead Orthopaedic Surgeon</span>
//             <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">Dr. Chaitanya Reddy Chintham</h2>
//             <p className="mt-2 text-lg font-medium text-primary">Consultant Orthopaedic Surgeon</p>
//             <p className="text-sm text-muted-foreground">Bone Orthopaedic Clinic, in association with Oxycare Hospitals (ECIL | Safilguda)</p>
            
//             <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
//               <p>
//                 Joint pain doesn't just affect movement — it changes your routine, your confidence, and sometimes even your sleep. Whether it's a persistent knee problem, a hip issue, or a sports injury that refuses to heal, early expert care makes all the difference.
//               </p>
//               <p>
//                 From knee replacement and hip replacement to arthroscopy surgery and sports injury treatment, care is focused on restoring mobility and improving long-term joint health.
//               </p>
//               <p>
//                 If you are searching for a top orthopaedic surgeon in ECIL,Safilguda, personalized evaluation and advanced surgical expertise are available close to you.
//               </p>
//             </div>

//             <div className="mt-8 flex flex-wrap gap-2">
//               {["Knee Replacement", "Hip Replacement", "Arthroscopy Surgery", "Sports Injury", "Joint Care"].map((tag) => (
//                 <span key={tag} className="rounded-lg bg-medical-light px-3 py-1 text-xs font-medium text-foreground border border-primary/20">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="order-1 flex justify-center lg:order-2">
//             <div className="max-w-md overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
//               <img src={doctorImg} alt="Dr. Chaitanya Reddy Chintham" className="h-full w-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-medical-light py-16 sm:py-20">
//         <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           <div className="order-2 lg:order-1">
//             <h2 className="font-heading text-3xl font-bold text-foreground">A team you can trust</h2>
//             <p className="mt-4 text-base leading-relaxed text-muted-foreground">
//               Our experienced specialists work together to deliver personalized care that addresses both immediate symptoms and long-term wellness goals.
//             </p>
//           </div>
//           <img src={aboutTeam} alt="Our team" className="order-1 rounded-3xl shadow-[var(--shadow-elegant)] lg:order-2" />
//         </div>
//       </section>
//     </>
//   );
// }








import { useEffect, useState } from "react";
import aboutMission from "@/assets/services/about-mission.jpg";
import aboutTeam from "@/assets/services/about-team.jpg";
import doctorImg1 from "@/assets/doctor.jpeg";
import doctorImg2 from "@/assets/doctor2.jpeg";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Chaitanya Reddy Chintham",
    title: "Consultant Orthopaedic Surgeon",
    subtitle: "Lead Orthopaedic Surgeon",
    location: "Bone Orthopaedic Clinic, in association with Oxycare Hospitals (ECIL | Safilguda)",
    description: [
      "Joint pain doesn't just affect movement — it changes your routine, your confidence, and sometimes even your sleep. Whether it's a persistent knee problem, a hip issue, or a sports injury that refuses to heal, early expert care makes all the difference.",
      "From knee replacement and hip replacement to arthroscopy surgery and sports injury treatment, care is focused on restoring mobility and improving long-term joint health.",
      "If you are searching for a top orthopaedic surgeon in ECIL, Safilguda, personalized evaluation and advanced surgical expertise are available close to you."
    ],
    tags: ["Knee Replacement", "Hip Replacement", "Arthroscopy Surgery", "Sports Injury", "Joint Care"],
    image: doctorImg1
  },
  {
    name: "Dr. Venkat Reddy A",
    title: "Consultant Neuro Physician",
    subtitle: "Expert Neurologist",
    location: "Bone Physiotherapy Clinic, in association with Dm Neuro Clinic (Kompally | Safilguda/Apollo Secunderabad)",
    description: [
      "Neurological conditions don’t just affect the brain — they impact movement, coordination, independence, and overall quality of life. Whether it’s persistent headaches, nerve-related pain, stroke recovery, or neurological disorders, early expert care plays a crucial role in recovery and long-term well-being.",
      "From stroke management and neuropathy care to treatment of neurological disorders and rehabilitation support, the focus is on improving function, reducing symptoms, and enhancing quality of life.",
      "If you are searching for a trusted neurologist in Kompally, Safilguda, Secunderabad, personalized evaluation and advanced neurological care are available close to you."
    ],
    tags: ["Stroke Rehabilitation", "Diabetic Neuropathy", "Peripheral Nerve Disorders", "Foot Drop Management", "Migraines & Headaches", "Epilepsy Care", "Spine & Nerve Pain"],
    image: doctorImg2
  }
];

export default function AboutPage() {
  const [currentDoctor, setCurrentDoctor] = useState(0);

  useEffect(() => {
    document.title = "About — Bone Physiotherapy";
  }, []);

  const nextDoctor = () => setCurrentDoctor((prev) => (prev + 1) % doctors.length);
  const prevDoctor = () => setCurrentDoctor((prev) => (prev - 1 + doctors.length) % doctors.length);

  return (
    <>
      <section className="bg-medical-light py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">About Us</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-foreground md:text-5xl text-balance">Care designed around you</h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            We combine clinical expertise with a patient-first philosophy to help every individual move better, feel stronger, and live pain-free.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img src={aboutMission} alt="Our mission" className="rounded-3xl shadow-[var(--shadow-elegant)]" />
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Our mission</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To deliver expert orthopaedic and physiotherapy care that restores mobility, relieves pain, and improves quality of life — for every patient, at every stage of recovery.
            </p>
            <ul className="mt-6 space-y-3">
              {["Evidence-based treatment plans", "Compassionate, patient-first care", "Long-term recovery and prevention"].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Doctor Slider Section */}
      <section className="py-16 sm:py-20 border-t border-border bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center">
            
            {/* Desktop Navigation Buttons */}
            <button 
              onClick={prevDoctor}
              className="absolute -left-4 z-10 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow-md hover:bg-primary hover:text-white transition-all"
              aria-label="Previous Doctor"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextDoctor}
              className="absolute -right-4 z-10 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow-md hover:bg-primary hover:text-white transition-all"
              aria-label="Next Doctor"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="grid w-full items-center gap-12 lg:grid-cols-2 transition-all duration-500 animate-in fade-in slide-in-from-right-5">
              
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-primary">
                    {doctors[currentDoctor].subtitle}
                  </span>
                  {/* Mobile Nav Indicators */}
                  <div className="flex gap-1 lg:hidden ml-auto">
                    <button onClick={prevDoctor} className="p-2 rounded-full bg-muted"><ChevronLeft className="h-4 w-4" /></button>
                    <button onClick={nextDoctor} className="p-2 rounded-full bg-muted"><ChevronRight className="h-4 w-4" /></button>
                  </div>
                </div>

                <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                  {doctors[currentDoctor].name}
                </h2>
                <p className="mt-2 text-lg font-medium text-primary">
                  {doctors[currentDoctor].title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {doctors[currentDoctor].location}
                </p>
                
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {doctors[currentDoctor].description.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {doctors[currentDoctor].tags.map((tag) => (
                    <span key={tag} className="rounded-lg bg-medical-light px-3 py-1 text-xs font-medium text-foreground border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="order-1 flex justify-center lg:order-2">
                <div className="max-w-md w-full aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)] border-4 border-white">
                  <img 
                    src={doctors[currentDoctor].image} 
                    alt={doctors[currentDoctor].name} 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

            </div>
          </div>
          
          {/* Slider Dots */}
          <div className="mt-10 flex justify-center gap-2">
            {doctors.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentDoctor(i)}
                className={`h-2 transition-all rounded-full ${currentDoctor === i ? "w-8 bg-primary" : "w-2 bg-primary/20"}`}
                aria-label={`Go to doctor ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-medical-light py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-3xl font-bold text-foreground">A team you can trust</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our experienced specialists work together to deliver personalized care that addresses both immediate symptoms and long-term wellness goals.
            </p>
          </div>
          <img src={aboutTeam} alt="Our team" className="order-1 rounded-3xl shadow-[var(--shadow-elegant)] lg:order-2" />
        </div>
      </section>
    </>
  );
}
