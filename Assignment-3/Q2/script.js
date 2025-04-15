// Function to log events
function logEvent(eventType, eventObject, url = null) {
  const timestamp = new Date().toISOString();
  if (eventType === "click" && eventObject === "link" && url) {
    console.log(`${timestamp}, ${eventType}, ${eventObject}, ${url}`);
  } else {
    console.log(`${timestamp}, ${eventType}, ${eventObject}`);
  }
}

// Capture all clicks and log details
document.addEventListener("click", function(event) {
  const target = event.target;
  let eventObject = "Unknown";
  let url = null;

  // Check if the clicked element is a hyperlink
  if (target.tagName === "A" && target.href) {
    eventObject = "link";
    url = target.href; // Capture the URL the link points to
    logEvent("click", eventObject, url);

    // Allow the default behavior (link redirection)
    return;
  }

  // Check other tag names and classify the object being clicked
  if (target.tagName === "BUTTON") {
    eventObject = "button";
  } else if (target.tagName === "SELECT") {
    eventObject = "dropdown";
  } else if (target.tagName === "IMG") {
    eventObject = "image";
  } else if (target.tagName === "P" || target.tagName === "H1" || target.tagName === "TEXT") {
    eventObject = "text";
  } else {
    eventObject = target.tagName.toLowerCase();  // Default to tag name if not handled explicitly
  }

  logEvent("click", eventObject);
});

// Capture page view when the page is loaded
window.addEventListener("load", function() {
  logEvent("view", "page");
});
