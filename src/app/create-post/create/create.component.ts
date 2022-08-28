import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  category : string ='';
  title : string ='';
  description :string ='';
  today = new Date();
  constructor(private lService: LoginService,private postService : PostService, private dialogRef:MatDialogRef<CreateComponent>,private router :Router) { }

  ngOnInit(): void {
  }



  createPost () {
   let obj = {
    category_id : this.category,
    title : this.title,
    description : this.description,
    date : this.today,
    author : `${this.lService.user.firstname}  ${this.lService.user.lastname}`
   }

   this.postService.createPost(obj).subscribe((res) =>{
    this.close();
    this.router.navigateByUrl('create-post')
   })
   debugger;

}

close() {
  this.dialogRef.close()

}
}
