import { del } from "selenium-webdriver/http";
import { Injectable } from "@angular/core";
@Injectable()
export class UserService {
  constructor() {}
  users = [
    {
      id: "123",
      username: "alice",
      password: "alice",
      firstName: "Alice",
      lastName: "Wonder",
      email: "alice@gmail.com"
    },
    {
      id: "234",
      username: "bob",
      password: "bob",
      firstName: "Bob",
      lastName: "Marley",
      email: "bob@gmail.com"
    },
    {
      id: "345",
      username: "charly",
      password: "charly",
      firstName: "Charly",
      lastName: "Gacia",
      email: "charly@gmail.com"
    }
  ];

  //Function to create new user
  createUser(user: any) {
    user.id = Math.floor(Math.random() * 10 + 1).toString();
    console.log(user.id);
    this.users.push(user);
    return user;
  }
  //Function to find user id
  findUserById(userId: string) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === userId) {
        return this.users[i];
      }
    }
  }
  //Function to find user by username
  findUserByUsername(username: string) {
    //console.log(username);
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username) {
        return this.users[i];
      }
    }
  }
  //Function to find user by username
  findUserByCredentials(username: string, password: string) {
    for (var i = 0; i < this.users.length; i++) {
      if (
        this.users[i].username === username &&
        this.users[i].password === password
      ) {
        return this.users[i];
      }
    }
  }
  //Function to update a user
  updateUser(user) {
    console.log("update");
    const oldUser = this.findUserById(user.id);
    const index = this.users.indexOf(oldUser);
    this.users[index] = user;
  }
  //Function to update a user
  deleteUser(userId) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === userId) {
        delete this.users[i];
      }
    }
  }
}
