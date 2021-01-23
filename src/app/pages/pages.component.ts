import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../serivices/settings.service';

declare function customInitFuntions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {


  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {

    customInitFuntions();

  }

}
