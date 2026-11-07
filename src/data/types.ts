export type SocialIcon = "github" | "linkedin" | "x" | "instagram" | "mail";

export type Social = { label: string; href: string; icon: SocialIcon };

export type Project = {
  /** Path under /public, e.g. "/projects/cave-erp.png" */
  image: string;
  name: string;
  href: string;
  description: string;
  tags: string[];
  featured?: boolean;
  year?: number;
};

export type Experience = {
  start: string;
  /** "Present" marks the current role */
  end: string;
  role: string;
  company: string;
  location?: string;
  bullets: string[];
  tags?: string[];
};

export type Education = {
  school: string;
  qualification: string;
  start: string;
  end: string;
  location: string;
};

export type Credential = {
  name: string;
  detail: string;
  date: string;
  /** Path under /public, e.g. "/certificates/ieee.pdf" */
  href?: string;
};

export type SkillGroup = { label: string; items: string[] };

export type NavItem = { label: string; href: string };

export type SiteInfo = {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  bio: string;
  about: string[];
  email: string;
  url: string;
  nav: NavItem[];
  copyrightYear: number;
};
