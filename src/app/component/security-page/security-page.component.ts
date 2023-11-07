import { Component } from '@angular/core';

@Component({
  selector: 'app-security-page',
  templateUrl: './security-page.component.html',
  styleUrls: ['./security-page.component.scss']
})
export class SecurityPageComponent {
  showContent() {
    const content = document.getElementById('block_asked_text');

    if (content) {
      content.style.overflow = "visible";
      content.style.height = "100%";
    }
  }
}
