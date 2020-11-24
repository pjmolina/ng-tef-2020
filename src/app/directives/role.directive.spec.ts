import { Component, Host, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SessionService } from '../services/session.service';
import { RoleDirective } from './role.directive';

fdescribe('RoleDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleDirective, HostComponent],
      providers: [
        ViewContainerRef, TemplateRef,
        { provide: SessionService, useClass: MockSession }
      ]
    });

    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should show the secret content when the rol exists', () => {
    const divEl = fixture.debugElement.query(By.css('#rol'));
    expect(divEl).toBeTruthy();
  });

  it('should be empty when the rol does not match', () => {
    hostComponent.rol = 'NonAdmin';
    fixture.detectChanges();
    const divEl = fixture.debugElement.query(By.css('#rol'));
    expect(divEl).toBeFalsy();
  });
});

class MockSession {
  roles = ['Admin'];

  roles$ = of();

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }
}

@Component({
  selector: 'app-host-cmp',
  template: '<div id="rol" *appRole="rol">Secret content</div>'
})
class HostComponent {
  rol = 'Admin';
}
