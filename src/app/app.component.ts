import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  title = 'angular-js';

  constructor() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    console.log('Constructor');
  }
  ngAfterContentChecked(): void {
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed. Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
  }
  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    console.log('ngOnInit');
    this.title = 'AngularJS';
  }

  mudarTexto(): void {
    this.title += ' 2.0';
  }
}
