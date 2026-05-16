export type Blog = {
  slug: string;
  title: string;
  description: string;
  content: string[];
  date: string;
  links: { href: string; label: string }[];
};

export const blogs: Blog[] = [
  {
    slug: "phd-thesis-writing-india",
    title: "Complete Guide to PhD Thesis Writing in India",
    description:
      "PhD thesis writing service India guide covering chapters, formatting, plagiarism checks, and expert PhD thesis help.",
    date: "May 9, 2026",
    links: [{ href: "/phd-services", label: "PhD Services" }, { href: "/contact", label: "Free Consultation" }],
    content: [
      "A strong PhD thesis needs a clear research gap, defensible methodology, organized results, and university-compliant formatting.",
      "The Paper Publications supports scholars with chapter planning, literature review, methodology writing, results discussion, citations, editing, and final proofreading.",
      "Internal reviews, plagiarism checks, and supervisor-aligned revisions help scholars move from scattered drafts to a submission-ready thesis."
    ]
  },
  {
    slug: "scopus-paper-publication",
    title: "How to Publish in Scopus Indexed Journals from India",
    description:
      "Scopus paper publication support for Indian researchers, including journal selection, formatting, submission, and revisions.",
    date: "May 9, 2026",
    links: [{ href: "/phd-services#publication", label: "Publication Support" }, { href: "/contact", label: "Submit Manuscript" }],
    content: [
      "Scopus publication begins with matching your manuscript to the right journal scope, indexing status, review timeline, and formatting rules.",
      "We assist with manuscript preparation, journal targeting, cover letters, submission, reviewer response, and revision strategy.",
      "Avoid predatory journals by checking indexing, publisher reputation, APC transparency, and recent Scopus coverage."
    ]
  },
  {
    slug: "eb1a-visa-india-researchers",
    title: "EB-1A Visa for Indian Researchers - Complete 2025 Guide",
    description:
      "EB-1A visa India guide for researchers covering extraordinary ability evidence, citations, awards, publications, and petition support.",
    date: "May 9, 2026",
    links: [{ href: "/eb1a", label: "EB-1A Services" }, { href: "/apply-eb1a", label: "Apply for Visa Services" }],
    content: [
      "The EB-1A green card is designed for people with extraordinary ability and can suit researchers with strong publications, citations, peer review, awards, and original contributions.",
      "A successful case usually connects technical achievements to national or international recognition through clear evidence and a persuasive narrative.",
      "The Paper Publications helps with research profile audits, citation analysis, evidence planning, and documentation support."
    ]
  },
  {
    slug: "phd-abroad-admission",
    title: "How to Apply for PhD Abroad from India - Step by Step",
    description:
      "PhD abroad admission guide for Indian scholars applying to USA, UK, Canada, Australia, Germany, and other countries.",
    date: "May 9, 2026",
    links: [{ href: "/abroad-admissions#application-form", label: "Abroad Admissions" }, { href: "/phd-admissions", label: "PhD Admissions" }],
    content: [
      "Applying abroad requires research fit, supervisor targeting, SOP, LOR, proposal, transcripts, test scores, and funding planning.",
      "Start by identifying your research domain and shortlisting universities where faculty actively publish in that area.",
      "A strong application explains why your profile, research question, and target department belong together."
    ]
  },
  {
    slug: "rd-projects-india",
    title: "R&D Project Support for PhD Scholars in India",
    description:
      "R&D projects PhD guide for design, prototype development, data analysis, modeling, innovation consulting, and publication.",
    date: "May 9, 2026",
    links: [{ href: "/rd-projects", label: "R&D Projects" }, { href: "/phd-services#publication", label: "Publication Assistance" }],
    content: [
      "R&D projects need practical feasibility, a sound methodology, measurable outputs, and a plan for validation.",
      "We support design, simulation, prototype development, data analysis, modeling, technical documentation, and publication preparation.",
      "A well-documented R&D project can strengthen your thesis, research paper, patent pathway, or industry collaboration."
    ]
  },
  {
    slug: "eb2-niw-vs-eb1a",
    title: "EB-2 NIW vs EB-1A - Which US Visa Is Right for You?",
    description:
      "EB-2 NIW vs EB-1A comparison for researchers choosing between US immigration pathways based on evidence and profile strength.",
    date: "May 9, 2026",
    links: [{ href: "/apply-eb1a", label: "US Visa Services" }, { href: "/eb1a", label: "EB-1A Information" }],
    content: [
      "EB-2 NIW focuses on advanced degrees, exceptional ability, and national interest, while EB-1A focuses on extraordinary ability and sustained acclaim.",
      "Researchers with strong citations, awards, judging, and original contributions may evaluate EB-1A. Profiles with impactful work but less acclaim may consider NIW.",
      "Choosing the right route starts with a careful profile audit and evidence mapping."
    ]
  },
  {
    slug: "phd-synopsis-writing",
    title: "How to Write a PhD Synopsis That Gets Approved",
    description:
      "PhD synopsis writing guide for doctoral scholars covering research gap, objectives, methodology, and university approval.",
    date: "May 9, 2026",
    links: [{ href: "/phd-services", label: "Synopsis Writing" }, { href: "/contact", label: "Get Review" }],
    content: [
      "A PhD synopsis should clearly present the topic, research gap, objectives, methodology, expected outcomes, and references.",
      "Committees look for feasibility, originality, clarity, and alignment between the problem statement and methods.",
      "We help scholars create university-specific synopses that are concise, structured, and defensible."
    ]
  },
  {
    slug: "ielts-sop-lor-abroad-phd",
    title: "SOP and LOR Writing for Abroad PhD Admissions",
    description:
      "SOP writing PhD abroad and LOR writing service guide for international doctoral applications and scholarships.",
    date: "May 9, 2026",
    links: [{ href: "/abroad-admissions#application-form", label: "Apply Abroad" }, { href: "/phd-admissions", label: "Admission Guidance" }],
    content: [
      "Your SOP should connect your academic background, research interests, target faculty, and future goals into one coherent story.",
      "Strong LORs highlight research ability, independence, technical skills, and fit for doctoral-level work.",
      "The Paper Publications helps applicants prepare personalized SOPs, LOR drafts, proposals, and application documents."
    ]
  }
];
