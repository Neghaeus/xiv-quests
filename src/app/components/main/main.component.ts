import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestsService } from '../../services/quests.service';
import { Quest } from '../../models/quest.model';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  questsList: Quest[] = [];
  questsSub: Subscription;
  filteredQuests: string;
  cat: string;

  constructor(private route: ActivatedRoute, private questService: QuestsService, private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.cat = this.categoriesService.getCategory(+params.id).title;
    });

    this.questService.getQuests();
    this.questsSub = this.questService.questsSub.subscribe((questsList: Quest[]) => {
      this.questsList = questsList;
    })
  }

  ngOnDestroy() {
    this.questsSub.unsubscribe();
  }
}
