import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import {
  computeWeeklyCounts,
  computeBeltAverage,
  computeRequiredDays,
} from '@/utils/belt';

/**
 * The Tracker page allows users to log their office visits by date, view
 * weekly summaries, compute their current BELT average and plan ahead for
 * upcoming time off. Entries are stored in localStorage so they persist
 * between sessions. The BELT average is recomputed whenever entries
 * change. Planning a week to skip shows how many extra days are required
 * in preceding weeks to maintain the target average.
 */
const Tracker = () => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('belt-tracker-entries');
    return saved ? JSON.parse(saved) : [];
  });
  const [date, setDate] = useState('');
  const [target, setTarget] = useState(3);
  const [skipDate, setSkipDate] = useState('');

  // Persist entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('belt-tracker-entries', JSON.stringify(entries));
  }, [entries]);

  // Compute weekly counts and BELT average
  const weeklyCounts = computeWeeklyCounts(entries);
  const beltAverage = computeBeltAverage(weeklyCounts);

  // Compute required days if a week to skip is specified
  const requiredDays = skipDate
    ? computeRequiredDays(weeklyCounts, target, new Date(skipDate))
    : 0;

  // Handler to add a new entry
  const addEntry = () => {
    if (!date) return;
    setEntries([...entries, { date }]);
    setDate('');
  };

  return (
    <div className="space-y-6">
      {/* Entry form */}
      <Card>
        <CardContent className="space-y-4">
          <h1 className="text-2xl font-bold text-indigo-700">Log your office visits</h1>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
            <div className="flex flex-col">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date you went to the office
              </label>
              <input
                type="date"
                id="date"
                className="block w-full border border-gray-300 rounded px-3 py-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={addEntry}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Add Day
              </button>
            </div>
          </div>
          {entries.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-medium text-gray-800 mb-2">Logged days</h2>
              <ul className="list-disc list-inside text-gray-700">
                {entries.map((entry, idx) => (
                  <li key={idx}>{new Date(entry.date).toLocaleDateString()}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Weekly summary and BELT calculation */}
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-700">Weekly Summary & BELT</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyCounts.map(({ weekStart, count }) => ({
                  name: new Date(weekStart).toLocaleDateString(),
                  count,
                }))}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <ReferenceLine
                  y={target}
                  stroke="green"
                  strokeDasharray="3 3"
                  label={{ value: `${target} days`, position: 'left', offset: 10 }}
                />
                <Bar dataKey="count" name="Office days" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-gray-800">
            <strong>Current BELT average:</strong> {beltAverage.toFixed(2)} days/week
          </p>
        </CardContent>
      </Card>

      {/* Planning section */}
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-700">Plan a trip or work from home</h2>
          <p className="text-gray-700">
            Planning to be away for a week? Pick the first day of the week you'll be absent.
            We'll estimate how many additional office days you need in the prior weeks to
            maintain your BELT average of {target} days/week.
          </p>
          <div className="flex flex-col md:flex-row items-end gap-4">
            <div className="flex flex-col">
              <label htmlFor="skipDate" className="block text-sm font-medium text-gray-700 mb-1">
                Week to skip
              </label>
              <input
                type="date"
                id="skipDate"
                className="block w-full border border-gray-300 rounded px-3 py-2"
                value={skipDate}
                onChange={(e) => setSkipDate(e.target.value)}
              />
            </div>
          </div>
          {skipDate && (
            <p className="text-gray-800">
              To keep your BELT average at {target} days/week, you need to add{' '}
              <strong>{requiredDays}</strong> extra day{requiredDays !== 1 ? 's' : ''}{' '}
              to your schedule in the weeks before{' '}
              {new Date(skipDate).toLocaleDateString()}.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Tracker;
