"use client";
import { useEffect, useState } from "react";
import "./flip.css";

export default function FlipCountdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ d: "00", h: "00", m: "00", s: "00" });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ d: days, h: hours, m: minutes, s: seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flip-container">
      <FlipUnit label="Days" value={timeLeft.d} />
      <FlipUnit label="Hours" value={timeLeft.h} />
      <FlipUnit label="Minutes" value={timeLeft.m} />
      <FlipUnit label="Seconds" value={timeLeft.s} />
    </div>
  );
}

function FlipUnit({ label, value }) {
  const [previousValue, setPreviousValue] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== previousValue) {
      setFlip(true);
      const timeout = setTimeout(() => {
        setFlip(false);
        setPreviousValue(value);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [value, previousValue]);

  return (
    <div className="flip-unit">
      <div className="flip-card">
        <div className="top">{previousValue}</div>
        <div className="bottom">{value}</div>

        {flip && (
          <>
            <div className="top-flip">{previousValue}</div>
            <div className="bottom-flip">{value}</div>
          </>
        )}
      </div>
      <span className="label">{label}</span>
    </div>
  );
}
