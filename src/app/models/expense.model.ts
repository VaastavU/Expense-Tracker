export interface Expense {
    id: string;
    title: string;
    amount: number;
    category: string;
    date: Date;
}

export interface Budget {
    monthlyLimit: number;
    savingsGoal: number;
}

export const CATEGORIES = [
    'Food',
    'Transport',
    'Utilities',
    'Entertainment',
    'Health',
    'Shopping',
    'Other'
];
