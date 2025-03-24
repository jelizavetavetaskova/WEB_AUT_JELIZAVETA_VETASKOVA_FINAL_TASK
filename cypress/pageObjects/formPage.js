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

    static monthSelect() {
        return cy.get(".react-datepicker__month-select");
    }

    static yearSelect() {
        return cy.get(".react-datepicker__year-select")
    }

    static dayClick() {
        return cy.get(".react-datepicker__day--028").not(".react-datepicker__day--outside-month");
    }
}