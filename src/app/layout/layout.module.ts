import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbSidebarService,
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout-component/layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [NbSidebarModule, NbButtonModule, CommonModule, NbLayoutModule],
  declarations: [LayoutComponent],
  bootstrap: [LayoutComponent],
  providers: [NbSidebarService],
})
export class LayoutModule {}
