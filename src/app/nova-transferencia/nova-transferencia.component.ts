import { Component, Output, EventEmitter } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service'
import { Transferencia } from '../models/transferencia.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino};
    console.log(this.service);

    this.service.adicionar(valorEmitir).subscribe({
      next: (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato')
      },
      error: (error) => console.error(error)
    })
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
