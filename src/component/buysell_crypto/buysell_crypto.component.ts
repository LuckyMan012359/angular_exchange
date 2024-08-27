import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buysell-crypto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buysell_crypto.component.html',
  styleUrls: ['./buysell_crypto.component.css']
})
export class BuysellCryptoComponent {
  activeTab: 'exchange' | 'buySell' = 'exchange';

  switchTab(tab: 'exchange' | 'buySell'): void {
    this.activeTab = tab;
  }

  constructor(private router: Router) { }

  goToOtherPage() {
    this.router.navigate(['/exchange_page'])
  }

  goToAbout(): void {
    this.router.navigate(['/about']);
  }
}
