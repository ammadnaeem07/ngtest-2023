import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  public getAll(reqPaylaod: any, endPoint: string): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}${endPoint}`, reqPaylaod);
  }
  public getOne(param: any, endPoint: string): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}${endPoint}/${param}`,{observe: 'response'});
  }
  
  public login(reqPaylaod: any, endPoint: string): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}${endPoint}`, reqPaylaod,{observe: 'response'});
  }
  public createUser(reqPaylaod: any, endPoint: string): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}${endPoint}`, reqPaylaod,{observe: 'response'});
  }

  getPieChartData(): Observable<any>{
    return this.http.get("../assets/json_data.json");
  }
}
