import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {

  categories: {id: number, img: string, title: string, selected: boolean}[];
  constructor(private categoriesService: CategoriesService) {}
  
  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

  onSelectItem(item: {img: string, title: string, selected: boolean}) {
    item.selected = true;
  }
}
