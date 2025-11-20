import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { CATEGORIES } from '../../models/expense.model';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css'
})
export class AddExpenseComponent {
  private expenseService = inject(ExpenseService);

  categories = CATEGORIES;

  title = '';
  amount: number | null = null;
  category = '';
  date = new Date().toISOString().split('T')[0];

  onSubmit() {
    if (this.title && this.amount && this.category && this.date) {
      this.expenseService.addExpense({
        title: this.title,
        amount: this.amount,
        category: this.category,
        date: new Date(this.date)
      });

      // Reset form
      this.title = '';
      this.amount = null;
      this.category = '';
      this.date = new Date().toISOString().split('T')[0];
    }
  }
}
