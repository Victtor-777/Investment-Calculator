import { Component, EventEmitter, Input, input } from '@angular/core';

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
  imports: [],
  templateUrl: './investment-reasults.component.html',
  styleUrl: './investment-reasults.component.css',
})
export class InvestmentReasultsComponent {
  @Input() results?: ResultProps;
}
