import { Router, NavigationStart } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class FlashService implements OnDestroy {

  private _subject = new Subject<any>();
  private _FLASH_TIMEOUT: number = 3000;
  private _doTimeout: boolean = false;

  constructor(private router: Router) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._subject.next();
      }
    });

  }

  ngOnDestroy() {
  }

  doSuccess(text: string, doTimeout: boolean = false) {
    this._subject.next({ type: 'success', text: text });
    this.checkTimeout(doTimeout);
  }

  doError(text: string, doTimeout: boolean = false) {
    this._subject.next({ type: 'error', text: text });
    this.checkTimeout(doTimeout);
  }

  checkTimeout(doTimeout: boolean) {
    doTimeout ? setTimeout(() => {
      this._subject.next();
    }, this._FLASH_TIMEOUT) : "";
  }

  getMessage(): Observable<any> {
    return this._subject.asObservable();
  }

}
