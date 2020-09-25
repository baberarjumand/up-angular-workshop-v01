import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  tabCounter = 1;

  constructor() {}

  incrementCounter(): number {
    this.tabCounter++;
    return this.tabCounter;
  }
}
