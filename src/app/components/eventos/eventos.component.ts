import { Evento } from '../../models/Evento';
import { EventoService } from '../../services/Evento.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  modalRef: BsModalRef | undefined;
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  public eventosFiltrado: any = '';

  exibirImagem: boolean = false;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrado = this.filtroLista
      ? this.filtrarEventos(this.filtroLista)
      : this.filtroLista;
  }

  filtrarEventos(filtrar: string): Evento[] {
    filtrar = filtrar.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string }) =>
        evento.tema.toLocaleLowerCase().indexOf(filtrar) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrar) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getEventos();

    // setTimeout(() => {}, 3000);
  }

  alterarImagem() {
    this.exibirImagem = !this.exibirImagem;
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos;
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar os eventos', 'Erro');
        console.log(error);
      }
    );
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('Evento deletado', 'Deletado');
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
