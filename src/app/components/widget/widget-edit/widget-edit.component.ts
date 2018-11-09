import { Component, OnInit } from "@angular/core";
import { Widget } from "src/app/models/widget.model.client";
import { WidgetService } from "src/app/services/widget.service.client";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-widget-edit",
  templateUrl: "./widget-edit.component.html",
  styleUrls: ["./widget-edit.component.css"]
})
export class WidgetEditComponent implements OnInit {
  uid: string;
  wgid: string;
  widget: Widget;

  constructor(
    private widgetservice: WidgetService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.wgid = params["wgid"];
      this.widget = this.widgetservice.findWidgetById(this.wgid);
    });
  }
}
