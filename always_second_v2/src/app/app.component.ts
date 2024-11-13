import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit, QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TranslocoService} from "@jsverse/transloco";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, AfterViewChecked {
  title = 'always_second_v2';
  @ViewChildren('page') pages!: QueryList<ElementRef>;
  @ViewChild('prev') prev!: ElementRef;
  @ViewChild('next') next!: ElementRef;

  idlePeriod = 100;
  animationDuration = 1000;
  lastAnimation = 0;
  index = 0;

  dockItems: MenuItem[] = [{label: "Intro"}, {label: "Given"}, {label: "Donaters"}, {label: "Report"}, {label: "Receivers"}];
  csvUrlReceivers = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdJn_gZe3zyt7S6LKUYQj6lOgZ6RLPTNB7gLs_k-j_GPN9o3SWvDrqTN4lA-AFsvdNkzq5Rhze1Px9/pub?output=csv&range=H3";
  localeItems: MenuItem[] = [{
    label: "EN", icon: "", command: () => {
      this.changeLocale("en")
    }
  }, {
    label: "UK", icon: "", command: () => {
      this.changeLocale("uk")
    }
  }];

  activeLang = "en";

  constructor(private httpClient: HttpClient, private translocoService: TranslocoService) {
  }

  ngOnInit() {
    let response = this.httpClient.get(this.csvUrlReceivers, {responseType: 'text'});
    response.subscribe(data => {
      console.log(data);

    })
  }

  togglePageContent(index: number, state: string) {
    console.log("attempt to toggle")
    if (state === 'show') {
      this.pages
        .toArray()
        [index].nativeElement.querySelector('.page-content')
        .classList.add('show');
    } else {
      this.pages
        .toArray()
        [index].nativeElement.querySelector('.page-content')
        .classList.remove('show');
    }
  }

  ngAfterViewChecked() {
    this.togglePageContent(0, 'show');
  }

  changeLocale(locale: string) {
    this.activeLang = locale;
    this.translocoService.setActiveLang(locale);
  }

  clickPrev() {
    if (this.index < 1) return;
    this.togglePageContent(this.index, 'hide');
    this.index--;
    this.pages.forEach((page, i) => {
      if (i === this.index) {
        this.togglePageContent(i, 'show');
        page.nativeElement.scrollIntoView({behavior: 'smooth'});
      }
    });
  }

  clickNext() {
    if (this.index > 3) return;
    this.togglePageContent(this.index, 'hide');
    this.index++;
    this.pages.forEach((page, i) => {
      if (i === this.index) {
        this.togglePageContent(i, 'show');
        page.nativeElement.scrollIntoView({behavior: 'smooth'});
      }
    });
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event['deltaMode']) {
      delta = event['deltaMode'];
    }
    const timeNow = new Date().getTime();

    if (
      timeNow - this.lastAnimation <
      this.idlePeriod + this.animationDuration
    ) {
      event.preventDefault();
      return;
    }

    if (delta < 0) {
      this.next.nativeElement.click();
    } else {
      this.prev.nativeElement.click();
    }

    this.lastAnimation = timeNow;
  }

}



