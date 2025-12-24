# Running a Local Web Server

FormSubmit requires your website to be served through a web server (not opened as a file). Here are several ways to run a local server:

## Option 1: Using the Provided Scripts (Easiest)

### Windows:
1. Double-click `start-server.bat`
2. Open your browser and go to: `http://localhost:8000/contact.html`

### Mac/Linux:
1. Open Terminal in this folder
2. Run: `chmod +x start-server.sh && ./start-server.sh`
3. Open your browser and go to: `http://localhost:8000/contact.html`

## Option 2: Using Python (If installed)

### Windows/Mac/Linux:
1. Open Terminal/Command Prompt in this folder
2. Run: `python -m http.server 8000` (or `python3 -m http.server 8000`)
3. Open your browser and go to: `http://localhost:8000/contact.html`

## Option 3: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `contact.html`
3. Select "Open with Live Server"
4. The form will work automatically!

## Option 4: Using Node.js (If installed)

1. Install http-server: `npm install -g http-server`
2. Run: `http-server -p 8000`
3. Open your browser and go to: `http://localhost:8000/contact.html`

## Important Notes:

- **Don't close the terminal/command prompt** while testing - keep it running
- The server must be running for FormSubmit to work
- Once deployed to a real web server (like GitHub Pages, Netlify, etc.), FormSubmit will work automatically
- The form will work perfectly once your website is live on the internet

## Testing the Form:

1. Start the local server using one of the methods above
2. Open `http://localhost:8000/contact.html` in your browser
3. Fill out and submit the form
4. Check `maitri240205@gmail.com` for the email

