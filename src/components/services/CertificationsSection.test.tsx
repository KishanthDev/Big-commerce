import React from "react";
import { render, screen } from "@testing-library/react";
import CertificationsSection from "./CertificationsSection"; // adjust import path as needed
import type { Certification } from "../../../types/data";

describe("CertificationsSection", () => {
  const mockCertifications: Certification[] = ["ASE", "EVT", "BMW", "Toyota"];

  test("renders the component with title and description", () => {
    render(<CertificationsSection certifications={mockCertifications} />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Certifications & Expertise",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Our technicians are specially trained and certified to work on all major vehicle makes and models.",
      ),
    ).toBeInTheDocument();
  });

  test("renders with empty certifications array", () => {
    render(<CertificationsSection certifications={[]} />);

    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.queryAllByTestId("certification-badge")).toHaveLength(0);
  });
});
