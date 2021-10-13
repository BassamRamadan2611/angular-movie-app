import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { ContactsComponent } from './contacts/contacts.component';



const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},

  {path:'home' , component:HomeComponent},

  {path:'movies' , component:MoviesComponent},
  
  {path:'tv' , component:TvComponent},
  {path:'contacts' , component:ContactsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
