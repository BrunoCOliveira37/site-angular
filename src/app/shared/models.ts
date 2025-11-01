// src/app/shared/models.ts
export type SocialLinks = {
  github: string;
  linkedin: string;
  cvUrl: string; // /assets/cv.pdf
};
export type Project = {
  title: string;
  summary: string;
  tech: string[];
  repoUrl?: string;
  downloadUrl?: string;
  image?: string;
};
