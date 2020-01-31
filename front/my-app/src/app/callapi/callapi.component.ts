import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response} from './response';

@Component({
  selector: 'app-callapi',
  templateUrl: './callapi.component.html',
  styleUrls: ['./callapi.component.css']
})
export class CallapiComponent implements OnInit {
  model: Response;
  private apiUrl = '/api';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Response>(this.apiUrl).subscribe(value => this.model = value);
  }
}
