import { Component, OnInit } from '@angular/core';
import {HttpClient, provideHttpClient} from '@angular/common/http'; //HTTP CLIENT
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:true,
  imports:   
 [CommonModule, HttpClientModule]
})
export class AppComponent implements OnInit{
  
  title = 'f-end';
  yeah = false;
  mante: any[] = [];
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
    this.http.get('https://3000-arbsht-verifica2411-g3oxdtkdci7.ws-eu116.gitpod.io/api/mante').subscribe(data => {
      // Read the result field from the JSON response.
      this.mante = data['mante'];
      console.log(data);
    });
  }

  vediDati() {
    this.yeah = true;
  }

}