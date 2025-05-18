# Suggestions and Improvements

This document outlines potential improvements and future enhancements for the Multi-tenant Booking System, if given more time.

## Features to add or enhance

### Technical Improvements
- Remove the mock data files in the `data` subdirectory and develop an API using Next.js and its built-in API routing system.
- Integrate a database for storing data, such as MongoDB.
- Integrate user authentication and authorization appropriately to the application.
- Implement a user admin panel for perfoming Update and Delete actions to Centers and Services.
- Implement Update and Delete actions for Booking appointments.
- Implement proper form validation using third-party libraries (such as [Zod](https://zod.dev/) or [Yup](https://github.com/jquense/yup)) and add inline error messages to form fields with invalid values.
- Develop a landing page for Booking appointments.
- Add email notifications for Booking Appointments confirmations.
- Add a calendar event integration (Google Calendar, Outlook) for Booking appointments.

### Performance
- Implement caching for data fetching (taking into account they have implemented a functional API), using libraries such as [Tanstack Query](https://tanstack.com/query/latest).
- Add pagination for the list of centers, services and bookings.
- Implement proper SEO meta tags.
