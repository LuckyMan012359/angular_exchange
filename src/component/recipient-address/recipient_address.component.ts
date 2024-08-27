import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipient-address',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './recipient_address.component.html',
  styleUrls: ['./recipient_address.component.css']
})
export class RecipientAddressComponent {

  constructor(private router: Router) { }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
