import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  public user:any ="";

  constructor(private baseService : BaseService) {

    super(baseService.http);

    let str = localStorage.getItem('user');
    if(str !=null) {
      this.user=JSON.parse(str)
    }
  }

  public getUser(email : any) {
    return this.baseService.getReq('/users?email='+email);
  }
}
