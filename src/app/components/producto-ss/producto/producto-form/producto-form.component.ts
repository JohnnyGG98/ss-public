import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { Producto } from 'src/app/models/producto-ss/producto';
import { Router, ActivatedRoute } from '@angular/router';
import { LineaService } from 'src/app/services/producto-ss/linea/linea.service';
import { Linea } from 'src/app/models/producto-ss/linea';
import { Marca } from 'src/app/models/producto-ss/marca';
import { Unidad } from 'src/app/models/producto-ss/unidad';
import { UnidadService } from 'src/app/services/producto-ss/unidad/unidad.service';
import { MarcaService } from 'src/app/services/producto-ss/marca/marca.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  idProducto: number;
  //palabraReservada: string = "guardarProdudcto";
  producto: Producto;
  guardado: boolean;
  lineas: Linea[];
  marcas: Marca[];
  unidades: Unidad[];

  constructor(private formBuilder: FormBuilder,
    private productoService: ProductoService, 
    private router:Router,
    private lineaService: LineaService,
    private unidadService: UnidadService,
    private marcaService: MarcaService) {

    this.guardado = false;

    // this.idProducto = this.route.snapshot.params.idProducto || this.palabraReservada;
    

    // this.productoService.getProductoById(this.idProducto).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombreUnidad: ['', Validators.required],
      nombreMarca: ['', Validators.required],
      nombreProducto: ['', Validators.required],
      productoDescrip: ['', Validators.required],
      maxEdad: ['', Validators.required],
      minEdad: ['', Validators.required],
      stockTotal: ['', Validators.required],
      productoPrecio: ['', Validators.required],
      nombreLinea: ['', Validators.required]
    });

    this.producto = {

      id_vendedor: 1,
      id_marca : {
        id_marca: null,
        marc_nombre: "",
        marc_codigo: "",
        marc_activo: true,
        productos: []
      },
      id_unidad: {
        id_unidad: null,
        unid_nombre: "",
        unid_codigo: "",
        unid_activo: true
      },
      id_linea: {
        id_linea: null,
        lin_nombre: "",
        lin_codigo: "",
        lin_activo: true
      },
      prod_nombre: '',
      prod_fecha_ingreso: null,
      prod_stock_min: null,
      prod_stock_max: null,
      prod_stock_total: null,
      prod_precio_venta: null,
      prod_descripcion: '',
      prod_restriccion_edad_max: null,
      prod_restriccion_edad_min: null,
      prod_tiene_iva: true,
      prod_activo: true
    }

    this.lineaService.getAllLineas().subscribe(
      data => {
        this.lineas = data;
      }
    );

    this.marcaService.getAllMarcas().subscribe(
      data =>{
        this.marcas = data;
      }
    );

    this.unidadService.getAllUnidades().subscribe(
      data =>{
        this.unidades = data;
      }
    );

    // this.producto = this.productoService.getProductoById(this.idProducto) || {
    //   vendedor: '',
    //   //Objeto de la clase Marcas
    //   marcas: '',
    //   prod_nombre: '',
    //   prod_fecha_ingreso: null,
    //   prod_stock_total: 0,
    //   prod_precio_venta: 0,
    //   prod_descripcion: '',
    //   prod_restriccion_edad_max: 0,
    //   prod_restriccion_edad_min: 0,
    //   prod_activo: true
    // };

  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {

    console.log(this.producto);

    this.submitted = true;

    if (this.registerForm.invalid) {
      //this.producto.prod_fecha_ingreso = new Date();
      this.producto.id_linea.id_linea = Number(this.producto.id_linea.id_linea);
      this.producto.id_marca.id_marca = Number(this.producto.id_marca.id_marca);
      this.producto.id_unidad.id_unidad = Number(this.producto.id_unidad.id_unidad);
      this.productoService.saveProducto(this.producto).subscribe(
        data => {
          alert("Se guardó correctamente el producto ingresado");
          this.router.navigate(["productos/lista"]);
        }
      );

      // .subscribe(
      //   data => {
      //     if(data == null){
      //       alert("No se pudo guardar el Producto");
      //     }
      //     this.guardado = true;
      //     setTimeout(() => {
      //       this.guardado = false;
      //     }, 4000);
      //     this.router.navigate(["productos/lista"]);
      //   }
      // );


      // if(this.productoService.guardarProducto(this.producto) != null){
        
      //   this.router.navigate(["productos/lista"]);
      // } else{
        
      // }
      
      
    }

   
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
