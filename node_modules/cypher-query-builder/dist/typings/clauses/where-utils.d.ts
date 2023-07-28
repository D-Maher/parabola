import { Dictionary, Many } from 'lodash';
import { ParameterBag } from '../parameter-bag';
import { Comparator } from './where-comparators';
export declare type Condition = any | Comparator;
export declare type Conditions = Dictionary<Many<Condition>>;
export declare type NodeConditions = Dictionary<Many<Conditions>>;
export declare type AnyConditions = Many<NodeConditions | Conditions | Condition>;
export declare type AndConditions = NodeConditions | Conditions;
export declare type OrConditions = (NodeConditions | Conditions | Condition)[];
export declare const enum Precedence {
    None = 0,
    Or = 1,
    Xor = 2,
    And = 3,
    Not = 4
}
export declare abstract class WhereOp {
    abstract evaluate(params: ParameterBag, precedence?: Precedence, name?: string): string;
}
export declare function stringifyCondition(params: ParameterBag, condition: Condition, name?: string): string;
export declare function stringCons(params: ParameterBag, conditions: Many<NodeConditions | Conditions | Condition>, precedence?: Precedence, name?: string): string;
export declare function combineNot(params: ParameterBag, conditions: AnyConditions, precedence?: Precedence, name?: string): string;
export declare function combineOr(params: ParameterBag, conditions: OrConditions, precedence?: Precedence, name?: string): string;
export declare function combineXor(params: ParameterBag, conditions: OrConditions, precedence?: Precedence, name?: string): string;
export declare function combineAnd(params: ParameterBag, conditions: AndConditions, precedence?: Precedence, name?: string): string;
