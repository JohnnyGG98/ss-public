import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto-ss/producto/producto/producto.component';
import { ProductoShopComponent } from './components/producto-ss/producto/producto-shop/producto-shop.component';
import { ProductoFormComponent } from './components/producto-ss/producto/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-ss/producto/producto-list/producto-list.component';
import { LocalFormComponent } from './components/human-ss/vendedor/local-form/local-form.component';
import { ClienteFormComponent } from './components/human-ss/cliente/cliente-form/cliente-form.component';
import { FilterVendedorService } from './services/filter-nav/filter-vendedor/filter-vendedor.service';
import { FilterClienteService } from './services/filter-nav/filter-cliente/filter-cliente.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClienteComponent } from './components/human-ss/cliente/cliente/cliente.component';
import { CategoriaListComponent } from './components/producto-ss/categoria/categoria-list/categoria-list.component';
import { CategoriasShopComponent } from './components/shopshop/categorias-shop/categorias-shop.component';
import { PreferenciasComponent } from './components/human-ss/preferencias/preferencias.component';
import { ComentarioComponent } from './components/producto-ss/comentario/comentario/comentario.component';
import { ComentarioListComponent } from './components/producto-ss/comentario/comentario-list/comentario-list.component';
import { ComentarioUpdateComponent } from './components/producto-ss/comentario/comentario-update/comentario-update.component';
import { HomeRouteComponent } from './components/templates/home-route/home-route.component';
import { PerfilComponent } from './components/shopshop/perfil/perfil.component';
import { FilterNoExisteService } from './services/filter-nav/filter-no-existe/filter-no-existe.service';

import { VendedorComponent } from './components/human-ss/vendedor/vendedor/vendedor.component';
import { CambioPassComponent } from './components/cambio-pass/cambio-pass.component';

import { PerfilVenComponent } from './components/human-ss/perfil-ven/perfil-ven.component';

import { MisComprasComponent } from './components/shopshop/mis-compras/mis-compras.component';



const routes: Routes = [
  { 
    path: 'categorias/asignar/:idProducto', 
    component: CategoriaListComponent 
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [FilterNoExisteService]
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  { 
    path: 'producto/:id', 
    component: ProductoComponent,
  },
  { 
    path: 'productos', 
    component: ProductoShopComponent,
  },
  { 
    path: 'productos/categoria/:idCategoria', 
    component: ProductoShopComponent,
  },
  { 
    path: 'productos/linea/:idLinea', 
    component: ProductoShopComponent,
  },
  { 
    path: 'productos/vendedor/:idVendedor', 
    component: ProductoShopComponent,
  },
  { 
    path: 'productos/marca/:idMarca', 
    component: ProductoShopComponent,
  },
  {
    path: 'productos/lista', 
    component: ProductoListComponent,
    canActivate: [FilterVendedorService],
  },
  {
    path: 'productos/guardar', 
    component: ProductoFormComponent,
    canActivate: [FilterVendedorService],
  },
  {
    path: 'productos/guardar/:idProducto', 
    component: ProductoFormComponent,
    canActivate: [FilterVendedorService],
  },
  {
    path: 'productos/comentarios', 
    component: ComentarioComponent 
  },
  {
    path: 'productos/comentariosListar', 
    component: ComentarioListComponent 
  },
  {
    path: 'productos/ComentarioActualizar',
    component: ComentarioUpdateComponent
  },
  { 
    path: 'categorias', 
    component: CategoriasShopComponent,
  },
  { 
    path: 'perfil', 
    component: PerfilComponent,
    canActivate: [FilterClienteService],
  },
  { 
    path: 'compras', 
    component: MisComprasComponent,
    canActivate: [FilterClienteService],
  },
  { 
    path: 'perfil/editar', 
    component: ClienteFormComponent,
    canActivate: [FilterClienteService],
  },
  { 
    path: 'perfil-vendedor', 
    component: PerfilVenComponent,
  },
  { 
    path: 'perfil-vendedor/editar', 
    component: VendedorComponent,
  },
  { 
    path: 'registrarse', 
    component: ClienteFormComponent,
    canActivate: [FilterNoExisteService]
  },
  { 
    path: 'locales', 
    component: LocalFormComponent,
    canActivate: [FilterVendedorService],
  },
  { 
    path: 'cliente/preferencias', 
    component: PreferenciasComponent,
  },
  { 
    path: 'perfil/contrasena', 
    component: CambioPassComponent,
  },
  { 
    path: '',  
    component: HomeRouteComponent
  },
  { 
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
