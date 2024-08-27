// swap-tracker.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-swap-tracker',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './swap-tracker.component.html',
    styleUrls: ['./swap-tracker.component.css']
})
export class SwapTrackerComponent {
    isExpanded: boolean = false;
    exchangeId: string = '';


    toggleTracker() {
        this.isExpanded = !this.isExpanded;
    }

    trackSwap() {
        // Implement the logic to track the swap using the exchangeId
        console.log(`Tracking swap with exchange ID: ${this.exchangeId}`);
    }

}
