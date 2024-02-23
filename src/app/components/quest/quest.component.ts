import { Component, Input } from '@angular/core';
import { Quest } from '../../models/quest.model';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.scss'
})
export class QuestComponent {

   @Input() quest: Quest;

   constructor() {}

   ngOnInit() {
   }

}
