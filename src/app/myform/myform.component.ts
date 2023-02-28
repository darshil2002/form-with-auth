import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'
import{login, signup} from '../data-type'

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {
  
  constructor(private router:Router,private http:HttpClient){ }
  
  submit(data:login){
    localStorage.setItem('data',JSON.stringify(data));
    this.http.post('http://localhost:3000/seller', data).subscribe()
    // this.router.navigate(['/app-home'])
  }
  signup(data:signup){
    localStorage.setItem('data',JSON.stringify(data));
    this.http.post('http://localhost:3000/seller', data).subscribe()
    this.router.navigate(['/app-home'])
  }

  
  imold=true;
  olduser(){
    this.imold=true;
  }
  newuser(){
    this.imold=false;
  }

}
