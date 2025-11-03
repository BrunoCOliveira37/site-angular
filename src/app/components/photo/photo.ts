import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photo.html',
  styleUrl: './photo.css',
})
export class Photo {
  @Input() src!: string;
  @Input() alt!: string;
}
