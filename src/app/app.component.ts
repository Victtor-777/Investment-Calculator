import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentReasultsComponent } from './investment-reasults/investment-reasults.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentReasultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
