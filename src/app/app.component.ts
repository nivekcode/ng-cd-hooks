import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'ng-cd-hooks';
  name = 'parent';

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
