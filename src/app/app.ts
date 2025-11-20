import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard';
import { AddExpenseComponent } from './components/add-expense/add-expense';
import { ExpenseListComponent } from './components/expense-list/expense-list';
import { BudgetSettingsComponent } from './components/budget-settings/budget-settings';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DashboardComponent,
    AddExpenseComponent,
    ExpenseListComponent,
    BudgetSettingsComponent,
    ThemeToggleComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
