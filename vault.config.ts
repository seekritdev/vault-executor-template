import { apiKeyProvider, defineVaultConfig } from "@seekrit/vault-executor";

/**
 * The single source of truth for what this executor can apply, and to where.
 * Compiled into the Worker; the hosted API only ever sees the display half.
 *
 * An OAuth provider needs an OAuth client of your own, with the redirect URI
 *   https://<this worker>/oauth/callback
 * and its client secret set as a Wrangler secret under `clientSecretBinding`.
 */
export default defineVaultConfig({
  providers: [
    apiKeyProvider({
      id: "resend",
      displayName: "Resend",
      consentSummary: "send email through your Resend account",
      keyLabel: "API key",
      helpUrl: "https://resend.com/api-keys",
      rules: [{ host: "api.resend.com", methods: ["GET", "POST"], paths: ["/emails/**"] }],
    }),
    // An OAuth provider — also import `oauth2Preset` above:
    // oauth2Preset.google({
    //   id: "google-gmail",
    //   consentSummary: "read and send email as you",
    //   clientId: "<your client id>.apps.googleusercontent.com",
    //   clientSecretBinding: "GOOGLE_CLIENT_SECRET",
    //   scopes: ["https://www.googleapis.com/auth/gmail.modify"],
    // }),
  ],
  // Sites with no API, driven through a browser — also import `siteProfile`:
  // sites: [
  //   siteProfile({
  //     id: "linkedin",
  //     displayName: "LinkedIn",
  //     consentSummary: "browse and message on LinkedIn as you",
  //     startUrl: "https://www.linkedin.com/feed/",
  //     loginUrl: "https://www.linkedin.com/login",
  //     domains: ["linkedin.com", "*.linkedin.com", "*.licdn.com"],
  //     domainSets: ["common-cdns"],
  //     signedOutUrlPrefixes: ["https://www.linkedin.com/login", "https://www.linkedin.com/uas/login"],
  //   }),
  // ],
});
