import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/domain/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {
  @Output() selected = new EventEmitter<Place>();
  places: Place[] = null;
  error: string;

  constructor(
    private placeService: PlaceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.placeService.getPlaces().subscribe(
      (places) =>  this.places = places,
      (e) => this.handleError(e),
      () => {
        console.log('Complete');
      }
    );
  }

  handleError(e: any): void {
    if (e.status === 401) {
      this.error = 'No autorizado. Proporcione credenciales.';
    } else {
      this.error = e.message;
    }
  }

  onSelected(place: Place): void {
    this.selected.emit(place);

    this.router.navigate(['place/' + place._id ]);
  }
}
