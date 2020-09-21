import { Component, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any[] = [];
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        name: 'Animacja #' + (i + 1),
        imgSrc: 'assets/avatar.png',
        content: 'Lorem ipsum dolor sit amet, consectetur' +
                  'adipiscing elit. Quisque sed posuere tortor.'
      });
    }

    setTimeout(() =>this.ScrollToBottom(), 2000);
  }

  ScrollToBottom() {
    this.content.scrollToBottom(120000);
  }
}




