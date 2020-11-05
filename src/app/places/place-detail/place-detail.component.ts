import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/domain/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit, OnChanges {
  @Input() id: string;
  place: Place;
  error: string;

  constructor(
    private placeService: PlaceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        if (paramMap.has('id')) {
          this.id = paramMap.get('id');
          this.refreshData();
        }
      }
    });

    this.refreshData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.refreshData();
  }

  private refreshData(): void {
    if (this.id) {
      this.placeService.getById(this.id).subscribe({
        next: (d) => this.place = d,
        error: (er) => this.handleError(er),
        complete: () => {}
      });
    }
  }

  handleError(error: { message: string, status: number} ): void {
    this.error = error.message;
  }

}
