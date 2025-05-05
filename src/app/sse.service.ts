import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {
  constructor() { }

  getServerSentEvent(url: string): Observable<any> {
    return new Observable(observer => {
      const eventSource = new EventSource(url);  // Utiliza EventSource para SSE

      eventSource.onmessage = (event) => {
        observer.next(event.data);  // Emite el evento de datos al componente
      };

      eventSource.onerror = (error) => {
        observer.error(error);  // Maneja errores
        eventSource.close();  // Cierra la conexión en caso de error
      };

      // Cierra la conexión cuando se complete la observación
      return () => {
        eventSource.close();
      };
    });
  }
}
