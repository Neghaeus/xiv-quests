import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: {id: number, img: string, title: string, selected: boolean}[] = [
    {
      id:1,
      img:'assets/main_cat_217_hr.png',
      title:'Épopée (ARR à Shadowbringers)',
      selected:false
    },
    {
      id:2, 
      img:'assets/main_cat_213_hr.png',
      title:'Épopée (Endwalker)',
      selected:false
    },
    {
      id:3,
      img:'assets/main_cat_25_hr.png',
      title:'Chroniques d\'une nouvelle ère',
      selected:false
    },
    {
      id:4,
      img:'assets/main_cat_5_hr.png',
      title:'Quêtes annexes',
      selected:false
    },
    {
      id:5,
      img:'assets/main_cat_91_hr.png',
      title:'Quêtes tribales (ARR à Shadowbringers)',
      selected:false
    },
    {
      id:6,
      img:'assets/main_cat_180_hr.png',
      title:'Quêtes tribales (Endwalker)',
      selected:false
    },
    {
      id:7,
      img:'assets/main_cat_8_hr.png',
      title:'Quêtes de classe/job',
      selected:false
    },
    {
      id:8,
      img:'assets/main_cat_42_hr.png',
      title:'Divers',
      selected:false
    }
  ];

  constructor() { }

  getCategories() {
    return this.categories;
  }

  getCategory(id: number) {
    return this.categories.find(element => {
      return element.id === id;
    });
  }
}
