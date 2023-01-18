import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RoomForumComponent } from './views/room-forum/room-forum.component';
import { NewuserComponent } from './views/newuser/newuser.component';
import { NewforumComponent } from './views/newforum/newforum.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'roomForum/:room',
    component: RoomForumComponent
  },
  {
    path: 'new-user',
    component: NewuserComponent
  },
  {
    path: 'new-forum',
    component: NewforumComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
