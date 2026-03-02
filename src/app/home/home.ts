import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: []
})
export class Home {
  protected readonly title = signal('HelloOIDC');
}
