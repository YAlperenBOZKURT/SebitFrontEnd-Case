import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category, post } from '../modules/api.models';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  constructor(private base:BaseService) {
    super(base.http);
  }

  public getCategories() : Observable<category[]> {
    return this.base.getReq('/categories');
  }

  public getCategory(categoryId : string) : Observable<post> {
    return this.base.getReq('/categories/'+categoryId);
  }
}
