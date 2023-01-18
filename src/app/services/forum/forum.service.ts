import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ResponseI } from '../../models/response.interface'
import { BaseUrlService } from '../../../../GlobalConstanst'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(
    private http: HttpClient
  ) { }

  createForum(form : any ):Observable<ResponseI>{
    let direction = BaseUrlService.concat('createForo')
    return this.http.post<ResponseI>(direction , form)
  }

  getALlForums () {
    const direction = BaseUrlService.concat('getAllForums')
    return this.http.get<ResponseI>(direction)
  }

}
