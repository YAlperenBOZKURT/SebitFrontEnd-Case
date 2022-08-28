import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { post } from '../modules/ui.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText : string = '';
  allPosts : any = [];

  constructor(private pService: PostService, private activeRoute : ActivatedRoute) {
   }
  ngOnInit(): void {
    this.search();
    this.pService.getPosts().subscribe((res) => {
      this.allPosts = res;
    })
  }

  // filter for post
   get getData() {
    const resposive = [...this.allPosts]
    if (this.searchText.length > 0 )
    return resposive.filter((res) => res.title.toLowerCase().includes(this.searchText) || res.description.toLowerCase().includes(this.searchText))
    else {
      return resposive;
    }
  }

  // Search input value
  search() {
    this.activeRoute.queryParams.subscribe((res : any) => {
      this.searchText=res.query;
    })
  }

}
