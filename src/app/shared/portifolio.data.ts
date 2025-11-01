// src/app/shared/portfolio.data.ts
import { Project, SocialLinks } from './models';

export const SOCIAL: SocialLinks = {
  github: 'https://github.com/BrunoCOliveira37',
  linkedin: 'https://www.linkedin.com/in/bruno-chaves-de-oliveira-775561264/',
  cvUrl: '/assets/cv.pdf'
};

export const PROJECTS: Project[] = [
  {
    title: 'Space Scape Room',
    summary: 'Jogo básico no qual você deve escapar da nave, resolvendo alguns enigmas. Esse projeto foi feito como o "projeto Trainee" a fim de entrar no IEEE CEFET/RJ, na equipe de games.',
    tech: ['Unity', 'C#', 'Trabalho em equipe'],
    repoUrl: 'https://github.com/JGK19/Cases-Games-Escape-Room',
    image: 'assets/images/jogo.png'
  },
  {
    title: 'JukeBoxd',
    summary: 'Site para avaliar músicas e albuns, em uma rede social para apaixonados por música.',
    tech: ['Angular', 'Dart', 'RestAPI', 'Firebase'],
    repoUrl: 'https://github.com/BrunoCOliveira37/Jukebox',
    image: 'assets/images/jukeboxd.png'
  }
];
