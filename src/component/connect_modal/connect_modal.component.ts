// header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import Web3 from 'web3';

@Component({
    selector: 'app-connect-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './connect_modal.component.html',
    styleUrls: ['./connect_modal.component.css']
})
export class Connect_modal_component {
    account: string | null = null;

    @Output() closeConnectModal = new EventEmitter<void>();

    close() {
        this.closeConnectModal.emit();
    }

    // async connectWallet() {
    //     if (window.ethereum) {
    //         const web3 = new Web3(window.ethereum);
    //         try {
    //             // Request account access
    //             const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //             this.account = accounts[0];
    //             console.log('Connected account:', this.account);
    //         } catch (error) {
    //             console.error("User denied account access or error occurred:", error);
    //         }
    //     } else {
    //         alert('MetaMask is not installed. Please install it to use this feature.');
    //     }
    // }

    // async connectWallet() {
    //     if (window.ethereum) {
    //         const web3 = new Web3(window.ethereum);
    //         try {
    //             const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //             this.account = accounts[0];
    //             console.log('Connected account:', this.account);
    //             // this.cdr.detectChanges(); // Trigger change detection
    //         } catch (error) {
    //             console.error("User denied account access or error occurred:", error);
    //         }
    //     } else {
    //         alert('MetaMask is not installed. Please install it to use this feature.');
    //     }
    // }
}
