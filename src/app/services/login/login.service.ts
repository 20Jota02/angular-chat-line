import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ResponseI } from '../../models/response.interface'
import { BaseUrlService } from '../../../../GlobalConstanst'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(form : any ):Observable<ResponseI>{
    let direction = BaseUrlService.concat('login')
    return this.http.post<ResponseI>(direction , form)
  }

}
