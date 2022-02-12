import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photoUrl:any;
  constructor(private photosService: PhotosService) {
   // this.fetchPhoto();
   this.photosService.getPhoto().subscribe(response => {
    this.photoUrl = response.urls.regular;
  });

  }
  onClick() {
    //this.fetchPhoto();
    this.photosService.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
    });
    
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
    });
  }
  
  ngOnInit(): void {
  }
}


