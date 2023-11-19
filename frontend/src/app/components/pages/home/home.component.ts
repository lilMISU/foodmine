import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from "../../partials/star-rating/star-rating.component";
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, StarRatingComponent, SearchComponent]
})
export class HomeComponent {
  foods:Food[] = [];

  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else
      this.foods = foodService.getAll();
    })
  }
}
