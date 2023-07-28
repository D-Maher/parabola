import { Clause } from '../clause';
import { AnyConditions } from './where-utils';
export declare class Where extends Clause {
    conditions: AnyConditions;
    constructor(conditions: AnyConditions);
    build(): string;
}
