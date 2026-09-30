"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

const WHATSAPP_NUMBER = "917676459688";

interface Fields {
  name: string;
  phone: string;
  model: string;
  issue: string;
}

const EMPTY: Fields = { name: "", phone: "", model: "", issue: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Elite Laptops,\n\nName: ${fields.name}\nPhone: ${fields.phone}\nLaptop Model: ${fields.model}\nIssue: ${fields.issue}`;
    window.open(whatsappUrl(WHATSAPP_NUMBER, msg), "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 w-full text-left"
      noValidate
    >
      <Field
        id="name"
        label="Your Name"
        type="text"
        value={fields.name}
        onChange={set("name")}
        required
        placeholder="Rajesh Kumar"
      />
      <Field
        id="phone"
        label="Phone Number"
        type="tel"
        value={fields.phone}
        onChange={set("phone")}
        required
        placeholder="9876543210"
      />
      <Field
        id="model"
        label="Laptop Model"
        type="text"
        value={fields.model}
        onChange={set("model")}
        placeholder="e.g. Dell Inspiron 15, HP Pavilion"
      />
      <div>
        <label htmlFor="issue" className="block text-xs font-semibold text-[#111111] uppercase tracking-wider mb-2">
          Issue / Message
        </label>
        <textarea
          id="issue"
          value={fields.issue}
          onChange={set("issue")}
          rows={4}
          placeholder="Describe the issue or what you are looking for..."
          className="w-full px-4 py-3 border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#AAAAAA] focus:outline-none focus:ring-1 focus:ring-[#111111] focus:border-[#111111] resize-none transition-all bg-white"
        />
      </div>

      <button
        id="contact-submit"
        type="submit"
        disabled={!fields.name || !fields.phone}
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#111111] text-white text-sm font-semibold rounded-xl hover:bg-[#111111]/85 transition-all shadow-sm active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
        {submitted ? "Opening WhatsApp..." : "Send via WhatsApp"}
      </button>

      <p className="text-xs text-[#888888] text-center">
        This will open WhatsApp with your message pre-filled.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-[#111111] uppercase tracking-wider mb-2">
        {label} {required && <span className="text-[#888888]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#AAAAAA] focus:outline-none focus:ring-1 focus:ring-[#111111] focus:border-[#111111] transition-all bg-white"
      />
    </div>
  );
}
