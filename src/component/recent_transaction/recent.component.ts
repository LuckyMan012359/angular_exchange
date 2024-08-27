import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Transaction {
    timeAgo: string;
    amount: string;
    from: string;
    to: string;
    status: string;
  }

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class Recent_transaction_component {
    transactions: Transaction[] = [
        { timeAgo: '2 minutes ago', amount: '2.2 SOL', from: 'SOL', to: 'TRX', status: '5 sec' },
        { timeAgo: '2 minutes ago', amount: '0.22 ETH', from: 'ETH', to: 'USDT', status: '3 sec' },
        { timeAgo: '3 minutes ago', amount: '1000 TRX', from: 'TRX', to: 'SOL', status: '4 sec' },
        { timeAgo: '3 minutes ago', amount: '0.83413 ETH', from: 'ETH', to: 'BTC', status: '8 sec' },
        { timeAgo: '3 minutes ago', amount: '1000 TON', from: 'TON', to: 'USDT', status: '1 sec' },
        { timeAgo: '3 minutes ago', amount: '0.008 BTC', from: 'BTC', to: 'LTC', status: '2 sec' },
        { timeAgo: '4 minutes ago', amount: '0.47801 LTC', from: 'LTC', to: 'USDT', status: '2 sec' },
        { timeAgo: '5 minutes ago', amount: '0.1 BTC', from: 'BTC', to: 'TRX', status: '3 sec' },
        { timeAgo: '5 minutes ago', amount: '3589.7 USDC', from: 'USDC', to: 'SOL', status: '2 sec' },
        { timeAgo: '5 minutes ago', amount: '1250 USDT', from: 'USDT', to: 'USDT', status: '2 sec' },
      ];
}