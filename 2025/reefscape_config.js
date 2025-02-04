var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { 
      "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { 
      "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025mtp",
      "required": "true"
    },
    { 
      "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { 
      "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { 
      "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required": "false"
    },
    { 
      "name": "Team #",
      "code": "l",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { 
      "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2025/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "6 7 18 19 30 31 42 43 54 55 66 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { 
      "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { 
      "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { 
      "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { 
      "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { 
      "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { 
      "name": "Processor Score",
      "code": "aps",
      "type": "counter"
    },
    { 
      "name": "Net Score",
      "code": "ans",
      "type": "counter"
    }
  ],
  "teleop": [
    { 
      "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { 
      "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { 
      "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { 
      "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { 
      "name": "Processor Score",
      "code": "tps",
      "type": "counter"
    },
    { 
      "name": "Net Score",
      "code": "tns",
      "type": "counter"
    },
    { 
      "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { 
      "name": "Scored in<br>Opponent<br>Processor",
      "code": "opp",
      "type": "bool"
    }
  ],
  "endgame": [
    { 
      "name": "Barge Timer",
      "code": "ebt",
      "type": "timer"
    },
    { 
      "name": "Final Robot Status",
      "code": "efs",
      "type": "radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Parked/Failed Climb<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { 
      "name": "Attained Coopertition Pt",
      "code": "cop",
      "type": "bool"
    },
    { 
      "name": "Algae Left in Reef",
      "code": "alr",
      "type": "number",
      "min": 0,
      "max": 9,
      "defaultValue": 0
    },
    { 
      "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { 
      "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { 
      "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue": "3"
    },
    { 
      "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { 
      "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { 
      "name": "Dropped Coral (>2)",
      "code": "dc",
      "type": "bool"
    },
    { 
      "name": "Dropped Algae (>2)",
      "code": "da",
      "type": "bool"
    },
    { 
      "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { 
      "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  // Function to update QR Header, with null check for the element
function updateQRHeader() {
    let qrField = document.getElementById('qrField');  // Replace 'qrField' with your actual field ID
    if (qrField) {
        let fieldValue = qrField.value;  // Only proceed if the field exists
        // Perform operations with fieldValue if necessary
    } else {
        console.warn('QR field not found, unable to update QR header');
    }
}

// Function to regenerate the QR code, ensuring the element exists
function qr_regenerate() {
    let qrField = document.getElementById('qrField');  // Replace 'qrField' with actual field ID
    if (qrField) {
        // Regenerate QR logic here, if the field exists
    } else {
        console.warn('QR field not found, regeneration failed');
    }
}

// Ensure that swipePage function is also updated to prevent errors
function swipePage(pageID) {
    let page = document.getElementById(pageID);  // Check that page element exists before accessing
    if (page) {
        // Your existing logic for swipePage
    } else {
       console.warn('Page not found:', pageID);
    }

// Ensure that all relevant elements in the DOM are loaded before interacting with them
document.addEventListener('DOMContentLoaded', function() {
    // Example of setting up an event listener to trigger page swipe
    let nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            // Call the swipePage function or any logic you want
            swipePage('nextPage');
        });
    } else {
        console.warn('Next button not found');
    }

    // You can call your functions to initialize them or perform any actions after the page is fully loaded
    qr_regenerate();  // Example of calling qr_regenerate
});
