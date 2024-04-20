import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private fireAuth:AngularFireAuth) { }

  
  navSubject$ = new Subject();


  googleSignIn(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((e) => {
      console.log('Login Success');
      console.log(e);
    } , error => {
      console.log(error);
      
    })
  }
  
}
