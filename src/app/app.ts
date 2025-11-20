import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard';
import { AddExpenseComponent } from './components/add-expense/add-expense';
import { ExpenseListComponent } from './components/expense-list/expense-list';
import { BudgetSettingsComponent } from './components/budget-settings/budget-settings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DashboardComponent,
    AddExpenseComponent,
    ExpenseListComponent,
    BudgetSettingsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
