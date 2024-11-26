import { Component, OnInit } from '@angular/core';
import {HttpClient, provideHttpClient} from '@angular/common/http'; //HTTP CLIENT
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Mante } from './mante.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:true,
  imports:   
 [CommonModule, HttpClientModule]
})
export class AppComponent implements OnInit{
  
  title = 'f-end';
  estinzione = false;
  nonestinzione = false;
  mante: Mante[] = [];
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
    this.http.get<{mante: Mante[]}>('https://3000-arbsht-verifica2411-g3oxdtkdci7.ws-eu116.gitpod.io/api/mante')
      .subscribe({

        next: (response) => {
          this.mante = response.mante;
          console.log('Received data:', this.mante);
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
  }

  vediEstinzione() {
    if (this.estinzione == true) {
      this.estinzione = false
    }
    else {
      this.estinzione = true;
    }
  }

  vediNonEstinzione() {
    if (this.nonestinzione == true) {
      this.nonestinzione = false
    }
    else {
      this.nonestinzione = true;
    }
  }

}