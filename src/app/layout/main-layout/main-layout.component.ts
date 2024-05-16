import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  title!: string;
  routerSub: Subscription;

  constructor(private router: Router,) {
    // Get and dispaly title route and componet title
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        let title = event.snapshot.data['title'];
        if (title){
          this.title = title
        }
        return
      }

    })
   }
}
