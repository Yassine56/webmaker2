import { Page } from "../models/page.model.client";
import { Injectable } from "@angular/core";

@Injectable()
export class PageService {
  //List of pages
  pages: Page[] = [
    { id: "123", name: "Post 1", title: "Lorem", websiteId: "567" },
    { id: "234", name: "Post 2", title: "Lorem", websiteId: "678" },
    { id: "456", name: "Post 3", title: "Lorem", websiteId: "678" },
    { id: "567", name: "Post 4", title: "Lorem", websiteId: "789" },
    { id: "789", name: "Post 5", title: "Lorem", websiteId: "890" },
    { id: "910", name: "Post 6", title: "Lorem", websiteId: "456" }
  ];
  //Function to create a page
  createPage(page: Page) {
    page.id = Math.floor(Math.random() * 10 + 1).toString();
    this.pages.push(page);
    return page;
  }

  //Function to find a page by website Id
  findPagesByWebsiteId(websiteId: string) {
    let result = [];
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteId === websiteId) {
        result.push(this.pages[i]);
      }
    }
    return result;
  }
  //Function to find a page by page Id
  findPageById(pageId: string) {
    for (let i = 0; i < this.pages.length; i++) {
      if (pageId === this.pages[i].id) {
        return this.pages[i];
      }
    }
  }
  //Funtion to update a page
  updatePage(page: Page) {
    const myPage = this.findPageById(page.id);
    const index = this.pages.indexOf(myPage);
    this.pages[index] = page;
  }
  //Funtion to delete a page by page Id
  deletePage(pageId: string) {
    const myPage = this.findPageById(pageId);
    const index = this.pages.indexOf(myPage);
    this.pages.splice(index, 1);
  }
}
