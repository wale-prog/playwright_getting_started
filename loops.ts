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

for(let i = 0; i < browsers.length; i++) {
    console.log('Testing on ' + browsers[i])
}

// Map
const upperCase = browsers.map(browser => browser.toUpperCase());
console.log(upperCase)