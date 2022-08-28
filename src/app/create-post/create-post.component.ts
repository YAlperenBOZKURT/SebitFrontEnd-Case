import { Component, createComponent, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { PostService } from '../services/post.service';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postObj: any = [];

  constructor(private dialog:MatDialog,private pService : PostService,private lService : LoginService) { }

  ngOnInit(): void {
    this.getPost();
  }



  openDialog() {
   const dialogRef = this.dialog.open(CreateComponent);

    dialogRef.afterClosed().subscribe(() =>{
     this.getPost ();
    })
  }


  delete(id :any) {
    this.pService.deletePost(id).subscribe((res)=> {
    this.ngOnInit();
    })
  }

  getPost () {
    this.pService.getPosts().subscribe((res) => {
      this.postObj = res.filter(
        ( x: { author: string; }) => x.author == `${this.lService.user.firstname}  ${this.lService.user.lastname}`
      )
    })
  }

}
