import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  showContent() {
    const content = document.getElementById('block_asked_text');

    if (content) {
      content.style.overflow = "visible";
      content.style.height = "100%";
    }
  }

}
