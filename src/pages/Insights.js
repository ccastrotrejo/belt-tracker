import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

/**
 * The Insights page introduces the BELT (Best Eight in the Last Twelve) metric.
 * It explains how the metric is calculated and why it’s used. The content is
 * organised into cards for readability. A citation is included to credit
 * external sources for the formula. Replace the citation with a footnote or
 * remove it if not desired in your UI.
 */
const Insights = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="space-y-4">
          <h1 className="text-3xl font-bold text-indigo-700">What is BELT?</h1>
          <p className="text-gray-700">
            BELT stands for <strong>Best Eight in the Last Twelve</strong>. It’s a rolling
            metric that averages your eight highest weekly office attendance counts over
            the most recent twelve weeks. By focusing on your best eight weeks, BELT
            protects your attendance score from occasional low‑attendance weeks due to
            approved time off (DTO, PTO, holidays or business travel). The eight
            highest weeks are chosen from the last twelve calendar weeks, and the
            average is calculated to give your “BELT” attendance value.
          </p>
          <p className="text-gray-700">
            For example, if you came to the office 4–5 days per week for four weeks,
            took two weeks off, then returned to 3–4 days per week for six weeks,
            your BELT average will be based on the top eight weeks (4–5 days for
            weeks 1–4 and 3–4 days for weeks 7–12) and ignore the two zero‑attendance
            weeks. This ensures you aren’t penalised for taking approved leave or
            going on business trips.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-700">How to calculate BELT</h2>
          <p className="text-gray-700">
            To calculate BELT, first tally how many days you badge into the office
            each week. Consider the most recent twelve weeks and pick the eight
            weeks with the highest counts. Take the average of those eight values.
            Mathematically, if <em>w<sub>1</sub>, w<sub>2</sub>, …, w<sub>12</sub></em> are your weekly
            counts, then:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm text-gray-900 overflow-auto">
            <code>
              BELT = average of the largest eight values among w₁…w₁₂
            </code>
          </pre>
          <p className="text-gray-700">
            In Excel, you can compute this using the <code>AVERAGE</code> and
            <code>LARGE</code> functions like so:
            <br />
            <code className="inline-block bg-gray-100 rounded px-2 py-1 text-sm text-gray-800">
              =AVERAGE(LARGE(range, {1,2,3,4,5,6,7,8}))
            </code>
            &nbsp;<span className="text-xs text-gray-500">(source:&nbsp;Statology)
              <a href="https://www.statology.org/excel-average-top-n-values/" target="_blank" rel="noopener noreferrer" className="underline">
                �【905847427827900†L118-L125】
              </a>
            </span>
          </p>
          <p className="text-gray-700">
            On the next page, you can log your office days and see your BELT
            automatically. You’ll also find a planning tool to help you stay on
            track before taking time off or working from home.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Insights;
