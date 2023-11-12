import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.adapt.scss']
})
export class HeaderComponent {
  isBurgerMenuVisible: boolean = false;

  showBurger() {
    this.isBurgerMenuVisible = !this.isBurgerMenuVisible;
  }

}
