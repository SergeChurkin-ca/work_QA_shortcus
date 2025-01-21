// Get all the anchor (link) elements on the page
const links = document.querySelectorAll('a');

// Create an array to store link information
const linkInfo = [];

// Iterate through each link and collect information
links.forEach(link => {
  const linkData = {
    id: link.getAttribute('id') || 'N/A',
    text: link.textContent.trim() || 'N/A',
    href: link.getAttribute('href') || 'N/A'
  };
  linkInfo.push(linkData);
});

// Create an HTML table to display the link information
let tableHTML = `
  <table style="border-collapse: collapse; width: 100%; max-width: 100vw; margin: auto; border: 1px solid lightgrey; table-layout: fixed;">
    <thead style="background-color: #f9f9f9;">
      <tr style="border: 1px solid lightgrey;">
        <th style="padding: 8px; text-align: left; border: 1px solid lightgrey; width: 30%;">Link ID</th>
        <th style="padding: 8px; text-align: left; border: 1px solid lightgrey; width: 35%;">Link Text</th>
        <th style="padding: 8px; text-align: left; border: 1px solid lightgrey; width: 35%;">Link URL</th>
      </tr>
    </thead>
    <tbody>
`;

// Iterate through the link information and add rows to the table
linkInfo.forEach(link => {
  tableHTML += `
    <tr style="border: 1px solid lightgrey;">
      <td style="padding: 8px; color: ${link.id !== 'N/A' ? 'blue' : 'black'}; word-wrap: break-word; border: 1px solid lightgrey;">${link.id}</td>
      <td style="padding: 8px; word-wrap: break-word; border: 1px solid lightgrey;">${link.text}</td>
      <td style="padding: 8px; word-wrap: break-word; border: 1px solid lightgrey;">
        <a href="${link.href}" target="_blank" style="color: #007BFF; text-decoration: none;">${link.href}</a>
      </td>
    </tr>
  `;
});

tableHTML += `
    </tbody>
  </table>
`;

// Open a new window with the formatted table
const newWindow = window.open();
if (newWindow) {
  newWindow.document.write(`
    <html>
      <head>
        <title>Link Information</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.5;
            margin: 20px;
          }
          table {
            font-size: 14px;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        ${tableHTML}
      </body>
    </html>
  `);
  newWindow.document.close();
} else {
  console.error('Unable to open a new window. Check your browser settings.');
}
