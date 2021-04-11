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
  public total = 0;
  public canasta = [];
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
  ProductoCanasta(id,nombre,precio){
    let bandera = false
    for(let i = 0; i < this.canasta.length ; i++){
      if(this.canasta[i].id == id){
        bandera = true;
      }
    }
    if(bandera == false){
      this.canasta.push({id,nombre,precio})
    }
    let totalNum = 0;
    this.canasta.forEach(element => {
      totalNum += element.precio;
    });
    this.total = totalNum;
    
  }
  VaciarCanasta (){
    this.total = 0;
    this.canasta.length=0;
  }

   postearFormulario(){
    this.formSubmitted = true;
    if(this.ProductosFormulario.invalid){
      return
    }
    this.datosservice.crearProducto(this.ProductosFormulario.value).subscribe();
    console.log(this.ProductosFormulario.value);
    this.ProductosFormulario.reset();
    this.formSubmitted = false;
    this.obtenerProductosTotal();
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
