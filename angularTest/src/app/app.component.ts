import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmitvaluesService } from './services/emitvalues.service';
import { Machine} from './services/Machine'
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
    let myMachine=new Machine(4,'crane');
    console.log('myMachine.isDark',myMachine.isDark('red'));
    console.log('myMachine.description',myMachine.description);
    console.log('myMachine.description',myMachine.trimColor);
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
