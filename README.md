<<<<<<< HEAD
# OM Lounge Booking Website

A service booking website built with **Next.js, TypeScript, Redux Toolkit, and TailwindCSS**.
This project replicates a modern booking flow including service selection, cart management, booking scheduling, and success confirmation.

---

# Preview

Booking flow includes:

- Service listing
- Add services to cart
- Cart side panel
- Booking form with date & time selection
- Booking success modal

---

# Tech Stack

Frontend

- Next.js
- React
- TypeScript
- TailwindCSS

State Management

- Redux Toolkit

Form Handling

- React Hook Form
- Zod validation

Utilities

- Custom hooks
- Scroll lock management

---

# Features

Service Booking

- Browse services
- Add services to cart
- Remove services from cart

Cart Panel

- Slide-in side panel
- Dynamic total price calculation
- Continue booking action

Booking Panel

- Select booking date
- Select time slots
- Enter customer information
- Form validation

Success Modal

- Booking confirmation UI
- Success state display

UI System

- Reusable components
- Side panels
- Modals
- Buttons

UX Enhancements

- Scroll locking when panels open
- Smooth panel transitions
- Responsive layout

---

# Project Structure

```
app/
components/
  card/
    booking-success.tsx
    cart-item.tsx
    cart-panel.tsx
    review-card.tsx
    service-item.tsx

  layout/
    header.tsx
    footer.tsx
    service-section.tsx
    booking-section.tsx
    testimonial-section.tsx

  ui/
    booking-panel.tsx
    button.tsx
    modal.tsx
    side-panel.tsx

data/
  cart.data.ts
  service.data.ts
  testimonial.data.ts

hooks/
  toast.tsx
  use-block-scroll.ts

lib/
  schema/
  utils.ts

service/
  cart.service.ts
  service.service.ts

store/
  booking/
    bookingSlice.ts
  cart/
    cartSlice.ts
  ui/
    uiSlice.ts

types/
  booking-date.type.ts
  cart.type.ts
  service.type.ts
```

---

# Installation

Clone the repository

```
git clone https://github.com/yourusername/om-lounge-booking
```

Install dependencies

```
npm install
```

Run development server

```
npm run dev
```

Open browser

```
http://localhost:3000
```

---

# Booking Flow

User journey:

1. Browse services
2. Add services to cart
3. Open cart side panel
4. Click continue booking
5. Fill booking information
6. Select date and time
7. Submit booking
8. Success confirmation displayed

---

# UI Components

Reusable components include:

- SidePanel
- Modal
- Button
- BookingPanel
- CartPanel
- SuccessModal

These components are designed for modular and scalable UI architecture.

---

# Future Improvements

Possible enhancements:

- Backend booking API integration
- Payment gateway integration
- Admin dashboard
- Booking history
- Authentication system

---

# Author

Quan Nguyen
Frontend Developer
=======
# OM-SPA
>>>>>>> 646404a79166014828e5e174114ddfd6d66faba5
