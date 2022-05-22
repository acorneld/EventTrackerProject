import { Developer } from './../models/developer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevService {


  private url = environment.baseUrl + 'api/developers';

  constructor(
    private http: HttpClient
  ) {

  }

  index(){
    return this.http.get<Developer[]>(this.url + '?sorted=true')
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Problem in DEV Index');
        })
      );
  }

  create(dev: Developer){
    return this.http.post<Developer>(this.url, dev)
    .pipe(
      catchError(
        (err: any) => {
          console.log(err);
          return throwError('HttpClient Error on Dev Creation');
        }
      )
    );
  }

  update(updateDev: Developer){
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    return this.http.put<Developer>(this.url + '/' + updateDev.id, updateDev, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('DevService: error updating Dev')
      })
    )
  }

  destroy(id: number){
    return this.http.delete<void>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('DevService: error deleting Developer')
      })
    );
  }


}
