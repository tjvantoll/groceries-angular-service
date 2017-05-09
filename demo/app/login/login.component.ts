import { Component, OnInit } from '@angular/core';

import { UserService, User } from 'groceries-angular-service';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	moduleId: module.id,
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	user: User = new User();

	constructor(private router: Router, private userService: UserService) { }

	ngOnInit() {
		this.user.email = 'seba@wita.com'
		this.user.password = 'seba@wita.com'
	}

  login() {
    this.userService.login(this.user)
		.subscribe(
			() => this.router.navigate(['/items']),
			(error) => alert('Unfortunately we could not find your account.')
		);
  }

	signUp() {
    this.userService.register(this.user)
		.subscribe(
			() => {
				alert("Your account was successfully created.");
			},
			() => alert("Unfortunately we were unable to create your account.")
		);
	}
}