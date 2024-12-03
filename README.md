# Target Mate

A companion app for Toggl Track to help you manage your working hours and achieve your monthly goals. Target Mate helps you visualize and track your daily and monthly targets while maintaining a healthy work-life balance.

## Features

- 🔐 Auth via credentials and API key
- 📅 Custom working days selection
- ⏱️ Monthly hours limit setting
- 🏢 Multi-workspace and project support
- 🔄 Auto-sync with configurable intervals
- 🎨 Beautiful themes
- 📊 Daily average calculations
- 🖥️ System tray integration
- 🔔 Notification support
- 🔒 Privacy-focused: No analytics, no data collection

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- Lucide Icons

## Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

## Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/target-mate.git
cd target-mate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## Deployment

### Netlify

1. Install the Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

## Project Structure

```
target-mate/
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── layout/    # Layout components
│   │   ├── sections/  # Page sections
│   │   ├── theme/     # Theme components
│   │   └── ui/        # shadcn/ui components
│   ├── lib/           # Utilities and constants
│   ├── pages/         # Page components
│   └── hooks/         # Custom React hooks
├── index.html
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- [Buy me a coffee](https://www.buymeacoffee.com/targetmate)
- [GitHub Sponsors](https://github.com/sponsors/targetmate)
- Email: brvachhani@gmail.com