import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComponent } from './Componets/crear/crear.component';
import {HttpClientModule} from '@angular/common/http';
import {DatosService} from './services/datos.service';

@NgModule({
  declarations: [
    AppComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
