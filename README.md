# Multi-tenant Booking System exercise

This is a booking system for beauty centers, built using [Next.js](https://nextjs.org/), [React.js](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) and [TailwindCSS](https://tailwindcss.com/). In addition, [Zustand](https://zustand-demo.pmnd.rs/) was used for state management and [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) was used to generate a helpful message for when booking appointments are successfully created.

Each center has its own landing page where clients can view available services and schedule appointments. Booking appointments are then rendered on the `/centers` route for user to verify.

### Total time invested in the execution of the exercise: 48 hours

## Considerations
The root route of the application is automatically redirecting the user to `/centers` route, as there is no content to render on the root route. The following pattern was taken into account:
- the page showing a list of centers is pathed to `/centers`
- individual centers are pathed to: `/centers/:centerId`

## AI Tools used
To build this application, the following AI tools were used to boost code quality and efficiency, and optimize the delivery of the exercise:
- Cursor AI: used to assist in building a standard design for centers, services and bookings.
- OpenAI's ChatGPT: used to assist in debugging obscure or generic errors.

## Access the application live:
Please feel free to access the application running live at: https://multi-tenant-booking-system.vercel.app/

## Documentation
Please refer to the following document for a list of improvements and enhancements, had I been given more time.
- [Suggestions and Improvements](./SUGGESTIONS_IMPROVEMENTS.md)

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
- `npm run test -- -u` - Updates snapshot testing
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