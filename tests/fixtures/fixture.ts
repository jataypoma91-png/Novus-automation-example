import { test as base, createBdd } from 'playwright-bdd';
import { TextPage } from '../pages/text.page';
import { SelectPage } from '../pages/select.page';
import { ButtonPage } from '../pages/button.page';
import { CargarPage } from '../pages/cargar.page';


type MisFixtures = {
  textPage: TextPage;
  selectPage: SelectPage;
  buttonPage: ButtonPage;
  cargarPage: CargarPage;
};

export const test = base.extend<MisFixtures>({
  textPage: async ({ page }, use) => {
    await use(new TextPage(page));
  },
  selectPage: async ({ page }, use) => {
    await use(new SelectPage(page));
  },
  buttonPage: async ({ page }, use) => {
    await use(new ButtonPage(page));
  },
  cargarPage: async ({ page }, use) => {
    await use(new CargarPage(page));
  }
});

export const { Given, When, Then } = createBdd(test);
