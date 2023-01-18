import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import {ResponseI} from '../../models/response.interface'
import { BaseUrlService } from '../../../../GlobalConstanst'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getDataUserByIdUser(id : any ):Observable<ResponseI>{
    let direction = BaseUrlService.concat('')
    return this.http.get<ResponseI>(direction)
  }

  CreteUser(form : any  ):Observable<ResponseI>{
    let direction = BaseUrlService.concat('')
    return this.http.post<ResponseI>(direction , form)
  }
}
