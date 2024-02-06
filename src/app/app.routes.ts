import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'; 


export const routes: Routes = [
    {path: '', component: LandingComponent },
    {path: 'privacy-policy', component: PrivacyPolicyComponent }

];
