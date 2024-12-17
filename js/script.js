// Select modal elements
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close-modal");

// Function to open the modal with content
function openModal(content) {
  modal.style.display = "block";
  modalContent.innerHTML = content;
}

// Function to close the modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Event details for multiple events
const eventDetailsData = [
  {
    title: "Music Festival 2024",
    image: "concert-banner.jpg",
    description: `
      Join us for an unforgettable evening of live music featuring top artists! 
      Experience the best sound and lighting for a perfect concert night.
    `,
    tickets: ["VIP: $150", "Regular: $50", "Student: $30"],
  },
  {
    title: "Tech Conference 2024",
    image: "art-exhibition-banner.jpg",
    description: `
      Explore stunning artworks by talented artists from around the globe. 
      A perfect event for art enthusiasts and collectors alike.
    `,
    tickets: ["General Admission: $20", "Student: $10"],
  },
  {
    title: "Art Festival",
    image: "tech-conference-banner.jpg",
    description: `
      Dive into the future of technology at our annual tech conference. 
      Hear from industry leaders and explore cutting-edge innovations.
    `,
    tickets: ["Early Bird: $100", "Standard: $150", "VIP: $250"],
  },
  {
    title: "Cooking Workshop",
    image: "cooking-workshop-banner.jpg",
    description: `
      Learn from top chefs in an interactive cooking workshop designed 
      for beginners and professionals alike.
    `,
    tickets: ["General Admission: $50", "Group (4 people): $180"],
  },
  {
    title: "Photography Workshop",
    image: "cooking-workshop-banner.jpg",
    description: `
      Learn from top chefs in an interactive cooking workshop designed 
      for beginners and professionals alike.
    `,
    tickets: ["General Admission: $50", "Group (4 people): $180"],
  },
];

// Booking form for multiple events
const bookingFormsData = [
  {
    title: "Music Concert",
    tickets: [
      { type: "VIP", price: "$150" },
      { type: "Regular", price: "$50" },
      { type: "Student", price: "$30" },
    ],
  },
  {
    title: "Art Exhibition",
    tickets: [
      { type: "General Admission", price: "$20" },
      { type: "Student", price: "$10" },
    ],
  },
  {
    title: "Tech Conference",
    tickets: [
      { type: "Early Bird", price: "$100" },
      { type: "Standard", price: "$150" },
      { type: "VIP", price: "$250" },
    ],
  },
  {
    title: "Cooking Workshop",
    tickets: [
      { type: "General Admission", price: "$50" },
      { type: "Group (4 people)", price: "$180" },
    ],
  },
  {
    title: "Photography Workshop",
    tickets: [
      { type: "General Admission", price: "$50" },
      { type: "Group (4 people)", price: "$180" },
    ],
  }
];

// Add event listeners for Detail Event buttons
document.querySelectorAll(".btn-detail").forEach((button, index) => {
  button.addEventListener("click", () => {
    const event = eventDetailsData[index];
    const detailsContent = `
      <h2>${event.title}</h2>
      <img src="${event.image}" alt="${event.title} Banner" style="width:100%; height:auto; border-radius:10px;">
      <p>${event.description}</p>
      <h3>Available Tickets:</h3>
      <ul>
        ${event.tickets.map((ticket) => `<li>${ticket}</li>`).join("")}
      </ul>
    `;
    openModal(detailsContent);
  });
});

// Add event listeners for Booking buttons
document.querySelectorAll(".btn-booking").forEach((button, index) => {
  button.addEventListener("click", () => {
    const booking = bookingFormsData[index];
    const bookingFormContent = `
      <h2>Book Tickets for ${booking.title}</h2>
      <form>
        <label for="ticket-type">Choose Ticket Type:</label>
        <select id="ticket-type" name="ticket-type" required>
          ${booking.tickets
            .map(
              (ticket) =>
                `<option value="${ticket.type}">${ticket.type} (${ticket.price})</option>`
            )
            .join("")}
        </select>
        <br><br>
        <label for="quantity">Number of Tickets:</label>
        <input type="number" id="quantity" name="quantity" min="1" max="10" required>
        <br><br>
        <button type="submit">Confirm Booking</button>
      </form>
    `;
    openModal(bookingFormContent);
  });
});
