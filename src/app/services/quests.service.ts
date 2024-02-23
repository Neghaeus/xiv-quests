import { Injectable } from '@angular/core';
import { Quest } from '../models/quest.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestsService {

  questsList: Quest[];
  questsSub: Subject<Quest[]> = new Subject();

  constructor( private http: HttpClient ) {}

  getQuests() {
    this.questsList = [];
    //for(let i = 1; i <= 50; i++) {
      //this.http.get(`https://xivapi.com/Quest?columns=Name_fr,ID,Name_fr,ID,JournalGenre.Name_fr,JournalGenre.JournalCategory.Name_fr,JournalGenre.JournalCategory.JournalSection.Name_fr,PlaceName.Name_fr,ClassJobLevel0&Page=${i}`).subscribe((data: any) => {
      this.http.get(`https://xivapi.com/Quest?columns=Name_fr,ID,Name_fr,ID,JournalGenre.Name_fr,JournalGenre.JournalCategory.Name_fr,JournalGenre.JournalCategory.JournalSection.Name_fr,PlaceName.Name_fr,ClassJobLevel0`).subscribe((data: any) => {
        for(let quest of data.Results) {
          if(quest.Name_fr != '') {
            const journalGenre = quest.JournalGenre.Name_fr === quest.JournalGenre.JournalCategory.Name_fr ? quest.PlaceName.Name_fr : quest.JournalGenre.Name_fr
            this.questsList.push({ 
              id: quest.ID, 
              name: quest.Name_fr,
              level: quest.ClassJobLevel0,
              journalGenre: journalGenre,
              journalCategory: quest.JournalGenre.JournalCategory.Name_fr,
              journalSection: quest.JournalGenre.JournalCategory.JournalSection.Name_fr,
              checked: false
            });
            this.questsSub.next(this.questsList);
          }
        }
      });
    //}
    return this.questsList;
  }

}
