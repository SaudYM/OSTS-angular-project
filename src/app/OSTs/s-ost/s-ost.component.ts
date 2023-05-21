import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { OST } from '../../Types/singleOst';
import { ListeningService } from 'src/app/services/listening-service.service';
import { PopOpComponent } from 'src/app/OSTs/pop-op/pop-op.component';

@Component({
  selector: 'app-s-ost',
  templateUrl: './s-ost.component.html',
  styleUrls: ['./s-ost.component.css'],
})
export class SOSTComponent implements OnInit {
  @Input() ost: OST = {} as OST;
  constructor(
    private ostService: ListeningService,
  ) {}
  ngOnInit(): void {}
  isInQueue: boolean = false;
  addToqueue() {
    this.isInQueue = true;
    this.ostService.add(this.ost);
  }
  

  reomveOST() {
    this.isInQueue = false;
    this.ostService.remove(this.ost);
  }
}
