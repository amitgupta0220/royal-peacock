export function asset(path) {
  const p = String(path || "").replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${p}`;
}
