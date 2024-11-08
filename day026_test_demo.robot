*** Settings ***
Documentation    to validate the Login Form
Library    SeleniumLibrary

*** Variables ***
${Login_Error_Message}    css:.alert-danger

*** Test Cases ***
Validate Succesful Login
    open the browser with the mortgage payment url
    Fill the login Form
    wait until it checks and display error message
    verify error message is correct

*** Keywords ***
open the browser with the mortgage payment url
    Create Webdriver    Chrome    
    Go To    https://rahulshettyacademy.com/loginpagePractise/

Fill the login Form
    Input Text        username    vinimj18
    Input Password    password    password123
    Click Button      signInBtn

wait until it checks and display error message
    Wait Until Element Is Visible    ${Login_Error_Message}

verify error message is correct
    # ${error}=     Get Text    ${Login_Error_Message}
    # Should Be Equal As Strings    ${error}    Incorrect username/password.
    Element Text Should Be    ${Login_Error_Message}    Incorrect username/password.
