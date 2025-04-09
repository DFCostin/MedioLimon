import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: false,
  
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent { 
  images = [
    { src: '../../assets/img/glass/glass_v_1.jpg', alt: 'Imagen 1' },
    { src: '../../assets/img/glass/glass_v_2.jpg', alt: 'Imagen 2' },
    { src: '../../assets/img/glass/glass_v_3.jpg', alt: 'Imagen 3' },
    { src: '../../assets/img/glass/glass_v_4.jpg', alt: 'Imagen 4' },
    { src: '../../assets/img/glass/glass_v_5.jpg', alt: 'Imagen 5' },
    { src: '../../assets/img/glass/glass_v_6.jpg', alt: 'Imagen 6' }
  ];
}
