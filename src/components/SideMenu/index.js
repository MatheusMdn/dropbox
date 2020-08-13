import React, { useEffect, useState } from "react";

import { Container } from "./styles";

const scrollThreshold = 300;

export default function SideMenu({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState("false");

  useEffect(() => {
    // Escutar o evento na janela com o window
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = [
    isActive ? "open" : "",
    scrollY <= scrollThreshold ? "scrollOpen" : "",
  ];

  const className = classes.join(" ").trim();

  function toggleActiveMenu() {
    setIsActive((prev) => !prev);
  }

  window.toggleActiveMenu = toggleActiveMenu;

  return <Container className={className}>{children}</Container>;
}
