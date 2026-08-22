import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class TextPage extends BasePage {
  private readonly url =
    'https://novustechnology.pe/practice-form/';

  constructor(page: Page) {
    super(page);
  }

  // Navegación
  async irAlFormulario() {
    await this.page.goto(this.url);
  }

  // Locators privados
  private campoNombres() {
    return this.page.locator('#nombre');
  }

  private campoApellidos() {
    return this.page.locator('#apellido');
  }

  private campoTelefono() {
    return this.page.getByPlaceholder('Número de Teléfono');
  }

  private campoEmail() {
    return this.page.getByLabel('Correo Electrónico');
  }

  // Acciones públicas
  async ingresarNombres(nombres: string) {
    await this.campoNombres().fill(nombres);
  }

  async ingresarApellidos(apellidos: string) {
    await this.campoApellidos().fill(apellidos);
  }

  async ingresarTelefono(telefono: string) {
    await this.campoTelefono().fill(telefono);
  }

  async ingresarEmail(correo: string) {
    await this.campoEmail().fill(correo);
  }
}