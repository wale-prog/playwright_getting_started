const browsers: string[] = ["Chrome", "Firefox", "Webkit"]
// const b = "Chrome"
// const b = Firefox
// const b = Webkit

for(const browser of browsers) {
    console.log('Testing on ' + browser)
    if(browser === "Firefox") {
        console.log("Hurray!! we found firefox");
        break;
    }
}

// Map
const upperCase = browsers.map(browser => browser.toUpperCase());
console.log(upperCase)