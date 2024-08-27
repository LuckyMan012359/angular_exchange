import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SwapTrackerComponent } from '../swap-tracker/swap-tracker.component';
import { BuysellCryptoComponent } from '../buysell_crypto/buysell_crypto.component';
import { Index_rates_component } from '../index_rates/index_rates.component';
import { Slider_image } from '../slider-image/slider_image.component';
import { Exchange_crypto_component } from '../exchange_crypto/exchange_crypto.component';
import { Main_buysell_component } from '../main_buysell_crypto/main_buysell.component';
import { Cross_chain_component } from '../cross_chain/cross_chain_crypto.component';
import { Spend_crypto_component } from '../spend_crypto/spend_crypto.component';
import { Total_num_component } from '../total_numbers/total_num.component';
import { Our_features_component } from '../our features/our_features.component';
import { Our_news_component } from '../out latest news/latest_news.component';
import { How_work_component } from '../how we work/how_work.component';
import { Trust_us_component } from '../people trust us/trust_us.component';
import { Exchange_now_component } from '../exchange_now/exchange_now.component';
import { FooterComponent } from '../footer/footer.component';
import { Acc_modal_component } from '../acc_modal/acc_modal.component';
import { Connect_modal_component } from "../connect_modal/connect_modal.component";
import { Recent_transaction_component } from "../recent_transaction/recent.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [HeaderComponent, SwapTrackerComponent, BuysellCryptoComponent,
    Index_rates_component, Slider_image, Exchange_crypto_component,
    Main_buysell_component, Cross_chain_component, Spend_crypto_component,
    Total_num_component, Our_features_component, Our_news_component,
    How_work_component, Trust_us_component, Exchange_now_component,
    FooterComponent, Acc_modal_component, Connect_modal_component, Recent_transaction_component],
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private router: Router) { }

    goToAbout(): void {
        this.router.navigate(['/about']);
    }
}
