import { classNames } from "./class-names"

describe('class names tests', () => {
	test('with onli first arg', () => {
		expect(classNames('test')).toBe('test')
	})
	test('with additional class', () => {
		const expected = 'test class1 class2'

		expect(classNames('test', {}, ['class1', 'class2'])).toBe(expected)
	})

	test('with mods true', () => {
		const expected = 'test class1 class2 additional'

		expect(classNames('test', { additional: true }, ['class1', 'class2'])).toBe(expected)
	})
	test('with mods false', () => {
		const expected = 'test class1 class2 additional'

		expect(classNames('test', { additional: true, red: false }, ['class1', 'class2'])).toBe(expected)
	})
	test('with mods undefined', () => {
		const expected = 'test class1 class2 additional'

		expect(classNames('test', { additional: true, red: undefined }, ['class1', 'class2'])).toBe(expected)
	})



})