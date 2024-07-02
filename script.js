document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  function updateTime() {
    const now = new Date();
    currentTimeElement.textContent = now.toUTCString();
    currentDayElement.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  updateTime();
  setInterval(updateTime, 1000);
});
