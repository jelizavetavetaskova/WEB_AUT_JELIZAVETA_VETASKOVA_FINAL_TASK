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

            FormPage.dataCheck().contains("Student Name").next().should("contain.text", "Jacob Reid");
            FormPage.dataCheck().contains("Student Email").next().should("contain.text", "reidjacob@gmail.com");
            FormPage.dataCheck().contains("Gender").next().should("contain.text", "Male");
            FormPage.dataCheck().contains("Mobile").next().should("contain.text", "1234567890");
            FormPage.dataCheck().contains("Date of Birth").next().should("contain.text", "28 February,1930");
            FormPage.dataCheck().contains("Subjects").next().should("contain.text", "Economics");
            FormPage.dataCheck().contains("Hobbies").next().should("contain.text", "Music");
            FormPage.dataCheck().contains("Picture").next().should("contain.text", "fox.jpeg");
            FormPage.dataCheck().contains("Address").next().should("contain.text", "20 Cooper Square");
            FormPage.dataCheck().contains("State and City").next().should("contain.text", "NCR Delhi");
        });
    });
})