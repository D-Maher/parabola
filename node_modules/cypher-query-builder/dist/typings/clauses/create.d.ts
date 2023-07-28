import { PatternClause, PatternCollection } from './pattern-clause';
export interface CreateOptions {
    unique?: boolean;
}
export declare class Create extends PatternClause {
    protected options: CreateOptions;
    constructor(patterns: PatternCollection, options?: CreateOptions);
    build(): string;
}
