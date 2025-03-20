import { LayoutComponent } from './layout/layout-component/layout.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const appHomeState: Ng2StateDeclaration = {
  name: 'app',
  url: '/',
  component: LayoutComponent,
};

export const APP_STATES = [appHomeState];
