import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;
  error: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.login(this.name, this.password).pipe(take(1)).subscribe({
      next: session => {
        if (session.isAutenticated) {
          // navegar
          this.router.navigate(['']);
        } else {
          this.error = 'Credenciales invalidas';
        }
      },
      error: e => this.error = e
    });

  }
}
