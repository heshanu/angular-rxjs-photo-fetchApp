import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//add hrrp


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) {
      
  }

  getPhoto(){
    return this.http.get('https://api/unsplash.com/photos/random',{
      headers:{
        Authenticn:' Client-ID MKBag_smWNjRfuWukYN17wQFQbtMKGfENg5TLgv7jaE'
      }
    })
  }
}
