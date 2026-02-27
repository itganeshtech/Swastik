function loadComponent(id, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Error loading component:", error));
}

// Calculate folder depth properly
const path = window.location.pathname;
const segments = path.split("/");

// Remove empty segments
const cleanSegments = segments.filter(s => s !== "");

let depth = 0;

// If inside /pages/, go up one level
if (cleanSegments.includes("pages")) {
  depth = 1;
}

let prefix = "";
for (let i = 0; i < depth; i++) {
  prefix += "../";
}

loadComponent("header", prefix + "components/header.html");
loadComponent("footer", prefix + "components/footer.html");