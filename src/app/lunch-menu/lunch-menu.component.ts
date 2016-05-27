import { Component, OnInit } from '@angular/core';
import { Article } from '../domain/lunch/article';

@Component({
  moduleId: module.id,
  selector: 'lunch-menu',
  templateUrl: 'lunch-menu.component.html',
  styleUrls: ['lunch-menu.component.css']
})
export class LunchMenuComponent implements OnInit {

  lunchItems : Article[];
  
  constructor() {}

  ngOnInit() {
    this.lunchItems = [new Article(
      "Martino", 3.2), new Article(
      "Kip curry", 2)];
  }
}
