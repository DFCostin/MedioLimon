import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
 
  ngAfterViewInit(): void {
    // Seleccionamos todos los elementos con la clase "counter"
    const counters = document.querySelectorAll('.counter');

    // Opciones del Intersection Observer: cuando al menos el 50% es visible
    const observerOptions = {
      threshold: 0.5
    };

    // Función que se ejecuta cuando el elemento es visible
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          const target = parseInt(counter.getAttribute('data-target')!, 10);
          let count = 0;
          // Calcula un incremento para la animación
          const increment = target / 100;

          const updateCounter = () => {
            count += increment;
            if (count < target) {
              counter.textContent = '+' + Math.ceil(count);
              setTimeout(updateCounter, 100); // Ajusta el tiempo para mayor o menor suavidad
            } else {
              counter.textContent = '+' + target;
            }
          };

          updateCounter();
          // Una vez iniciado, dejamos de observar este contador
          observer.unobserve(counter);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    counters.forEach(counter => {
      observer.observe(counter);
    });
  }
}
