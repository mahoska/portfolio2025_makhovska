import { LightningElement } from 'lwc';
import CAROUSEL_IMAGES from '@salesforce/resourceUrl/carausel';
export default class CustomCarouselWrapper extends LightningElement {
  slides = [
    {
      image:`${CAROUSEL_IMAGES}/carousel/photo1.jpg`,
      heading:'Caption one',
      description: 'description one'
    },
    {
      image:`${CAROUSEL_IMAGES}/carousel/photo2.jpg`,
      heading:'Caption two',
      description: 'description two'
    },
    {
      image:`${CAROUSEL_IMAGES}/carousel/photo3.jpg`,
      heading:'Caption three',
      description: 'description three'
    },
  ]
}