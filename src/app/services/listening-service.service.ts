import { Injectable } from '@angular/core';
import { OST } from '../Types/singleOst';

@Injectable({
  providedIn: 'root',
})
export class ListeningService {
  constructor() {}

  listenQueue: Array<OST> = [];

  add(ost: OST) {
    this.listenQueue.push(ost);
  }
  get() {
    return this.listenQueue;
  }
  remove(ost: OST) {
    this.listenQueue = this.listenQueue.filter((o) => o != ost);
  }
}
