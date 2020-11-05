import { Component, OnInit } from '@angular/core';
import { Place } from '../domain/place';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  currentPlaceId: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(place: Place): void {
    this.currentPlaceId = place._id;
  }
}
