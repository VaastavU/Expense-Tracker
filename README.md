# Angular Expense Tracker

A modern, responsive Expense Tracker application built with **Angular 19**, **Signals**, and **TailwindCSS**. This application helps users track their daily expenses, set monthly budgets, and monitor their savings goals.

## 🚀 Features

-   **Dashboard Overview**: Visual summary of your financial health, including:
    -   Monthly Budget Limit
    -   Total Expenses
    -   Remaining Budget
    -   Savings Goal Progress
-   **Expense Management**:
    -   Add new expenses with title, amount, date, and category.
    -   View a list of recent expenses.
    -   Filter expenses by category (Food, Transport, Utilities, etc.).
    -   Delete expenses.
-   **Budget Settings**:
    -   Set your custom Monthly Budget Limit.
    -   Set a Monthly Savings Goal.
-   **Data Persistence**: All data is saved locally in your browser's `localStorage`, so your data persists even after refreshing the page.
-   **Responsive Design**: Fully responsive UI that works seamlessly on desktop and mobile devices.
-   **Localization**: Currency formatted for Indian Rupees (Rs.).

## 🛠️ Tech Stack

-   **Framework**: [Angular 19](https://angular.io/)
-   **State Management**: Angular Signals
-   **Styling**: [TailwindCSS](https://tailwindcss.com/)
-   **Architecture**: Standalone Components
-   **Icons**: SVG Icons

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)
-   [Angular CLI](https://angular.io/cli) (optional, but recommended: `npm install -g @angular/cli`)

## 📦 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/VaastavU/Expense-Tracker.git
    cd Expense-Tracker
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## ▶️ Running the Application

1.  **Start the development server**:
    ```bash
    npm start
    ```

2.  **Open your browser**:
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── add-expense/       # Component for adding new expenses
│   │   ├── budget-settings/   # Component for updating budget/savings
│   │   ├── dashboard/         # Main dashboard view with summary cards
│   │   └── expense-list/      # List of expenses with filtering
│   ├── models/
│   │   └── expense.model.ts   # Interfaces for Expense and Budget
│   ├── services/
│   │   └── expense.service.ts # Core logic using Signals and LocalStorage
│   ├── app.ts                 # Root component
│   └── app.config.ts          # App configuration
├── styles.css                 # Global styles and Tailwind directives
└── main.ts                    # Application entry point
```

## 🔮 Future Improvements

-   [ ] **Monthly Filtering**: Logic to strictly separate expenses by month.
-   [ ] **Visualizations**: Add charts (pie/bar) for better expense analysis.
-   [ ] **Authentication**: Add user login to sync data across devices.
-   [ ] **Export**: Ability to export data to CSV/PDF.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
