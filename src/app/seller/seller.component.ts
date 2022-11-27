import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  signupForm: FormGroup;
  loginForm: FormGroup;
  showLogin = false;

  constructor(
    private fb: FormBuilder,
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
    console.log(data);
  }
  onsubmit() {
    const data = this.loginForm.value
    console.log(data);
  }
  openlogin() {
    this.showLogin = true;
  }
  opensignup() {
    this.showLogin = false;
  }
}
