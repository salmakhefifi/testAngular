import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddResComponent } from './add-res/add-res.component';
import { UpdateResComponent } from './update-res/update-res.component';
import { DetailsResComponent } from './details-res/details-res.component';
import { ListResComponent } from './list-res/list-res.component';

const routes: Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  { path: 'list',component:ListResComponent},
  {path:'update/:id',component:UpdateResComponent},
  {path:'add',component:AddResComponent},
  {path:'details/:id',component:DetailsResComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
