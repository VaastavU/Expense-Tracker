import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-budget-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-settings.html',
  styleUrl: './budget-settings.css'
})
export class BudgetSettingsComponent {
  private expenseService = inject(ExpenseService);

  monthlyLimit: number = 0;
  savingsGoal: number = 0;

  constructor() {
    // Initialize local state from service signal
    effect(() => {
      const budget = this.expenseService.budget();
      this.monthlyLimit = budget.monthlyLimit;
      this.savingsGoal = budget.savingsGoal;
    });
  }

  updateBudget() {
    this.expenseService.updateBudget({
      monthlyLimit: this.monthlyLimit,
      savingsGoal: this.savingsGoal
    });
  }
}
