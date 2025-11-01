import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import { PROJECTS, SOCIAL } from './shared/portifolio.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  social = SOCIAL;
  projects = signal(PROJECTS);
  skills = ['Angular','Dart','RestAPI','Firebase','Unity','C#','Trabalho em equipe'];
}
