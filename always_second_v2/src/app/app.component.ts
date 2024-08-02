import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TranslocoService} from "@jsverse/transloco";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'always_second_v2';
  dockItems = [{label: "Intro"}, {label: "Given"}, {label: "Donaters"}, {label: "Report"}, {label: "Receivers"}];
  csvUrlReceivers = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdJn_gZe3zyt7S6LKUYQj6lOgZ6RLPTNB7gLs_k-j_GPN9o3SWvDrqTN4lA-AFsvdNkzq5Rhze1Px9/pub?output=csv&range=H3";
  constructor(private httpClient: HttpClient, private translocoService: TranslocoService) {
  }

  ngOnInit() {
    let response = this.httpClient.get(this.csvUrlReceivers, {responseType: 'text'});
    response.subscribe(data => {
      console.log(data);

    })
  }

  changeLocale(locale: string){
    this.translocoService.setActiveLang(locale);
  }

}



