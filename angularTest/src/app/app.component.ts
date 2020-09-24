import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmitvaluesService } from './services/emitvalues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = [];
  subscription: Subscription;
  isStarted = false;
  constructor(public emitvaluesService: EmitvaluesService) {
  }
  startemission() {
    if (this.isStarted == true) {
      alert('Observable is emiting values, if you restart it,please clear once')
    } else {
      this.isStarted=true
      this.emitvaluesService.isPause = false;
      this.subscription = this.emitvaluesService.startEmission()
        .subscribe((data) => {
          this.list.push(data);
        });
    }
  }
  pause() {
    if(this.isStarted==false){
      alert('Please start emission.')
      return
    }else if(this.emitvaluesService.isPause==true) {
      alert('alredy emission paused');
      return
    }
    this.unsubscribe();
    this.emitvaluesService.isPause = true;
  }

  clear() {
    this.pause()
    this.emitvaluesService.clearObserveble();
    this.list = [];
    this.isStarted=false;
  }
  unsubscribe() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
  restart(){
    if(this.emitvaluesService.isPause==false) {
      alert('Please pause the emission...');
      return
    }
    this.isStarted=false;
    this.startemission();
  }
}
