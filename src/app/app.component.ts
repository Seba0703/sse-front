import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Importar RouterModule
import { SseDisplayComponent } from './sse-display/sse-display.component'; // ✅ Importar el componente SSE

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // ✅ Es standalone
  imports: [RouterModule, SseDisplayComponent] // ✅ Importar RouterModule y el componente SSE
})
export class AppComponent {
  title = 'sse-front';
}
