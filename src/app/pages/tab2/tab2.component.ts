import { CounterService } from './../../shared/services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
})
export class Tab2Component implements OnInit {
  tab2Counter;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.tab2Counter = this.counterService.tabCounter;
  }

  incrementCounter(): void {
    // this.tab2Counter++;
    this.tab2Counter = this.counterService.incrementCounter();
  }
}
