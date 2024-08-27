import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TrustUsModule } from '../../trust-us.module';

@Component({
  selector: 'app-trust-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust_us.component.html',
  styleUrls: ['./trust_us.component.css']
})
export class Trust_us_component {
  slides = [
    { image: 'assets/Screenshot_1.png' },
    { image: 'assets/Screenshot_2.png' },
    { image: 'assets/Screenshot_3.png' },
  ];

  currentIndex = 0;

  get transform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
