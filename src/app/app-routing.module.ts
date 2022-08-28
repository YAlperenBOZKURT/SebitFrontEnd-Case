import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import { SingupComponent } from './singup/singup.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'category/:categoryid', component:CategoryComponent},
  {path:'post/:postid', component:PostComponent},
  {path:'search', component:SearchComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SingupComponent},
  {path:'create-post', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
