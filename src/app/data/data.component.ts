import { Component, OnInit } from '@angular/core';
import { DbService } from "../db.service";

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

export interface User {
  id: number,
  p0: string,
  p1: string,
  p2: string,
  p3: string,
  p4: string,
  p5: string,
  p6: string,
  p7: string,
  p8: string,
  p9: string
}
