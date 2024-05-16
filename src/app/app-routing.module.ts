import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
    // {
    //   path: 'feature',
    //   loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
    // },
    {
      path:'',
      component:MainLayoutComponent,
      children:[
        {
          path:"",
          loadChildren:()=> import("./feature/feature.module").then((m)=> m.FeatureModule)
        },
        
      ],
      canActivate: [authGuard],
    },
    {
      path:'auth',
      loadChildren:()=> import('./authentication/auth.module').then(m => m.AuthModule),
    },
    // {
    //   path:'',
    //   redirectTo:'login',
    //   pathMatch:'full'
    // }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
