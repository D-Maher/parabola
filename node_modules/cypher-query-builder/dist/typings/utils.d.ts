import { Many } from 'lodash';
/**
 * Converts a string to camel case and ensures it is unique in the provided
 * list.
 * @param {string} str
 * @param {Array<string>} existing
 * @return {string}
 */
export declare function uniqueString(str: string, existing: string[]): string;
/**
 * Converts a Javascript value into a string suitable for a cypher query.
 * @param {object|Array|string|boolean|number} value
 * @return {string}
 */
export declare function stringifyValue(value: any): string;
/**
 * Converts labels into a string that can be put into a pattern.
 *
 * @param {string|array<string>} labels
 * @param relation When true, joins labels by a | instead of :
 * @return {string}
 */
export declare function stringifyLabels(labels: Many<string>, relation?: boolean): string;
export declare type PathLength = '*' | number | [number | null | undefined] | [number | null | undefined, number | null | undefined];
/**
 * Converts a path length bounds into a string to put into a relationship.
 * @param  {Array<int>|int} bounds An array of bounds
 * @return {string}
 */
export declare function stringifyPathLength(bounds?: PathLength): string;
