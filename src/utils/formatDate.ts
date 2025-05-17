/**
 * Format date to "Month Day, Year". For example, "May 16, 2025"
 * @param date - Date string in "YYYY-MM-DD" format
 */
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};