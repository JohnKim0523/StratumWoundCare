// Open position listings for Stratum Wound Care.
// Single source of truth shared by the Careers page (app/careers/page.tsx)
// and the careers API route (app/api/careers/route.ts).

export interface JobSection {
  heading: string;
  /** Optional paragraph text shown under the heading. */
  body?: string;
  /** Optional bullet list shown under the heading. */
  bullets?: string[];
}

export interface Job {
  /** URL / anchor friendly identifier. */
  slug: string;
  /** Value used by the application form's position <select> and the API route. */
  positionValue: string;
  title: string;
  /** Human readable position label (matches positionLabels in the API route). */
  positionLabel: string;
  location: string;
  pay: string;
  /** One line used under the title, e.g. "Pennsylvania | Texas | Montana - $750-$1,250 per day". */
  meta: string;
  summary: string;
  sections: JobSection[];
  closing: string;
}

export const woundCarePhysicianPerDiem: Job = {
  slug: 'wound-care-physician-per-diem',
  positionValue: 'wound-care-physician-per-diem',
  title: 'Wound Care Physician — Per Diem',
  positionLabel: 'Wound Care Physician — Per Diem',
  location: 'Pennsylvania | Texas | Montana',
  pay: '$750–$1,250 per day',
  meta: 'Pennsylvania | Texas | Montana · $750–$1,250 per day',
  summary:
    "Bring your wound care expertise to a flexible, high-impact per diem role. We're seeking an experienced wound care physician to join our team, providing exceptional care to patients in a home care setting.",
  sections: [
    {
      heading: 'About the Role',
      body:
        "This is an outstanding supplementary opportunity for a physician looking to diversify their practice or add flexible, well-compensated shifts to their schedule. You'll deliver specialized wound care directly to patients in the comfort of their homes, making a meaningful difference in their recovery and quality of life.",
    },
    {
      heading: "What You'll Do",
      bullets: [
        'Evaluate and treat patients with a variety of acute and chronic wounds',
        'Develop and implement individualized wound care treatment plans',
        'Apply advanced wound care techniques and treatment modalities',
        'Collaborate with home care teams to ensure continuity of care',
      ],
    },
    {
      heading: "What We're Looking For",
      bullets: [
        'Board-certified/eligible Physician with wound care experience',
        'Strong clinical knowledge of wound assessment and treatment',
        'Preferred: Experience with advanced treatment applications and modalities',
        'Comfortable working in a home care/field-based setting',
        'Active medical license in Pennsylvania, Texas, or Montana (or eligibility to obtain one)',
      ],
    },
    {
      heading: 'Compensation',
      body: '$750–$1,250 per day, commensurate with experience',
    },
    {
      heading: 'Schedule',
      body: 'Per diem — flexible scheduling to fit your availability',
    },
  ],
  closing:
    "If you're a dedicated wound care physician looking for a rewarding per diem opportunity in Pennsylvania, Texas, or Montana, we'd love to hear from you.",
};

/** All currently open listings, in display order. */
export const openJobs: Job[] = [woundCarePhysicianPerDiem];

/** Look up an open listing by the form's position value (or slug). */
export function getJobByPositionValue(value: string | null | undefined): Job | undefined {
  if (!value) return undefined;
  return openJobs.find((job) => job.positionValue === value || job.slug === value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Full job description as plain text (used for the text part of emails). */
export function jobToPlainText(job: Job): string {
  const lines: string[] = [];
  lines.push(job.title);
  lines.push(job.meta);
  lines.push('');
  lines.push(job.summary);

  for (const section of job.sections) {
    lines.push('');
    lines.push(section.heading);
    if (section.body) {
      lines.push(section.body);
    }
    if (section.bullets) {
      for (const bullet of section.bullets) {
        lines.push(`• ${bullet}`);
      }
    }
  }

  lines.push('');
  lines.push(job.closing);

  return lines.join('\n');
}

/** Full job description as simple, email-safe HTML. */
export function jobToHtml(job: Job): string {
  const parts: string[] = [];
  parts.push(`<h2 style="margin:0 0 4px 0;">${escapeHtml(job.title)}</h2>`);
  parts.push(
    `<p style="margin:0 0 16px 0;color:#6b7280;font-weight:600;">${escapeHtml(job.meta)}</p>`
  );
  parts.push(`<p style="margin:0 0 16px 0;">${escapeHtml(job.summary)}</p>`);

  for (const section of job.sections) {
    parts.push(`<h3 style="margin:20px 0 8px 0;">${escapeHtml(section.heading)}</h3>`);
    if (section.body) {
      parts.push(`<p style="margin:0 0 8px 0;">${escapeHtml(section.body)}</p>`);
    }
    if (section.bullets) {
      const items = section.bullets
        .map((bullet) => `<li style="margin-bottom:4px;">${escapeHtml(bullet)}</li>`)
        .join('');
      parts.push(`<ul style="margin:0 0 8px 0;padding-left:20px;">${items}</ul>`);
    }
  }

  parts.push(`<p style="margin:20px 0 0 0;">${escapeHtml(job.closing)}</p>`);

  return parts.join('\n');
}

/** Every open listing as plain text, separated by a rule. */
export function openJobsToPlainText(jobs: Job[] = openJobs): string {
  return jobs.map(jobToPlainText).join('\n\n------------------------------\n\n');
}

/** Every open listing as simple HTML, separated by a rule. */
export function openJobsToHtml(jobs: Job[] = openJobs): string {
  return jobs.map(jobToHtml).join('\n<hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />\n');
}
