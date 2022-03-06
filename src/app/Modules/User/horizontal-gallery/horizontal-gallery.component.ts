import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-horizontal-gallery',
  templateUrl: './horizontal-gallery.component.html',
  styleUrls: ['./horizontal-gallery.component.scss']
})
export class HorizontalGalleryComponent implements OnInit {
  public galleryModel=[
    { 
      imageSrc:"../../../assets/imgsss/a2.png",
      title:"random movie"

    },
    {
      imageSrc:"../../../assets/imgsss/a2.png",
      title:"random movie",
      
    },{
      imageSrc:"../../../assets/imgsss/a2.png",
      title:"random movie",
      
    },{
      imageSrc:"../../../assets/imgsss/a2.png",
      title:"random movie",
      
    },{
      imageSrc:"../../../assets/imgsss/a2.png",
      title:"random movie",
      
    },{
      imageSrc:"../../../assets/imgsss/a2.png",
      title:"random movie",
      
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
