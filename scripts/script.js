document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    if (window.innerWidth >= window.innerHeight || window.innerWidth > 768) {
      document.getElementById("reminder").style.display = "block";
    }
  };
  // Typing Effects
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const textArray = [
    ". I specialize in creating user-friendly interfaces through frontend web development. My interests include gaming and experimenting with web design, which helps keep my tech perspective dynamic and fresh. I'm committed to making a positive impact through my work, whether it's on open-source projects or efficiency-enhancing tools.",
  ];
  let typingDelay = 20;
  const erasingDelay = 10;
  const spanElement = document.querySelector(".content p span.cursor");
  let textArrayIndex = 0;
  let charIndex = 0;
  function type() {
    if (charIndex < textArray[textArrayIndex].length && typing) {
      document.querySelector(".cursor").style.display = "inline-block";
      if (!cursorSpan.classList.contains("typing")) spanElement.style.width = "8px";
      cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      spanElement.style.width = "3.5px";
    }
  }

  // Erase Effects
  function erase() {
    if (charIndex > 0 && !typing) {
      if (!cursorSpan.classList.contains("typing")) spanElement.style.width = "3.5px";
      cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
    }
  }

  // Read More
  let typeing = true;
  let clickDelay = true;
  const readMore = document.getElementById("read-more");
  const iconMore = document.getElementById("icon-more");
  var checkMore = true;
  readMore.addEventListener("click", function () {
    if (clickDelay) {
      clickDelay = false;
      if (checkMore) {
        iconMore.style.animation = "rotateIcon 0.5s ease-in-out forwards";
        typing = true;
        type();
      } else {
        iconMore.style.animation = "rotateIconRV 0.5s ease-in-out forwards";
        setTimeout(function () {
          iconMore.style.animation = "moveUpDown 1s ease-in-out infinite";
        }, 500);
        typing = false;
        erase();
      }
      checkMore = !checkMore;
      setTimeout(function () {
        clickDelay = true;
      }, 500);
    }
  });
});
