// Create a div element
const div = document.createElement('div');

// Your desired text
const customText = "This is some custom text";

// Set the text and styling for the div
div.textContent = customText;
div.style.backgroundColor = '#fff';
div.style.padding = '20px';
div.style.textAlign = 'center';
div.style.boxShadow = '1px 1px 5px 5px #f1f1f1';
div.style.borderRadius = '10px';
div.style.margin = '10px';

// Find the 4th product-item on the page
const productItems = document.querySelectorAll('.product-item');
const fourthProductItem = productItems[3];

// Insert the div after the 4th product-item
fourthProductItem.parentNode.insertBefore(div, fourthProductItem.nextElementSibling);

// Function to update the div width based on screen size
const updateDivWidth = () => {
  if (window.innerWidth > 768) {
    // Desktop version: Div occupies 2 columns after the 4th product
    div.style.width = 'calc(50% - 20px)';
  } else if (window.innerWidth > 576) {
    // Narrower screens: Div takes up 2/3 of the width
    div.style.width = 'calc(66.67% - 20px)';
  } else {
    // Mobile version: Div spans the entire width
    div.style.width = '100%';
  }
};

// Initial call to set the div width based on screen size
updateDivWidth();

// Listen for window resize events
window.addEventListener('resize', updateDivWidth);
