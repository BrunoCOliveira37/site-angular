// src/app/components/hero/hero.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photo } from "../photo/photo";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Photo],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero{
  @Input() title = 'Bem-vindo(a) à minha página';
  @Input() subtitle = 'Meu nome é Bruno Chaves! Sou estudante de Ciência da Computação no Cefet/RJ!';
}
