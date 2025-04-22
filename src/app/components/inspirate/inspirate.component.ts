import { Component } from '@angular/core';

@Component({
  selector: 'app-inspirate',
  templateUrl: './inspirate.component.html',
  styleUrls: ['./inspirate.component.scss']
})
export class InspirateComponent {

  images = [
    {'img':'assets/images/inspirate/1.webp',
      "id": '16'},
    {'img':'assets/images/inspirate/2.webp',
      "id": '18'},
    {'img':'assets/images/inspirate/10.webp',
      "id": '21'},
    {'img':'assets/images/inspirate/4.webp',
      "id": '20'},
    {'img':'assets/images/inspirate/5.webp',
      "id": '19'},
    {'img':'assets/images/inspirate/9.webp',
      "id": '22'},
    {'img':'assets/images/inspirate/7.webp',
      "id": '17'},
    {'img':'assets/images/inspirate/8.webp',
      "id": '15'},];

  MarcarFavorito(e: Event) {
    const target = e.target as HTMLElement;
    console.log(target);

    if (target.tagName === 'I') {
      target.classList.toggle('heart');
      // @ts-ignore
      let id = target.parentElement.previousElementSibling.getAttribute('alt')
      // @ts-ignore
      // console.log(target.parentElement.previousElementSibling);

      //CON ESTE ID RECOGEREMOS EL PRODUCTO DE UN SERVICIO Y LO SUBIREMOS A FAVORITOS
      console.log(id);
    } else {
      // @ts-ignore
      target.firstElementChild.classList.toggle('heart');
      // @ts-ignore
      let id = target.previousElementSibling.getAttribute('alt')
      // console.log(target.previousElementSibling);

      //CON ESTE ID RECOGEREMOS EL PRODUCTO DE UN SERVICIO Y LO SUBIREMOS A FAVORITOS
      console.log(id);
    }
  }

  get Icon() : String | String[]{
    // @ts-ignore
    return document.querySelector("body").getAttribute('data-bs-theme') === 'light' ? 'claro': 'oscuro';
  }
}
