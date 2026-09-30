import React from "react";

export function EliteLogo({ className = "w-8 h-8", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Metallic Gold Gradient */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6D365" />
          <stop offset="50%" stopColor="#FDA085" />
          <stop offset="100%" stopColor="#E6A100" />
        </linearGradient>

        {/* Metallic Silver Gradient */}
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>

        {/* Gold Frame Gradient */}
        <linearGradient id="goldFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="40%" stopColor="#F5B041" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>

        {/* Metallic Swoosh Gradient */}
        <linearGradient id="swooshGrad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#FFF5CC" />
          <stop offset="50%" stopColor="#F39C12" />
          <stop offset="100%" stopColor="#D5D8DC" />
        </linearGradient>
      </defs>

      {/* Orbiting Metallic Swoosh Back Wing */}
      <path
        d="M 20,110 C 10,70 60,20 160,25"
        stroke="url(#silverGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Laptop Screen Frame */}
      <rect
        x="32"
        y="30"
        width="136"
        height="84"
        rx="8"
        fill="#0D0D0D"
        stroke="url(#goldFrame)"
        strokeWidth="6"
      />

      {/* Laptop Screen Display Inner */}
      <rect
        x="38"
        y="36"
        width="124"
        height="72"
        rx="4"
        fill="#111111"
      />

      {/* Stylized 'E' Letter */}
      <path
        d="M 62,52 H 92 V 62 H 74 V 68 H 90 V 78 H 74 V 84 H 92 V 94 H 62 Z"
        fill="url(#silverGrad)"
      />

      {/* Stylized 'L' Letter */}
      <path
        d="M 98,52 H 110 V 84 H 134 V 94 H 98 Z"
        fill="url(#goldFrame)"
      />

      {/* Laptop Keyboard Base */}
      <path
        d="M 16 120 L 26 114 L 174 114 L 184 120 C 188 123 186 128 180 128 L 20 128 C 14 128 12 123 16 120 Z"
        fill="url(#goldFrame)"
      />

      {/* Touchpad Slot */}
      <rect x="86" y="121" width="28" height="5" rx="1.5" fill="#000000" />

      {/* Front Metallic Swoosh Ring */}
      <path
        d="M 15,115 C 30,145 120,140 185,85"
        stroke="url(#swooshGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
