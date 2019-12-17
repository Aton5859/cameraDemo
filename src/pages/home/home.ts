import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  path: string;
  beShow: boolean = false;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private imageViewerCtrl: ImageViewerController
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
      this.beShow = true;
      console.log("got file: " + imageData);
      this.path = imageData;

      //If it's file URI
      // this.path = imageData;
    }, (err) => {
      // Handle error
    });
  }

  /**
   * ionic-img-viewer
   * 支持手势任意缩放、放大后拖动查看
   * 上/下滑推出预览。
   *
   * @memberof HomePage
   */

  check(imageToView: any) {
    const viewer = this.imageViewerCtrl.create(imageToView);
    viewer.present();
  }
}
