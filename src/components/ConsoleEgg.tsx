"use client";

import { useEffect } from "react";
import profile from "../../content/profile.json";

export default function ConsoleEgg() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(
      "%c❯ jc_" +
        "%c\n\nYou opened the console. Good instinct — I'd check the source too.\n" +
        "Detection engineering, Sigma rules, SIEM tuning, SOAR automation.\n\n" +
        `%c${profile.email}  ·  ${profile.github}\n`,
      "color:#00FF41;font-size:24px;font-weight:bold;font-family:monospace;",
      "color:inherit;font-family:monospace;font-size:12px;",
      "color:#00FF41;font-family:monospace;font-size:12px;"
    );
  }, []);

  return null;
}
