import { Component, OnInit } from '@angular/core';
import { category } from '../modules/ui.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories : category [] = [];

  constructor(private service : CategoryService) { }

  ngOnInit(): void {

    //All categories
  this.service.getCategories().subscribe((res) => {
    this.categories = res;
  })
  }
}
