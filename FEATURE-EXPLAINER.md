# Make It Do Something — Feature Explainer

## The feature

The portfolio has exactly one dynamic feature: a working contact form. A visitor can enter a name, email address, and message and submit it from the live website.

## What is a backend?

A backend is the part of a web application that works behind the page the visitor sees. It receives requests, processes or stores data, and can send a response. A simple static website normally has no backend of its own.

For this feature, I did not build a separate server. Netlify provides the form-processing service, so the website stays a small static site while Netlify handles the submitted form data.

## How the feature works

1. The visitor opens the portfolio and fills in the contact form.
2. The browser submits a `POST` request containing the form fields.
3. The form is marked with Netlify's `data-netlify="true"` attribute and includes the form name, so Netlify can detect and process it after deployment.
4. Netlify receives the submission and records it under the site's form submissions.
5. The site owner can review the submission from the Netlify dashboard and configure notification delivery there.

The important idea is that the browser is not directly saving the message into a database that I wrote. The hosting platform provides the server-side form handling.

## Why I chose it

A contact form is useful on a personal portfolio because it gives visitors a direct way to start a conversation without requiring another application. It is also small enough for me to understand end to end: HTML form → HTTP request → Netlify form handling → submission record.

## Free-tier implementation

The feature uses the existing Netlify-hosted portfolio and Netlify Forms rather than adding a paid backend service. The portfolio remains static apart from this one hosted form-processing feature.

## Test evidence

After deployment, I will submit a real test message from a private/incognito browser window and verify that the submission appears in the site's Netlify Forms dashboard. That real submission is the evidence that the feature works end to end.
