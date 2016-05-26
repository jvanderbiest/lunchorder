import { Component, OnInit } from '@angular/core';
import { Item } from '../domain/lunch/Item';

@Component({
  moduleId: module.id,
  selector: 'lunch-menu',
  templateUrl: 'lunch-menu.component.html',
  styleUrls: ['lunch-menu.component.css']
})
export class LunchMenuComponent implements OnInit {

  lunchItems : Item[];
  
  constructor() {}

  ngOnInit() {
    this.lunchItems = [new Item(
      "Martino", 3.2), new Item(
      "Kip curry", 2)];
  }
}
