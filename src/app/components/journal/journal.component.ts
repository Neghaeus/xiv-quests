import { Component } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {

  journalItems: {img: string, title: string, selected: boolean}[] = [
    {
      img:'assets/main_cat_217_hr.png',
      title:'Épopée (ARR à Shadowbringers)',
      selected:false
    },
    {
      img:'assets/main_cat_213_hr.png',
      title:'Épopée (Endwalker)',
      selected:false
    },
    {
      img:'assets/main_cat_25_hr.png',
      title:'Chroniques d\'une nouvelle ère',
      selected:false
    },
    {
      img:'assets/main_cat_5_hr.png',
      title:'Quêtes annexes',
      selected:false
    },
    {
      img:'assets/main_cat_91_hr.png',
      title:'Quêtes tribales (ARR à Shadowbringers)',
      selected:false
    },
    {
      img:'assets/main_cat_180_hr.png',
      title:'Quêtes tribales (Endwalker)',
      selected:false
    },
    {
      img:'assets/main_cat_8_hr.png',
      title:'Quêtes de classe/job',
      selected:false
    },
    {
      img:'assets/main_cat_42_hr.png',
      title:'Divers',
      selected:false
    }
  ];

  onSelectItem(item: {img: string, title: string, selected: boolean}) {
    item.selected = true;
  }
}
