import { FormPage } from "../../pageObjects/formPage";

describe("DEMO QA", () => {
    context("Form tests", () => {
        beforeEach(() => {
            FormPage.visit();
        });

        it("Fill the form test", () => {
            FormPage.firstnameField().type("Jacob");
            FormPage.lastnameField().type("Reid");
            FormPage.emailField().type("reidjacob@gmail.com");
            FormPage.genderRadio().contains("Male").click();
            FormPage.phonenoField().type("1234567890");

            FormPage.dateOfBirthInput().click();
            FormPage.monthSelect().select("February");
            FormPage.yearSelect().select("1930");
            FormPage.dayClick().click();

            FormPage.subjectInput().type("Economics{enter}");
            FormPage.hobbiesCheckbox().contains("Music").click();
            
            FormPage.imageUpload().selectFile("cypress/e2e/files/fox.jpeg");

            FormPage.addressInput().type("20 Cooper Square");
            FormPage.stateInput().click();
            FormPage.menu().contains("NCR").click();

            FormPage.cityInput().click();
            FormPage.menu().contains("Delhi").click();

            FormPage.submit().click();
        });
    });
})