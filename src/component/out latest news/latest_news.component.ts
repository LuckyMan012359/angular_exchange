// footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest_news.component.html',
  styleUrls: ['./latest_news.component.css']
})
export class Our_news_component {
  slides = [
    { image: 'assets/images/2fdf70e32be177d527b5911f4c3f6e8edb90c28c62b8e33aace1bf4e9b90a977.png' },
    { image: 'assets/images/cb3be504e4de6eda34385e9672e16d1fbdced16b8d8ccdabff447447305e14f8.png' },
    { image: 'assets/images/cc2db87dcf3f7c87dd518e0270d42d00d89d3bd470279126fe3613aa235b8b28.jpg' },
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
