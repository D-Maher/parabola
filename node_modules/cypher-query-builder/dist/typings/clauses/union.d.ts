import { Clause } from '../clause';
export declare class Union extends Clause {
    all: boolean;
    constructor(all?: boolean);
    build(): string;
}
