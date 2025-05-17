# Multi-tenant Booking System exercise

# Access the application live:
Please feel free to access the application running live at: https://multi-tenant-booking-system.vercel.app/

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd multi-tenant-booking-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

### Development
- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server

### Code Quality
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

### Testing
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Testing

The project uses Jest and React Testing Library for testing. Tests are located in the `__tests__` directory alongside their components.

To run tests:
```bash
npm test
```

For development with watch mode:
```bash
npm run test:watch
```

## Code Style

The project uses ESLint and Prettier for code style enforcement. Configuration files:
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration
