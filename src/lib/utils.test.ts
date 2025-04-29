import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { timeAgo } from './utils'; // Adjust the path to your timeAgo function

describe('timeAgo function', () => {
	// Mock current date for consistent testing
	beforeEach(() => {
		// Set mock date to 2023-05-15T12:00:00Z (May 15, 2023 at noon UTC)
		const mockDate = new Date('2023-05-15T12:00:00Z');
		vi.useFakeTimers();
		vi.setSystemTime(mockDate);
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	// Test Case 1: Just Now (less than 10 seconds ago)
	it('should return "Just Now" for a date 5 seconds ago', () => {
		const date = new Date('2023-05-15T11:59:55Z'); // 5 seconds ago
		expect(timeAgo(date)).toBe('Just Now');
	});

	// Test Case 2: Edge case - exactly 10 seconds ago (boundary to minutes)
	it('should return "10 minutes ago" for a date exactly 10 seconds ago', () => {
		const date = new Date('2023-05-15T11:59:50Z'); // 10 seconds ago
		expect(timeAgo(date)).toBe('0 minutes ago');
	});

	// Test Case 3: Singular minute ago
	it('should return "1 minute ago" for a date 1 minute ago', () => {
		const date = new Date('2023-05-15T11:59:00Z'); // 1 minute ago
		expect(timeAgo(date)).toBe('1 minute ago');
	});

	// Test Case 4: Plural minutes ago
	it('should return "30 minutes ago" for a date 30 minutes ago', () => {
		const date = new Date('2023-05-15T11:30:00Z'); // 30 minutes ago
		expect(timeAgo(date)).toBe('30 minutes ago');
	});

	// Test Case 5: Edge case - just under 1 hour (3599 seconds)
	it('should return "59 minutes ago" for a date 3599 seconds ago', () => {
		const date = new Date('2023-05-15T11:00:01Z'); // 3599 seconds ago
		expect(timeAgo(date)).toBe('59 minutes ago');
	});

	// Test Case 6: Singular hour ago
	it('should return "1 hour ago" for a date exactly 1 hour ago', () => {
		const date = new Date('2023-05-15T11:00:00Z'); // 1 hour ago
		expect(timeAgo(date)).toBe('1 hour ago');
	});

	// Test Case 7: Plural hours ago
	it('should return "4 hours ago" for a date 4 hours ago', () => {
		const date = new Date('2023-05-15T08:00:00Z'); // 4 hours ago
		expect(timeAgo(date)).toBe('4 hours ago');
	});

	// Test Case 8: Edge case - just under 24 hours (86399 seconds)
	it('should return "23 hours ago" for a date 86399 seconds ago', () => {
		const date = new Date('2023-05-14T12:00:01Z'); // 86399 seconds ago
		expect(timeAgo(date)).toBe('23 hours ago');
	});

	// Test Case 9: Yesterday
	it('should return "Yesterday" for a date from yesterday', () => {
		const date = new Date('2023-05-14T12:00:00Z'); // Yesterday, same time
		expect(timeAgo(date)).toBe('Yesterday');
	});

	// Test Case 11: Same year date with day suffix
	it('should return "10th April" for a date within the same year', () => {
		const date = new Date('2023-04-10T00:00:00Z'); // April 10, 2023
		expect(timeAgo(date)).toBe('10th April');
	});

	// Test Case 12: Different year date with day suffix
	it('should return "25th December 2022" for a date from a different year', () => {
		const date = new Date('2022-12-25T00:00:00Z'); // December 25, 2022
		expect(timeAgo(date)).toBe('25th December 2022');
	});

	// Test Case 13: Day suffix edge cases (11th, 12th, 13th)
	it('should append "th" suffix to days 11, 12, and 13', () => {
		const date1 = new Date('2023-04-11T00:00:00Z'); // April 11, 2023
		const date2 = new Date('2023-04-12T00:00:00Z'); // April 12, 2023
		const date3 = new Date('2023-04-13T00:00:00Z'); // April 13, 2023
		expect(timeAgo(date1)).toBe('11th April');
		expect(timeAgo(date2)).toBe('12th April');
		expect(timeAgo(date3)).toBe('13th April');
	});

	// Test Case 14: Future date
	it('should handle future dates appropriately', () => {
		const futureDate = new Date('2023-05-16T12:00:00Z'); // 1 day in the future
		expect(timeAgo(futureDate)).toBe('Just Now'); // Since diffSec < 0, falls into "Just Now"
	});
});
