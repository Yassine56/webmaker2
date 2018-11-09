import { Component, OnInit } from "@angular/core";
import { Page } from "src/app/models/page.model.client";
import { PageService } from "src/app/services/page.service.client";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-new",
  templateUrl: "./page-new.component.html",
  styleUrls: ["./page-new.component.css"]
})
export class PageNewComponent implements OnInit {
  uid: string;
  wid: string;
  page: Page;
  name: string;
  title: string;
  pages: Page[];
  error_form: boolean;

  constructor(
    private pageservice: PageService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      (this.uid = params["uid"]), (this.wid = params["wid"]);
    });
  }
  add() {
    if (!this.name || !this.title) {
      this.error_form = true;
    } else {
      const page: Page = {
        name: this.name,
        title: this.title,
        websiteId: this.wid
      };
      this.pageservice.createPage(page);
      this.router.navigate(["user", this.uid, "website", this.wid, "page"]);
    }
  }
}
