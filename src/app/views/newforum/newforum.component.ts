import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from '../../services/forum/forum.service';

@Component({
  selector: 'app-newforum',
  templateUrl: './newforum.component.html',
  styleUrls: ['./newforum.component.css']
})
export class NewforumComponent implements OnInit {

  FormForo = new FormGroup({
    //campos form
    forum: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  constructor(
    private forumServices: ForumService,
    private route: Router,
  ) { }

  ngOnInit() { }

  PostForm(form: any) {

    console.log(this.FormForo.valid);
    

    if (this.FormForo.valid) {
      this.forumServices.createForum(form).subscribe(forum => {
        if (forum.status == 'success') {
            this.route.navigate(['home'])
        }
      })
    }
  }


}
