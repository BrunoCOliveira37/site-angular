// src/app/components/projects/projects.ts
import { Component, Input, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../shared/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects{
  @Input({ required: true }) projects!: Signal<Project[]>;
  index = signal(0);
  total = computed(() => this.projects().length);

  next(){ this.index.set((this.index()+1) % this.total()); }
  prev(){ this.index.set((this.index()-1+this.total()) % this.total()); }
  go(i:number){ this.index.set(i); }
  transformFor(i:number){ const off = (i - this.index())*100; return `translateX(${off}%)`; }
}
