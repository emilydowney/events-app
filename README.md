# Meet-App
A serverless, progressive web application (PWA) built using React. The app is created based on a
test-driven development (TDD) technique.

# User Stories/Scenarios
**Show/Hide an Event's Details**

As a user, I should be able to show or hide an event's details so that I can learn more about the event.

  * Scenario 1: An event element is collapsed by default.

    Given the user hasn't selected an event,
    When the user loads the page,
    Then the event element is collapsed by default.

  * Scenario 2: User can expand an event to see its details.

    Given the event element is collapsed by default,
    When the user clicks the element,
    Then the event element will expand to show its details.

  * Scenerio 3: User can collapse an event to hide its details.

    Given the event element is expanded,
    When the user clicks the element,
    Then the event element will collapse to hide its details.


**Specify Number of Events**

As a user, I should be able to specify the number of events so I can control the number of events I see.

   * Scenario 1: When user hasn't specified a number, 32 is the default number.

     Given the user hasn't specified a number,
     When the user loads the page,
     Then the default number of events will be 32.

   * Scenario 2: User can change the number of events they want to see.

     Given the user inputs a specific number,
     When the events load,
     Then the page will contain the number of events the user wants to see.

**Use the App When Offline**

As a user, I should be able to use the app when offline so that I can still look at events away from an internet connection.

   * Scenario 1: Show cached data when there's no internet connection.

     Given that there's no internet connection,
     When the user uses the app,
     Then the app will show cached data.

   * Scenario 2: Show error when user changes the settings(city, time range)

     Given that there's no internet connection,
     When the user changes the settings,
     Then an error message will be displayed.

**Data Visualization**

As a user, I should be able to access a chart containing the number of upcoming events in each city so that I can see which locations have the most/fewest events.

   * Scenario 1: Show a chart with the number of upcoming events in each city.

     Given that the user is searching for event data,
     When the user goes to the data page,
     Then a chart showing the number of upcoming events in each city will display.
