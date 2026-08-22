import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';

const { Given, When, Then } = createBdd(test);

Given('accedo a la web de carga de documentos', async ({ cargarPage }) => {
    await cargarPage.acceder();
});

When('doy click en examinar', async ({ cargarPage }) => {
    await cargarPage.darClickEnExaminar();
});

When(
    'elijo el archivo {string} y selecciono el documento',
    async ({ cargarPage }, nombreArchivo: string) => {
        await cargarPage.seleccionarDocumento(nombreArchivo);
    }
);

Then(
    'se carga el nombre del documento {string} en el titulo',
    async ({ cargarPage }, nombreArchivo: string) => {
        await cargarPage.verificarTitulo(nombreArchivo);
    }
);

Then('puedo dar click en cargar', async ({ cargarPage }) => {
    await cargarPage.darClickEnCargar();
});

Then(
    'se muestra el mensaje de archivo cargado {string}',
    async ({ cargarPage }, nombreArchivo: string) => {
        await cargarPage.verificarArchivoCargado(nombreArchivo);
    }
);

Then(
    'se muestra el nombre del documento {string}',
    async ({ cargarPage }, nombreArchivo: string) => {
        await cargarPage.verificarNombreDocumento(nombreArchivo);
    }
);