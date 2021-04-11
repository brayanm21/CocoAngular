import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import {datostotal} from '../../models/datostotal.model';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public datostotal : any;

  constructor(private datosservice: DatosService) { 
    this.obtenerProductosTotal();

  }

  ngOnInit(): void {
    
  }

  obtenerProductosTotal(): any {
    this.datosservice.obtenerProductosTotal().subscribe(
      (res: any) => {
        this.datostotal = res;
      }
    );
  }

}
