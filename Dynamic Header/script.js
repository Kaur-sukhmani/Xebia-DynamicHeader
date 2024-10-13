document.addEventListener("DOMContentLoaded", function() {
    const logout = document.getElementById("logout");
    logout.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        alert("You have been logged out.");
        // Implement your logout logic here
    });

    // Function to update last login time (simulated here)
    function updateLastLoginTime(lastLoginDate) {
        const lastLoginElement = document.getElementById("lastLogin");
        lastLoginElement.textContent = `Last successful log on: ${lastLoginDate.toLocaleString()}`;
    }

    // Simulate a login event (replace with actual login logic)
    const lastLoginDate = new Date();
    updateLastLoginTime(lastLoginDate);
});

