import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { OST } from '../Types/Ost';

@Component({
  selector: 'app-s-ost',
  templateUrl: './s-ost.component.html',
  styleUrls: ['./s-ost.component.css'],
})
export class SOSTComponent implements OnInit {
  @Input() ost: OST = {} as OST;
  @Output() emitOst = new EventEmitter<OST>();
  constructor() {}
  ngOnInit(): void {}

  takeAlisten() {
    this.emitOst.emit(this.ost);
  }
}
