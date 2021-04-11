import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concatAll, filter, map, mergeMap} from 'rxjs/operators';
import {datostotal} from '../models/datostotal.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private urlPHP = 'http://localhost/API';

  constructor(private http: HttpClient) { 

    }
    getQuery(search: string, many: boolean = true): any { 
      let url;
      url = `${this.urlPHP}${search}`;
      return this.http.get(url);
    }

    obtenerProductosTotal(): any {
      return this.getQuery(`/productos/`).pipe(
        map( (res: any) => res.Productos )
      );
      
    }
  }

