import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, NgApexchartsModule],
})
export class AdminModule {}
