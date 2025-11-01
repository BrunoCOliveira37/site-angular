// src/app/components/about/about.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About{
  @Input() bio1 = 'Olá! Me chamo Bruno Chaves de Oliveira, tenho 20 anos e moro no Rio de Janeiro. Sou apaixonado por música, filmes, videogames e futebol — coisas que inspiram minha criatividade e me ajudam a enxergar o mundo de diferentes formas.';
  @Input() bio2 = 'Gosto de participar de todas as etapas de um projeto, da ideia inicial até o desenvolvimento final. Atualmente curso Ciência da Computação, onde aprofundo cada vez mais minha paixão pela tecnologia e busco evoluir como profissional e criador.';
  @Input() skills: string[] = [];
  @Input() email = 'BrunoChavesdeOliveira2003@gmail.com';
}
