import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SseService } from '../sse.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sse-display',
  templateUrl: './sse-display.component.html',
  styleUrls: ['./sse-display.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SseDisplayComponent implements OnInit {
  sseData: string[] = [];

  constructor(
    private sseService: SseService,
    private changeDetector: ChangeDetectorRef // Necesario para forzar la detección de cambios
  ) { }

  ngOnInit(): void {
    this.sseService.getServerSentEvent('http://localhost:8091/global/sse')
      .subscribe(
        data => {
          console.log('Dato recibido:', data);  // Verifica en la consola que los datos están llegando
          this.sseData.push(data);
          this.changeDetector.detectChanges();  // Forzar la actualización del DOM
        },
        error => console.error('Error en SSE:', error)
      );
  }
}
