import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Global {
  closeModal() {
    const modalId = document.getElementById('hs-basic-modal');
    if (modalId?.classList.contains('hs-overlay')) {
      modalId.classList.remove('hs-overlay');
      modalId?.classList.remove('opacity-1');
      modalId?.classList.add('hidden');
      modalId?.classList.add('opacity-0');
    }
  }

  openModal() {
    const modalId = document.getElementById('hs-basic-modal');
    if (modalId?.classList.contains('hidden')) {
      modalId?.classList.remove('hidden');
      modalId?.classList.remove('opacity-0');
      modalId.classList.add('hs-overlay');
      modalId?.classList.add('opacity-1');
    }
  }
}
