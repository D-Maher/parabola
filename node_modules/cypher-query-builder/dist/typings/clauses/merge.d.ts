import { PatternClause, PatternCollection } from './pattern-clause';
export declare class Merge extends PatternClause {
    constructor(patterns: PatternCollection);
    build(): string;
}
