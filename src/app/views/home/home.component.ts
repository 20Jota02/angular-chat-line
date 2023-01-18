import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from '../../services/forum/forum.service';
import { SockectService } from './../../services/socket/sockect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listForums: any[] = [];

  // contador : number = 0

  constructor(
    private servicesForum: ForumService,
    private routingServer: Router,
    private socketService: SockectService,
  ) { }

  ngOnInit() {
    this.getAllForums()
  }

  getAllForums() {
    this.servicesForum.getALlForums().subscribe(forums => {
      this.listForums = forums.results
      // this.socketService.contador  === 0 ? this.Home() : ""
    })
  }

  irAForo(id_foro: any, quesion: any) {
    this.routingServer.navigate([`/roomForum/${id_foro}.${quesion}`])
    // this.socketService.contador = 0
  }
  Home(): void {
    window.location.reload()
    // this.socketService.contador ++
  }

}
