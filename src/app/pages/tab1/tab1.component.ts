import { CounterService } from './../../shared/services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
})
export class Tab1Component implements OnInit {
  tab1Counter;

  constructor(private counterServiceRef: CounterService) {}

  ngOnInit(): void {
    this.tab1Counter = this.counterServiceRef.tabCounter;
  }

  incrementCounter(): void {
    // this.tab1Counter++;
    this.tab1Counter = this.counterServiceRef.incrementCounter();
  }
}
