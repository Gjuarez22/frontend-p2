import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { EleccionesComponent } from './elecciones/elecciones.component';
import { PageRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    PageRoutingModule

  ],
  exports: [],
  declarations: [
    EleccionesComponent,
    LayoutComponent,
  ],
  providers: [],
})
export class PagesModule { }