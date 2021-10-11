import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
  //pure:false
})


//pure pipe cuando el argumento cambia true y en false detecta los cambios se van a renderizar procesa varias imagenes
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if(!heroe.id){
      return 'assets/no-image.png';
    } else if(heroe.alt_img){
      return heroe.alt_img
    }else{

      return `assets/heroes/${heroe.id}.jpg`;
    }
  }

}
