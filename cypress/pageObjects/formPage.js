import { BasePage } from "./basePage";

export class FormPage extends BasePage {
    static get url() {
        return "automation-practice-form";
    }

    static firstnameField() {
        return cy.get("#firstName");
    }

    static lastnameField() {
        return cy.get("#lastName");
    }

    static emailField() {
        return cy.get("#userEmail");
    }

    static genderRadio() {
        return cy.get(".custom-control-label");
    }

    static phonenoField() {
        return cy.get("#userNumber")
    }

    static dateOfBirthInput() {
        return cy.get("#dateOfBirthInput");
    }
}