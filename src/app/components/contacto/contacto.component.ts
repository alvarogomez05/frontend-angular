import {Component, ViewChild} from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {NgModel} from "@angular/forms";



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  //@ts-ignore
  user = JSON.parse(localStorage.getItem('usuario')).user.usuario


  @ViewChild('nombreModel') nombreModel: NgModel | undefined;
  @ViewChild('mailModel') mailModel: NgModel | undefined;
  @ViewChild('asuntoModel') asuntoModel: NgModel | undefined;
  @ViewChild('msjModel') msjModel: NgModel | undefined;

  // @ts-ignore
  get themeClass(): string {
    const theme = document.querySelector("body")?.getAttribute('data-bs-theme');
    return theme === 'dark' ? 'dark-theme' : 'light-theme';
  }
  

  ngOnInit() {
    emailjs.init('0wgPu1C_SkTQ0gYSb');
  }


  onSubmit(e: Event) {

    let nombre = this.nombreModel?.value;
    console.log(nombre);
    let mail = this.mailModel?.value;
    console.log(mail);
    let asunto = this.asuntoModel?.value;
    console.log(asunto);
    let msj = this.msjModel?.value;
    console.log(msj);

    emailjs.send("service_hyxlmfv", "template_dbdweqf", {
      nombre: nombre,
      email: mail,
      asunto: asunto,
      mensaje: msj,
    }).then(
      () => {
        console.log('SUCCESS!');
      },
      (error: EmailJSResponseStatus) => {
        console.log('FAILED...', error.text);
      }
    );
  }

  get dynamicClasses() {
    return {
      [this.themeClass]: true,
      'grayscale': this.nombreModel?.invalid || this.mailModel?.invalid || this.msjModel?.invalid || this.asuntoModel?.invalid
    };
  }
  
}
