// Function to format city name from slug
function formatCityName(slug) {
  if (!slug) return '';
  
  // Handle special cases
  if (slug === 'washington') return 'Washington DC';
  
  // Convert kebab-case to title case
  return slug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to load the header content
function loadHeader() {
  const citySlug = window.location.pathname.split('/').pop().replace('.html', '');
  const cityName = formatCityName(citySlug);
  
  const header = document.querySelector('header');
  if (header) {
    header.innerHTML = `
      <h1>${cityName} Rx Service</h1>
      <p>SAME-DAY MEDICATIONS DELIVERED TO YOUR LOCAL PHARMACY</p>
    `;
  }
}

// Function to update city-specific content
function updateCityContent() {
  const citySlug = window.location.pathname.split('/').pop().replace('.html', '');
  const cityName = formatCityName(citySlug);
  
  // Update title and meta description
  document.title = `Same-Day Prescriptions in ${cityName} - Fast Local Pickup`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = `Need medication fast in ${cityName}? Get same-day prescriptions for flu, cough, anxiety, birth control, and more. Pickup at your local pharmacy today, if approved by a licensed doctor.`;
  }
  
  // Update h2 in first section
  const firstH2 = document.querySelector('main section:first-child h2');
  if (firstH2) {
    firstH2.textContent = `Quick Prescriptions in ${cityName}`;
  }
  
  // Update paragraph in first section
  const firstPara = document.querySelector('main section:first-child p');
  if (firstPara) {
    firstPara.textContent = `Whether you're a resident, student, or just visiting ${cityName}, you can skip the clinic and get quick access to common medications online. Our doctors review your request and, if appropriate, send your prescription to a nearby pharmacy in just hours.`;
  }
  
  // Update CTA text
  const ctaText = document.querySelector('.cta p');
  if (ctaText) {
    ctaText.textContent = `Feel better today, ${cityName}!`;
  }
}

// Hard-coded footer content instead of fetching it
function loadFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = `
    <div class="footer-content">
      <h3 class="footer-title">Available In These Cities</h3>
      <ul class="cities-list">
        <li><a href="/cities/new-york.html">New York</a></li>
        <li><a href="/cities/los-angeles.html">Los Angeles</a></li>
        <li><a href="/cities/chicago.html">Chicago</a></li>
        <li><a href="/cities/houston.html">Houston</a></li>
        <li><a href="/cities/phoenix.html">Phoenix</a></li>
        <li><a href="/cities/philadelphia.html">Philadelphia</a></li>
        <li><a href="/cities/san-antonio.html">San Antonio</a></li>
        <li><a href="/cities/san-diego.html">San Diego</a></li>
        <li><a href="/cities/dallas.html">Dallas</a></li>
        <li><a href="/cities/san-jose.html">San Jose</a></li>
        <li><a href="/cities/austin.html">Austin</a></li>
        <li><a href="/cities/jacksonville.html">Jacksonville</a></li>
        <li><a href="/cities/fort-worth.html">Fort Worth</a></li>
        <li><a href="/cities/columbus.html">Columbus</a></li>
        <li><a href="/cities/charlotte.html">Charlotte</a></li>
        <li><a href="/cities/indianapolis.html">Indianapolis</a></li>
        <li><a href="/cities/san-francisco.html">San Francisco</a></li>
        <li><a href="/cities/seattle.html">Seattle</a></li>
        <li><a href="/cities/denver.html">Denver</a></li>
        <li><a href="/cities/washington.html">Washington DC</a></li>
        <li><a href="/cities/boston.html">Boston</a></li>
        <li><a href="/cities/el-paso.html">El Paso</a></li>
        <li><a href="/cities/detroit.html">Detroit</a></li>
        <li><a href="/cities/nashville.html">Nashville</a></li>
        <li><a href="/cities/portland.html">Portland</a></li>
        <li><a href="/cities/oklahoma-city.html">Oklahoma City</a></li>
        <li><a href="/cities/las-vegas.html">Las Vegas</a></li>
        <li><a href="/cities/memphis.html">Memphis</a></li>
        <li><a href="/cities/louisville.html">Louisville</a></li>
        <li><a href="/cities/baltimore.html">Baltimore</a></li>
        <li><a href="/cities/milwaukee.html">Milwaukee</a></li>
        <li><a href="/cities/albuquerque.html">Albuquerque</a></li>
        <li><a href="/cities/tucson.html">Tucson</a></li>
        <li><a href="/cities/fresno.html">Fresno</a></li>
        <li><a href="/cities/sacramento.html">Sacramento</a></li>
        <li><a href="/cities/mesa.html">Mesa</a></li>
        <li><a href="/cities/kansas-city.html">Kansas City</a></li>
        <li><a href="/cities/atlanta.html">Atlanta</a></li>
        <li><a href="/cities/long-beach.html">Long Beach</a></li>
        <li><a href="/cities/colorado-springs.html">Colorado Springs</a></li>
        <li><a href="/cities/raleigh.html">Raleigh</a></li>
        <li><a href="/cities/omaha.html">Omaha</a></li>
        <li><a href="/cities/miami.html">Miami</a></li>
        <li><a href="/cities/oakland.html">Oakland</a></li>
        <li><a href="/cities/minneapolis.html">Minneapolis</a></li>
        <li><a href="/cities/tulsa.html">Tulsa</a></li>
        <li><a href="/cities/cleveland.html">Cleveland</a></li>
        <li><a href="/cities/wichita.html">Wichita</a></li>
        <li><a href="/cities/arlington.html">Arlington</a></li>
        <li><a href="/cities/new-orleans.html">New Orleans</a></li>
      </ul>
      <div class="copyright">© 2025 Fast Rx Prescriptions. All rights reserved.</div>
    </div>`;
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const isHomePage = window.location.pathname === '/' || 
                    window.location.pathname === '/index.html' || 
                    window.location.pathname.endsWith('index.html');
  
  if (!isHomePage) {
    loadHeader();
    updateCityContent();
  }
  
  loadFooter();
});