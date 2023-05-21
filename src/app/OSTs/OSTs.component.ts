import { Component, OnInit } from '@angular/core';
import { OST } from '../Types/singleOst';
import { OSTsService } from './osts.service';


@Component({
  selector: 'app-OST',
  templateUrl: './OSTs.component.html',
  styleUrls: ['./OSTs.component.css'],
})
export class OSTsComponent implements OnInit {
  aListen: OST[] = [];
  isShowing: boolean = true;
  OSTS: OST[] = [];
  constructor(private OSTsService: OSTsService) {}

  
  ngOnInit(): void {
    this.OSTS = this.OSTsService.getOsts();
  }
}
