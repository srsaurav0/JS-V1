// Get elements
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('close-button');
const regionSelect = document.getElementById('region-select');
const currencyDisplay = document.getElementById('currency-display');

// Get the necessary elements
const saveButton = document.querySelector('.save-button');
const openPopup = document.getElementById('openPopup');

// Mapping region to currency
const regionToCurrency = {
  'PT': 'EUR',
  'US': 'USD',
  'GB': 'GBP',
  'JP': 'JPY',
  'AU': 'AUD',
  'CA': 'CAD',
  'DE': 'EUR',
  'FR': 'EUR',
  'IT': 'EUR',
  'ES': 'EUR'
};


// Mapping region to country name
const regionToCountry = {
  'PT': 'Portugal',
  'US': 'United States',
  'GB': 'United Kingdom',
  'JP': 'Japan',
  'AU': 'Australia',
  'CA': 'Canada',
  'DE': 'Germany',
  'FR': 'France',
  'IT': 'Italy',
  'ES': 'Spain'
};

// Set initial currency based on the selected region
currencyDisplay.value = regionToCurrency[regionSelect.value];

// Function to show the popup
document.getElementById('openPopup').addEventListener('click', () => {
  popupOverlay.style.display = 'flex'; // Show the overlay
});

// Close the popup if the user clicks outside the popup
popupOverlay.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// Update currency immediately when the region changes
regionSelect.addEventListener('change', function() {
  const selectedRegion = this.value;
  currencyDisplay.value = regionToCurrency[selectedRegion];
});


// Event listener for the Save button
saveButton.addEventListener('click', () => {
  // Get the selected region value
  const selectedRegion = regionSelect.value;
  
  // Update the country name in the navigation
  openPopup.querySelector('b').textContent = regionToCountry[selectedRegion];
  
  // Close the popup
  popupOverlay.style.display = 'none';
});





//Image Gallery

// Retrieve image source from query parameter or sessionStorage
const urlParams = new URLSearchParams(window.location.search);
const imageSrc = urlParams.get('image'); // image is the query parameter name

// Set the image source to the image detail page
if (imageSrc) {
    document.getElementById('detail-image').src = imageSrc;
} else {
    // Fallback if no image source is provided
    document.getElementById('detail-image').alt = "No image found";
}

// Event listener for the back button
document.getElementById('back-button').addEventListener('click', () => {
    window.history.back(); // Go back to the previous page
});


//Share button

// // Get the share button and the popup container
// const shareBtn = document.querySelector('.btn'); // Use the correct class for the button
// const sharePopup = document.querySelector('.share-popup');

// // Toggle the visibility of the share popup when the button is clicked
// shareBtn.addEventListener('click', (event) => {
//   event.stopPropagation(); // Prevent this click from closing the popup immediately
//   sharePopup.classList.toggle('hide');
// });

// // Hide the share popup if clicking outside of it
// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.share-container')) {
//     sharePopup.classList.add('hide');
//   }
// });


// Get the heart icon element and the button with class "favorite-button"
const heartIcon = document.getElementById('heart-icon');
const favoriteButton = document.querySelector('.favorite-button');

// Check if the heart has been marked as favorite in localStorage
if (localStorage.getItem('heartSaved') === 'true') {
    heartIcon.classList.add('active');
    heartIcon.textContent = '❤️'; // Filled heart if saved
}

// Toggle the heart icon on click and store the state in localStorage
favoriteButton.addEventListener('click', () => {
    heartIcon.classList.toggle('active'); // Toggle the 'active' class

    // Change heart content and color
    if (heartIcon.classList.contains('active')) {
        heartIcon.textContent = '❤️'; // Filled heart
        localStorage.setItem('heartSaved', 'true');
    } else {
        heartIcon.textContent = '🤍'; // Empty heart
        localStorage.setItem('heartSaved', 'false');
    }
});




