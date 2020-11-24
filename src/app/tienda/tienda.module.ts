import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { PagoComponent } from './pago/pago.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', component: CarritoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'pago', component: PagoComponent },
  { path: '**', component: CarritoComponent }
];

@NgModule({
  declarations: [
    CarritoComponent,
    PagoComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TiendaModule { }
