import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestsService } from '../../services/quests.service';
import { Quest } from '../../models/quest.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  questsList: Quest[] = [];
  questsSub: Subscription;
  filteredQuests: string;
  constructor(private questService: QuestsService) {}

  ngOnInit() {
    this.questService.getQuests();
    this.questsSub = this.questService.questsSub.subscribe((questsList: Quest[]) => {
      this.questsList = questsList;
    })
  }

  ngOnDestroy() {
    this.questsSub.unsubscribe();
  }
}
