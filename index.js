// Write your code in this file!
const currentUser = 'Grace Hopper';
//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//With Slice:
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;