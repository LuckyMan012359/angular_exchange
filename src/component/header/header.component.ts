// header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acc_modal_component } from "../acc_modal/acc_modal.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Acc_modal_component],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
