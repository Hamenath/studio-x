"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { serviceCategories } from "@/data/services";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  serviceRequired: string;
  projectBudget: string;
  projectDescription: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  serviceRequired?: string;
  projectDescription?: string;
}

const budgetOptions = [
  "Under ₹5,000",
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹50,000",
  "₹50,000+",
  "Custom / To be discussed",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    serviceRequired: "",
    projectBudget: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "ready_to_send">("idle");

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = "Please select a required service category.";
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = "Please provide an initial project overview.";
    } else if (formData.projectDescription.trim().length < 10) {
      errs.projectDescription = "Description must be at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");

    const recipient = "hello@studioxdesign.space.example";
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.serviceRequired} — ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `CLIENT PROJECT INQUIRY\n` +
      `----------------------------------------\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone || "Not provided"}\n` +
      `Business/Organization: ${formData.businessName || "Not provided"}\n` +
      `Service Category: ${formData.serviceRequired}\n` +
      `Estimated Budget: ${formData.projectBudget || "Not specified"}\n\n` +
      `Project Overview & Objectives:\n` +
      `${formData.projectDescription}\n` +
      `----------------------------------------\n` +
      `Sent via Studio X Website Inquiry Form`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setStatus("ready_to_send");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-mono uppercase tracking-wider text-sx-dark mb-2"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Jane Doe"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`w-full h-12 px-4 bg-sx-white border text-sx-black placeholder:text-sx-mid text-sm focus:outline-none transition-colors ${
              errors.fullName
                ? "border-red-600 focus:border-red-600"
                : "border-sx-light focus:border-sx-black"
            }`}
          />
          {errors.fullName && (
            <span id="fullName-error" className="text-xs text-red-600 font-mono mt-1.5 block">
              {errors.fullName}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono uppercase tracking-wider text-sx-dark mb-2"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full h-12 px-4 bg-sx-white border text-sx-black placeholder:text-sx-mid text-sm focus:outline-none transition-colors ${
              errors.email
                ? "border-red-600 focus:border-red-600"
                : "border-sx-light focus:border-sx-black"
            }`}
          />
          {errors.email && (
            <span id="email-error" className="text-xs text-red-600 font-mono mt-1.5 block">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Phone and Business */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-mono uppercase tracking-wider text-sx-dark mb-2"
          >
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full h-12 px-4 bg-sx-white border border-sx-light text-sx-black placeholder:text-sx-mid text-sm focus:outline-none focus:border-sx-black transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="businessName"
            className="block text-xs font-mono uppercase tracking-wider text-sx-dark mb-2"
          >
            Business / Organization (Optional)
          </label>
          <input
            id="businessName"
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="Studio / Brand Name"
            className="w-full h-12 px-4 bg-sx-white border border-sx-light text-sx-black placeholder:text-sx-mid text-sm focus:outline-none focus:border-sx-black transition-colors"
          />
        </div>
      </div>

      {/* Service Required and Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="serviceRequired"
            className="block text-xs font-mono uppercase tracking-wider text-sx-dark mb-2"
          >
            Service Required *
          </label>
          <select
            id="serviceRequired"
            required
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            aria-invalid={!!errors.serviceRequired}
            aria-describedby={errors.serviceRequired ? "serviceRequired-error" : undefined}
            className={`w-full h-12 px-4 bg-sx-white border text-sx-black text-sm focus:outline-none transition-colors ${
              errors.serviceRequired
                ? "border-red-600 focus:border-red-600"
                : "border-sx-light focus:border-sx-black"
            }`}
          >
            <option value="">Select a service category</option>
            {serviceCategories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Starter Package (₹2,999)">Starter Package (₹2,999)</option>
            <option value="Business Package (₹7,999)">Business Package (₹7,999)</option>
            <option value="Premium Package (₹14,999)">Premium Package (₹14,999)</option>
            <option value="Ultimate Package (₹24,999)">Ultimate Package (₹24,999)</option>
            <option value="Custom Project Scope">Custom Scope / Retainer</option>
          </select>
          {errors.serviceRequired && (
            <span id="serviceRequired-error" className="text-xs text-red-600 font-mono mt-1.5 block">
              {errors.serviceRequired}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="projectBudget"
            className="block text-xs font-mono uppercase tracking-wider text-sx-dark mb-2"
          >
            Estimated Budget Range
          </label>
          <select
            id="projectBudget"
            value={formData.projectBudget}
            onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
            className="w-full h-12 px-4 bg-sx-white border border-sx-light text-sx-black text-sm focus:outline-none focus:border-sx-black transition-colors"
          >
            <option value="">Select an indicative range</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="projectDescription"
          className="block text-xs font-mono uppercase tracking-wider text-sx-dark mb-2"
        >
          Project Scope & Objectives *
        </label>
        <textarea
          id="projectDescription"
          required
          rows={5}
          value={formData.projectDescription}
          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
          placeholder="Describe what you want to build, key deliverables, target launch date, and any brand references or specific guidelines."
          aria-invalid={!!errors.projectDescription}
          aria-describedby={errors.projectDescription ? "projectDescription-error" : undefined}
          className={`w-full p-4 bg-sx-white border text-sx-black placeholder:text-sx-mid text-sm focus:outline-none transition-colors ${
            errors.projectDescription
              ? "border-red-600 focus:border-red-600"
              : "border-sx-light focus:border-sx-black"
          }`}
        />
        {errors.projectDescription && (
          <span id="projectDescription-error" className="text-xs text-red-600 font-mono mt-1.5 block">
            {errors.projectDescription}
          </span>
        )}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full h-12 bg-sx-black text-sx-white text-sm font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-sx-soft transition-colors cursor-pointer disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          <span>
            {status === "submitting" ? "Preparing Email..." : "Send Project Inquiry"}
          </span>
        </button>

        {status === "ready_to_send" && (
          <div
            role="status"
            className="mt-4 p-4 bg-sx-off border border-sx-light text-xs text-sx-dark space-y-2"
          >
            <div className="flex items-center gap-2 font-bold text-sx-black">
              <CheckCircle2 className="w-4 h-4 text-sx-black" />
              <span>Inquiry Prepared</span>
            </div>
            <p>
              Your system mail client was triggered with your formatted brief. If your email application did not launch automatically, send your details directly to:
            </p>
            <p className="font-mono text-sx-black font-semibold">
              hello@studioxdesign.space.example
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
