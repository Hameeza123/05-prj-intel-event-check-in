// Get form and input elements
const form = document.getElementById('checkInForm');
const nameInput = document.getElementById('attendeeName');
const teamSelect = document.getElementById('teamSelect');
const attendeeCountSpan = document.getElementById('attendeeCount');
const progressBar = document.getElementById('progressBar');
const greeting = document.getElementById('greeting');

// Counter for total check-ins
let count = 0;
const maxCount = 50;

// Listen for a form submission and run some code
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from an input and a dropdown
    const name = nameInput.value;
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text;

    // Increment a total and store it in a variable
    count = count + 1;

    // Calculate the percentage of a goal completed
    const percentage = Math.round((count / maxCount) * 100);

    // Combine a name and team into a welcome message
    const message = `Welcome, ${name} from ${teamName}!`;

    // Reset the form after it’s submitted
    form.reset();

    // Show the updated total count on the page
    attendeeCountSpan.textContent = count;

    // Update the width of a progress bar using a percentage
    progressBar.style.width = `${percentage}%`;

    // Update the correct team’s count on the page
    const teamCounter = document.getElementById(team + 'Count');
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

    // Show a success message with someone's name and team
    greeting.textContent = message;
});