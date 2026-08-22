import { Page } from '@playwright/test';
import { BasePage } from './base.page';


export class ButtonPage extends BasePage {


  constructor(page: Page) {
    super(page);
  }

  // Locators privados
  private CargaDocumento() {
    //implementar la lógica para cargar un documento <input class="form-control" type="file" id="picture">
    return this.page.locator('#picture').setInputFiles('tests/resources/firma.png');
  }

  //enviar el valor del documento desde el step
  private CargaDocumentos(SelectedOption: string) {
    //implementar la lógica para cargar un documento <input class="form-control" type="file" id="picture">
    return this.page.locator('#picture').setInputFiles(`tests/resources/${SelectedOption}`);
  }

  private ClickEnviar() {
    return this.page.getByRole('button', { name: 'Enviar' }).click();
    
  }

  private ClickCerrar() {
    return this.page.getByRole('button', { name: 'Close' }).click();
  }

  

  // Acciones públicas
  async cargaDocumento(SelectedOption?: string) {
    if (SelectedOption) {
      await this.CargaDocumentos(SelectedOption);
    } else {
      await this.CargaDocumento();
    }
  }

  async clickEnviar() {
    await this.page.waitForTimeout(2000); 
    await this.ClickEnviar();
    await this.page.waitForTimeout(2000); // Espera de 2 segundos para que se muestre el modal
  }

  async clickCerrar() {
    await this.ClickCerrar();
  }

}