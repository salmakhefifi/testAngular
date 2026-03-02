import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {


  constructor( private http:HttpClient) { }
   getAllres():Observable<Residence>{
    return this.http.get<Residence>('http://localhost:3000/residences')
  }
  getres(id:any){
    return this.http.get('http://localhost:3000/residences'+'/'+id)
  }
     deleteres(id:any):Observable<Residence>{
    return this.http.delete<Residence>('http://localhost:3000/residences'+'/'+id)
  }

   Createres(sugg:Residence):Observable<Residence>{
    return this.http.post<Residence>('http://localhost:3000/residences',sugg)
  }

   updateres(id:any,sugg:Residence){
    return this.http.put('http://localhost:3000/residences'+'/'+id,sugg)
  }
}
