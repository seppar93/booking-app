# Booking Management Application

This is a Booking Management application built with React, Vite, TypeScript, and Tailwind CSS. 
The application allows users to create, read, update, and delete bookings. 
It also uses `react-hook-form` for form handling and `zod` for validation.

## Table of Contents

- [Installation](#installation)
- [Key Components](#KeyComponents)
- [Images](#Images)


## Installation

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/your-username/booking-app.git
cd booking-app
npm install
npm run dev
```

## Key Components

* `BookingForm.tsx:` Handles the creation and updating of bookings. It uses react-hook-form for form state management and validation, and zod for schema validation.
* `BookingList.tsx:` Displays the list of bookings and provides options to update or delete them.
* `context/bookingsContext.tsx:` Manages global state for bookings using the Context API and a reducer pattern for state updates.
* `reducers/:` Contains the reducers for managing state. The dateReducer.ts handles state transitions for date inputs, while bookingReducer.ts manages the state of bookings.

## Images

![Screenshot 2024-06-28 at 10 39 23 PM](https://github.com/seppar93/booking-app/assets/21979113/55700c0c-6fe0-46f0-81fa-85f7cb1f7154)

![Screenshot 2024-06-28 at 10 40 24 PM](https://github.com/seppar93/booking-app/assets/21979113/1e66e74d-afaa-45be-ac5a-1b96b9d6390b)

![Screenshot 2024-06-28 at 10 40 56 PM](https://github.com/seppar93/booking-app/assets/21979113/073989de-9ba0-46d7-9649-252c7ffc641d)

![Screenshot 2024-06-28 at 10 41 23 PM](https://github.com/seppar93/booking-app/assets/21979113/7a72ab26-7ef2-4c9f-a432-6972315e95e2)

![Screenshot 2024-06-28 at 10 42 07 PM](https://github.com/seppar93/booking-app/assets/21979113/f7641626-1a10-45bb-b4ff-b397f4fe317d)

![Screenshot 2024-06-28 at 10 45 59 PM](https://github.com/seppar93/booking-app/assets/21979113/ab72636d-67a1-4d6c-b974-8ad0106bb3d5)

