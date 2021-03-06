import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ClientComponent} from './client/client.component';
import {PersonnelComponent} from './personnel/personnel.component';
import {ReportsComponent} from './reports/reports.component';
import {LoginComponent} from './personnel/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReportingComponent} from './client/reporting/reporting.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { TeamsComponent } from './teams/teams.component';
import { MatIconModule } from '@angular/material/icon';
import { StatusComponent } from './client/status/status.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KafkaComponent } from './kafka/kafka.component';



@NgModule({
  declarations: [
    PagesComponent,
    ClientComponent,
    PersonnelComponent,
    ReportsComponent,
    LoginComponent,
    ReportingComponent,
    TeamsComponent,
    StatusComponent,
    KafkaComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatIconModule,
    MatGridListModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders]
})
export class PagesModule {
}
