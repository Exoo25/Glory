//glory official javascript file


function applySpacingFromClass(prefix, applyStyle) {
  document.querySelectorAll(`[class*='${prefix}-']`).forEach(el => {
    const match = [...el.classList].find(c => c.startsWith(`${prefix}-`));
    if (match) {
      let value = match.slice(prefix.length + 1);
      if (!isNaN(value)) value += "px";
      applyStyle(el, value);
    }
  });
}

// Padding
applySpacingFromClass("p", (el, val) => el.style.padding = val);
applySpacingFromClass("py", (el, val) => {
  el.style.paddingTop = val;
  el.style.paddingBottom = val;
});
applySpacingFromClass("px", (el, val) => {
  el.style.paddingLeft = val;
  el.style.paddingRight = val;
});

// Margin
applySpacingFromClass("m", (el, val) => el.style.margin = val);
applySpacingFromClass("my", (el, val) => {
  el.style.marginTop = val;
  el.style.marginBottom = val;
});
applySpacingFromClass("mx", (el, val) => {
  el.style.marginLeft = val;
  el.style.marginRight = val;
});


// Font-family: f-Poppins__sans-serif → "Poppins", sans-serif
document.querySelectorAll("[class*='f-']").forEach(el => {
  const match = [...el.classList].find(c => c.startsWith("f-"));
  if (match) {
    const encoded = match.slice(2);
    const decoded = encoded.replace(/__/g, ", ").replace(/_/g, " ");
    el.style.fontFamily = decoded;
  }
});

// Font weight: fw-700 → font-weight: 700
document.querySelectorAll("[class*='fw-']").forEach(el => {
  const match = [...el.classList].find(c => c.startsWith("fw-"));
  if (match) {
    const value = match.slice(3);
    el.style.fontWeight = value;
  }
});



