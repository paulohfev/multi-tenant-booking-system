/**
 * Format date to "Month Day, Year". For example, "May 16, 2025"
 * @param date - Date string in "YYYY-MM-DD" format
 */
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Get current date in "YYYY-MM-DD" format
 * @returns Current date in format "YYYY-MM-DD"
 */
export const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0]
}

/**
 * Get current time in 24-hour format (HH:mm) for time input
 * @returns Current time in format "HH:mm"
 */
export const getCurrentTime = () => {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })
}
