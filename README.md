# Seekrit Vault executor

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/seekritdev/vault-executor-template)

Your deployment of the [Seekrit Vault](https://seekrit.dev/docs/guides/vault)
executor: the Worker in *your* Cloudflare account that decrypts your end users'
credentials just in time and applies them to outbound requests.

1. `npm install`
2. Edit `vault.config.ts` — the providers your agent may use.
3. `npx wrangler secret put EXECUTOR_TOKEN` — any long random string; your
   backend presents it. For each OAuth provider, also
   `npx wrangler secret put <its clientSecretBinding>`.
4. `npx wrangler deploy`
5. In the seekrit dashboard, open your Vault project → **Registration code**,
   then `npx seekrit-vault-executor register <code> --url https://<your worker> --token <EXECUTOR_TOKEN>`
   (the value from step 3; or export `EXECUTOR_TOKEN` and drop the flag).

For an OAuth provider, register `https://<your worker>/oauth/callback` as the
redirect URI on your OAuth client. Browser sites need the `BROWSER` binding in
`wrangler.jsonc` (already there) and a Workers Paid plan.

Check everything is in place: `npx seekrit-vault-executor status --url https://<your worker> --token <EXECUTOR_TOKEN>`.

Full guide: https://seekrit.dev/docs/guides/vault
