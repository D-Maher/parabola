import { Clause } from '../clause';
export declare class Raw extends Clause {
    clause: string;
    constructor(clause: string | TemplateStringsArray, ...args: any[]);
    build(): string;
}
