import { AndConditions, AnyConditions, OrConditions, Precedence, WhereOp } from './where-utils';
import { ParameterBag } from '../parameter-bag';
export declare const operators: {
    and: typeof and;
    or: typeof or;
    xor: typeof xor;
    not: typeof not;
};
/**
 * `AND` operator to use in where clauses. This is the default operator when
 * using conditions so you will probably never need to use this unless you'd
 * like to make it explicit.
 *
 * ```
 * query.where(and({
 *   'person.name': 'Steve',
 *   'person.age': greaterThan(18),
 * }));
 * // WHERE person.name = 'Steve' AND person.age > 18
 * ```
 * Note that this method only accepts a dictionary of conditions.
 *
 * @param {AndConditions} conditions
 * @returns {WhereAnd}
 */
export declare function and(conditions: AndConditions): WhereAnd;
export declare class WhereAnd extends WhereOp {
    protected conditions: AndConditions;
    constructor(conditions: AndConditions);
    evaluate(params: ParameterBag, precedence?: Precedence, name?: string): string;
}
/**
 * `OR` operator to use in where clauses. This is the default operator when
 * supplying an array to where so you will probably never need to use this
 * unless you'd like to make it explicit.
 *
 * ```
 * query.where(or([
 *   { 'person.name': 'Steve' },
 *   { 'person.age': greaterThan(18) },
 * ]));
 * // WHERE person.name = 'Steve' OR person.age > 18
 * ```
 * Note that this method only accepts an array of conditions.
 *
 * @param {OrConditions} conditions
 * @returns {WhereOr}
 */
export declare function or(conditions: OrConditions): WhereOr;
export declare class WhereOr extends WhereOp {
    protected conditions: OrConditions;
    constructor(conditions: OrConditions);
    evaluate(params: ParameterBag, precedence?: Precedence, name?: string): string;
}
/**
 * `XOR` operator to use in where clauses.
 *
 * ```
 * query.where(xor([
 *   { 'person.name': 'Steve' },
 *   { 'person.age': greaterThan(18) },
 * ]));
 * // WHERE person.name = 'Steve' XOR person.age > 18
 * ```
 * Note that this method only accepts an array of conditions.
 *
 * @param {OrConditions} conditions
 * @returns {WhereXor}
 */
export declare function xor(conditions: OrConditions): WhereXor;
export declare class WhereXor extends WhereOp {
    protected conditions: OrConditions;
    constructor(conditions: OrConditions);
    evaluate(params: ParameterBag, precedence?: Precedence, name?: string): string;
}
/**
 * `NOT` operator to use in where clauses.
 *
 * ```
 * query.where(not([
 *   { 'person.name': 'Steve' },
 *   { 'person.age': greaterThan(18) },
 * ]));
 * // WHERE NOT (person.name = 'Steve' AND person.age > 18)
 * ```
 * Note that this method only accepts an array of conditions.
 *
 * @param {OrConditions} conditions
 * @returns {WhereXor}
 */
export declare function not(conditions: AnyConditions): WhereNot;
export declare class WhereNot extends WhereOp {
    protected conditions: AnyConditions;
    constructor(conditions: AnyConditions);
    evaluate(params: ParameterBag, precedence?: Precedence, name?: string): string;
}
