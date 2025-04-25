import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "./ContactPage";
import '@testing-library/jest-dom';

describe("ContactPage", () => {

  it("submits the form with correct values", () => {
    render(<ContactPage />);

    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const subjectInput = screen.getByLabelText(/subject/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/message/i) as HTMLInputElement;
    const submitButton = screen.getByText(/Send Message/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(subjectInput, { target: { value: "Inquiry" } });
    fireEvent.change(messageInput, { target: { value: "I need help with my order." } });

    fireEvent.click(submitButton);

    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("john@example.com");
    expect(subjectInput.value).toBe("Inquiry");
    expect(messageInput.value).toBe("I need help with my order.");
  });
});
