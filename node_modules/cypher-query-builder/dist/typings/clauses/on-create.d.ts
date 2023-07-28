import { Set } from './set';
import { Clause } from '../clause';
export declare class OnCreate extends Clause {
    protected clause: Set;
    constructor(clause: Set);
    build(): string;
}
