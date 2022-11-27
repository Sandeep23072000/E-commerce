import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommService } from '../comm.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  signupForm: FormGroup;
  loginForm: FormGroup;
  showLogin = false;
  data: any;

  constructor(
    private fb: FormBuilder,
    private commService: CommService,
    private http: HttpClient
  ) {
    this.signupForm = fb.group({
      name: '',
      email: '',
      password: '',
    });
    this.loginForm = fb.group({
      email: '',
      password: '',
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    const data = this.signupForm.value
    this.commService.postapi(data).subscribe((response:any)=>{
      console.log(response);
    });
  }
  onsubmit() {
    const data = this.loginForm.value
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,).subscribe((response:any)=>{
      console.log(response);
      if(response.length>0){
        console.log('user logged in successfully');
      }
      else {
        console.log('login failed');
      }
    });
  }
  openlogin() {
    this.showLogin = true;
  }
  opensignup() {
    this.showLogin = false;
  }
}
