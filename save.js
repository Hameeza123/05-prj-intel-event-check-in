const form = document.getElementById('checkInForm');
const nameInput = document.getElementById('attendeeName');
const teamSelect = document.getElementById('teamSelect');


// handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // get form values
    const name = nameInput.value;
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text;

    console.log(name, teamName);

    // Increment count
    count++
    console.log("Total check-ins: ", count);

    // Update prorgress bar
    const percentage = Math.round((count / maxCount) * 100) + '%';
    console.log('Progress: ${percentage}');

    // Update team counter
    const teamCounter = document.getElementById(team + "Count");
    const current = parseInt(teamCounter.textContent) + 1;

    // Show welcome message
    const message = `Welcome! ${name} from ${teamName}`;
    console.log(message);

    form.req


});