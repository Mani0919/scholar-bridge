export type Blog = {
  slug: string;
  title: string;
  description: string;
  content: string[];
  date: string;
};

export const blogs: Blog[] = [
  {
    slug: "how-to-publish-paper",
    title: "How to Publish a Research Paper in Top Journals",
    description:
      "A step-by-step guide to journal selection, manuscript readiness, and submission strategy.",
    date: "March 22, 2026",
    content: [
      "Publishing in high-impact journals starts with precise journal targeting. Evaluate aims, scope, and acceptance trends before you write.",
      "Next, align your manuscript structure with the journal guidelines. A clear abstract, consistent methodology, and rigorous references increase reviewer confidence.",
      "Finally, create a reviewer response plan in advance. Anticipating feedback shortens revision cycles and boosts acceptance rates."
    ]
  },
  {
    slug: "phd-abroad-roadmap",
    title: "PhD Abroad Roadmap: From Shortlisting to Interview",
    description:
      "Plan your PhD applications with a timeline for SOPs, LORs, and research proposals.",
    date: "March 18, 2026",
    content: [
      "Start with a research focus statement that clarifies your long-term academic goals. This becomes the anchor for your SOP and proposal.",
      "Shortlist universities based on supervisor alignment, funding availability, and publication culture.",
      "Prepare for interviews with a portfolio of your previous work and a concise research pitch."
    ]
  },
  {
    slug: "reduce-plagiarism-index",
    title: "Reduce Plagiarism Index Without Losing Your Voice",
    description:
      "Strategies for ethical paraphrasing, citation fixes, and originality audits.",
    date: "March 10, 2026",
    content: [
      "Begin with a similarity scan and identify high-risk sections. Focus on rewriting long quoted segments first.",
      "Use discipline-specific terminology accurately and cite every borrowed concept. Strong references lower similarity flags.",
      "Finish with a readability pass to keep your academic voice consistent."
    ]
  }
];
