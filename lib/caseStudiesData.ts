export interface CaseStudyData {
  title: string;
  client: string;
  year: string;
  duration: string;
  role: string;
  image: string;
  problem: {
    title: string;
    description: string;
    challenges: string[];
  };
  solution: {
    description: string;
    approach: Array<{
      title: string;
      description: string;
    }>;
    tech: string[];
  };
  results: {
    metrics: Array<{
      label: string;
      before: number;
      after: number;
      unit: string;
      inverse?: boolean;
    }>;
    timeline: Array<{
      month: string;
      conversions: number;
      revenue: number;
    }>;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
}

export const caseStudiesData: Record<string, CaseStudyData> = {
  aether: {
    title: "Aether - Art Authentication Platform",
    client: "NFC Technology",
    year: "2024",
    duration: "6 months",
    role: "Lead Engineer & Founder",
    image: "/assets/ProjectsPhotos/aether/dashboard.png",

    problem: {
      title: "Art fraud and provenance verification challenges",
      description: "The art industry struggled with authentication and provenance tracking. Traditional paper certificates were easily forged, and verifying artwork authenticity required expensive expert consultations. Galleries and collectors had no unified system to track artwork history, leading to fraud and trust issues in the market.",
      challenges: [
        "Paper certificates easily forged or lost",
        "Expensive expert authentication required",
        "No unified provenance tracking system",
        "Lack of real-time verification methods",
        "Complex art history documentation"
      ]
    },

    solution: {
      description: "Built a revolutionary NFC-powered platform that allows instant artwork authentication with a simple tap. Each artwork gets a unique NFC tag linked to a blockchain-verified digital certificate, creating an immutable provenance record.",
      approach: [
        {
          title: "NFC Tag Integration",
          description: "Implemented secure NFC tags embedded in artwork frames or canvases, linked to blockchain-verified certificates"
        },
        {
          title: "Blockchain Provenance",
          description: "Created immutable ownership and transfer records on blockchain for complete artwork history"
        },
        {
          title: "Artist Dashboard",
          description: "Built comprehensive platform for artists to register, manage, and track their artworks"
        },
        {
          title: "Mobile-First Verification",
          description: "Developed intuitive mobile app for instant artwork verification by galleries and collectors"
        }
      ],
      tech: ["Next.js", "TypeScript", "MongoDB", "NFC", "Blockchain", "React Native"]
    },

    results: {
      metrics: [
        { label: "Artist Signups", before: 0, after: 1200, unit: "+" },
        { label: "Artworks Registered", before: 0, after: 5000, unit: "+" },
        { label: "Verification Time", before: 720, after: 5, unit: "hrs", inverse: true },
        { label: "Gallery Adoption", before: 0, after: 85, unit: "+" }
      ],
      timeline: [
        { month: "Month 1", conversions: 150, revenue: 15 },
        { month: "Month 2", conversions: 400, revenue: 35 },
        { month: "Month 3", conversions: 750, revenue: 68 },
        { month: "Month 4", conversions: 1200, revenue: 95 }
      ]
    },

    testimonial: {
      quote: "Aether has completely transformed how we authenticate and track our artwork. What used to take weeks now takes seconds. The platform is intuitive and gives our collectors complete confidence in their purchases.",
      author: "Emma Richardson",
      role: "Gallery Director, Modern Art Collective",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    }
  },

  getFit: {
    title: "GetFit - Fitness Tracking App",
    client: "Health & Wellness",
    year: "2023",
    duration: "4 months",
    role: "Full Stack Developer",
    image: "/assets/ProjectsPhotos/getFit/getFit1.png",

    problem: {
      title: "Lack of personalized fitness guidance",
      description: "Most fitness apps offered generic workout plans that didn't adapt to individual progress or goals. Users struggled to stay motivated and often abandoned their fitness journey within weeks. There was no intelligent system to provide personalized recommendations based on actual performance data.",
      challenges: [
        "Generic one-size-fits-all workout plans",
        "Low user retention (avg 2 weeks)",
        "No adaptive workout recommendations",
        "Lack of nutrition integration",
        "Poor progress tracking and motivation"
      ]
    },

    solution: {
      description: "Developed a comprehensive AI-powered fitness platform that adapts to each user's progress, goals, and preferences. The app provides personalized workout plans, nutrition tracking, and intelligent recommendations that evolve with the user's fitness journey.",
      approach: [
        {
          title: "AI Workout Generation",
          description: "Machine learning algorithms analyze user performance to generate personalized workout plans that adapt in real-time"
        },
        {
          title: "Smart Nutrition Tracking",
          description: "Integrated calorie tracking with meal suggestions based on fitness goals and dietary preferences"
        },
        {
          title: "Progress Analytics",
          description: "Built comprehensive dashboard showing strength gains, body composition changes, and workout consistency"
        },
        {
          title: "Social Motivation",
          description: "Created community features with challenges, leaderboards, and achievement sharing"
        }
      ],
      tech: ["React Native", "Node.js", "PostgreSQL", "TensorFlow", "AWS"]
    },

    results: {
      metrics: [
        { label: "Active Users", before: 0, after: 50000, unit: "+" },
        { label: "User Retention", before: 15, after: 68, unit: "%" },
        { label: "Avg Session Time", before: 5, after: 22, unit: "min" },
        { label: "Workout Completion", before: 32, after: 89, unit: "%" }
      ],
      timeline: [
        { month: "Month 1", conversions: 5000, revenue: 12 },
        { month: "Month 2", conversions: 18000, revenue: 45 },
        { month: "Month 3", conversions: 35000, revenue: 89 },
        { month: "Month 4", conversions: 50000, revenue: 128 }
      ]
    },

    testimonial: {
      quote: "GetFit is the first fitness app that actually understands me. The AI recommendations are spot-on, and I've seen more progress in 3 months than I did in years of generic workout plans. This app changed my life.",
      author: "Marcus Johnson",
      role: "Fitness Enthusiast & Beta User",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
    }
  }
};

