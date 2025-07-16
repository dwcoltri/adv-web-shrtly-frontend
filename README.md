# shrtly.app

shrtly.app is a simple and modern URL shortener frontend built with React.  
It allows users to create short links for long URLs and provides basic analytics like click counts.
This is being done as part of a class assignment.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository and install dependencies:

```sh
npm install
```

Set up your `.env` file (see `sample.env`)

### Running the App

Start the development server:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use shrtly.app.

### Building for Production

To create an optimized production build:

```sh
npm run build
```

The build output will be in the `build` folder.

## Features

- Shorten long URLs with a single click
- Custom slug support (optional)
- Click analytics for each short link
- Clean and responsive UI

## Project Structure

- `src/` – React components and app logic
- `public/` – Static assets

## Notes

- This is the frontend for shrtly.app. You will need to run or connect to a backend service for actual URL redirection and analytics.
- Make sure your backend API endpoints are configured in the frontend code