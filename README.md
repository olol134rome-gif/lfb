# UKRNSTS I LFB — ER:LC Roleplay Website

## What is included
- LFB-inspired home page
- Recent incident cards
- Editable "Where We've Been" history
- Applications system with SFF open and all other ranks closed by default
- Long professional application form with scenario questions
- Full editable rank list
- ER:LC image gallery
- Roblox profile button/demo sign-in
- Browser-based Site Control Centre

## Important limitation
GitHub Pages is static hosting. The included editor saves to the browser's localStorage, so it is useful as a prototype but **does not create shared online editing**.

Real Roblox sign-in requires Roblox OAuth 2.0 plus a secure backend. Roblox's documentation says public web clients should use the authorization-code flow with PKCE, and client secrets must not be exposed publicly. See:
https://create.roblox.com/docs/cloud/auth/oauth2-develop

For a production version, move the OAuth callback and database to a server platform and keep the GitHub Pages frontend.

## Branding
This project is an unofficial ER:LC roleplay community website and is not affiliated with London Fire Brigade, Roblox, or Police Roleplay Community. The LFB logo is used as a reference image; replace it with assets you are permitted to use if you intend to publish the site publicly.

## GitHub Pages
Upload the files to your repository root and use:
Settings → Pages → Deploy from a branch → main → /(root).

## Sources used for inspiration
London Fire Brigade official site:
https://www.london-fire.gov.uk/

ER:LC:
https://www.roblox.com/games/2534724415/Emergency-Response-Liberty-County
