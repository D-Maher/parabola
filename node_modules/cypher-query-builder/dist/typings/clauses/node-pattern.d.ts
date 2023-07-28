import { Dictionary, Many } from 'lodash';
import { Pattern } from './pattern';
export declare class NodePattern extends Pattern {
    constructor(name?: Many<string> | Dictionary<any>, labels?: Many<string> | Dictionary<any>, conditions?: Dictionary<any>);
    build(): string;
}
