import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "src/app/services/user.service.client";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user_error: boolean;
  pwd_error: boolean;
  password: string;
  username: string;
  verifPassword: string;

  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit() {}
  register() {
    if (this.password != this.verifPassword) {
      this.pwd_error = true;
    } else {
      let user = this.userservice.findUserByUsername(this.username);
      if (user) {
        this.user_error = true;
        this.pwd_error = false;
      } else {
        let newUser = {
          username: this.username,
          password: this.password,
          verifPassword: this.verifPassword
        };
        this.user_error = false;
        let createdUser = this.userservice.createUser(newUser);
        //console.log(createdUser);
        this.router.navigate(["user", createdUser.id]);
        //console.log(this.userservice.users);
      }
    }
  }
}
