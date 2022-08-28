import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../modules/ui.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postId :any;
  postObj :post = {
    title:'',
    date:'',
    author:'',
    description:'',
    id:''
  };

  constructor(private route:ActivatedRoute,private pService : PostService) { }

  ngOnInit(): void {

    // Active post information
    this.postId =this.route.snapshot.paramMap.get('postid');
    this.pService.getPost(this.postId).subscribe((res) => {
      this.postObj = res;
    })
  }
}
