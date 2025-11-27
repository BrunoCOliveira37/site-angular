// src/app/components/navbar/navbar.component.ts
import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinks } from '../../shared/models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  @Input({ required: true }) links!: SocialLinks;
   isMenuOpen = false;

  constructor(private el: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Fecha com ESC
  @HostListener('document:keydown.escape')
  onEsc() { this.isMenuOpen = false; }

  // Fecha ao clicar fora
  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    if (this.isMenuOpen && !this.el.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
}
