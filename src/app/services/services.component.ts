import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getServices().subscribe(data => {
      this.services = data;
    });
  }

}
