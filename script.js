function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.nav-tabs button');

  tabs.forEach(tab => tab.classList.remove('active-tab'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active-tab');
  const activeButton = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabId));
  if (activeButton) activeButton.classList.add('active');
}

function openModal(letterId) {
  const modal = document.getElementById('letterModal');
  const titleEl = document.getElementById('modalTitle');
  const authorEl = document.getElementById('modalAuthor');
  const textEl = document.getElementById('letterText');

  const letters = {
    letter1: {
      title: "To Juju,",
      author: "From Kenny",
      content: "Dear Juju,\n\nThank you for ALL that you do for families and individuals with Autism. I hope you have a great week!"
    },
    letter2: {
      title: "To Katie Shields,",
      author: "From Kenny ",
      content: "Thank you for ALL that you do for families and individuals with Autism. I hope you have a great week!"
    },
    letter3: {
      title: "A Note for You",
      author: "",
      content: "Even if you haven’t heard it today: you are loved.\n\nYou belong.\n\nYou are enough."
    }
    // Add more letters here (letter4, letter5...)
  };

  const letter = letters[letterId] || {
    title: "Letter Not Found",
    author: "",
    content: "Sorry, we couldn’t find this letter."
  };

  titleEl.innerText = letter.title;
  authorEl.innerText = letter.author;
  textEl.innerText = letter.content;
  modal.style.display = "flex";
}


function closeModal() {
  document.getElementById('letterModal').style.display = "none";
}

function handleSubmit(event) {
  event.preventDefault();

  const thankYouMsg = document.getElementById("thankYouMessage");
  thankYouMsg.textContent = "Thank you for your letter! 💌 It means the world.";

  // Optionally, clear the form:
  event.target.reset();
}

// 🔒 Allow modal to be closed using ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});


function filterLetters() {
  const selectedCategory = document.getElementById('letter-category').value;
  const cards = document.querySelectorAll('.envelope-card');

  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    card.style.display = (selectedCategory === 'all' || category === selectedCategory)
      ? 'block'
      : 'none';
  });
}
