import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });

    /*
        const promesa = new Promise( ( resolve, reject ) => {

          if (false) {
            resolve('Hola mundo');
          } else {
            reject('Algo Salio mal');
          }

        } );

        promesa.then((msg) => {
          console.log(msg, 'Hey termine');
        })
          .catch(error => console.log('Error en mi promesa', error));

        console.log('Fin del init');

        */
  }
  getUsuarios() {

    return new Promise(() => {
      fetch('https://reqres.in/api/users?page=2')
        .then(resp => resp.json())
        .then(body => console.log(body.data));

    });

  }

}
