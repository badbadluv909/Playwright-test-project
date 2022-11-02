import {Locator, Page} from "@playwright/test";

export class SvadbaMainPage {
    readonly page: Page;
    readonly authRegButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.authRegButton = page.locator('.button.button-primary.locked.modal-call', {hasText: 'Зарегистрироваться'});

    }

    async goto(){
        await this.page.goto("https://585svadba.ru/");
    }
}