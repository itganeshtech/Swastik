function loadComponent(id, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Error loading component:", error));
}

const basePath = window.location.pathname.includes("/articles/")
  ? "../components/"
  : "components/";

loadComponent("header", basePath + "header.html");
loadComponent("footer", basePath + "footer.html");