import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Channel } from './channel/channel';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'channels',
    component: Channel,
  },
  {
    path: 'about',
    component: About,
  },
];
