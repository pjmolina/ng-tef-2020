import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Place } from '../domain/place';


interface Hero {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  animations: [
    trigger('heroSelected', [
      state('noselected', style({
        backgroundColor: '#eeeeee', transform: 'scale(1)'
      })),
      state('selected',   style({
        backgroundColor: '#ff0000', transform: 'scale(1.1)'
      })),
      transition('noselected => selected', animate('3000ms ease-in')),
      transition('selected => noselected', animate('3000ms ease-out'))
    ])
  ]
})
export class HelloComponent implements OnInit {
  currentPlaceId: string = null;

  heroes: Hero[] = [
    { name: 'Heroe 1', selected: false },
    { name: 'Heroe 2', selected: false },
    { name: 'Heroe 3', selected: false },
    { name: 'Heroe 4', selected: false },
    { name: 'Heroe 5', selected: false },
    { name: 'Heroe 6', selected: false },
    { name: 'Heroe 7', selected: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(place: Place): void {
    this.currentPlaceId = place._id;
  }

  selectedHero(h: Hero): void {
    h.selected = !h.selected;
  }

  toState(h: Hero): string {
    return h.selected ? 'selected' : 'noselected';
  }

}
