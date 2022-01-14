# Mugisha's messaging interface

### Implemented Features:

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation



### Screenshots :

Here are a few screenshots of what I've implemented

<details>
  <summary>Click to see the pages</summary>
  
Mobile list :

![](./sketches/conv-mobile.png)

Desktop list :

![](./sketches/conv-desktop.png)

Mobile conversation :

![](./sketches/msg-mobile.png)

Mobile empty conversation :

![](./sketches/msg-mobile-no-messages.png)

Desktop conversation :

![](./sketches/msg-desktop.png)

Desktop conversation on hover over a message :

![](./sketches/msg-desktop-hover.png)

</details>

### My though process


#### Using swr
Using a data fetching library will avoid a lot of repeated code and remove the need to use a state management library to handle the data.

#### using io-ts
Allows me to do typescript runtime validation

#### Wrapping components from external library
I wrapped all the components from the 3rd party library i use so it can easily be modified later on.

#### Displaying the conversation
I wanted the user to have a clear overview of the conversation so messages send by a user other than the current user display the user's name if it starts a sequence. Messages sent within a certain time frame are closer and displayed differently if they start or end a message sequence

Mobile list :

![](./sketches/conv-mobile.png)

