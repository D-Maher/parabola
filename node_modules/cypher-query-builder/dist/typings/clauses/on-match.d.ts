import { Set } from './set';
import { Clause } from '../clause';
export declare class OnMatch extends Clause {
    protected clause: Set;
    constructor(clause: Set);
    build(): string;
}
