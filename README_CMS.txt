
IHS DECA — CMS-Enabled Package (/admin Editor)

WHAT THIS IS
- Static site + Decap CMS (/admin) so advisors can log in and edit content in a web dashboard.

FILES TO KNOW
- /admin/index.html — loads the CMS
- /admin/config.yml — defines editable fields
- /content/site.json — stores the content

HOW TO DEPLOY WITH CMS (Step-by-step)
1) Create a free GitHub account (if you don’t have one).
2) Create a free Netlify account.
3) On Netlify, click "Add new site" → "Import from Git".
4) Connect your GitHub, create a new repo, and push (upload) these files to that repo (Netlify wizard can do this).
5) Build setting: no build needed (pure static), set Publish directory to "/" and deploy.
6) Netlify → Site Settings → Identity → Enable Identity.
7) Identity → Registration: set to "Invite only".
8) Identity → Services: Enable "Git Gateway".
9) Identity → Invite users: add advisor emails.
10) Advisors visit https://YOUR-SITE/admin and log in to edit content.

CONTACT FORM
- The "Contact Us" form uses Netlify Forms. First submission will create the form entry in your dashboard.

CUSTOM DOMAIN
- Netlify → Domain Management → Add custom domain → Follow the prompts to point your domain and enable HTTPS.
