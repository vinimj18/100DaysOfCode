*** Settings ***
Library    Collections
Library    SeleniumLibrary
Library    RequestsLibrary

*** Variables ***
${base_url}=    http://216.10.245.166
${book_name}=    Learn Appium Automation with Java
${book_id}

*** Test Cases ***
Add Book to Library DataBase
    [Tags]    API
    &{book_data}    Create Dictionary    name=${book_name}    isbn=7931651    aisle=18    author=John Foe
    ${response}    POST    ${base_url}/Library/Addbook.php    json=${book_data}    expected_status=200
    Log    ${response.json()}
    Dictionary Should Contain Key    ${response.json()}    ID
    ${book_id}    Get From Dictionary    ${response.json()}    ID
    Set Global Variable    ${book_id}
    Log    ${book_id}
    Should Be Equal As Strings    ${response.json()}[Msg]    successfully added

Retrieve Added Book DataBase
    [Tags]    API
    ${get_response}    GET    ${base_url}/Library/GetBook.php    params=ID=${book_id}    expected_status=200
    Log    ${get_response.json()}
    Should Be Equal As Strings    ${book_name}    ${get_response.json()}[0][book_name]

Delete Added Book From DataBase
    [Tags]    API
    &{delete_req}    Create Dictionary    ID=${book_id}
    ${delete_response}    POST    ${base_url}/Library/DeleteBook.php    json=${delete_req}    expected_status=200
    Log    ${delete_response.json()}
    Should Be Equal As Strings    book is successfully deleted    ${delete_response.json()}[msg]    