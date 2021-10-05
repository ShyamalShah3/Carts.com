import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  
  public slides = [
    { src: "https://bubbles.swearnet.com/assets/bg_tpb-a3746ba843319de50021ae7d8cb680f2bd3324a1c3659f7b119250826f9b4529.jpg" },
    { src: "https://i.pinimg.com/originals/d5/d9/2d/d5d92dd0a47fe652cc943f18e8119e55.jpg" },
    { src: "https://bubbles.swearnet.com/assets/bg_tpb-a3746ba843319de50021ae7d8cb680f2bd3324a1c3659f7b119250826f9b4529.jpg" },
    { src: "https://i.pinimg.com/originals/d5/d9/2d/d5d92dd0a47fe652cc943f18e8119e55.jpg" }
  ];
  
  constructor(config: NgbCarouselConfig) {
  }

  ngOnInit(): void {
  }

}
