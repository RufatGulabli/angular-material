import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private courses: string[] = ["Java", "C#", "JavaScript", "NodeJS", "Angular"];
  constructor() {}

  getCourses() {
    return this.courses;
  }
}
