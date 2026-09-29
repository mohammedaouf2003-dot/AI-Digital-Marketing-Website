/**
 * Conversion measurement.
 *
 * Every event goes to window.dataLayer, which Google Tag Manager reads. GA4,
 * Google Ads conversions and the Meta Pixel are then configured as tags inside
 * GTM rather than hard-coded here, so tracking can change without a deploy.
 *
 * Nothing is sent anywhere unless NEXT_PUBLIC_GTM_ID is set.
 */

export type LeadEvent =
  | "cta_click"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "form_submit"
  | "form_error";

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export function trackEvent(event: LeadEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, page_path: window.location.pathname, ...params });
}

/** Classifies a clicked link into the lead event it represents, if any. */
export function classifyLink(anchor: HTMLAnchorElement): LeadEvent | null {
  const href = anchor.getAttribute("href") ?? "";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.includes("wa.me/")) return "whatsapp_click";
  if (anchor.dataset.cta !== undefined || /(^\/contact|#enquiry|#contact)/.test(href)) {
    return "cta_click";
  }
  return null;
}
