## Misc

- Install radix components.
- Add CloudFlare routing to hello@verifactu.f0.ar
- Remove TW fluid classes (e.g. ~p-4/6)

- Configure Resend for Email
- Configure React PDF to generate PDFs
- Configure S3 to store PDFs

## Invoices

- Define invoice table structure.
- Create invoice CRUD endpoint actions.
- Create invoice form:
  - Save new row in invoice table
  - Generate PDF and upload it to S3. Save URL in DB.
- Create invoice table.
- Add button to change invoice state.

## Expenses

- Define expenses table structure.
- Create expenses CRUD endpoint actions.
- Create expenses form:
  - Save new row in expenses table
  - Allow file attachments.
- Create expenses table.

## Overview

- Create endpoint to get balances (payed/not payed)
- Create dashboard page to display that info.

## AI Assistant

- Install AI SDK. Install OpenAI provider.
- Create basic interface with input for the user and last assistant message.
- Prompt the user activity (check if other things are needed)
- Display required taxes with extra information (brackets, deadlines, etc)
