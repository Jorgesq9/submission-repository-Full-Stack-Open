sequenceDiagram
participant user as User
participant browser as Browser
participant server as Server

    user->>browser: Type in the text field
    user->>browser: Click the Save button

    Note right of browser: The browser captures the click event and extracts the text field content

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: The server processes the request and saves the new note
    server-->>browser: {"message": "Note saved successfully"}
    deactivate server

    Note right of browser: The browser updates the notes list dynamically without a full page reload

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "SPA is cool", "date": "2023-1-1" }, { "content": "New note", "date": "2023-6-15" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that re-renders the notes dynamically
