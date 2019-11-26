import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  path: string;

  constructor(
    public navCtrl: NavController,
    public camera: Camera,
  ) {

  }

  /**
   * 打开摄像头
   */
  openCamera() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      console.log("got file: " + imageData);
      this.path = imageData;

      //If it's file URI
      // this.path = imageData;
    }, (err) => {
      // Handle error
    });
  }

}
