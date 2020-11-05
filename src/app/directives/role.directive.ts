import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SessionService } from '../services/session.service';

@Directive({
  selector: '[appRole]',
  providers: [  ]   // TemplateRef   TODO
})
export class RoleDirective {
  @Input() appRole: string;

  constructor(
    templateRef: TemplateRef<any>,
    viewContainer: ViewContainerRef,
    session: SessionService
  ) {
    if (session.hasRole(this.appRole)) {
      viewContainer.createEmbeddedView(templateRef);
    } else {
        viewContainer.clear();
    }
  }

}
