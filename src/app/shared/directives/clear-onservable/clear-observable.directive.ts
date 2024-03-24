import { Directive, OnDestroy } from '@angular/core';
import { Subject } from "rxjs";

@Directive({
  selector: '[appClearObservable]'
})
export class ClearObservableDirective implements OnDestroy{
  readonly destroy$ = new Subject<void>();


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
