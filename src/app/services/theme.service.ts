import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    // 'light', 'dark', or 'system'
    themeSignal = signal<string>('system');

    constructor() {
        // Load from local storage
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            this.themeSignal.set(storedTheme);
        }

        // Apply theme effect
        effect(() => {
            const theme = this.themeSignal();
            localStorage.setItem('theme', theme);

            if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });

        // Listen for system changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (this.themeSignal() === 'system') {
                if (e.matches) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
        });
    }

    setTheme(theme: string) {
        this.themeSignal.set(theme);
    }
}
