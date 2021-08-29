Feature: Specify number of events

Scenario: When user hasn't specified a number, 32 is the default number.
Given the user hasn't specified a number
When the user loads the page
Then page will load the default number of events.

Scenario: User can change the number of events they want to see.
Given the user inputs a specific number
When the events load
Then the page will contain the number of events the user wants to see.
