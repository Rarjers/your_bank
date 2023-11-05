import { Component } from '@angular/core';

@Component({
  selector: 'app-carers-page',
  templateUrl: './carers-page.component.html',
  styleUrls: ['./carers-page.component.scss']
})
export class CarersPageComponent {
  showContent() {
    const content = document.getElementById('block_asked_text');

    if (content) {
      content.style.overflow = "visible";
      content.style.height = "100%";
    }
  }
}
