import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

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
  results = input<ResultProps>();
}
