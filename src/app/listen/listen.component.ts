import { Component } from '@angular/core';
import { ListeningService } from '../services/listening-service.service';
@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css'],
})
export class ListenComponent {
  constructor(private listenservice: ListeningService) {}

  getlisten() {
    return this.listenservice.get();
  }
}
