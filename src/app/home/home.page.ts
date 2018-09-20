import {
  Component,
  OnInit,
  NgZone,
  ChangeDetectionStrategy
} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomePage implements OnInit {
  deviceInfo: Device;
  constructor(
    private device: Device,
    private platform: Platform,
    private zone: NgZone
  ) {
    // if (this.platform.is('cordova')) {
    //   console.log('cordova !!!!!!!!!>>>>>>>>.');
    //   this.deviceInfo = this.device;
    // }
  }
  ngOnInit(): void {
    this.getDeviceInfo();
  }

  async getDeviceInfo() {
    this.deviceInfo = await this.platform.ready().then(() => {
      return this.device;
    });
  }

  getDevice() {
    return new Promise<Device>((resolve, reject) => {
      document.addEventListener('deviceready', res => {
        console.log('addEventListener', res);
        // console.log('this.device', this.device);
        resolve(this.device);
        // this.deviceInfo = this.device;
      });
    });
  }
}
