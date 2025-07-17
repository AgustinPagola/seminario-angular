import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  template: `
  <div class="contact-container">
    <h2>Contacto</h2>
    <p>Si tenés dudas o sugerencias, no dudes en escribirnos.</p>

    <div class="info">
      <p><strong>Email:</strong> contacto&#64;juegostore.com</p>
      <p><strong>Teléfono:</strong> +54 9 11 2345 6789</p>
      <p><strong>Dirección:</strong> Calle Ficticia 123, Tandil, Buenos Aires</p>
    </div>
  </div>
`,
styles: [`
  .contact-container {
    padding: 2rem;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    border-radius: 10px;
    max-width: 600px;
    margin: auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  .info p {
    margin: 0.5rem 0;
  }
  strong {
    color: #2980b9;
  }
`]

})
export class ContactoComponent {}
