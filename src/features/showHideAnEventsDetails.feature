Feature: Shows/hides an events details

Scenario: An event element is collapsed by default.
Given the user hasn't selected an event
When the user loads the page
Then the event element is collapsed by default.

Scenario: User can expand an event to see its details.
Given the main page is open
When the user clicks the element
Then the event element will expand to show its details

Scenario: User can collapse an event to hide its details.
Given the event element is expanded
When the user clicks the element
Then the event element will collapse to hide its details.