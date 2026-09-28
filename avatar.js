// Shared greeting motion; respect touch input and reduced-motion preferences.
(() => {
  const avatarWordmark = document.querySelector(".wordmark--avatar");
  const avatarPortrait = avatarWordmark?.querySelector(".wordmark-portrait");
  const avatarGreeting = avatarWordmark?.querySelector(".wordmark-greeting");

  if (avatarPortrait && avatarGreeting) {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let greetingAnimation;
    const wiggleGreeting = () => {
      if (motionPreference.matches) return;
      greetingAnimation?.cancel();
      greetingAnimation = avatarGreeting.animate([
        { transform: "translate(0, -.125rem) rotate(-8deg)" },
        { transform: "translate(-2px, -.125rem) rotate(-12deg)" },
        { transform: "translate(2px, -.125rem) rotate(-4deg)" },
        { transform: "translate(-1px, -.125rem) rotate(-10deg)" },
        { transform: "translate(1px, -.125rem) rotate(-7deg)" },
        { transform: "translate(0, -.125rem) rotate(-8deg)" },
      ], { duration: 380, easing: "ease-in-out", iterations: 1 });
    };
    avatarWordmark.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch") wiggleGreeting();
    });
    avatarWordmark.addEventListener("focus", wiggleGreeting);
    motionPreference.addEventListener("change", () => {
      if (motionPreference.matches) greetingAnimation?.cancel();
    });
  }
})();
