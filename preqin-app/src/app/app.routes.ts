import { Routes } from '@angular/router';
import { InvestorTableComponent } from './components/investor-table/investor-table.component';
import { InvestorDetailsComponent } from './components/investor-details/investor-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/investors', pathMatch: 'full' },
    { path: 'investors', component: InvestorTableComponent },
    { path: 'investors/:id', component: InvestorDetailsComponent },
  ];
