import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Connect_modal_component } from "../connect_modal/connect_modal.component";

@Component({
  selector: 'app-acc-modal',
  standalone: true,
  imports: [CommonModule, Connect_modal_component],
  templateUrl: './acc_modal.component.html',
  styleUrls: ['./acc_modal.component.css']
})
export class Acc_modal_component {
  activeTab: 'Invaders' | 'affiliate' = 'Invaders';

  switchTab(tab: 'Invaders' | 'affiliate'): void {
    this.activeTab = tab;
  }


  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();

  }

  // isModalOpen = false;

  isConModalOpen = false;

  openModal() {
    this.isConModalOpen = true;
  }

  closeConnectModal() {
    this.isConModalOpen = false;
  }
}
