import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  name = 'child';

  constructor() {
  }

  ngAfterContentChecked(): void {
    console.log(`${this.name}: ngAfterContentChecked`);
  }

  ngAfterContentInit(): void {
    console.log(`${this.name}: ngAfterContentInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`${this.name}: ngAfterViewChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`${this.name}: ngAfterViewInit`);
  }

  ngDoCheck(): void {
    console.log(`${this.name}: ngDoCheck`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${this.name}: ngOnChanges`);
  }

  ngOnDestroy(): void {
    console.log(`${this.name}: ngOnDestroy`);
  }

  ngOnInit(): void {
    console.log(`${this.name}: ngOnInit`);
  }

}
