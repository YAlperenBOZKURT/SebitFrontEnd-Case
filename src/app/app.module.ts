import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BaseService } from './services/base.service';
import { HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SortPipe } from './pipes/sort.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import { SingupComponent } from './singup/singup.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CreateComponent } from './create-post/create/create.component';
import {MatSelectModule} from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    PostComponent,
    SearchComponent,
    SortPipe,
    LoginComponent,
    SingupComponent,
    CreatePostComponent,
    CreateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    NgbModule




  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
