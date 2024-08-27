import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SwapTrackerComponent } from '../swap-tracker/swap-tracker.component';
import { RecipientAddressComponent } from '../recipient-address/recipient_address.component';
import { ConnectComponent } from '../connect-wallet/connect-wallet.component';
import { FooterComponent } from '../footer/footer.component';
import { Recent_transaction_component } from '../recent_transaction/recent.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, SwapTrackerComponent, RecipientAddressComponent,
    ConnectComponent, FooterComponent, Recent_transaction_component],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private router: Router) { }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
