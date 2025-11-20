import { Injectable, signal, computed, effect } from '@angular/core';
import { Expense, Budget } from '../models/expense.model';

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {
    // State
    private expensesSignal = signal<Expense[]>([]);
    private budgetSignal = signal<Budget>({ monthlyLimit: 75000, savingsGoal: 25000 });

    // Computed values
    readonly expenses = this.expensesSignal.asReadonly();
    readonly budget = this.budgetSignal.asReadonly();

    readonly totalSpent = computed(() => {
        return this.expensesSignal().reduce((acc, curr) => acc + curr.amount, 0);
    });

    readonly remainingBudget = computed(() => {
        return this.budgetSignal().monthlyLimit - this.totalSpent();
    });

    readonly savingsProgress = computed(() => {
        const saved = this.remainingBudget();
        const goal = this.budgetSignal().savingsGoal;
        return Math.min(100, Math.max(0, (saved / goal) * 100));
    });

    constructor() {
        // Load from local storage if available
        const storedExpenses = localStorage.getItem('expenses');
        if (storedExpenses) {
            this.expensesSignal.set(JSON.parse(storedExpenses, (key, value) => {
                if (key === 'date') return new Date(value);
                return value;
            }));
        }

        const storedBudget = localStorage.getItem('budget');
        if (storedBudget) {
            this.budgetSignal.set(JSON.parse(storedBudget));
        }

        // Save to local storage on change
        effect(() => {
            localStorage.setItem('expenses', JSON.stringify(this.expensesSignal()));
        });

        effect(() => {
            localStorage.setItem('budget', JSON.stringify(this.budgetSignal()));
        });
    }

    addExpense(expense: Omit<Expense, 'id'>) {
        const newExpense: Expense = {
            ...expense,
            id: crypto.randomUUID()
        };
        this.expensesSignal.update(expenses => [newExpense, ...expenses]);
    }

    deleteExpense(id: string) {
        this.expensesSignal.update(expenses => expenses.filter(e => e.id !== id));
    }

    updateBudget(budget: Budget) {
        this.budgetSignal.set(budget);
    }
}
