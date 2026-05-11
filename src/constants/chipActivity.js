// Mock chip activity feed for the Load Chip page.
// Shape matches what the backend is expected to return:
//   { id, date, club, amount, status, reason }
// status is one of: 'success' | 'failed' | 'pending'
// amount is a number (not a formatted string) so it can be formatted in the UI.

const LOREM = 'Lorem ipsum imperdiet nulla quis at.';

export const mockChipActivity = {
  load: [
    { id: 'L-1', date: '12/12/2025 4:59 PM', club: 'DOMINION', amount: 30.59, status: 'success', reason: LOREM },
    { id: 'L-2', date: '12/12/2025 4:59 PM', club: 'Division 2', amount: 30.59, status: 'failed', reason: LOREM },
    { id: 'L-3', date: '12/12/2025 4:59 PM', club: 'Division 5', amount: 30.59, status: 'pending', reason: LOREM },
    { id: 'L-4', date: '12/12/2025 4:59 PM', club: 'Division 4', amount: 30.59, status: 'success', reason: LOREM },
  ],
  redemption: [
    { id: 'R-1', date: '12/12/2025 4:59 PM', club: 'DOMINION', amount: 50.00, status: 'success', reason: LOREM },
    { id: 'R-2', date: '12/12/2025 4:59 PM', club: 'Division 2', amount: 25.00, status: 'pending', reason: LOREM },
    { id: 'R-3', date: '12/12/2025 4:59 PM', club: 'Division 5', amount: 15.75, status: 'success', reason: LOREM },
  ],
  transfer: [
    { id: 'T-1', date: '12/12/2025 4:59 PM', club: 'Division 3', amount: 100.00, status: 'success', reason: LOREM },
    { id: 'T-2', date: '12/12/2025 4:59 PM', club: 'DOMINION', amount: 75.50, status: 'failed', reason: LOREM },
  ],
};
