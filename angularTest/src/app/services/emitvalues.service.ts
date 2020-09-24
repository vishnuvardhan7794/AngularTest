import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmitvaluesService {
  timer = 1;
  startAlphebets = 64;
  mainCount = 0;
  isPause = false;
  constructor() { }

  startEmission() {
    let self = this;
    let observable = Observable.create((observer: any) => {
      let intervel = setInterval(() => {
        if (this.isPause == true) {
          observer.complete();
          clearInterval(intervel)
        } else {
          this.startAlphebets++;
          let alphabet = String.fromCharCode(this.startAlphebets);
          let alphabetList = Array(self.timer).fill(alphabet).toString().replace(/[,.]/g, '')
          if (self.timer % 2 == 0) {
            observer.next(alphabetList);
            this.mainCount += 10;
            observer.next(this.mainCount);
          } else {
            observer.next(alphabetList);
          }
          self.timer++;
        }
      }, 1000)
    });
    return observable
  }
  clearObserveble(){
    this.timer=1;
    this.mainCount=10;
    this.startAlphebets=64;
  }
}
