import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../modules/ui.model';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {

  categoryId :any;
  categoryObj:any = {};
  postObj: any = [];
  size : number =0;

  constructor(private route:ActivatedRoute,private cService : CategoryService, private pService:PostService) { }

  ngOnInit(): void {

    // Active category information
    this.categoryId =this.route.snapshot.paramMap.get('categoryid');
    this.cService.getCategory(this.categoryId).subscribe((res) => {
      this.categoryObj = res;
    })

    // filter for category posts
    this.pService.getPosts().subscribe((res) => {
      this.postObj = res.filter(
        (x: { category_id: any; }) => x.category_id == this.categoryId
      );

      // count the number of posts
      this.size = this.postObj.length;


    })

  }


}
