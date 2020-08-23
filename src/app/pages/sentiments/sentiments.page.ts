import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../popover/popover.component';

@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiments.page.html',
  styleUrls: ['./sentiments.page.scss'],
})
export class SentimentsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'popOver',
      translucent: true
    });
    return await popover.present();
  }

}
