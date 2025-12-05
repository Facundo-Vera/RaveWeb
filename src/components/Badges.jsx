import React from "react";
import "../css/Badges.css";

const badges = [
  {
    id: "instagram",
    href: "https://www.instagram.com/rave.web",
    label: "Instagram",
    className: "badge insta",
    svg: (
      <svg viewBox="0,0,256,256" aria-hidden="true" focusable="false">
      <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" style={{ mixBlendMode: 'normal' }}>
        <g transform="scale(5.12,5.12)">
          <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path>
        </g>
      </g>
    </svg>
    ),
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/facundo-vera",
    label: "LinkedIn",
    className: "badge linkedin",
    svg: (
     <svg viewBox="0 0 30 30" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"/>
    </svg>
    ),
  },
  {
    id: "github",
    href: "https://github.com/Facundo-Vera",
    label: "GitHub",
    className: "badge github",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12 .5C5.64 0 0 5.64 0 12c0 5.64 3.66 10.43 8.76 12C9.4 24 9.6 23.6 9.6 23.3c0-.2 0-.9 0-1.7c-3 0-3.6-.8-3.6-.8-.5-1.3-1.3-1.6-1.3-1.6-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.4 1.1 3 .8.1-.7.3-1.1.6-1.4-2.3-.3-4.7-1.1-4.7-5.1 0-1.1.4-2.1 1-2.9-.1-.3-.4-1.4.1-3 0 0 .9-.3 3 1.1.8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c2.1-1.4 3-1.1 3-1.1.5 1.6.2 2.7.1 3 .7.8 1 1.8 1 2.9 0 4-2.4 4.8-4.7 5.1.3.3.6.8.6 1.6 0 1.2 0 2.2 0 2.5 0 .2.1.4.4.3 5.1-1.6 8.7-6.4 8.7-12C24 5.64 18.36 0 12 .5z"/>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    href: "https://wa.me/5493812179937",
    label: "WhatsApp",
    className: "badge whatsapp",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12 2a10 10 0 0 0-9.9 10.9c0 1.6.4 3.2 1.1 4.7l-1.1 3.9 4.1-1.1c1.4.7 3 1.1 4.7 1.1A10 10 0 0 0 12 2zm3.8 11.2c-.2-.1-.8-.4-.9-.4-.2-.1-.4-.1-.5.1-.1.2-.6.7-.7.8-.1.1-.3.1-.6.1-.2 0-.8-.3-1.5-.9-.6-.6-1-1.4-1.1-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.3-.3.1-.1.2-.3 0-.6-.2-.3-.9-.8-1.2-1.1-.3-.3-.6-.2-.9-.2-.3 0-.6-.1-.8-.1-.2 0-.5.1-.7.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.5 2.5 3.6 3.4 2.1.9 2.5.7 3 1.6.5.9.5 1.6.4 1.7-.1.1-.8.4-1.3.6-.5.1-.9.1-1.2 0-.2-.1-.5-.1-.7-.2z"/>
      </svg>
    ),
  },
];
export default function Badges({ size = "medium" }) {
  return (
    <div className={`social-badges size-${size}`} role="navigation" aria-label="Social links">
      {badges.map((b) => (
        <a
          key={b.id}
          className={b.className}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={b.label}
        >
          <span className="icon" aria-hidden="true">{b.svg}</span>
          <span className="text">{b.label}</span>
        </a>
      ))}
    </div>
  );
}
