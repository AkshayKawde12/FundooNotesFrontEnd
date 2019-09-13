import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { UpdateNotes } from './model/update-notes';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';
import { LabelComponent } from './components/label/label.component';




const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'forgotpassword', component: ForgotpasswordComponent
  },
  {
    path: 'resetpassword', component: ResetpasswordComponent
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: 'notes', component: NotesComponent
      }
    ]
  },
  {
    path: 'updateNotes',component:UpdateNotesComponent
  },
  {
    path:'label',component:LabelComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }