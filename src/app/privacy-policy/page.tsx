import PrivacyPage, { metadata as privacyMetadata } from "../privacy/page";

export const metadata = {
  ...privacyMetadata,
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default PrivacyPage;
