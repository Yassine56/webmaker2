import { Component, OnInit } from "@angular/core";
import { WebsiteService } from "src/app/services/website.service.client";
import { Router, ActivatedRoute } from "@angular/router";
import { Website } from "src/app/models/website.model.client";

@Component({
  selector: "app-website-edit",
  templateUrl: "./website-edit.component.html",
  styleUrls: ["./website-edit.component.css"]
})
export class WebsiteEditComponent implements OnInit {
  uid: string;
  wid: string;
  website: Website;
  websites: Website[];
  constructor(
    private websiteservice: WebsiteService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.website = this.websiteservice.findWebsiteById(this.wid);
      this.websites = this.websiteservice.findWebsitesByUser(this.uid);
    });
  }
  //Update a website
  updateWebsite() {
    const website: Website = {
      name: this.website.name,
      description: this.website.description,
      developerId: this.uid
    };
    this.websiteservice.updateWebsite(website);
    this.router.navigate(["/user/" + this.uid + "/website"]);
  }
  //Delete a website
  deleteWebsite() {
    this.websiteservice.deleteWebsite(this.wid);
    this.router.navigate(["/user/" + this.uid + "/website"]);
  }
}
