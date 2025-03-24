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
            FormPage.phonenoField().type("24925708");
        });
    });
})