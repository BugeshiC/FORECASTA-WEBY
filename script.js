function showServiceDetails(service) {
    alert(`Service Details: ${service}`);
}

function promptCompanyDetails() {
    const details = prompt("Please enter your company details (Name, Industry, Location, etc.):");
    if (details) {
        document.getElementById("customization-portal").style.display = "block";
        document.getElementById("search-section").style.display = "none";
        document.getElementById("progress").innerText = "20%";
    }
}
