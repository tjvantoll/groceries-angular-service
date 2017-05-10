import { Component, OnInit } from '@angular/core';

import { GroceryListService, UserService, User, Grocery } from 'groceries-angular-service';

@Component({
  selector: 'ns-items',
  moduleId: module.id,
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Grocery[];
  newItemName: string = '';

  constructor(private groceryListService: GroceryListService) { }

  ngOnInit(): void {
    this.getItems();
  }

  add() {
    this.groceryListService.add(this.newItemName)
    .subscribe(newItem => {
     console.log('Item added:');
     this.items.push(newItem);
    });
  }

  delete(id: string) {
    this.groceryListService.delete(id)
    .subscribe(() => {
      console.log('Item Removed');

      const index = this.items.findIndex(item => item.id === id);
      this.items.splice(index, 1);
    });
  }

  getItems() {
    this.groceryListService.load()
    .subscribe(groceries => {
      console.log(JSON.stringify(groceries));
      this.items = groceries;
    })
  }
}
