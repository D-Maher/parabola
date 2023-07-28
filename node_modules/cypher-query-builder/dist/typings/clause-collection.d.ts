import { Clause } from './clause';
export declare class ClauseCollection extends Clause {
    protected clauses: Clause[];
    /**
     * Returns all clauses in this collection.
     * @returns {Clause[]}
     */
    getClauses(): Clause[];
    /**
     * Adds a clause to the child list.
     * @param {Clause} clause
     */
    addClause(clause: Clause): void;
    /**
     * @inheritDoc
     */
    build(): string;
}
