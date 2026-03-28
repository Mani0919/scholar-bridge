export type Service = {
  slug: string;
  title: string;
  description: string;
  process: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "research-paper-writing",
    title: "Research Paper Writing",
    description:
      "End-to-end research paper drafting aligned with journal scope, methodology, and citations.",
    process: [
      "Requirement mapping and topic validation",
      "Literature synthesis and outline approval",
      "Drafting with data-backed arguments",
      "Formatting, citation checks, and final review"
    ],
    benefits: [
      "Journal-ready structure",
      "Subject-matter experts",
      "Originality assurance"
    ]
  },
  {
    slug: "thesis-writing-editing",
    title: "Thesis Writing & Editing",
    description:
      "Comprehensive thesis support with structural editing, language refinement, and academic rigor.",
    process: [
      "Chapter-wise planning",
      "Research synthesis and academic writing",
      "Supervisor-aligned revisions",
      "Final proofreading and compliance"
    ],
    benefits: [
      "University format compliance",
      "Improved academic clarity",
      "Plagiarism-safe drafts"
    ]
  },
  {
    slug: "paper-publication-support",
    title: "Paper Publication Support (Scopus, Springer, IEEE)",
    description:
      "Targeted journal shortlisting, submission strategy, and reviewer response assistance.",
    process: [
      "Journal and conference targeting",
      "Manuscript readiness checks",
      "Submission package preparation",
      "Peer review response guidance"
    ],
    benefits: [
      "Higher acceptance readiness",
      "Expert submission management",
      "Faster publication cycles"
    ]
  },
  {
    slug: "phd-admission-assistance",
    title: "PhD Admission Assistance (Abroad)",
    description:
      "Strategic PhD admission planning, from university shortlisting to interview prep.",
    process: [
      "Profile evaluation and goal setting",
      "University and supervisor targeting",
      "Document and proposal development",
      "Interview coaching and follow-up"
    ],
    benefits: [
      "Global university mapping",
      "Personalized admission strategy",
      "Scholarship-oriented guidance"
    ]
  },
  {
    slug: "sop-lor-writing",
    title: "SOP & LOR Writing",
    description:
      "Compelling, authentic statements of purpose and recommendation letters for admissions.",
    process: [
      "Personal story discovery",
      "Drafting with academic positioning",
      "Tone and clarity refinement",
      "Final polish and alignment"
    ],
    benefits: [
      "Stronger applicant differentiation",
      "Clear academic narrative",
      "Admissions-ready language"
    ]
  },
  {
    slug: "plagiarism-reduction",
    title: "Plagiarism Reduction",
    description:
      "Advanced paraphrasing and citation correction to meet originality requirements.",
    process: [
      "Similarity scan and diagnosis",
      "Rewriting with academic tone",
      "Citation and reference checks",
      "Final originality validation"
    ],
    benefits: [
      "Lower similarity index",
      "Ethical academic writing",
      "Citation accuracy"
    ]
  },
  {
    slug: "ai-content-reduction",
    title: "AI Content Reduction",
    description:
      "Humanized rewriting to reduce AI detection while preserving research integrity.",
    process: [
      "AI detection audit",
      "Humanization and stylistic edits",
      "Consistency and factual checks",
      "Quality assurance review"
    ],
    benefits: [
      "Authentic academic voice",
      "Compliance with university policies",
      "Consistent readability"
    ]
  },
  {
    slug: "academic-project-writing",
    title: "Academic Project Writing",
    description:
      "Project reports, technical documentation, and final-year submissions crafted by experts.",
    process: [
      "Requirement gathering",
      "Technical documentation drafting",
      "Data visualization and formatting",
      "Final review and submission readiness"
    ],
    benefits: [
      "Well-structured documentation",
      "On-time delivery",
      "Faculty-aligned quality"
    ]
  },
  {
    slug: "patent-services",
    title: "Patent Services",
    description:
      "Prior art research, patent drafting, and filing support for academic innovations.",
    process: [
      "Invention disclosure analysis",
      "Prior art and novelty checks",
      "Patent draft preparation",
      "Filing assistance and revisions"
    ],
    benefits: [
      "Stronger patent positioning",
      "Expert legal-grade drafting",
      "Filing support across regions"
    ]
  },
  {
    slug: "book-writing-publishing",
    title: "Book Writing & Publishing",
    description:
      "Academic book planning, ghostwriting, and publishing support for authors.",
    process: [
      "Book outline and chapter plan",
      "Manuscript development",
      "Editorial refinement",
      "Publishing guidance and ISBN setup"
    ],
    benefits: [
      "Professional editorial polish",
      "Publishing roadmap",
      "Global distribution readiness"
    ]
  },
  {
    slug: "peer-review-judging",
    title: "Peer Review & Judging",
    description:
      "Confidential review services for journals, conferences, and academic competitions.",
    process: [
      "Scope and criteria definition",
      "Blind review and scoring",
      "Feedback report delivery",
      "Follow-up consultation"
    ],
    benefits: [
      "Objective evaluation",
      "Expert reviewers",
      "Actionable feedback"
    ]
  }
];
