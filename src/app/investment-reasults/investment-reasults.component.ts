import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

type ResultProps = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}[];

@Component({
  selector: 'app-investment-reasults',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-reasults.component.html',
  styleUrl: './investment-reasults.component.css',
})
export class InvestmentReasultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => {
    return this.investmentService.resultData();
  });
}
