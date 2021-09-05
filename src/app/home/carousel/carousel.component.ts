import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  slides = [
    {
      title: 'Jozef Mrkva',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac purus fermentum, facilisis nulla nec, dapibus ex. Aenean euismod imperdiet nibh.',
      img: '../../assets/Debilko.png',
    },
    {
      title: 'Jana Krátka',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac purus fermentum, facilisis nulla nec, dapibus ex. Aenean euismod imperdiet nibh.',
      img: '../../assets/jaternica.jpg',
    },
    {
      title: 'Ján Hrach',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac purus fermentum, facilisis nulla nec, dapibus ex. Aenean euismod imperdiet nibh.',
      img: '../../assets/cico.jpg',
    },
  ];

  ngOnInit(): void {}
}
