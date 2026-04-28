declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const REGISTER_URL = "https://coincarriere.com/register?type=company";

export function trackLead(source: string) {
  try {
    window.fbq?.("track", "Lead", { source });
  } catch {
    // no-op
  }
}
