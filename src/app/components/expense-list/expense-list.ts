import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { CATEGORIES } from '../../models/expense.model';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css'
})
export class ExpenseListComponent {
  private expenseService = inject(ExpenseService);

  categories = CATEGORIES;
  selectedCategory = signal<string>('All');

  // Use a setter for ngModel to update the signal
  // Or better, just use a regular property and a computed, but signals are nicer.
  // Actually, ngModel with signals is tricky without the new model() input (Angular 17.2+).
  // Let's stick to a regular property for the model and a computed for the list.

  // Wait, I can use a regular property and set the signal, or just use a regular property and a computed that depends on it?
  // Computed signals only track other signals. So I need 'selectedCategory' to be a signal or updated via a signal.
  // I'll use a getter/setter for ngModel to update the signal.

  get selectedCategoryValue() {
    return this.selectedCategory();
  }

  set selectedCategoryValue(value: string) {
    this.selectedCategory.set(value);
  }

  // Actually, simpler: just use a regular property and a computed that reads the service signal and filters by this property? 
  // No, computed needs to track dependencies. If the filter isn't a signal, it won't recompute when filter changes.
  // So filter MUST be a signal.

  // Let's use the getter/setter approach for ngModel binding to the signal.
  // Or I can just use `(ngModelChange)="selectedCategory.set($event)"` and `[ngModel]="selectedCategory()"`.

  filteredExpenses = computed(() => {
    const all = this.expenseService.expenses();
    const cat = this.selectedCategory();

    if (cat === 'All') {
      return all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return all
      .filter(e => e.category === cat)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  deleteExpense(id: string) {
    if (confirm('Are you sure you want to delete this expense?')) {
      this.expenseService.deleteExpense(id);
    }
  }
}
