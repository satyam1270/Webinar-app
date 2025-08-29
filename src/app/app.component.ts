import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutHorizontalComponent } from '@lib/components/layouts/layout-horizontal/layout-horizontal.component';
import { AuthService } from '@lib/services';
import { ThemeService } from '@lib/services/theme';
import { HomeComponent } from '@pages/home/home.component';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, LayoutHorizontalComponent],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    isAuthenticated$ = inject(AuthService).isAuthenticated$;

    private readonly _themeService = inject(ThemeService);

    ngOnInit(): void {
        this._themeService.init();
    }
}
