import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { DemoMaterialModule } from 'src/app/material-module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { UserModel } from './model/user-model';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { NotesComponent } from './components/notes/notes.component';
import { ShownotesComponent } from './components/shownotes/shownotes.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabelComponent } from './components/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    NotesComponent,
    ShownotesComponent,
    UpdateNotesComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatInputModule, DemoMaterialModule, FormsModule, ReactiveFormsModule
    , CommonModule, BrowserAnimationsModule, HttpClientModule, MatButtonModule, MatCardModule,
    FlexLayoutModule, MatToolbarModule, MatSidenavModule, MatDividerModule, ReactiveFormsModule, BrowserModule, ReactiveFormsModule, MatGridListModule, MatDialogModule, MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
