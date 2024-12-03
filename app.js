const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');
require('chromedriver'); // WebDriver Manager will handle ChromeDriver setup automatically.

(async function testAdditionApp() {
    // HTML content embedded as a string
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Addition App</title>
        </head>
        <body>
            <h1>Addition App</h1>
            <form id="addForm">
                <label for="num1">Number 1:</label>
                <input type="number" id="num1" required>
                <br>
                <label for="num2">Number 2:</label>
                <input type="number" id="num2" required>
                <br>
                <button type="button" onclick="addNumbers()">Add</button>
            </form>
            <h2 id="result"></h2>

            <script>
                function addNumbers() {
                    const num1 = parseInt(document.getElementById('num1').value);
                    const num2 = parseInt(document.getElementById('num2').value);
                    const result = num1 + num2;
                    document.getElementById('result').innerText = "Result: " + result;
                }
            </script>
        </body>
        </html>
    `;

    // Path to save the HTML file
    const filePath = path.resolve(__dirname, 'index.html');

    // Create the HTML file dynamically
    fs.writeFileSync(filePath, htmlContent);

    // Initialize the Chrome WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open the local HTML file in the browser
        await driver.get(`file://${filePath}`);

        // Wait for the first input field to be visible and enter the first number
        await driver.wait(until.elementIsVisible(driver.findElement(By.id('num1'))), 5000);
        await driver.findElement(By.id('num1')).sendKeys('5');

        // Wait for the second input field to be visible and enter the second number
        await driver.wait(until.elementIsVisible(driver.findElement(By.id('num2'))), 5000);
        await driver.findElement(By.id('num2')).sendKeys('3');

        // Wait before clicking the "Add" button
        await driver.wait(until.elementIsVisible(driver.findElement(By.css('button'))), 5000);
        await driver.findElement(By.css('button')).click();

        // Wait for the result to be displayed
        const resultText = await driver.wait(
            until.elementLocated(By.id('result')),
            5000
        ).getText();

        // Verify the result and log the outcome
        if (resultText === "Result: 8") {
            console.log("Test Passed: 5 + 3 = 8");
        } else {
            console.log("Test Failed");
        }
    } finally {
        await driver.quit(); // Close the browser
        fs.unlinkSync(filePath); // Clean up by removing the dynamically created HTML file
    }
})();
