# genieapp

# App Generator

A React-based web application that generates interactive applications from text prompts. The app features a side-by-side interface with live preview functionality and interactive components.

## Features

- Text-based app generation
- Live preview with interactive components
- Dark/light theme switching
- Todo list functionality
- Counter component
- Responsive design
- Built with React and shadcn/ui components

## Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn package manager
- Git

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd app-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install required shadcn/ui components:
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add button
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add alert
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Deployment

### Vercel (Recommended)

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy:
```bash
vercel
```

### Netlify

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Build the application:
```bash
npm run build
# or
yarn build
```

4. Deploy:
```bash
netlify deploy
```

### Docker

1. Build the Docker image:
```bash
docker build -t app-generator .
```

2. Run the container:
```bash
docker run -p 3000:3000 app-generator
```

## Environment Variables

Create a `.env` file in the root directory and add any required environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Project Structure

```
app-generator/
├── components/
│   └── AppGenerator.js
├── pages/
│   └── index.js
├── public/
├── styles/
├── .env
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintenance team.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [React](https://reactjs.org/) for the frontend framework
- [Lucide](https://lucide.dev/) for icons
