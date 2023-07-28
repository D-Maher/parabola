import { Pattern } from './pattern';
import { Clause } from '../clause';
export interface PatternOptions {
    useExpandedConditions?: boolean;
}
export declare type PatternCollection = Pattern | Pattern[] | Pattern[][];
export declare class PatternClause extends Clause {
    protected patterns: Pattern[][];
    constructor(patterns: PatternCollection, options?: PatternOptions);
    build(): string;
}
