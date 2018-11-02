import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service.client";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userId: string;
  oldUsername: string;
  user;
  userError: boolean;
  successFlag: boolean;
  constructor(
    private router: Router,
    private userservice: UserService,
    private activerouter: ActivatedRoute
  ) {}
  //Initilize the form
  ngOnInit() {
    this.activerouter.params.subscribe(params => {
      (this.userId = params["uid"]),
        (this.user = this.userservice.findUserById(this.userId)),
        //console.log(this.user),
        (this.oldUsername = this.user.username);
    });
  }
  //Update the user
  update() {
    if (this.user.username === this.oldUsername) {
      this.userError = false;
      this.successFlag = true;

      this.userservice.updateUser(this.user);
    } else {
      const userrr = this.userservice.findUserByUsername(this.user.username);
      if (userrr) {
        this.userError = true;
        this.successFlag = false;
      } else {
        this.userError = false;
        this.successFlag = true;
        this.userservice.updateUser(this.user);
      }
    }
  }
}
