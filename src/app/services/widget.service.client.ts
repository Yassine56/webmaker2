import { Injectable } from "@angular/core";
import { Widget } from "../models/widget.model.client";

// injecting service into module
@Injectable()
export class WidgetService {
  //List of widgts
  widgets: Widget[] = [
    {
      id: "123",
      widgetType: "HEADING",
      pageId: "123",
      size: 2,
      text: "GIZMODO"
    },
    {
      id: "234",
      widgetType: "HEADING",
      pageId: "123",
      size: 4,
      text: "Lorem ipsum"
    },
    {
      id: "345",
      widgetType: "IMAGE",
      pageId: "123",
      width: "50%",
      url:
        "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
    },
    {
      id: "567",
      widgetType: "YOUTUBE",
      pageId: "123",
      width: "60%",
      url: "https://youtu.be/AM2Ivdi9c4E"
    },
    {
      id: "789",
      widgetType: "HEADING",
      pageId: "234",
      size: 2,
      text: "Header 1"
    },
    {
      id: "900",
      widgetType: "HEADING",
      pageId: "234",
      size: 4,
      text: "Lorem ipsum"
    },
    {
      id: "901",
      widgetType: "IMAGE",
      pageId: "234",
      width: "50%",
      url:
        "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
    },
    {
      id: "902",
      widgetType: "YOUTUBE",
      pageId: "234",
      width: "60%",
      url: "https://youtu.be/AM2Ivdi9c4E"
    }
  ];
  //Function to create a widget
  createWidget(widget: Widget) {
    widget.id = Math.floor(Math.random() * 10 + 1).toString();
    this.widgets.push(widget);
    return widget.id;
  }
  //Function to find a widget by page Id
  findWidgetsByPageId(pageId: string) {
    let result = [];
    for (let i = 0; i < this.widgets.length; i++) {
      if (pageId === this.widgets[i].pageId) {
        result.push(this.widgets[i]);
      }
    }
    return result;
  }
  //Function to find a widget by widget Id
  findWidgetById(widgetId: string) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (widgetId === this.widgets[i].id) {
        return this.widgets[i];
      }
    }
  }
  //Function to update a widget
  updateWidget(widget: Widget) {
    const myWidget = this.findWidgetById(widget.id);
    const index = this.widgets.indexOf(myWidget);
    this.widgets[index] = widget;
  }
  //Function to delete a widget
  deleteWidget(widgetId: string) {
    const myWidget = this.findWidgetById(widgetId);
    const index = this.widgets.indexOf(myWidget);
    this.widgets.splice(index, 1);
  }
}
