import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class SignupService extends BaseService {

  constructor(private baseService:BaseService) {
    super(baseService.http);
  }



  public postUser(data: any) {
    return this.baseService.postReq('/users', data);
  }

  public getUser(email : any) {
    return this.baseService.getReq('/users?email='+email);
  }




}
