import { Clause } from '../clause';
import { Parameter } from '../parameter-bag';
export declare class Unwind extends Clause {
    protected list: any[];
    protected name: string;
    protected listParam: Parameter;
    constructor(list: any[], name: string);
    build(): string;
}
