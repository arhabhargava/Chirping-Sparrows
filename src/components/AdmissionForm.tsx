"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

function isValidEmail(val: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

export default function AdmissionForm() {
  const [email, setEmail] = useState("");
  const emailTouched = email.length > 0;
  const emailValid = isValidEmail(email);

  const [phone, setPhone] = useState("");
  const phoneTouched = phone.length > 0;
  const phoneValid = /^[6-9][0-9]{9}$/.test(phone);

  const [age, setAge] = useState("");
  const ageTouched = age.length > 0;
  const ageNum = Number(age);
  const ageValid = ageTouched && Number.isInteger(ageNum) && ageNum >= 1 && ageNum <= 6;

  return (
    <form
      className="mt-6 grid sm:grid-cols-2 gap-4"
      action={`mailto:${SITE.email}`}
      method="post"
      encType="text/plain"
    >
      <label className="text-sm">
        <span className="font-display font-semibold text-ink-900">Parent name *</span>
        <input
          required
          name="parent"
          type="text"
          minLength={2}
          maxLength={60}
          pattern="[A-Za-z .'\-]+"
          title="Please enter a valid name (letters only)"
          autoComplete="name"
          className="mt-1 w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400 outline-none"
        />
      </label>

      <label className="text-sm">
        <span className="font-display font-semibold text-ink-900">Child name *</span>
        <input
          required
          name="child"
          type="text"
          minLength={2}
          maxLength={60}
          pattern="[A-Za-z .'\-]+"
          title="Please enter a valid name (letters only)"
          className="mt-1 w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400 outline-none"
        />
      </label>

      <label className="text-sm">
        <span className="font-display font-semibold text-ink-900">Email *</span>
        <input
          required
          name="email"
          type="email"
          maxLength={100}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-1 w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
            emailTouched
              ? emailValid
                ? "border-leaf-400 bg-leaf-50"
                : "border-blush-400 bg-blush-50"
              : "border-ink-700/15 focus:border-blush-400"
          }`}
        />
        {emailTouched && (
          <p className={`mt-1 text-xs ${emailValid ? "text-leaf-600" : "text-blush-500"}`}>
            {emailValid ? "Looks good!" : "Please enter a valid email address"}
          </p>
        )}
      </label>

      <label className="text-sm">
        <span className="font-display font-semibold text-ink-900">Mobile *</span>
        <input
          required
          name="phone"
          type="tel"
          inputMode="numeric"
          pattern="[6-9][0-9]{9}"
          maxLength={10}
          autoComplete="tel"
          title="Enter a valid 10-digit Indian mobile number"
          placeholder="10-digit number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          className={`mt-1 w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
            phoneTouched
              ? phoneValid
                ? "border-leaf-400 bg-leaf-50"
                : "border-blush-400 bg-blush-50"
              : "border-ink-700/15 focus:border-blush-400"
          }`}
        />
        {phoneTouched && (
          <p className={`mt-1 text-xs ${phoneValid ? "text-leaf-600" : "text-blush-500"}`}>
            {phoneValid ? "Looks good!" : phone.length < 10 ? `${10 - phone.length} more digit${10 - phone.length === 1 ? "" : "s"} needed` : "Must start with 6, 7, 8 or 9"}
          </p>
        )}
      </label>

      <label className="text-sm">
        <span className="font-display font-semibold text-ink-900">Child&apos;s age (years) *</span>
        <input
          required
          name="age"
          type="number"
          inputMode="numeric"
          min={1}
          max={6}
          step={1}
          placeholder="1 – 6"
          title="Enter age in whole years (1 to 6)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={`mt-1 w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
            ageTouched
              ? ageValid
                ? "border-leaf-400 bg-leaf-50"
                : "border-blush-400 bg-blush-50"
              : "border-ink-700/15 focus:border-blush-400"
          }`}
        />
        {ageTouched && (
          <p className={`mt-1 text-xs ${ageValid ? "text-leaf-600" : "text-blush-500"}`}>
            {ageValid ? "Looks good!" : "Age must be a whole number between 1 and 6"}
          </p>
        )}
      </label>

      <label className="text-sm">
        <span className="font-display font-semibold text-ink-900">Program</span>
        <select
          name="program"
          className="mt-1 w-full rounded-2xl border border-ink-700/15 px-4 py-3 bg-white focus:border-blush-400 outline-none"
        >
          <option>Play Group</option>
          <option>Pre Nursery</option>
          <option>Nursery</option>
          <option>KG</option>
          <option>Day Care</option>
        </select>
      </label>

      <label className="sm:col-span-2 text-sm">
        <span className="font-display font-semibold text-ink-900">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400 outline-none"
        />
      </label>

      <button
        type="submit"
        className="sm:col-span-2 mt-2 px-6 py-3 rounded-full bg-blush-500 text-white font-semibold hover:bg-blush-400 transition shadow-pop"
      >
        Send enquiry
      </button>
    </form>
  );
}
