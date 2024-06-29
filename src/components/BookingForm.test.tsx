import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingProvider from "../contexs/BookingProvider";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom";

describe("BookingForm", () => {
  test("renders BookingForm component", () => {
    render(
      <BookingProvider>
        <BookingForm onClose={() => {}} />
      </BookingProvider>
    );

    expect(screen.getByPlaceholderText("Property Name")).toBeInTheDocument();
  });

  test("validates required fields", async () => {
    render(
      <BookingProvider>
        <BookingForm onClose={() => {}} />
      </BookingProvider>
    );

    fireEvent.submit(screen.getByRole("button"));

    expect(
      await screen.findByText("Property name is required")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Start date is required")
    ).toBeInTheDocument();
    expect(await screen.findByText("End date is required")).toBeInTheDocument();
  });

  test("validates end date after start date", async () => {
    render(
      <BookingProvider>
        <BookingForm onClose={() => {}} />
      </BookingProvider>
    );

    fireEvent.input(screen.getByPlaceholderText("Property Name"), {
      target: { value: "Test Property" },
    });
    fireEvent.input(screen.getByLabelText("Start Date"), {
      target: { value: "2023-01-02" },
    });
    fireEvent.input(screen.getByLabelText("End Date"), {
      target: { value: "2023-01-01" },
    });
    fireEvent.submit(screen.getByRole("button"));

    expect(
      await screen.findByText("End date must be after start date")
    ).toBeInTheDocument();
  });

  test("validates no past bookings", async () => {
    render(
      <BookingProvider>
        <BookingForm onClose={() => {}} />
      </BookingProvider>
    );

    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    const pastDateString = pastDate.toISOString().split("T")[0];

    fireEvent.input(screen.getByPlaceholderText("Property Name"), {
      target: { value: "Test Property" },
    });
    fireEvent.input(screen.getByLabelText("Start Date"), {
      target: { value: pastDateString },
    });
    fireEvent.input(screen.getByLabelText("End Date"), {
      target: { value: pastDateString },
    });
    fireEvent.submit(screen.getByRole("button"));

    expect(
      await screen.findByText("Start date cannot be in the past")
    ).toBeInTheDocument();
  });
});
