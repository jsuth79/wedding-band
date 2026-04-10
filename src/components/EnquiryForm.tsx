"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  eventDate: string;
  venue: string;
  eventType: string;
  message: string;
}

const eventTypes = [
  "Wedding Ceremony",
  "Wedding Drinks Reception",
  "Wedding Full Day",
  "Corporate Event",
  "Private Party / Celebration",
  "Funeral / Memorial",
  "Other",
];

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    eventDate: "",
    venue: "",
    eventType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send enquiry");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        eventDate: "",
        venue: "",
        eventType: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[30px] border border-green-200 bg-green-50 p-8 text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mb-2 text-xl font-serif text-[#2C2C2C]">Thank You</h3>
        <p className="text-[#444444]">
          Your enquiry has been sent successfully. We&apos;ll be back in touch within
          1-2 hours to talk through the details.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[#6f7c8c] underline hover:text-[#586474]"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <p className="eyebrow mb-3">Availability Form</p>
        <h2 className="section-subheading text-[1.6rem]">Check your date</h2>
        <p className="mt-3 max-w-2xl text-[#666666]">
          A few details are all we need to confirm availability and point you
          towards the best package.
        </p>
      </div>

      {status === "error" && (
        <div className="rounded-[20px] border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-[18px] border border-stone-300 bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#6f7c8c] transition-shadow"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-[18px] border border-stone-300 bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#6f7c8c] transition-shadow"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-[#2C2C2C] mb-2">
            Event Date *
          </label>
          <input
            type="date"
            id="eventDate"
            required
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full rounded-[18px] border border-stone-300 bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#6f7c8c] transition-shadow"
          />
        </div>

        <div>
          <label htmlFor="venue" className="block text-sm font-medium text-[#2C2C2C] mb-2">
            Venue or Area
          </label>
          <input
            type="text"
            id="venue"
            value={formData.venue}
            onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
            className="w-full rounded-[18px] border border-stone-300 bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#6f7c8c] transition-shadow"
            placeholder="Venue name or city"
          />
        </div>

        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-[#2C2C2C] mb-2">
            Event Type *
          </label>
          <select
            id="eventType"
            required
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full rounded-[18px] border border-stone-300 bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#6f7c8c] transition-shadow"
          >
            <option value="">Select event type...</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">
          Tell me about your event *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full resize-none rounded-[18px] border border-stone-300 bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#6f7c8c] transition-shadow"
          placeholder="Tell us about your venue, the atmosphere you want, approximate guest numbers, and whether you are interested in ceremony music, drinks reception or a full daytime package."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[#2C2C2C] py-4 text-sm uppercase tracking-wider text-white transition-colors hover:bg-[#1a1a1a] disabled:bg-[#888888]"
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="text-center text-sm text-[#888888]">
        We typically reply within 1-2 hours. For urgent enquiries, WhatsApp is
        the quickest option.
      </p>
    </form>
  );
}
