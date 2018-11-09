import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service.client";
import { NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { User } from "src/app/models/user.model.client";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private userservice: UserService, private router: Router) {}
  error_flag = false;
  username = "";
  password = "";

  ngOnInit() {
    this.error_flag = false;
  }
  login() {
    //console.log(this.username);
    let user: User = this.userservice.findUserByCredentials(
      this.username,
      this.password
    );
    if (user) {
      this.error_flag = false;
      let uid = user.id;
      this.router.navigate(["/user/" + uid]);
    } else {
      //console.log("dsgdfg");
      this.error_flag = true;
    }
  }
}
