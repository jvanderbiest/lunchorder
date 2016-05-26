import { Component } from '@angular/core';
import {LunchMenuComponent} from './lunch-menu/lunch-menu.component';

@Component({
  moduleId: module.id,
  selector: 'lunch-catalog-app',
  templateUrl: 'lunch-catalog.component.html',
  styleUrls: ['lunch-catalog.component.css'],
  directives: [LunchMenuComponent]
})
export class LunchCatalogAppComponent {
  title = 'lunch-catalog works!';
}
