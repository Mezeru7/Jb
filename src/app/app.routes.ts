import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {MenuComponent} from "../menu/menu.component";


export const routes: Routes = [
  { path: '', component: MenuComponent }, // Перенаправление на страницу входа
  { path: 'login', component: LoginComponent }, // Страница входа
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
