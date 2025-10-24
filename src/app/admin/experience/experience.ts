import { Component, inject } from '@angular/core';
import { Modal } from '../../common/modal/modal';
import { Global } from '../../services/global';

@Component({
  selector: 'app-experience',
  imports: [Modal],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  globalService = inject(Global)
}
