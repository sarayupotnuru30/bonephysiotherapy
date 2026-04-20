import orthoImg from "@/assets/services/ortho-care.jpg";
import heroPhysio from "@/assets/services/hero-physio.jpg";
import sportsImg from "@/assets/services/sports-rehab.jpg";
import neuroImg from "@/assets/services/neuro-rehab.jpg";
import strokeRecovery from "@/assets/services/stroke-recovery.jpg";
import spinalCord from "@/assets/services/spinal-cord.jpg";
import balence from "@/assets/services/balence.webp";
import postSurgery from "@/assets/services/post-surgery.jpg";
import ligament from "@/assets/services/ligament.webp";
import muscleTears from "@/assets/services/muscle-tears.webp";
import jointInjuries from "@/assets/services/joint-injuries.jpg";
import performance from "@/assets/services/performance.jpg";
import arthritis from "@/assets/services/arthritis.jpg";
import mobility from "@/assets/services/mobility.webp";
import balenceTraining from "@/assets/services/balence-training.jpg";
import chronicPain from "@/assets/services/chronic-pain.jpg";

export type Technique = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  intro: string;
  /** Optional richer copy below the intro. */
  understanding?: {
    heading: string;
    body: string;
    bullets?: string[];
    closingNote?: string;
  };
  /** Conditions / issues the service treats. */
  conditions?: {
    heading?: string;
    intro?: string;
    items: string[];
  };
  /** Short statement on why bone physiotherapy matters here. */
  whyImportant?: {
    heading?: string;
    body: string;
  };
  /** Quick wins the patient can expect. */
  keyBenefits?: string[];
  /** Existing field — high-level focus areas surfaced as cards. */
  highlights: string[];
  /** Existing field — numbered steps. */
  approach: string[];
  /** Numbered, expanded techniques. */
  techniques?: Technique[];
  /** Reasons to choose the clinic. */
  whyChooseUs?: string[];
  /** Closing paragraph. */
  closing: string;
  /** Final CTA headline (defaults to "Book your consultation today"). */
  ctaTitle?: string;
};

export const categories = [
  "Orthopaedic & Musculoskeletal Care",
  "Neurological Rehabilitation",
  "Sports Rehabilitation",
  "Elderly & Wellness Care",
] as const;

export const services: Service[] = [
  // ============== Orthopaedic ==============
  {
    slug: "fractures-bone-injuries",
    title: "Fractures & Bone Injuries",
    shortDescription:
      "Expert treatment and rehabilitation for all types of fractures and bone trauma.",
    image: orthoImg,
    category: "Orthopaedic & Musculoskeletal Care",
    intro:
      "From minor cracks to complex fractures, bone injuries require the right care and rehabilitation to heal properly. Without guided recovery, patients may experience stiffness, weakness, or long-term mobility issues. We provide evidence-based bone physiotherapy that ensures proper healing, restores strength, and helps you return to normal activity safely and confidently.",
    understanding: {
      heading: "Understanding Fractures & Bone Injuries",
      body: "Bone injuries can occur due to accidents, falls, sports injuries, or osteoporosis. Common challenges after fractures include:",
      bullets: [
        "Pain and swelling",
        "Limited movement and stiffness",
        "Muscle weakness",
        "Difficulty in weight-bearing",
        "Reduced joint flexibility",
      ],
      closingNote: "Proper rehabilitation is essential for complete recovery.",
    },
    whyImportant: {
      heading: "Why Bone Physiotherapy is Important",
      body: "Bone physiotherapy plays a vital role in recovery after fractures by focusing on healing, alignment, and functional restoration. It is a safe, non-invasive approach that ensures long-term recovery and reduces the risk of re-injury.",
    },
    keyBenefits: [
      "Reduces pain and inflammation",
      "Restores joint mobility and flexibility",
      "Improves muscle strength around the injured area",
      "Promotes proper bone alignment and healing",
      "Prevents stiffness and long-term complications",
      "Helps return to daily activities faster",
    ],
    highlights: [
      "Accurate diagnosis & clinical assessment",
      "Pain management with non-invasive techniques",
      "Personalized physiotherapy & rehabilitation",
      "Strength & mobility training to prevent recurrence",
    ],
    approach: [
      "Thorough clinical assessment of the injury site",
      "Customized rehabilitation plan to restore alignment and strength",
      "Progressive mobility and weight-bearing exercises",
      "Lifestyle and bone-health education for long-term healing",
    ],
    techniques: [
      { title: "Range of Motion Exercises", description: "Restore joint movement gradually without stressing healing bone." },
      { title: "Strengthening & Resistance Training", description: "Rebuild muscle support around the injury for stability." },
      { title: "Joint Mobilization", description: "Hands-on techniques to release stiffness and restore flexibility." },
      { title: "Gait Training", description: "Walking rehabilitation to safely return to normal weight-bearing." },
      { title: "Electrotherapy (TENS, Ultrasound)", description: "Modalities to relieve pain and accelerate tissue healing." },
      { title: "Functional Movement Training", description: "Re-train everyday motions to return confidently to daily life." },
    ],
    whyChooseUs: [
      "Experienced orthopaedic physiotherapists",
      "Personalized recovery programs",
      "Modern rehabilitation techniques",
      "Home care and in-clinic services available",
      "Focus on safe healing and long-term outcomes",
    ],
    closing:
      "Don't let a fracture limit your life. With expert physiotherapy care, you can recover fully and regain your strength and confidence.",
    ctaTitle: "Heal Stronger. Move Better.",
  },
  {
    slug: "joint-disorders",
    title: "Joint Disorders",
    shortDescription:
      "Specialized care for arthritis, joint stiffness, and degenerative conditions.",
    image: heroPhysio,
    category: "Orthopaedic & Musculoskeletal Care",
    intro:
      "Joint disorders can quietly steal your freedom of movement — from morning stiffness and swelling to deep, persistent ache. We treat the full spectrum of joint conditions with a patient-centered approach that combines advanced techniques with personalized care, helping you move comfortably and confidently again.",
    understanding: {
      heading: "Understanding Joint Disorders",
      body: "Joint conditions can affect the knees, hips, shoulders, hands, and spine. Common signs include:",
      bullets: [
        "Persistent joint pain and stiffness",
        "Swelling, warmth, or inflammation",
        "Reduced range of motion",
        "Cracking, popping, or grinding sensations",
        "Difficulty with daily activities",
      ],
      closingNote: "Early, structured physiotherapy can slow progression and protect long-term function.",
    },
    whyImportant: {
      heading: "Why Bone Physiotherapy is Important",
      body: "A non-surgical, drug-free approach that addresses the root cause of joint pain — improving alignment, strength, and movement so you can stay active comfortably.",
    },
    keyBenefits: [
      "Reduces inflammation and joint pain",
      "Restores comfortable range of motion",
      "Strengthens muscles that support the joint",
      "Improves balance and movement efficiency",
      "Slows progression and protects joint health",
    ],
    highlights: [
      "Comprehensive joint assessment",
      "Inflammation and pain control",
      "Mobility restoration programs",
      "Long-term joint-health education",
    ],
    approach: [
      "Evidence-based diagnosis of the affected joints",
      "Therapeutic techniques to reduce stiffness and swelling",
      "Tailored strength and flexibility programs",
      "Lifestyle guidance for joint preservation",
    ],
    techniques: [
      { title: "Manual Therapy", description: "Hands-on mobilization to ease stiffness and improve glide." },
      { title: "Therapeutic Exercise", description: "Progressive strengthening for the muscles that support each joint." },
      { title: "Electrotherapy", description: "Ultrasound and TENS to relieve inflammation and pain." },
      { title: "Heat & Cold Therapy", description: "Targeted modalities to manage swelling and stiffness." },
      { title: "Postural & Ergonomic Correction", description: "Reduce daily stress on vulnerable joints." },
    ],
    whyChooseUs: [
      "Experienced and certified physiotherapists",
      "Personalized treatment plans",
      "Advanced physiotherapy equipment",
      "Home care and clinic services available",
      "Focus on long-term recovery, not just temporary relief",
    ],
    closing:
      "Restore comfortable, confident movement with a treatment plan built around your daily life.",
    ctaTitle: "Move Freely Again",
  },
  {
    slug: "muscle-soft-tissue-injuries",
    title: "Muscle & Soft Tissue Injuries",
    shortDescription:
      "Targeted therapy for sprains, strains, and soft tissue damage.",
    image: sportsImg,
    category: "Orthopaedic & Musculoskeletal Care",
    intro:
      "Muscle and soft tissue injuries can occur due to sports, daily activities, accidents, or overuse. Conditions like sprains, strains, ligament tears, tendon injuries, and frozen shoulder can cause significant pain and restrict movement. We provide advanced bone physiotherapy that focuses on reducing pain, accelerating healing, and restoring full function — so you can return to your normal life safely and confidently.",
    conditions: {
      heading: "Common Conditions We Treat",
      items: [
        "Sprains (ligament injuries)",
        "Muscle strains and tears",
        "Ligament injuries",
        "Tendonitis and tendon injuries",
        "Frozen shoulder (adhesive capsulitis)",
        "Overuse and sports injuries",
      ],
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps",
      body: "Bone physiotherapy is a targeted, non-surgical approach designed to treat the root cause of injury and promote faster recovery. Early and structured therapy plays a crucial role in ensuring complete recovery.",
    },
    keyBenefits: [
      "Reduces pain and inflammation",
      "Speeds up tissue healing",
      "Restores mobility and flexibility",
      "Strengthens muscles and joints",
      "Prevents re-injury and long-term complications",
    ],
    highlights: [
      "Soft tissue mobilization & manual therapy",
      "Therapeutic exercises for tissue remodeling",
      "Pain & inflammation management",
      "Progressive return-to-activity plans",
    ],
    approach: [
      "Detailed physical assessment of the injured tissue",
      "Pain reduction with non-invasive modalities",
      "Graduated strengthening and stretching",
      "Re-education for safe movement patterns",
    ],
    techniques: [
      { title: "Manual Therapy", description: "Hands-on techniques to reduce stiffness, improve circulation, and relieve pain." },
      { title: "Exercise Rehabilitation", description: "Customized stretching and strengthening to restore function." },
      { title: "Electrotherapy", description: "TENS and ultrasound therapy to reduce pain and promote healing." },
      { title: "Myofascial Release", description: "Releases muscle tightness and improves soft tissue mobility." },
      { title: "Joint Mobilization", description: "Improves joint movement, especially in frozen shoulder cases." },
      { title: "Taping & Support Techniques", description: "Provides stability to injured areas and supports faster recovery." },
      { title: "Posture & Movement Correction", description: "Prevents further injury by correcting daily movement patterns." },
    ],
    whyChooseUs: [
      "Experienced physiotherapists",
      "Personalized treatment plans",
      "Modern equipment and techniques",
      "Home care and clinic services available",
      "Focus on long-term recovery and injury prevention",
    ],
    closing:
      "Don't ignore pain or delay treatment. With expert physiotherapy care, you can recover faster and return stronger.",
    ctaTitle: "Get Back to Pain-Free Movement",
  },
  {
    slug: "back-neck-pain",
    title: "Back & Neck Pain",
    shortDescription:
      "Evidence-based treatment for chronic and acute spinal conditions.",
    image: neuroImg,
    category: "Orthopaedic & Musculoskeletal Care",
    intro:
      "Back and neck pain can disrupt every part of your day — from sleep and work to simple movements like turning your head or bending forward. Whether your pain is from posture, disc problems, lower-back strain, or injury, we use proven techniques that relieve symptoms today and protect your spine for the long term.",
    conditions: {
      heading: "Common Conditions We Treat",
      items: [
        "Lower back pain and lumbar strain",
        "Neck pain and cervical stiffness",
        "Disc bulges and herniations",
        "Sciatica and nerve-related pain",
        "Posture-related and ergonomic pain",
        "Whiplash and accident-related injuries",
      ],
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps",
      body: "Targeted spinal physiotherapy addresses the underlying cause of pain — muscle imbalance, poor posture, joint dysfunction — instead of masking symptoms. The result is durable relief and a stronger, more resilient spine.",
    },
    keyBenefits: [
      "Reduces back and neck pain naturally",
      "Improves posture and spinal alignment",
      "Relieves nerve-related symptoms",
      "Restores flexibility and core strength",
      "Prevents recurrence with lifestyle guidance",
    ],
    highlights: [
      "Postural and ergonomic assessment",
      "Manual therapy for the spine",
      "Core stabilization training",
      "Lifestyle guidance for long-term relief",
    ],
    approach: [
      "Identifying the underlying cause of pain",
      "Targeted therapy to reduce nerve and muscle irritation",
      "Spine-strengthening and flexibility exercises",
      "Workplace and home ergonomic recommendations",
    ],
    techniques: [
      { title: "Manual Therapy & Mobilization", description: "Hands-on care to free stiff vertebrae and ease nerve tension." },
      { title: "Core & Postural Strengthening", description: "Builds the deep stabilizers that protect your spine all day." },
      { title: "Stretching & Flexibility Work", description: "Relieves tight hips, hamstrings, and shoulders that pull on the spine." },
      { title: "Electrotherapy (TENS, Ultrasound)", description: "Calms inflamed tissue and reduces nerve pain." },
      { title: "Postural & Ergonomic Training", description: "Workstation, sleep, and lifting habits tailored to your routine." },
      { title: "Functional Movement Re-education", description: "Re-teaches everyday motion so the spine moves safely under load." },
    ],
    whyChooseUs: [
      "Experienced spinal physiotherapists",
      "Personalized treatment plans",
      "Modern, drug-free pain management",
      "Home care and in-clinic services available",
      "Focus on long-term spinal health",
    ],
    closing:
      "Move freely again with a structured plan that calms pain today and protects your spine for the future.",
    ctaTitle: "Stand Tall. Live Pain-Free.",
  },

  // ============== Neurological ==============
  {
    slug: "stroke-recovery",
    title: "Stroke Recovery",
    shortDescription:
      "Comprehensive rehabilitation programs to regain function after stroke.",
    image: strokeRecovery,
    category: "Neurological Rehabilitation",
    intro:
      "A stroke can significantly impact movement, balance, speech, and overall independence. With the right rehabilitation approach, recovery is possible. Our bone physiotherapy and neurological rehabilitation programs are designed to help patients regain strength, mobility, and confidence.",
    understanding: {
      heading: "Understanding Stroke",
      body: "A stroke occurs when the blood supply to the brain is interrupted, leading to damage in brain cells. This can result in:",
      bullets: [
        "Weakness or paralysis (usually on one side of the body)",
        "Difficulty in walking or balancing",
        "Muscle stiffness or tightness",
        "Loss of coordination",
        "Pain in joints and muscles",
        "Difficulty performing daily activities",
      ],
      closingNote: "Early and consistent physiotherapy plays a crucial role in recovery.",
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps in Stroke Recovery",
      body: "Bone physiotherapy focuses on improving movement, strength, and joint function after a stroke. It helps in reducing pain caused by immobility and restoring functional independence.",
    },
    keyBenefits: [
      "Improves muscle strength and control",
      "Reduces stiffness and joint pain",
      "Enhances balance and coordination",
      "Promotes faster functional recovery",
      "Helps regain independence in daily activities",
    ],
    highlights: [
      "Restoring motor skills and coordination",
      "Improving muscle strength and flexibility",
      "Enhancing speech and cognitive support",
      "Re-learning daily activities like walking and self-care",
    ],
    approach: [
      "Detailed neurological assessment",
      "Customized therapy plan tailored to recovery goals",
      "Neuro-physiotherapy techniques to retrain the brain",
      "Functional training for independence",
    ],
    techniques: [
      { title: "Neuro Physiotherapy (Motor Relearning)", description: "Focused exercises to retrain the brain and body to work together again." },
      { title: "Range of Motion Exercises", description: "Helps prevent stiffness and improves joint flexibility." },
      { title: "Strength Training", description: "Gradual muscle strengthening to regain lost power." },
      { title: "Balance & Gait Training", description: "Improves walking ability and reduces risk of falls." },
      { title: "Functional Training", description: "Practice of daily activities like sitting, standing, and walking." },
      { title: "Electrical Stimulation Therapy", description: "Stimulates weak muscles to improve activation and recovery." },
      { title: "Pain Management Techniques", description: "Heat therapy, positioning, and manual therapy to reduce discomfort." },
    ],
    whyChooseUs: [
      "Experienced neurological physiotherapists",
      "Personalized stroke recovery plans",
      "Home care and in-clinic rehabilitation",
      "Advanced equipment and techniques",
      "Focus on long-term recovery and independence",
    ],
    closing:
      "Stroke recovery takes time, dedication, and expert guidance. With the right physiotherapy support, patients can achieve significant improvement and return to a more active life.",
    ctaTitle: "Start Your Recovery Journey Today",
  },
  {
    slug: "spinal-cord-injuries",
    title: "Spinal Cord Injuries",
    shortDescription:
      "Specialized therapy for spinal cord injury recovery and mobility.",
    image: spinalCord,
    category: "Neurological Rehabilitation",
    intro:
      "A spinal cord injury can be life-changing, affecting movement, strength, and independence. Recovery requires a structured, patient-centered approach that focuses on rebuilding physical function and improving quality of life. We provide specialized bone physiotherapy and rehabilitation programs designed to help patients regain strength, mobility, and independence through compassionate and goal-oriented care.",
    understanding: {
      heading: "Understanding Spinal Cord Injuries",
      body: "Spinal cord injuries can result from trauma, accidents, or medical conditions, leading to:",
      bullets: [
        "Partial or complete loss of movement",
        "Muscle weakness or paralysis",
        "Reduced coordination and balance",
        "Difficulty in performing daily activities",
        "Risk of complications due to immobility",
      ],
      closingNote: "Early and consistent rehabilitation is essential for maximizing recovery.",
    },
    whyImportant: {
      heading: "Why Bone Physiotherapy is Important",
      body: "Bone physiotherapy plays a crucial role in spinal cord injury recovery by focusing on movement, strength, and functional independence. It is a non-invasive and effective approach that supports long-term recovery and patient well-being.",
    },
    keyBenefits: [
      "Improves muscle strength and endurance",
      "Enhances mobility and functional movement",
      "Prevents joint stiffness and muscle tightness",
      "Reduces risk of secondary complications",
      "Promotes independence in daily activities",
      "Improves overall quality of life",
    ],
    highlights: [
      "Strength & endurance building",
      "Mobility & transfer training",
      "Prevention of secondary complications",
      "Family-inclusive care planning",
    ],
    approach: [
      "Strength & endurance building through targeted exercises",
      "Mobility & transfer training for safe daily movement",
      "Prevention of pressure sores, stiffness, and circulation issues",
      "Family-inclusive education to support recovery at home",
    ],
    techniques: [
      { title: "Range of Motion Exercises", description: "Maintain joint flexibility and prevent contractures." },
      { title: "Strength Training & Resistance Exercises", description: "Build the muscle power needed for everyday tasks." },
      { title: "Gait Training", description: "Walking rehabilitation where applicable, with progressive support." },
      { title: "Postural Correction & Positioning", description: "Protect skin, joints, and breathing through proper alignment." },
      { title: "Balance & Coordination Training", description: "Restore stability for safer transfers and movement." },
      { title: "Functional Activity Training", description: "Practice the real-world activities that matter most to you." },
      { title: "Electrotherapy", description: "Muscle stimulation to support recovery and prevent atrophy." },
    ],
    whyChooseUs: [
      "Experienced physiotherapists in neurological rehabilitation",
      "Personalized, patient-focused care plans",
      "Compassionate and supportive environment",
      "Home care and in-clinic services available",
      "Focus on long-term recovery and independence",
    ],
    closing:
      "Recovery from spinal cord injury is a journey — but with the right support and physiotherapy care, meaningful progress is always possible.",
    ctaTitle: "Regain Strength. Restore Independence.",
  },
  {
    slug: "balance-coordination",
    title: "Balance & Coordination",
    shortDescription:
      "Targeted exercises to improve balance, prevent falls, and restore coordination.",
    image: balence,
    category: "Neurological Rehabilitation",
    intro:
      "Dizziness, instability, and risk of falls can significantly affect your confidence and daily life. Simple activities like walking, standing, or turning can become challenging and unsafe. We offer specialized bone physiotherapy programs focused on improving balance, coordination, and overall stability — helping you move safely and confidently again.",
    conditions: {
      heading: "Common Conditions We Treat",
      items: [
        "Dizziness and vertigo",
        "Postural instability",
        "Frequent falls or fear of falling",
        "Neurological conditions affecting coordination",
        "Age-related balance issues",
      ],
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps",
      body: "Bone physiotherapy uses targeted techniques to improve the body's ability to maintain balance and control movement.",
    },
    keyBenefits: [
      "Reduces dizziness and instability",
      "Improves balance and coordination",
      "Enhances posture and body control",
      "Strengthens muscles supporting stability",
      "Reduces risk of falls and injuries",
    ],
    highlights: [
      "Balance and gait analysis",
      "Vestibular and proprioceptive training",
      "Fall-prevention strategies",
      "Confidence-building functional exercises",
    ],
    approach: [
      "Detailed balance and coordination assessment",
      "Progressive training across stable and dynamic surfaces",
      "Real-world functional integration",
      "Home program and lifestyle guidance",
    ],
    techniques: [
      { title: "Balance Training Exercises", description: "Improves stability through controlled movements and posture correction." },
      { title: "Gait Training", description: "Enhances walking pattern, coordination, and safety." },
      { title: "Vestibular Rehabilitation", description: "Special exercises to manage dizziness and improve inner-ear balance." },
      { title: "Strength & Core Training", description: "Builds muscle strength to support better control and stability." },
      { title: "Proprioception Training", description: "Improves body awareness and coordination." },
      { title: "Functional Training", description: "Practice of daily activities like standing, turning, and walking safely." },
      { title: "Fall Prevention Strategies", description: "Education and techniques to reduce fall risks at home and outdoors." },
    ],
    whyChooseUs: [
      "Experienced physiotherapists",
      "Personalized balance training programs",
      "Advanced rehabilitation techniques",
      "Home care and clinic services available",
      "Focus on long-term safety and independence",
    ],
    closing:
      "Don't let dizziness or instability limit your life. With expert physiotherapy care, you can regain balance, confidence, and independence.",
    ctaTitle: "Move with Confidence Again",
  },
  {
    slug: "post-neurosurgical-rehab",
    title: "Post-Surgery Rehab",
    shortDescription: "Guided recovery programs after neurological surgeries.",
    image: postSurgery,
    category: "Neurological Rehabilitation",
    intro:
      "Recovery after surgery is critical for long-term success. Our structured rehabilitation programs guide you through every stage — reducing pain, restoring function, and helping you safely return to the activities and life you love.",
    understanding: {
      heading: "What Post-Surgical Recovery Looks Like",
      body: "Whether you've had brain, spine, joint replacement, or orthopaedic surgery, recovery has predictable phases that benefit from expert guidance:",
      bullets: [
        "Early protection and pain management",
        "Restoring gentle movement and circulation",
        "Rebuilding strength around the surgical site",
        "Re-training balance, coordination, and confidence",
        "Returning to daily activities, work, and sport",
      ],
      closingNote: "Skipping or rushing any phase can slow recovery — we get the pacing right.",
    },
    whyImportant: {
      heading: "Why Bone Physiotherapy is Important",
      body: "Structured physiotherapy after surgery prevents complications like stiffness, weakness, and re-injury — and dramatically improves long-term outcomes.",
    },
    keyBenefits: [
      "Reduces post-surgical pain and swelling",
      "Restores joint movement and flexibility",
      "Rebuilds muscle strength safely",
      "Improves balance and coordination",
      "Helps you return to daily activities sooner",
    ],
    highlights: [
      "Reducing pain and swelling",
      "Restoring movement and flexibility",
      "Rebuilding muscle strength",
      "Improving balance and coordination",
    ],
    approach: [
      "Coordinated post-surgical assessment",
      "Stage-by-stage rehabilitation milestones",
      "Safe progression to daily activities",
      "Long-term recovery and prevention support",
    ],
    techniques: [
      { title: "Scar & Soft Tissue Mobilization", description: "Hands-on work to keep tissue supple and reduce adhesions." },
      { title: "Range of Motion Exercises", description: "Restore movement gradually and safely after surgery." },
      { title: "Progressive Strength Training", description: "Carefully loaded exercises to rebuild muscle around the surgical area." },
      { title: "Balance & Gait Training", description: "Re-learn safe, confident walking and standing." },
      { title: "Pain Management Modalities", description: "Electrotherapy, heat, and cold to support comfort and healing." },
      { title: "Functional & Return-to-Life Training", description: "Bridge from clinic exercises back to your real daily routine." },
    ],
    whyChooseUs: [
      "Experienced post-surgical rehabilitation team",
      "Personalized recovery milestones",
      "Coordination with your surgical team",
      "Home care and in-clinic services available",
      "Focus on long-term function and prevention",
    ],
    closing:
      "We'll help you regain function safely and confidently, with care designed around your surgical recovery.",
    ctaTitle: "Recover Strong. Return Sooner.",
  },

  // ============== Sports ==============
  {
    slug: "ligament-injuries",
    title: "Ligament Injuries",
    shortDescription:
      "ACL, MCL, and other ligament injury treatment and recovery programs.",
    image: ligament,
    category: "Sports Rehabilitation",
    intro:
      "Ligament injuries such as ACL (Anterior Cruciate Ligament) and PCL (Posterior Cruciate Ligament) tears are common in athletes and active individuals. These injuries can cause pain, instability, and difficulty in movement, affecting both performance and daily life. We provide advanced bone physiotherapy and sports rehabilitation programs designed to reduce pain, restore strength, and help you safely return to peak performance.",
    conditions: {
      heading: "Common Ligament Injuries We Treat",
      items: [
        "ACL tears",
        "PCL injuries",
        "MCL & LCL ligament injuries",
        "Knee instability and post-surgical rehab",
        "Sports-related ligament damage",
      ],
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps",
      body: "Bone physiotherapy plays a crucial role in both non-surgical recovery and post-surgical rehabilitation. Our science-based approach focuses on healing, strengthening, and preventing future injuries.",
    },
    keyBenefits: [
      "Reduces pain and swelling",
      "Restores joint stability and control",
      "Improves strength and flexibility",
      "Enhances balance and coordination",
      "Prepares you for safe return to sports",
    ],
    highlights: [
      "Pain and inflammation management",
      "Sport-specific rehabilitation",
      "Strength and conditioning programs",
      "Return-to-sport testing",
    ],
    approach: [
      "Thorough injury assessment and diagnosis",
      "Stage-based recovery aligned with tissue healing",
      "Biomechanical analysis to correct movement",
      "Progressive return to your sport",
    ],
    techniques: [
      { title: "Pain & Swelling Management", description: "Ice therapy, electrotherapy, and gentle movement to reduce inflammation." },
      { title: "Range of Motion Exercises", description: "Gradual exercises to restore full knee movement without stress." },
      { title: "Strength Training", description: "Focused strengthening of quadriceps, hamstrings, and surrounding muscles." },
      { title: "Proprioception & Balance Training", description: "Improves joint awareness and prevents re-injury." },
      { title: "Functional & Sport-Specific Training", description: "Advanced drills to prepare athletes for real-game situations." },
      { title: "Manual Therapy", description: "Hands-on techniques to improve mobility and reduce stiffness." },
      { title: "Taping & Bracing Support", description: "Provides stability during recovery and training phases." },
    ],
    whyChooseUs: [
      "Sports rehabilitation experts",
      "Personalized recovery programs",
      "Evidence-based physiotherapy techniques",
      "Modern equipment and guided training",
      "Focus on performance and injury prevention",
    ],
    closing:
      "Don't let a ligament injury hold you back. With the right rehabilitation program, you can come back stronger, safer, and more confident.",
    ctaTitle: "Return Stronger Than Before",
  },
  {
    slug: "muscle-tears",
    title: "Muscle Tears",
    shortDescription:
      "Fast-track recovery for muscle tears with targeted rehabilitation.",
    image: muscleTears,
    category: "Sports Rehabilitation",
    intro:
      "Muscle strains and tears are common in high-impact and repetitive sports. Without precise care, scar tissue and weakness can linger long after the initial pain fades — increasing the risk of re-injury. Our targeted rehabilitation gets the tissue healing correctly the first time, so you return stronger.",
    conditions: {
      heading: "Common Muscle Tears We Treat",
      items: [
        "Hamstring strains and tears",
        "Quadriceps and adductor (groin) injuries",
        "Calf and Achilles strains",
        "Rotator cuff and shoulder tears",
        "Sports-related and overuse muscle injuries",
      ],
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps",
      body: "We grade the injury carefully and apply the right load at the right time — so the tissue rebuilds with strength and elasticity, not stiff scar tissue.",
    },
    keyBenefits: [
      "Reduces pain and inflammation rapidly",
      "Promotes clean tissue healing",
      "Restores full muscle length and strength",
      "Lowers risk of re-tear",
      "Returns you to sport at full performance",
    ],
    highlights: [
      "Targeted soft-tissue therapy",
      "Progressive loading protocols",
      "Flexibility and mobility training",
      "Performance-focused return plan",
    ],
    approach: [
      "Identifying the grade and location of the tear",
      "Pain control and tissue healing support",
      "Graduated strengthening and lengthening",
      "Sport-specific functional drills",
    ],
    techniques: [
      { title: "Soft Tissue & Myofascial Therapy", description: "Hands-on work to improve circulation and align healing fibers." },
      { title: "Progressive Loading Programs", description: "Eccentric and concentric strengthening matched to healing phase." },
      { title: "Stretching & Flexibility Work", description: "Restore full muscle length to prevent re-injury." },
      { title: "Electrotherapy", description: "TENS and ultrasound to reduce pain and accelerate healing." },
      { title: "Sport-Specific Drills", description: "Bridge exercises that translate strength back into performance." },
      { title: "Taping & Compression Support", description: "Protection during early return to activity." },
    ],
    whyChooseUs: [
      "Sports rehabilitation specialists",
      "Personalized return-to-play plans",
      "Modern equipment and assessment tools",
      "Focus on long-term performance and prevention",
      "Coordination with your coach or trainer",
    ],
    closing:
      "Heal correctly the first time and return to action stronger than before.",
    ctaTitle: "Recover. Rebuild. Perform.",
  },
  {
    slug: "joint-injuries",
    title: "Joint Injuries",
    shortDescription:
      "Expert care for sports-related joint injuries and dislocations.",
    image: jointInjuries,
    category: "Sports Rehabilitation",
    intro:
      "Shoulder, knee, ankle, and hip injuries demand specialized rehab. We restore the stability, control, and explosive movement your sport demands — and equip you with the tools to stay injury-free.",
    conditions: {
      heading: "Common Joint Injuries We Treat",
      items: [
        "Shoulder dislocations and impingement",
        "Knee meniscus and cartilage injuries",
        "Ankle sprains and instability",
        "Hip labral and impingement issues",
        "Sports-related joint trauma and dislocations",
      ],
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps",
      body: "We restore joint mechanics, retrain the stabilizing muscles, and progress through sport-specific demands so you return safely — and with confidence.",
    },
    keyBenefits: [
      "Reduces pain and swelling",
      "Restores joint stability and control",
      "Builds explosive strength around the joint",
      "Improves agility, balance, and reaction time",
      "Lowers the risk of re-injury",
    ],
    highlights: [
      "Joint stability and proprioception training",
      "Sport-specific strength programs",
      "Movement-pattern correction",
      "Injury-prevention education",
    ],
    approach: [
      "Detailed joint assessment and movement screen",
      "Phase-based rehabilitation milestones",
      "Functional and agility-based progression",
      "Return-to-play readiness testing",
    ],
    techniques: [
      { title: "Manual Therapy & Mobilization", description: "Restore joint glide and reduce stiffness." },
      { title: "Proprioception Training", description: "Re-tune the joint's sense of position for stability." },
      { title: "Strength & Conditioning", description: "Build the muscles that protect and power the joint." },
      { title: "Plyometric & Agility Drills", description: "Train explosive, sport-specific movement." },
      { title: "Biomechanical Analysis", description: "Correct movement patterns that contributed to injury." },
      { title: "Taping & Bracing", description: "Targeted support during the return-to-sport phase." },
    ],
    whyChooseUs: [
      "Experienced sports physiotherapists",
      "Personalized return-to-play programs",
      "Modern equipment and assessment tools",
      "Focus on long-term performance",
      "Hands-on, athlete-first care",
    ],
    closing:
      "Get back to your peak with confidence — and the tools to stay injury-free.",
    ctaTitle: "Get Back in the Game",
  },
  {
    slug: "performance-training",
    title: "Performance Training",
    shortDescription:
      "Physiotherapy-guided performance enhancement and injury prevention.",
    image: performance,
    category: "Sports Rehabilitation",
    intro:
      "Beyond recovery, we help you reach your full athletic potential. Our physiotherapy-backed performance training improves strength, speed, agility, and endurance — while keeping you injury-free.",
    conditions: {
      heading: "Who This Is For",
      items: [
        "Athletes returning from injury who want to come back stronger",
        "Recreational athletes pushing for new personal bests",
        "Active individuals managing chronic niggles",
        "Anyone serious about long-term performance and injury prevention",
      ],
    },
    whyImportant: {
      heading: "Why Physiotherapy-Led Training Wins",
      body: "We blend rehab science with performance coaching — uncovering hidden weaknesses and movement faults before they become injuries, and unlocking ceilings you didn't know you had.",
    },
    keyBenefits: [
      "Improves strength, speed, and agility",
      "Boosts endurance and stamina",
      "Sharpens coordination and balance",
      "Optimizes movement efficiency",
      "Significantly lowers injury risk",
    ],
    highlights: [
      "Strength, speed, and agility development",
      "Coordination and balance enhancement",
      "Endurance and stamina training",
      "Movement optimization for your sport",
    ],
    approach: [
      "Performance and biomechanical screening",
      "Custom programming based on your sport",
      "Periodized training for sustained gains",
      "Recovery and prehab integration",
    ],
    techniques: [
      { title: "Movement & Performance Screening", description: "Identify weak links and asymmetries before they limit you." },
      { title: "Strength & Power Training", description: "Build foundational power with progressive overload." },
      { title: "Plyometric & Agility Drills", description: "Train fast, reactive movement specific to your sport." },
      { title: "Speed & Conditioning", description: "Develop the engine you need to perform from start to finish." },
      { title: "Mobility & Flexibility Work", description: "Unlock the ranges of motion that fuel performance." },
      { title: "Recovery & Prehab Protocols", description: "Built-in strategies to keep you training consistently." },
    ],
    whyChooseUs: [
      "Physiotherapy and performance experts",
      "Personalized periodized programming",
      "Modern equipment and assessment tools",
      "Focus on durable, long-term gains",
      "Integration with your sport, coach, or team",
    ],
    closing:
      "Take your performance to the next level with physiotherapy-backed training built around your goals.",
    ctaTitle: "Train Smarter. Perform Better.",
  },

  // ============== Elderly ==============
  {
    slug: "arthritis-care",
    title: "Arthritis Care",
    shortDescription:
      "Gentle, effective management of arthritis symptoms and mobility.",
    image: arthritis,
    category: "Elderly & Wellness Care",
    intro:
      "Arthritis is one of the most common causes of joint pain, stiffness, and reduced mobility. It can affect people of all ages and gradually impact daily activities if not treated properly. We provide specialized bone physiotherapy to help manage arthritis effectively and improve your quality of life.",
    understanding: {
      heading: "What is Arthritis?",
      body: "Arthritis refers to inflammation of the joints, leading to:",
      bullets: [
        "Persistent joint pain",
        "Swelling and stiffness",
        "Reduced range of motion",
        "Difficulty in movement",
      ],
      closingNote: "Common types include osteoarthritis, rheumatoid arthritis, and post-injury arthritis.",
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps in Arthritis",
      body: "Bone physiotherapy is a non-surgical and drug-free approach that focuses on reducing pain and restoring joint function. Our expert physiotherapists use advanced techniques to treat the root cause of pain.",
    },
    keyBenefits: [
      "Reduces joint pain and inflammation",
      "Improves flexibility and mobility",
      "Strengthens muscles around joints",
      "Prevents further joint damage",
      "Enhances overall movement and lifestyle",
    ],
    highlights: [
      "Pain management with non-invasive therapies",
      "Joint-protection strategies",
      "Strength and flexibility exercises",
      "Lifestyle and wellness guidance",
    ],
    approach: [
      "Comprehensive assessment of joint involvement",
      "Personalized exercise program for daily ease",
      "Education on activity pacing and joint protection",
      "Family-inclusive support and care planning",
    ],
    techniques: [
      { title: "Manual Therapy", description: "Hands-on techniques to mobilize stiff joints and reduce pain." },
      { title: "Exercise Therapy", description: "Customized exercises to improve strength, flexibility, and joint stability." },
      { title: "Electrotherapy", description: "Advanced modalities like ultrasound and TENS to relieve pain and inflammation." },
      { title: "Heat & Cold Therapy", description: "Helps reduce stiffness and swelling for better movement." },
      { title: "Posture & Lifestyle Correction", description: "Guidance on daily activities to avoid stress on joints." },
    ],
    whyChooseUs: [
      "Experienced and certified physiotherapists",
      "Personalized treatment plans",
      "Advanced physiotherapy equipment",
      "Home care and clinic services available",
      "Focus on long-term recovery, not just temporary relief",
    ],
    closing:
      "Don't let arthritis control your life. With the right physiotherapy care, you can move freely and live comfortably again.",
    ctaTitle: "Start Your Pain-Free Journey Today",
  },
  {
    slug: "mobility-improvement",
    title: "Mobility Improvement",
    shortDescription:
      "Programs designed to maintain and improve independence in daily activities.",
    image: mobility,
    category: "Elderly & Wellness Care",
    intro:
      "As we age, maintaining mobility becomes essential for living an active, independent, and confident life. Stiffness, joint pain, and reduced flexibility can make everyday movements like walking, bending, or standing more difficult. We offer specialized bone physiotherapy programs designed to improve mobility, reduce pain, and help seniors move with ease and confidence.",
    understanding: {
      heading: "Why Mobility Matters",
      body: "Reduced mobility can lead to:",
      bullets: [
        "Difficulty in walking and daily activities",
        "Poor posture and balance",
        "Increased risk of falls",
        "Loss of independence",
      ],
      closingNote: "Our goal is to help you stay active, safe, and self-reliant.",
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps",
      body: "Bone physiotherapy focuses on restoring natural movement and improving joint and muscle function — gently, safely, and progressively.",
    },
    keyBenefits: [
      "Reduces joint pain and stiffness",
      "Improves flexibility and range of motion",
      "Enhances walking ability and posture",
      "Strengthens muscles for better support",
      "Boosts confidence in daily movement",
    ],
    highlights: [
      "Improved walking ability and posture",
      "Coordination and movement confidence",
      "Support for sitting, standing, and stairs",
      "Reduced risk of falls and injuries",
    ],
    approach: [
      "Detailed mobility and gait assessment",
      "Personalized strength and flexibility plan",
      "Progressive functional training",
      "Home-based exercises and lifestyle support",
    ],
    techniques: [
      { title: "Stretching & Flexibility Exercises", description: "Helps loosen stiff muscles and improve joint movement." },
      { title: "Strength Training", description: "Builds muscle strength to support joints and improve stability." },
      { title: "Gait Training", description: "Improves walking pattern, speed, and coordination." },
      { title: "Posture Correction", description: "Enhances body alignment to reduce strain and discomfort." },
      { title: "Joint Mobilization", description: "Hands-on techniques to improve flexibility and reduce stiffness." },
      { title: "Balance & Stability Training", description: "Reduces risk of falls and improves confidence." },
      { title: "Functional Movement Training", description: "Focuses on daily activities like sitting, standing, and climbing stairs." },
    ],
    whyChooseUs: [
      "Experienced physiotherapists",
      "Personalized mobility improvement plans",
      "Gentle and safe exercise programs for seniors",
      "Home care and clinic services available",
      "Focus on long-term health and independence",
    ],
    closing:
      "Don't let mobility challenges limit your lifestyle. With expert physiotherapy care, you can move freely and live confidently every day.",
    ctaTitle: "Stay Active. Stay Independent.",
  },
  {
    slug: "balance-training",
    title: "Balance Training",
    shortDescription:
      "Fall prevention and balance improvement exercises for seniors.",
    image: balenceTraining,
    category: "Elderly & Wellness Care",
    intro:
      "Falls are a leading cause of injury in seniors — but they're also highly preventable. Our balance and gait training builds stability, confidence, and safer mobility through gentle, progressive, evidence-based programs.",
    understanding: {
      heading: "Why Balance Training Matters",
      body: "Balance naturally declines with age due to weaker stabilizing muscles, slower reflexes, and reduced joint awareness. Without intervention this can lead to:",
      bullets: [
        "Frequent stumbles and near-falls",
        "Fear of falling and reduced activity",
        "Loss of confidence in daily movement",
        "Serious injuries from preventable falls",
      ],
      closingNote: "Targeted training can dramatically reduce fall risk and restore confidence.",
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps",
      body: "We assess your unique fall-risk profile, then build a gentle, progressive program that re-trains the muscles, reflexes, and confidence needed for safe, steady movement.",
    },
    keyBenefits: [
      "Significantly reduces fall risk",
      "Improves stability and confidence",
      "Strengthens balance-supporting muscles",
      "Restores safer, steadier walking",
      "Builds independence in daily life",
    ],
    highlights: [
      "Comprehensive balance and gait assessment",
      "Fall-prevention strategies",
      "Strength training for stabilizing muscles",
      "Confidence-building functional exercises",
    ],
    approach: [
      "Identifying personal fall-risk factors",
      "Structured, progressive balance program",
      "Real-world movement integration",
      "Family education and home-safety tips",
    ],
    techniques: [
      { title: "Balance Assessment", description: "Comprehensive screening to identify your unique risk factors." },
      { title: "Static & Dynamic Balance Training", description: "Progressive exercises across stable and unstable surfaces." },
      { title: "Gait & Walking Training", description: "Improves stride, speed, and confidence on different surfaces." },
      { title: "Strength Training", description: "Targeted strengthening of leg and core stabilizers." },
      { title: "Vestibular Exercises", description: "Reduces dizziness and improves inner-ear balance function." },
      { title: "Home-Safety Coaching", description: "Practical changes to remove fall hazards at home." },
      { title: "Confidence-Building Practice", description: "Real-world tasks practiced safely with your therapist." },
    ],
    whyChooseUs: [
      "Experienced senior-care physiotherapists",
      "Gentle, safe, and progressive programs",
      "Personalized to your fitness level",
      "Home care and in-clinic services available",
      "Focus on long-term safety and independence",
    ],
    closing:
      "Walk with steadier confidence and significantly reduce your risk of falls.",
    ctaTitle: "Steady Steps. Confident Living.",
  },
  {
    slug: "chronic-pain-management",
    title: "Chronic Pain Management",
    shortDescription:
      "Long-term pain relief strategies combining therapy and lifestyle guidance.",
    image: chronicPain,
    category: "Elderly & Wellness Care",
    intro:
      "Chronic pain can affect every aspect of your daily life — from movement and sleep to work and emotional well-being. Whether it's persistent back pain, joint discomfort, or long-standing muscle issues, living with pain can reduce your quality of life. We offer advanced bone physiotherapy programs that focus on long-term relief, improved function, and helping you regain control over your body.",
    understanding: {
      heading: "Understanding Chronic Pain",
      body: "Chronic pain is pain that lasts for weeks, months, or even years. It may result from:",
      bullets: [
        "Previous injuries",
        "Arthritis or joint conditions",
        "Muscle imbalances",
        "Poor posture or lifestyle habits",
        "Nerve-related conditions",
      ],
      closingNote: "Our approach is not just to treat symptoms, but to address the root cause of pain.",
    },
    whyImportant: {
      heading: "How Bone Physiotherapy Helps",
      body: "Bone physiotherapy provides a safe, non-invasive, and effective solution for managing chronic pain without reliance on long-term medication.",
    },
    keyBenefits: [
      "Reduces persistent pain and inflammation",
      "Improves mobility and flexibility",
      "Restores strength and function",
      "Enhances posture and movement patterns",
      "Promotes long-term pain relief and prevention",
    ],
    highlights: [
      "Non-invasive pain management techniques",
      "Personalized exercise & movement plans",
      "Mind-body wellness strategies",
      "Long-term prevention & self-care",
    ],
    approach: [
      "Non-invasive pain management using advanced therapies",
      "Personalized exercise & movement plans",
      "Mind-body wellness with breathing & relaxation",
      "Long-term prevention through education and lifestyle change",
    ],
    techniques: [
      { title: "Manual Therapy & Joint Mobilization", description: "Hands-on care to relieve restriction and pain." },
      { title: "Myofascial Release", description: "Releases chronic muscle tightness and trigger points." },
      { title: "Stretching & Strengthening Exercises", description: "Restore balance to overworked and underused muscles." },
      { title: "Posture Correction & Ergonomic Training", description: "Address daily habits that fuel chronic pain." },
      { title: "Electrotherapy (TENS, Ultrasound)", description: "Drug-free pain relief and tissue healing support." },
      { title: "Functional Movement Training", description: "Rebuild confidence in pain-free everyday motion." },
    ],
    whyChooseUs: [
      "Experienced physiotherapists",
      "Personalized treatment plans",
      "Evidence-based rehabilitation methods",
      "Focus on long-term healing, not temporary relief",
      "Holistic care combining physical and lifestyle management",
    ],
    closing:
      "You don't have to live with chronic pain. With the right physiotherapy care, you can reduce discomfort, improve mobility, and return to a healthier, more active life.",
    ctaTitle: "Take Control of Your Pain",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const getServicesByCategory = (cat: string) => services.filter((s) => s.category === cat);
