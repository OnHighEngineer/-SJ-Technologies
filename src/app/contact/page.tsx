import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Elite Laptops",
  description: "Get in touch for sales, service or enquiries. Call or WhatsApp 7676459688. Based in Karnataka, India.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-lg mx-auto text-center space-y-8">
        {/* Header Title & Subtitle centered */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight mb-3">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-md mx-auto">
            We reply fast. Reach us on WhatsApp or fill in the form and we will get back to you shortly.
          </p>
        </div>

        {/* Form Container centered */}
        <ContactForm />
      </div>
    </div>
  );
}
