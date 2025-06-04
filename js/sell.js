document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sellForm");
  const message = document.getElementById("message");

  let selectedCoords = null;

  const map = L.map("map").setView([51.1605, 71.4704], 12); // Astana
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  let marker;
  map.on("click", function (e) {
    selectedCoords = e.latlng;
    if (marker) marker.setLatLng(selectedCoords);
    else marker = L.marker(selectedCoords).addTo(map);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!selectedCoords) {
      alert("Please select location on the map!");
      return;
    }

    const newListing = {
      address: form.address.value.trim(),
      city: form.city.value.trim(),
      price: Number(form.price.value),
      bedrooms: Number(form.bedrooms.value),
      bathrooms: Number(form.bathrooms.value),
      description: form.description.value.trim(),
      lat: selectedCoords.lat,
      lng: selectedCoords.lng,
      id: Date.now()
    };

    const listingsJSON = localStorage.getItem("listings");
    const listings = listingsJSON ? JSON.parse(listingsJSON) : [];
    listings.push(newListing);
    localStorage.setItem("listings", JSON.stringify(listings));

    form.reset();
    if (marker) {
      map.removeLayer(marker);
      marker = null;
    }
    selectedCoords = null;

    message.textContent = "Your property listing has been saved!";
  });
});
