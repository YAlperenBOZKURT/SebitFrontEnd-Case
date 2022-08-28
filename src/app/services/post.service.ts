import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  constructor(private base:BaseService) {
    super(base.http);
  }

  public getPosts() {
    return this.base.getReq('/posts');
  }

  public getPost(postId : string) {
    return this.base.getReq('/posts/'+postId);
  }

  public createPost(postObj:any)
  { return this.postReq('/posts',postObj);
  }

  public deletePost(postData: any) {
    return this.base.deleteReq('/posts/' + postData.id);
  }
}
