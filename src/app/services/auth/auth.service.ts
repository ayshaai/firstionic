import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  //add code for recoverpassword
  recoverEmailPassword(email: string) : Observable<void>{
return new Observable<void>(observer=>{

setTimeout(() => {
  if(email=="@email.com"){
    observer.error({message:"email not found"});
  }
  observer.next();
  observer.complete();

}, 3000);

})

  }
}
