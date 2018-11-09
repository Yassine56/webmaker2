import { Injectable } from "@angular/core";
import { Website } from "../models/website.model.client";

@Injectable()
export class WebsiteService {
  websites: Website[] = [
    { id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
    { id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
    {
      id: "567",
      name: "Tic Tac Toe",
      developerId: "123",
      description: "Lorem"
    },
    { id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    { id: "789", name: "Chess", developerId: "234", description: "Lorem" },
    { id: "890", name: "Go", developerId: "123", description: "Lorem" }
  ];

  constructor() {}
  //Function to create a website
  createWebsite(website: Website) {
    website.id = Math.floor(Math.random() * 10 + 1).toString();
    this.websites.push(website);
    return website;
  }
  //Function to find websites by userId
  findWebsitesByUser(userId: string) {
    let result = [];
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i].developerId === userId) {
        result.push(this.websites[i]);
      }
    }
    return result;
  }
  //Function to find website by website id
  findWebsiteById(websiteId: string) {
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i].id === websiteId) {
        return this.websites[i];
      }
    }
  }
  //Function to update a website
  updateWebsite(website: Website) {
    const oldWeb = this.findWebsiteById(website.id);
    const index = this.websites.indexOf(oldWeb);
    this.websites[index] = website;
  }
  //Function to delete a website
  deleteWebsite(websiteId: string) {
    const website = this.findWebsiteById(websiteId);
    const index = this.websites.indexOf(website);
    this.websites.splice(index, 1);
  }
}
