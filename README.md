# Yalin Liu's Homepage — October 2026 Update

This repository contains the multilingual homepage updates prepared by Mingyang Wang (Mike), incorporating the meeting instructions, supplied update documents, and subsequent review decisions. It covers the English, Simplified Chinese, and Traditional Chinese versions of Biography, Resume, Research, Teams, Teaching, and Contact, together with the associated articles and member pages.

**Update branch:** [`mike/homepage-refresh`](https://github.com/yalin-liu/yalin-liu.github.io/tree/mike/homepage-refresh)

**Status:** Approved for production publication on **19 October 2026**. The live website is built from `master` with the existing GitHub Pages configuration.

## Open the preview

| Language | Independent review website |
| --- | --- |
| English | [Open English preview](https://mikeahhh.github.io/yalin-homepage-preview/) |
| Simplified Chinese | [Open Simplified Chinese preview](https://mikeahhh.github.io/yalin-homepage-preview/zh-CN/) |
| Traditional Chinese | [Open Traditional Chinese preview](https://mikeahhh.github.io/yalin-homepage-preview/zh-TW/) |

Use the sidebar to review the six main sections and the language controls to switch between corresponding pages. The preview is accessible without running a local server.

- [Review the website changes](https://github.com/yalin-liu/yalin-liu.github.io/compare/b40ddf8b0865e0b5b60c2e795342e227bca6a1b8...5ab00986f291e76f54673d8f2af53b6463453e9c)
- [Preview repository and build provenance](https://github.com/Mikeahhh/yalin-homepage-preview)
- [Production website](https://yalin-liu.github.io/)

The website changes described below are contained in commit [`5ab0098`](https://github.com/yalin-liu/yalin-liu.github.io/commit/5ab00986f291e76f54673d8f2af53b6463453e9c), based on production commit `b40ddf8`. Later README or branch-name updates do not change the rendered website.

## Update summary

### 1. Teaching and FYP supervision

Reconciled the 11 face-to-face course rows specified in the meeting materials across all three languages. The changes comprise six added rows and four amended rows; the existing Spr-2026 COMP S382F row remains unchanged. The table below lists the changed or added records.

| Term | Course | Update |
| --- | --- | --- |
| Aut-2025 | COMP 3810SEF | Corrected course code; 3 credits, class size 84, tutor. |
| Aut-2025 | COMP S460F | Updated role wording to CC, lecturer and tutor with 1 TA. |
| Aut-2025 | COMP S456F | Updated supervision to 5 group projects and examination to 9 group projects. |
| Aut-2025 | COMP 4570SEF | Added 6-credit capstone course; examiner for 10 individual projects. |
| Spr-2026 | COMP 4820SEF | Updated class size to 144 and role to CC and lecturer with 1 TA, marked new. |
| Aut-2026 | COMP 3810SEF | Added 3-credit course; class size 492; CC and lecturer with 4 TAs. |
| Aut-2026 | COMP S381W | Added 5-credit course; class size 8; CC. |
| Aut-2026 | COMP S460W | Added 5-credit course; class size 2; CC. |
| Aut-2026 | COMP S456F + COMP 4560SEF | Added combined 10-credit and 6-credit entry; supervisor for 5 group projects; examiner count remains unspecified. |
| Aut-2026 | COMP 4570SEF | Added 6-credit capstone course; examiner count remains unspecified. |

Other teaching updates:

- Removed one exact duplicate Aut-2024 COMP S456F row. The face-to-face table now contains **25 records**.
- Updated the headers to `Term`, `Code (credit)`, `Title`, `Class size (My teaching)`, and `My Roles (Remarks)`; supported combined course codes and separate workload lines.
- Added Aut-2026 distance-learning coordination for IT S101 (10 credits, 1 student, CC) and IT 1010SED (6 credits, 16 students, CC), bringing that table to **9 records**.
- Updated the 2025/26 FYP descriptions and added five 2026/27 group entries explicitly marked `Pending.`; the list now contains **22 FYP records**. No descriptions were invented for pending groups.
- Standardized `YY/YY - Group N` formatting and the parenthesized `(Yearly Selected FYP)` links. The selected projects are **2022/23 Group 3 — GreenStar**, **2024/25 Group 3 — NODES**, and **2025/26 Group 1 — UAV Rescue System**. NODES belongs to Group 3; Group 2 remains the Electronic Health Record Sharing project.
- Corrected Django, Flask and calendar spelling in the teaching content.
- Retained the English course/FYP body text on the Chinese pages as agreed; fixed the Traditional Chinese data-language key and synchronized the rendered tables.

### 2. Research grants and resume

- Added **G12**, *Pinching Antenna-Driven 6G Networks: Pioneering Reconfigurable Connectivity through Modelling, Optimization, and Real-World Integration*: Co-PI; RGC IDS-CRG; **HK$2,857,131**; **1 January 2027–31 December 2029**; project **UGC/IDS(C)16/E01/26**; linked to the official funding list.
- Updated the four approved project periods using the selected university records:

| Project | Reviewed period |
| --- | --- |
| G01 | September 2017–October 2017 |
| G02 | October 2018–October 2022 |
| G05 | October 2023–September 2024 |
| G06 | December 2023–March 2025 |

- Replaced the outdated G01/G02 destinations, which led to unrelated content, with the relevant research-group project listing.
- Synchronized all **12 project descriptions** between the shared data and the separate Chinese Resume markup. Preserved the specified roles, including `Sole PI`, `Co-I`, and `Co-PI`.
- Corrected the university name to **Chongqing University of Posts and Telecommunications**.
- Used the original undergraduate thesis cover title for the Simplified and Traditional Chinese entries, retaining the existing English title and thesis link.
- Removed the public master's-thesis link and excluded that PDF from the website build because the available file is a proposal and its final-version status is unconfirmed. The source file and thesis title are retained.
- Updated the NCIC professional-service link to the relevant 2025 workshop page; corrected Chinese award translations and professional-service descriptions.

### 3. Publications and research presentation

The reviewed collection contains **32 records: 12 journal papers, 18 conference papers, 1 patent, and 1 preprint**.

New conference entries:

- **C18:** *A User-Triggered UAV Dispatching System for Precise and Timely Mountain Search Missions* — accepted at TNI-Meta 2026, co-located with IEEE MetaCom 2026. Added the author sequence, corresponding-author marker, workshop/conference information, Xi'an location, conference date range, and real arXiv link.
- **C17:** *Decentralized Federated Learning Under Unreliable Communication With Time-Varying Directed Topologies* — accepted at IEEE GLOBECOM 2026, Macau, 7–11 December 2026. Added the supplied bibliographic details; no paper URL is fabricated where none is available.

Updates to existing records:

- **C16 / MASS 2026:** Added the reviewed conference labels and localized conference names. This paper already existed in `master`; it is not a newly added paper in this branch.
- **C15 / Sky-Ear, SPAWC 2026:** Preserved accepted status, added the corresponding-author marker and conference labels, linked to arXiv version 3, and displayed the full correction note. The note concerns the Figure 3 x-axis display; it does not claim that the numerical results or curves changed.
- **J07 / JSAC SAGIN:** Displayed one clearly labelled corrected-version link with the complete Equation (3c) explanation. Resume and Research use the same correction-note rendering; the research-card title no longer duplicates the corrected-version link.
- Reconciled the approved EI Compendex, Scopus, and CCF labels and their formatting, including **BlockSys: EI Compendex, Scopus, CCF C**, and the approved ICC/WCNC additions. These are conference/series labels, not a claim of independently verified indexing for every individual paper.
- Corrected author names in existing records: **Zhiguo Ding**, **Qubeijian Wang** in *Wireless Powering Internet of Things with UAVs: Challenges and Opportunities*, and **Zhongjie Li**.
- Corrected DOI `10.1016/j.comcom.2020.03.017`; normalized the Chinese IoT article DOI punctuation and corrected its year from 2020 to **2019**.
- Corrected the preprint date from December 2026 to **19 December 2025**.
- Removed obsolete accepted/early-access wording where the verified publication record had advanced; completed the TVT volume, issue and page range (**75(9), 21902–21907**).
- Distinguished article numbers **111126** and **9930608** from page ranges.
- Replaced the incorrect GLOBECOM call-for-papers attachment and two generic conference-homepage destinations with IEEE publication pages for *Connectivity Analysis of UAV-To-Satellite Communications*, *Ear in the Sky*, and *Deception Against Reactive Jammer*, including DOI fields and accurate publisher-page labels.
- Kept **Research sorted by actual publication/conference dates**, including date ranges, while preserving the **curated conference numbering in Resume**. Journal numbering follows the corrected chronological records.
- Added shared publication-display helpers for translated dates, locations, citation punctuation, link labels, correction notes and date comparison. Missing paper links render as text rather than clickable placeholders.

### 4. English, Simplified Chinese and Traditional Chinese consistency

- Reviewed Chinese titles and descriptions for all 32 research records and 12 projects against the English meaning; completed missing translations and corrected Simplified/Traditional character mixing.
- Harmonized research terminology, including pinching antennas, one-shot federated learning, integrated sensing and communications, and UAV dispatching. Preserved author names, identifiers and agreed role abbreviations.
- Corrected the Chinese biography's lecturer end date to **December 2024**, aligned the project-funding wording, and refined the award, invention and research descriptions.
- Removed conflicting duplicate impact-factor numbers from the biography while retaining the publication list's year-specific metrics; corrected the journal name **IEEE Communications Magazine**.
- Fixed Traditional Chinese language detection in the sidebar, loading message, social-links section and copyright notice, and corrected Chinese stylesheet selection.
- Localized research labels, dates, places, pagination accessibility labels and contact-link tooltips; set page-language metadata correctly.
- Added appropriate Simplified and Traditional Chinese font fallbacks and improved word wrapping without forcing breaks inside ordinary words.
- Added Simplified and Traditional Chinese routes for the JSAC correction and recruitment articles, with translated titles, article content and navigation, while retaining the English routes and historical recruitment facts. Replaced the JSAC article's obsolete `Coming soon` content with the corrected paper and explanation. Language switching now preserves the corresponding article or member page.

### 5. Layout, navigation and build hygiene

- Corrected heading hierarchy to one page-level `h1` with logical `h2`/`h3` sections, retaining the intended visual sizes.
- Reserved desktop space beneath the fixed language switcher on article pages, preventing title overlap.
- Added build-version parameters to shared CSS URLs so ordinary refreshes load the current styles.
- Added focusable table-scroll containers, visible keyboard focus and localized overflow hints; removed the browser zoom restriction.
- Kept three-language navigation, publication categories, pagination and teaching accordions functional.
- Excluded local working notes, README/deployment helper files, the unconfirmed master's-thesis PDF and the incorrect call-for-papers PDF from the public build. The excluded PDFs remain in the source repository; meeting materials and detailed audit evidence are retained separately.

## Deliberately retained or pending

These points are explicit review decisions; uncertain information has not been treated as resolved.

| Item | Current treatment |
| --- | --- |
| School-supplied names and wording | Retain the specified AR FYP wording, the existing `International Conference of Communications` wording, and the G03 title without inserting `Data`. Do not replace them based on stylistic preference. |
| Master's thesis | Final version unconfirmed; keep its public link removed and the file excluded from the website build. |
| Aut-2024 COMP S81SEF | Course-code question deferred; retain the current entry. |
| Conference indexing / workshop timing | C18 has no added EI/Scopus claim; C10 remains EI-only and C01 Scopus-only. The precise C18 workshop session time remains unconfirmed; the displayed dates refer to the co-located conference range. |
| Historical impact factors and quartiles | Retain the existing year-specific values; no new reassessment was requested. |
| Seven previously restricted external URLs | Retain original destinations following Mike's manual confirmation; do not describe them as newly verified by an automated check. |
| Future FYPs and unspecified examiner counts | Keep `Pending.` or unspecified values; do not invent details. |
| Mobile | Outside the final desktop acceptance scope. |

## Validation completed on 19 October 2026

| Check | Recorded result |
| --- | --- |
| Meeting/material requirements | 102 checks passed against the supplied sources and approved exceptions. |
| Text and language review | 314 checks passed. |
| Desktop layout | 27 content pages at 1024, 1280 and 1440 px: 81 page/width combinations checked. |
| Research behavior | 30 category/pagination states checked; all 32 records accounted for. |
| External destinations | 64 unique URLs: 57 checked against target content/PDFs; 7 retained on manual confirmation. |
| Bibliographic evidence | 14 DOI title/author-order checks, the Chinese original PDF, and 3 fixed GitHub PDF-object hashes checked. |
| Independent preview paths | 432 static/dynamic/data/feed/CSS references checked after subpath adaptation. |
| Live deployment | 69 served files matched published hashes; 27 actual page routes, 382 static local references, 33 anchor combinations and 13 PDF signatures passed. |
| Build exclusions | 8 excluded paths returned 404 on the preview. |
| Browser interaction | Language switching, research filtering/pagination and teaching expansion passed; no failed images, page-level horizontal overflow or captured console warnings/errors on the 27-page live check. |
| Production preservation | Teacher's `master` and Pages configuration, the teacher's three homepages, and Mike's personal homepage/repository settings remained unchanged during preview publication. |

These results describe the reviewed snapshot and stated acceptance scope. They do not resolve the pending items above or guarantee that third-party websites will never change.

## Source and maintenance guide

| Area | Main files |
| --- | --- |
| Biography, publications, projects, teaching, teams | `_data/biography.json`, `_data/publications.json`, `_data/resume.json`, `_data/teaching.json`, `_data/teams.json` |
| Chinese Resume project markup | `zh-CN/resume.md`, `zh-TW/resume.md` — keep aligned with the shared project data. |
| Publication formatting and sorting | `assets/js/publication-display.js`, `_layouts/resume.html`, `_layouts/research.html` |
| Shared UI and language switching | `_includes/`, `_layouts/`, `assets/css/` |
| Public build configuration | `_config.yml` |

Keep stable publication IDs when editing records; display numbers can change with ordering. Mike's separately published personal site is maintained in its own repository; the local member pages here do not automatically update that site.

### Run locally

The reviewed build used Ruby **3.3.12** and Jekyll **4.4.1**. Install Ruby and Bundler, then run:

```sh
git clone --branch master https://github.com/yalin-liu/yalin-liu.github.io.git
cd yalin-liu.github.io
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --disable-disk-cache
```

Open `http://127.0.0.1:4000/`, `/zh-CN/`, or `/zh-TW/`. For a build without serving:

```sh
bundle exec jekyll build --disable-disk-cache
```

The existing Docker setup is also retained (`docker compose up`); it was not the environment used for this acceptance run.

### Production and preview deployment

The production site at [yalin-liu.github.io](https://yalin-liu.github.io/) publishes **`master` at `/`**. The approved October 2026 update uses that existing publishing configuration.

The independent preview publishes prebuilt **`docs/` from `main`** in `Mikeahhh/yalin-homepage-preview`, with `.nojekyll`. Its build uses `url: https://mikeahhh.github.io` and `baseurl: /yalin-homepage-preview`; four JSAC corrected-PDF references are adapted only in the preview copy so they stay inside that subpath. The teacher's root-site source retains its original paths.

The preview is a fixed snapshot, not an automatic deployment of every future commit. After a website change, rebuild and verify all three languages before updating it. Production updates are published from `master`; updating the independent preview does not update the production site.
