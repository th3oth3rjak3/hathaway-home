import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  images: string[] = [
    "./assets/Erika_Cute.jpg",
    "./assets/Jake_Selfie.jpg",
    "./assets/Noah_Fire.jpg",
    "./assets/Sage.jpg",
    "./assets/Erika_Rubee.jpg",
    "./assets/Erika_travel.jpg",
    "./assets/Penny_Cute.jpg",
    "./assets/Rubee_grumpy.jpg",
    "./assets/Penny_Christmas.jpg",
    "./assets/Rubee_Peekaboo.jpg"
  ];

  constructor() {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (this.getPaused()){
      this.carousel.pause();
    } else {
      this.carousel.cycle();
    }
  }

  @ViewChild(NgbCarousel) carousel!: NgbCarousel;

  togglePaused() {
    if (this.getPaused()) {
      this.carousel.cycle();
      this.setPaused("false");
    } else {
      this.carousel.pause();
      this.setPaused("true");
    }
  }

  getPaused() : boolean {
    let paused: string | null = window.localStorage.getItem("hathaway-carousel-paused");
    if (!paused){
      paused = "false";
    }
    return (paused === "true")
  }

  setPaused(paused: string) : void {
    window.localStorage.setItem("hathaway-carousel-paused", paused)
  }
}