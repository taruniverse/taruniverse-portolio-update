import { Component, inject } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  globalService = inject(Global);

}
