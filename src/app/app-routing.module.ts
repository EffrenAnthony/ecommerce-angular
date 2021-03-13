import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'tienda',
        pathMatch: 'full',
      },
      {
        path: 'tienda',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        // dominio/contact/
        path: 'contact',
        loadChildren: () => import ('./contact/contact.module').then(modulo => modulo.ContactModule)
      },
      {
        path: 'aboutUs',
        component: AboutComponent
      },
      {
        path: 'demo',
        component: DemoComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
