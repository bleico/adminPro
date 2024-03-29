import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from './../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  // public imgUrl = '';
  public usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) {
    // this.imgUrl = usuarioService.usuario.imagenUrl;
    this.usuario = usuarioService.usuario;
   }

  logout() {
    this.usuarioService.logout();
  }

}
