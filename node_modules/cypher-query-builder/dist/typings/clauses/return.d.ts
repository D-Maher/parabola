import { Many } from 'lodash';
import { Term, TermListClause } from './term-list-clause';
export interface ReturnOptions {
    distinct?: boolean;
}
export declare class Return extends TermListClause {
    protected options: ReturnOptions;
    constructor(terms: Many<Term>, options?: ReturnOptions);
    build(): string;
}
