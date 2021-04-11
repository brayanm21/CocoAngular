import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import {datostotal} from '../../models/datostotal.model';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public formSubmitted = false;
  public datostotal : any;
  public ProductosFormulario = this.fb.group({
    Titulo:['',[Validators.required]],
    Descripcion:['',[Validators.required]],
    Precio:['',[Validators.required]],
    Descuento:['',[Validators.max(100),Validators.min(0)]],
    Diasdescuento:['',[Validators.max(31),Validators.min(0)]]
  })
  constructor(private fb: FormBuilder,
    private datosservice: DatosService) { 
    this.obtenerProductosTotal();

  }

  ngOnInit(): void {
    
  }
   postearFormulario(){
    this.formSubmitted = true;
    if(this.ProductosFormulario.invalid){
      return
    }
    this.datosservice.crearProducto(this.ProductosFormulario.value).subscribe();
    console.log(this.ProductosFormulario.value);
  } 
  campoNoValido( campo: string ) : boolean {
    if ( this.ProductosFormulario.get(campo)?.invalid && this.formSubmitted ){
      return true;
    }else {
      return false;
    }
  }

  obtenerProductosTotal(): any {
    this.datosservice.obtenerProductosTotal().subscribe(
      (res: any) => {
        this.datostotal = res;
      }
    );
  }

  

}
