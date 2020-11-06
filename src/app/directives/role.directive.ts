import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { SessionService } from '../services/session.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnChanges {
  @Input() appRole: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private session: SessionService
  ) {
    this.session.roles$.subscribe(roles => {
      this.refresh();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  refresh(): void {
    if (this.session.hasRole(this.appRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
