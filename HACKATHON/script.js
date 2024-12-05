// Dummy data for doctors
const doctors = [
    {
      name: "Dr. John Smith",
      specialization: "Cardiologist",
      location: "Bangalore",
      cost: 4000
    },
    {
      name: "Dr. Emily Davis",
      specialization: "Neurologist",
      location: "Mysore",
      cost: 5000
    },
    {
      name: "Dr. Raj Kumar",
      specialization: "Orthopedic",
      location: "Chennai",
      cost: 3000
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      location: "Bangalore",
      cost: 2500
    }
  ];
  
  // Handle search functionality
  document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    const specialization = document.getElementById("specialization").value.toLowerCase();
    const location = document.getElementById("location").value.toLowerCase();
    const maxCost = parseInt(document.getElementById("cost").value);
  
    // Filter doctors based on input
    const filteredDoctors = doctors.filter(doctor => {
      return (
        doctor.specialization.toLowerCase().includes(specialization) &&
        (location === "" || doctor.location.toLowerCase().includes(location)) &&
        (!maxCost || doctor.cost <= maxCost)
      );
    });
  
    // Display results
    displayResults(filteredDoctors);
  });
  
  // Display search results
  function displayResults(doctors) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results
  
    if (doctors.length === 0) {
      resultsDiv.innerHTML = "<p>No doctors found matching your criteria.</p>";
      return;
    }
  
    doctors.forEach(doctor => {
      const card = document.createElement("div");
      card.classList.add("result-card");
      card.innerHTML = `
        <h3>${doctor.name}</h3>
        <p><strong>Specialization:</strong> ${doctor.specialization}</p>
        <p><strong>Location:</strong> ${doctor.location}</p>
        <p><strong>Cost:</strong> ₹${doctor.cost}</p>
      `;
      resultsDiv.appendChild(card);
    });
  }
  