const specialTerms = {
  faq: "Frequently Asked Questions",
  // Add other special terms as needed
};

export const translateTerm = (term) => {
  return specialTerms[term.toLowerCase()] || capitalize(term.replace("-", " "));
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};