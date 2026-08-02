// The "Currently" collage. Keep this fed — a stale Currently section is worse
// than none. Leave `spotifyEmbed` null to show the placeholder card instead.
export const currently = {
  note: "A corner of my desk, this term.",
  article: {
    title: "Building Dumpling: An Agentic RAG System for Personal Knowledge Management",
    url: "https://medium.com/mitb-for-all/dumpling-an-agentic-rag-system-that-organizes-your-notes-for-you-3fb6b62b6b35",
    tag: "Agentic AI",
    blurb:
      "How I built a retrieval system that corrects itself from chunking strategy to agentic loops.",
    publication: "MITB",
    year: "2025",
  },
  // Drop real files in /public/images/moodboard and set `src` to use them.
  tiles: [
    { src: "/images/currently/cafe.jpg", caption: "matcha", ratio: "square", taped: true },
    { src: "/images/currently/golf.jpeg", caption: "golf", ratio: "wide", taped: false },
    { src: "/images/currently/3.jpeg", caption: "watching dramas", ratio: "square", taped: false },
  ],

  // spotify
  spotifyEmbed: "https://open.spotify.com/embed/playlist/2HtrGeWRRlR1FshyonzQHg?utm_source=generator&si=2f58861df2ec4f88",
  quote: {
    text: "Life's too short to only stare at a screen.",
  },
};
