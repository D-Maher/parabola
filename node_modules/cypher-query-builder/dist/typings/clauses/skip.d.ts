import { Clause } from '../clause';
import { Parameter } from '../parameter-bag';
export declare class Skip extends Clause {
    amount: number;
    protected amountParam: Parameter;
    constructor(amount: number);
    build(): string;
}
