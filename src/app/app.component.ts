import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PhotoService } from './photo/photo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoo';
  


  constructor(public photoService: PhotoService) {}

}
