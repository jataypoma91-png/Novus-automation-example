import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';

const { Given, When } = createBdd(test);

Given(
  'accedo a la web de registro de Novus Technology',
  async ({textPage}) => {
    await textPage.irAlFormulario();
  }
);

When(
  'Digito mis nombres',
  async ({ textPage }) => {
    await textPage.ingresarNombres('Jorge');
  }
);

When(
  'apellidos',
  async ({ textPage }) => {
    await textPage.ingresarApellidos('Paz Diaz');
  }
);

When(
  'Selecciono los pasatiempos que me caracterizan',
  async ({ selectPage }) => {
    await selectPage.clickPasatiempo();
  }
);

When(
  'Selecciono al género que pertenezco',
  async ({ selectPage }) => {
    await selectPage.clickGenero();
  }
);

When(
  'Digito mi Numero de Telefono',
  async ({ textPage }) => {
    await textPage.ingresarTelefono('999999999');
  }
);

When(
  'Digito mi Correo Electrónico',
  async ({ textPage }) => {
    await textPage.ingresarEmail('jorge@example.com');
  }
);


When(
  'Selecciono Departamento de nacimiento',
  async ({ selectPage }) => {
    await selectPage.seleccionarDepartamento("LIMA");
  }
);

When(
  'Selecciono Ciudad de nacimiento',
  async ({ selectPage }) => {
    await selectPage.seleccionarCiudad("LIMA");
  }
);

When(
  'Selecciono alguna opción de Comandos de Selenium',
  async ({ selectPage }) => {
    await selectPage.SelectComandoSelenium("Wait Commands");
  }
);

When(
  'Cargo un documento',
  async ({ buttonPage }) => {
    await buttonPage.cargaDocumento();
  }
);

When(
  'Presiono en botón Enviar',
  async ({ buttonPage }) => {
    await buttonPage.clickEnviar();

  }
);


When(
  'Digito mis {string}',
  async ({ textPage }, arg: string) => {
    await textPage.ingresarNombres(arg);
  }
);

When(
  'apellidos {string}',
  async ({ textPage }, arg: string) => {
    await textPage.ingresarApellidos(arg);
  }
);

When('Digito mi Numero de Telefono {string}', async ({ textPage }, arg: string) => {
  await textPage.ingresarTelefono(arg);
});

When('Digito mi Correo Electrónico {string}', async ({ textPage }, arg: string) => {
  await textPage.ingresarEmail(arg);
});

When('Selecciono Departamento de nacimiento {string}', async ({ selectPage }, arg: string) => {
  await selectPage.seleccionarDepartamento(arg);
});

When('Selecciono Ciudad de nacimiento {string}', async ({ selectPage }, arg: string) => {
  await selectPage.seleccionarCiudad(arg);
});

When('Selecciono alguna opción de Comandos de Selenium {string}', async ({ selectPage }, arg: string) => {
  await selectPage.SelectComandoSelenium(arg);
});

When('Cargo un documento con el nombre {string}', async ({ buttonPage }, arg: string) => {
  await buttonPage.cargaDocumento(arg);
});