import { Component, OnInit } from '@angular/core';
import { DbService } from "../db.service";
import { User } from "../db.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  username = 'user0001';

  user: User = {
    id: 0,
    p0: '',
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: ''
  };

  constructor(private db: DbService) { }

  getData(): void {
    this.db.getUser().subscribe(t_user =>{
      this.user = t_user;
    })
  }

  ngOnInit(): void {
    this.getData();
  }

}
