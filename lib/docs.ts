export type DocSlug = "mentorship-agreement" | "code-of-conduct" | "confidentiality";

export const documents: Record<DocSlug, { title: string; purpose: string; body: string[] }> = {
  "mentorship-agreement": {
    title: "Mentorship Agreement (Draft)",
    purpose:
      "A plain-language agreement to set expectations for volunteer mentorship. This draft should be reviewed by legal counsel before formal use.",
    body: [
      "This mentorship relationship is a volunteer commitment intended to support learning and professional development.",
      "Mentors and mentees agree to communicate respectfully, keep scheduled meetings when possible, and give advance notice if plans change.",
      "Either participant may end the mentorship at any time. Alma Atma Network can rematch participants based on feedback and availability.",
      "This document is provided as a draft placeholder on the website until final documents are uploaded."
    ]
  },
  "code-of-conduct": {
    title: "Code of Conduct (Draft)",
    purpose:
      "Guidelines for safe, respectful participation in Alma Atma Network programs and events.",
    body: [
      "Be respectful and inclusive. We welcome diverse backgrounds, identities, and experiences.",
      "No harassment, discrimination, or intimidation. If something feels unsafe, contact Alma Atma Network.",
      "Respect privacy. Do not share personal information shared in confidence without permission.",
      "Use a growth mindset. Offer constructive feedback and receive feedback with care."
    ]
  },
  confidentiality: {
    title: "Confidentiality Agreement (Draft)",
    purpose:
      "A draft agreement to protect private personal information shared during mentorship.",
    body: [
      "Mentors and mentees may discuss personal background, academic challenges, and career goals.",
      "Participants agree not to disclose private information learned through the program without explicit permission.",
      "This draft is for placeholder purposes and will be updated after legal review."
    ]
  }
};
