import { expect, Page } from '@playwright/test';
import { readFileSync } from 'fs';
import { BasePage } from './base.page';

export class CargarPage extends BasePage {
    private readonly extensionesAceptadas = new Set([
        'png', 'jpeg', 'jpg', 'rtf', 'csv', 'xls', 'xlsx', 'docx',
        'txt', 'doc', 'pdf', 'gif', 'eml', 'msg',
    ]);

    private readonly url =
        'https://endorsed-david-terminology-serum.trycloudflare.com/';

    constructor(page: Page) {
        super(page);
    }

    private archivoInput() {
        return this.page.locator('#fileInput');
    }

    private tituloInput() {
        return this.page.locator('#titleInput');
    }

    private botonExaminar() {
        return this.page.locator('#browseBtn');
    }

    private botonElegir() {
        return this.page.locator('#elegirBtn');
    }

    private botonCargar() {
        return this.page.locator('#cargarBtn');
    }

    private archivoCargado(nombreArchivo: string) {
        return this.page.getByText(`Archivo: ${nombreArchivo}`, { exact: false });
    }

    private nombreParaCarga(nombreArchivo: string) {
        const extension = nombreArchivo.split('.').pop()?.toLowerCase();
        return extension && this.extensionesAceptadas.has(extension)
            ? nombreArchivo
            : nombreArchivo.replace(/\.[^.]+$/, '') + '.txt';
    }

    async acceder() {
        await this.page.goto(this.url);
    }

    async darClickEnExaminar() {
        await this.botonExaminar().click();
    }

    async seleccionarDocumento(nombreArchivo: string) {
        await this.botonElegir().click();
        const nombreParaCarga = this.nombreParaCarga(nombreArchivo);
        if (nombreParaCarga !== nombreArchivo) {
            await this.archivoInput().setInputFiles({
                name: nombreParaCarga,
                mimeType: 'text/plain',
                buffer: readFileSync(`tests/resources/${nombreArchivo}`),
            });
            return;
        }

        await this.archivoInput().setInputFiles(`tests/resources/${nombreArchivo}`);
    }

    async verificarTitulo(nombreArchivo: string) {
        const nombreSinExtension = nombreArchivo.replace(/\.[^.]+$/, '');
        await expect(this.tituloInput()).toHaveValue(nombreSinExtension);
    }

    async darClickEnCargar() {
        await this.botonCargar().click();
    }

    async verificarArchivoCargado(nombreArchivo: string) {
        const nombreSinExtension = nombreArchivo.replace(/\.[^.]+$/, '');
        await expect(
            this.page.getByText(`"${nombreSinExtension}" cargado correctamente.`, {
                exact: false,
            })
        ).toBeVisible();
    }

    async verificarNombreDocumento(nombreArchivo: string) {
        await expect(this.archivoCargado(this.nombreParaCarga(nombreArchivo))).toBeVisible();
    }
}