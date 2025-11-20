import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './theme-toggle.html'
})
export class ThemeToggleComponent {
    themeService = inject(ThemeService);
    isDropdownOpen = false;

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    setTheme(theme: string) {
        this.themeService.setTheme(theme);
        this.isDropdownOpen = false;
    }
}
