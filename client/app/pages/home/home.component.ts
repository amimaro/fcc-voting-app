import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.getPolls();
  }

  ngOnInit() { }

  vote(id) {
    this.appService.routeTo(['/poll/' + id])
  }

}
