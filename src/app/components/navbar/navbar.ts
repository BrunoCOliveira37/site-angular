// src/app/components/navbar/navbar.component.ts
import { Component, Input } from '@angular/core';
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
}
