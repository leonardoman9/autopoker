# Facebook AutoPoke Script

A simple JavaScript script that automatically responds to Facebook pokes. This script runs in your browser and automatically clicks the "Poke back" button whenever someone pokes you.

## Features

- 🤖 Automatically responds to all Facebook pokes
- 📊 Displays a status box showing:
  - Total number of pokes sent
  - Time of the last poke
- 🔄 Runs every 3 seconds to check for new pokes
- 💫 Adds small delays between multiple pokes to avoid rate limiting

## How to Use

1. Open Facebook in your browser
2. Open the browser's Developer Tools:
   - Chrome/Edge: Press `F12` or `Ctrl+Shift+I`
   - Firefox: Press `F12` or `Ctrl+Shift+I`
   - Safari: Enable Developer Tools in Preferences > Advanced, then press `Cmd+Option+I`

3. Go to the "Console" tab in Developer Tools

4. Copy the entire contents of `autopoker.js` and paste it into the console

5. Press Enter to run the script

The script will start running automatically and you'll see a status box in the top-right corner of your screen showing the number of pokes sent and the time of the last poke.

## Status Display

The script creates a small status box that shows:
- Number of pokes sent during the current session
- Time of the last poke sent

## Notes

- The script needs to be re-run each time you refresh the Facebook page
- Make sure you're on Facebook's website before running the script
- The script is currently configured with Italian text ("Rispondi al poke") - modify if needed for other languages

## Disclaimer

This script is for educational purposes only. Use it responsibly and be aware that automated actions on Facebook might violate their terms of service. Use at your own risk.

## License

This project is open source and available under the MIT License.
