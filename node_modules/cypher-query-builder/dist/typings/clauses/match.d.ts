import { PatternClause, PatternCollection } from './pattern-clause';
export interface MatchOptions {
    optional?: boolean;
}
export declare class Match extends PatternClause {
    protected options: MatchOptions;
    constructor(patterns: PatternCollection, options?: MatchOptions);
    build(): string;
}
