# Rashod Korala

Full-stack software engineer based in St. John's, Newfoundland.
I have shipped across firmware, mobile, and cloud as the sole engineer on a live product.
I work hands-on with spec-driven development, secure backends on AWS, SwiftUI and BLE iOS apps, and nRF52840 firmware.
Founder of AetherLabs and co-founder of R&D Creative Agency.

[rashodkorala.com](https://www.rashodkorala.com) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/rashodk) &nbsp;·&nbsp; hello@rashodkorala.com

---

## Stack

**Languages** - TypeScript, JavaScript, Swift, Kotlin, Python, C, Java, SQL  
**Frontend** - React, Next.js, Tailwind CSS, shadcn/ui  
**Mobile** - SwiftUI, Jetpack Compose, React Native, AlarmKit, CoreBluetooth, Core NFC, WidgetKit, Live Activities  
**Backend & Data** - Node.js, NestJS, Hono, Express, PostgreSQL, Prisma, Drizzle, Supabase, OpenAPI, GraphQL  
**Embedded** - nRF52840, Zephyr RTOS, MCUboot, BLE GATT, DFU over BLE, NFC (NTAG 424 DNA)  
**Cloud & DevOps** - AWS (CDK, SST, Lambda, Aurora, RDS, Fargate, S3, KMS, Cognito), Cloudflare, Vercel, Docker, GitHub Actions  
**AI** - Claude API, structured outputs, spec-driven development, human-in-the-loop review

---

## Experience

### Software Engineering Intern (Mitacs), MOOV Technologies
*St. John's, NL · Aug 2026 to present*

Connected smart alarm: nRF52840 firmware, SwiftUI iPhone app, Kotlin and Compose Android app, AWS backend.

- Sole engineer across firmware, iOS, and cloud, owning architecture, delivery, and production issues for a live product.
- Delivered the product's first end-to-end over-the-air update, from backend to app to BLE to MCUboot, on real hardware.
- Designed a spec-driven, agent-operated engineering process: one source of truth across four codebases, with spec updates and test evidence required for every behaviour change.
- Audited the legacy backend with the team, found critical security flaws, and built a secure NestJS, Prisma, and PostgreSQL replacement on AWS with 194 unit and contract tests in CI/CD.
- Cut monthly AWS costs by over 55% through right-sizing, while keeping the system ready to scale.
- Rebuilt the SwiftUI iOS app and took it through TestFlight to App Store submission.
- Won Apple's approval for the restricted Screen Time distribution entitlement.
- Added downgrade prevention, self-reverting trial images, and automatic rollback for failed firmware updates.

---

## Projects

### AetherLabs: NFC artwork authentication
*Founder · Aug 2024 to present · Propel ICT Vision and Genesis Evolve accelerators · [aetherlabs.art](https://aetherlabs.art)*

- Built a platform that uses NFC to give physical artwork a digital identity, verifiable by anyone with a single tap.
- Implemented cryptographic chip authentication (NTAG 424 DNA, AES-CMAC, KMS) that rejects cloned or fake chips.
- Architected a serverless AWS backend that scales to zero when idle and runs for under $15 a month.
- Designed the PostgreSQL schema with row-level security and role-based access control across artists, galleries, and collectors.

### AI Medical Interpreter
*Genesis Centre T-Minus30 build sprint · Oct 2026, ongoing*

- Building a live two-way interpreter: patient and physician see the conversation in both languages on a shared screen, hear each translation spoken, and can hand off to a human interpreter at any time.
- Covers 13 languages in its first version, with dose read-back, comprehension checks, and consent in the patient's language.
- Keeps a hash-chained audit trail and a bilingual record that both parties verify afterwards.

### Rob Roy: venue site and CMS
- Built a marketing site and CMS for a St. John's venue in a TypeScript monorepo with Next.js, Supabase, and Drizzle.
- Staff manage events, performers, deals, galleries, and hours themselves, with Instagram sync.
- Integrated the Claude API to draft social posts in the venue's brand voice, alongside a scheduling calendar.

### Moov Shopify Storefront
- Built a custom Shopify 2.0 theme that merged two legacy websites into one pre-order storefront.
- Made all site copy editable from Shopify admin, so the client can update content without a developer.

### Transcript Processing Pipeline
- Built a two-phase pipeline that turns wealth-management meeting transcripts into CRM updates, action items, and follow-up emails.
- Designed a confidence taxonomy that routes ambiguous extractions to human review instead of auto-applying them.

---

## Education & Certifications

**BSc Computer Science, Minor in Business Administration** - Memorial University of Newfoundland, 2025

Mitacs Innovation Leader · Leadership (University of Illinois Urbana-Champaign) · Google IT Support · Meta Front-End Developer · AWS Certified Cloud Practitioner (in progress)
