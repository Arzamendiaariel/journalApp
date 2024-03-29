export function formatDate(unformatedDate) {
  const date = new Date(unformatedDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${month}-${day}-${year}: `;
}
