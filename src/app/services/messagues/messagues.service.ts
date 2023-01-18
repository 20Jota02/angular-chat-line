import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ResponseI } from '../../models/response.interface'
import { BaseUrlService } from '../../../../GlobalConstanst'

@Injectable({
  providedIn: 'root'
})
export class MessaguesService {

  constructor(
    private http: HttpClient
  ) { }

  GetAllMessagesByIdForum(id_forum  : string | number):Observable<ResponseI>{
    let direction = BaseUrlService.concat(`getmessagues/${id_forum}`)
    return this.http.get<ResponseI>(direction )
  }


}
