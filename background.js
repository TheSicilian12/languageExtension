// background.js

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ["styles.css"]
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            // Create a div element for the static box
            const staticBox = document.createElement("div");
            staticBox.id = "static-box";
            staticBox.style.width = "100px";
            staticBox.style.height = "100px";
            staticBox.style.backgroundColor = "green";
            staticBox.style.position = "fixed";
            staticBox.style.top = "10px";
            staticBox.style.left = "10px";
            staticBox.style.zIndex = "9999";

            // Append the static box to the body
            document.body.appendChild(staticBox);
        },
    });
});
