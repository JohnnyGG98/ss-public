import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../../human-ss/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class FilterExisteService implements CanActivate {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    if(this.usuarioService.estaLogueado()){
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
