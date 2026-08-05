export interface Project {
  slug: string;
  title: string; // service name
  brand: string; // brand name (big heading)
  description: string;
  type: string;
  playbackId?: string;
  featured?: boolean;
  category: "work" | "ai-studio";
}

export const projects: Project[] = [

  // 🔥 AI STUDIO SERVICES

  {
    slug: "product-ai-ads",
    title: "Product AI Ads",
    brand: "The Sleep Company",
    description: `The idea was simple: what if comfort had a face? We conceptualised a world where the sofa does the talking. The German recline technology became our story hook, not just a feature. Every camera angle in pre-production was chosen to make the viewer feel the weight of relaxation. In post, colour grading was kept warm and slow. AI built the environment. We just made it feel like Sunday afternoon.`,
    type: "AI Studio",
    playbackId: "Yj9mgyqb7H5kSn2NVOhAUteSoptbCuuZjzhi32MXMvk",
    category: "ai-studio",
  },

  {
    slug: "cgi-ads",
    title: "CGI Ads",
    brand: "Lodha",
    description: `No characters. Architecture was the protagonist. We storyboarded each walkthrough like a cinematographer would, thinking in light, depth and silence. The brief we gave ourselves was: make concrete feel emotional. AI rendered the spaces with surgical precision. Post production was about pacing, letting each frame hold before moving to the next.`,
    type: "AI Studio",
    playbackId: "FWZnM8bCffUUevW01Tm6wrs1uFLd6ej02s0114cm4jVioI",
    category: "ai-studio",
  },

  {
    slug: "ai-brand-ads",
    title: "AI Brand Ads",
    brand: "Kia",
    description: `What if a Kia drove where roads end? That one question became the film. We placed the car in the Himalayas not for spectacle but for contrast, metal and snow, engineered precision meeting raw nature. Every shot was pre-visualised before rendering. AI gave us the mountain. We gave it a reason to be there.`,
    type: "AI Studio",
    playbackId: "D5YSSLPVWf7801Rsb3unMBKPaMcrEn5W01BHHVJolEXNQ",
    category: "ai-studio",
  },

  {
    slug: "product-cgi-ads",
    title: "Product CGI Ads",
    brand: "Pigeon",
    description: `The brief was to make it fast-paced and culturally relevant for Gen Z, weaving the product naturally into everyday life. That's exactly the approach we took. To connect with Gen Z, realism matters even more. They're the first to spot AI slop, and that's the last thing we want associated with any brand we work with. Every frame was crafted to feel believable, cinematic, and grounded in reality.`,
    type: "AI Studio",
    playbackId: "cNq02o5JGXBKpHkrm01h6d02U00902B1PehSR00YQSGSJ39LE",
    category: "ai-studio",
  },

  {
    slug: "ai-films",
    title: "AI Films", // ✅ UPDATED
    brand: "1857: The Beginning",
    description: `An empire that ruled. A people who resisted. A revolution that echoed through generations. We wrote this as a feature film, built around courage, sacrifice and unity. Production was about scale with soul. No empty spectacle, no shortcuts. Post was driven by music and pacing. AI was our cinematographer. Even after 169 years, the story of our brave soldiers remains relevant,a reminder that when people stand united against tyranny, a nation can never be broken.`,
    type: "AI Studio",
    playbackId: "8bi7WVbJ9nCx02sAtnQG7g5ksNf02NH7RhBiRhtL3zG7E",
    category: "ai-studio",
  },

{
    slug: "vedica-water",
    title: "Vedica", // ✅ UPDATED
    brand: "Bisleri Vedica",
    description: `What does home taste like? We wrote a story around a pahadi father living in a city that was never his. The concept came first, the visuals followed. We built each scene around memory and contrast. Sound design carried the emotion across the edit. AI was the brush. The painting was always ours.`,
    type: "AI Studio",
    playbackId: "rfiqbbKouLlOomBfiyX5MTrK00BsbU3e600xkVqqfYHUA",
    category: "ai-studio",
  },

  // 🔥 FEATURED WORK

  {
    slug: "royal-enfield",
    title: "Royal Enfield",
    brand: "Royal Enfield",
    description: `This film is about inheritance, not of wealth, but of roots.

A son. A father's last bike. The Aravalli hills.
We obsessed over every detail, the jodhpuri attire in the final frame, the silence of the ride and tears, the weight of legacy. AI rendered the world. But the story came from understanding what it means to belong somewhere. Some films you make with a camera. Some you make with memory.`,
    type: "Adventure Brand Film",
    playbackId: "XQ00Aj00pVslH014N1Bz9VnnjoLssoXqUrg6VvHJP4hNKI",
    featured: true,
    category: "work",
  },

  {
    slug: "tanishq-jewellery",
    title: "Tanishq",
    brand: "Tanishq",
    description: `Every frame was a deliberate composition, from the warmth of golden hour light to the layered textures of Rajasthani architecture. We wanted jewellery to feel like it belonged to the woman, not the other way around. The folk music wasn't background, it was the heartbeat of the film. Every visual decision, every movement was storyboarded before a single AI render was generated.`,
    type: "Luxury Story Film",
    playbackId: "4ZI7ISQqYgQzYQv2Ox9hgLcLIbbtOOfkSJwVS991NfQ",
    featured: true,
    category: "work",
  },

  {
    slug: "span-floors",
    title: "Span Floors",
    brand: "Span Floors",
    description: `This project involved complex action sequences where accurate physics was critical. Without it, the visuals would have felt like AI slop. We focused heavily on realism and storytelling. The objective was simple: a family spending quality time in their farmhouse. The home already looked luxurious, but it still felt incomplete. As wood became part of the space, it brought warmth, character, and the soul that truly made the house feel alive.`,
    type: "Cinematic Product Film",
    playbackId: "2PbvKn0000WR4bzAzgqNDK010202X00a01qBwPkANVsJlYbDPE",
    featured: true,
    category: "work",
  },
];

// ✅ FEATURED
export const featuredProjects: Project[] = projects.filter(
  (p) => p.featured
);

// optional
export const gridProjects: Project[] = projects;
