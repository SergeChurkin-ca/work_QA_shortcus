{ 
// Get all the anchor (link) elements on the page
const links = document.querySelectorAll('a');

// Create an array to store link information
const linkInfo = [];

// Iterate through each link and collect information
links.forEach(link => {
    const linkData = {
        id: link.getAttribute('id'),
        href: link.getAttribute('href'),
        text: link.textContent
    };
    linkInfo.push(linkData);
});

// Create an HTML table to display the link information
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;"><tr><th style="border: 1px solid black;">Link ID</th><th style="border: 1px solid black;">Link Href</th><th style="border: 1px solid black;">Link Text</th></tr>';

// Iterate through the link information and add rows to the table
linkInfo.forEach((link, index) => {
    const rowColor = index % 2 === 0 ? 'white' : 'lightgrey';
    tableHTML += `<tr style="background-color: ${rowColor};"><td style="border: 1px solid black; color: ${link.id ? 'blue' : 'black'}">${link.id || 'N/A'}</td><td style="border: 1px solid black;">${link.href}</td><td style="border: 1px solid black;">${link.text}</td></tr>`;
});

tableHTML += '</table>';

// Open a new window with the formatted table
const newWindow = window.open();
newWindow.document.write(tableHTML);
}
