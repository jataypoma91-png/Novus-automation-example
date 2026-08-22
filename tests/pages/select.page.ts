import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class SelectPage extends BasePage {


  constructor(page: Page) {
    super(page);
  }

  // Locators privados
  private ClickPasatiempo() {
    return this.page.getByRole('checkbox', { name: 'Deportes' }).click();
  }

  private ClickGenero() {
    return this.page.getByRole('radio', { name: 'Masculino' }).check();
  }

  private SelectDepartamento(selectedOption: string) {
    return this.page.getByLabel('select-department').selectOption(selectedOption);
  }

  private SelectCiudad(selectedOption: string) {
    return this.page.getByLabel('select-city').selectOption(selectedOption);
  }
 
  private async SelectComandosSelenium(selectedOption: string) {
    return this.page.getByLabel('Comandos de Selenium').selectOption(selectedOption);
  }

  // Acciones públicas
  async clickPasatiempo() {
    await this.ClickPasatiempo();
  }

  async clickGenero() {
    await this.ClickGenero();
  }

  async seleccionarDepartamento(departamento: string) {
    await this.SelectDepartamento(departamento);
  }

  async seleccionarCiudad(ciudad: string) {
    await this.SelectCiudad(ciudad);
  }

  async SelectComandoSelenium(comando: string) {
    await this.SelectComandosSelenium(comando);
  }

}