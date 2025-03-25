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

    static subjectInput() {
        return cy.get("#subjectsInput");
    }

    static hobbiesCheckbox() {
        return cy.get(".custom-control-label");
    }

    static imageUpload() {
        return cy.get("#uploadPicture");
    }

    static addressInput() {
        return cy.get("#currentAddress");
    }

    static stateInput() {
        return cy.get("#state");
    }

    static menu() {
        return cy.get(".css-26l3qy-menu");
    }

    static cityInput() {
        return cy.get("#city");
    }

    static submit() {
        return cy.get("#submit");
    }

    static dataCheck() {
        return cy.get("td");
    }
}