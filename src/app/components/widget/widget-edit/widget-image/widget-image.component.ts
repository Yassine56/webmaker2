import { Component, OnInit } from "@angular/core";
import { Widget } from "src/app/models/widget.model.client";
import { WidgetService } from "src/app/services/widget.service.client";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-widget-image",
  templateUrl: "./widget-image.component.html",
  styleUrls: ["./widget-image.component.css"]
})
export class WidgetImageComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: Widget;
  constructor(
    private widgetservice: WidgetService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.pid = params["pid"];
      this.wgid = params["wgid"];
      this.widget = this.widgetservice.findWidgetById(this.wgid);
    });
  }
  //Update header widget
  update() {
    this.widgetservice.updateWidget(this.widget);
    this.router.navigate([
      "/user/" +
        this.uid +
        "/website/" +
        this.wid +
        "/page/" +
        this.pid +
        "/widget"
    ]);
  }
  //Delete header widget
  delete() {
    this.widgetservice.deleteWidget(this.wgid);
    this.router.navigate([
      "/user/" +
        this.uid +
        "/website/" +
        this.wid +
        "/page/" +
        this.pid +
        "/widget"
    ]);
  }
}
