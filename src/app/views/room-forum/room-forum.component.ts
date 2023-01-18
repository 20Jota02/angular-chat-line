import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SockectService } from '../../services/socket/sockect.service';
import { MessaguesService } from '../../services/messagues/messagues.service';

@Component({
  selector: 'app-room-forum',
  templateUrl: './room-forum.component.html',
  styleUrls: ['./room-forum.component.css']
})
export class RoomForumComponent implements OnInit {

  room: any
  message: string
  today: any
  now: string
  names_suername: any
  photo_path: any
  id_foro: string | number
  name_temaForo: string
  idDelUsuario : string

  @ViewChild('messageForm') messageForm: ElementRef
  @ViewChild('chat') chat: ElementRef

  constructor(
    private activeRoute: ActivatedRoute,
    private cookie: CookieService,
    public socketservice: SockectService,
    private render2: Renderer2,
    private messagesServices: MessaguesService,
  ) { }

  ngOnInit() {
    this.idDelUsuario = localStorage.getItem("id_user")
    this.room = this.activeRoute.snapshot.paramMap.get('room')
    this.id_foro = this.room.split('.')[0]
    this.name_temaForo = this.room.split('.')[1]
    this.llenarChat(this.id_foro)
    localStorage.setItem('name_room', this.room)
    this.names_suername = localStorage.getItem('nameuser')
    this.photo_path = localStorage.getItem('photo')
  }

  llenarChat(id_forum : string | number) {
    this.messagesServices.GetAllMessagesByIdForum(id_forum).subscribe(mesage => {
      const {status} = mesage
      if ( status === 'success' ) {
        for (let infomesague of mesage.results ){
          const {message , name_user , photo , hora_envio , user_id} = infomesague
          this.socketservice.bodychat.push({message , username :name_user  , img : photo , hora_envio , user_id})
        }
      }
    })
  }

  sendmessage(e: any) {
    this.messageForm.nativeElement.focus();
    e.preventDefault()
   if(this.message !== ''){
    const dataUsermessage = {
      message: this.message,
      username: this.names_suername,
      img: this.photo_path,
      hora_envio: this.getHourActual(),
      user_id: localStorage.getItem('id_user'),
      forum_id: this.id_foro
    }
    this.socketservice.Emiter(dataUsermessage)
    this.message = ''
   }

  }
  getHourActual() {
    this.today = new Date()
    return this.today.toLocaleString().split(',')[1].toString()
  }

}
