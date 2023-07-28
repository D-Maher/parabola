import { Dictionary, Many } from 'lodash';
import { Pattern } from './pattern';
import { PathLength } from '../utils';
export declare type RelationDirection = 'in' | 'out' | 'either';
export declare class RelationPattern extends Pattern {
    dir: RelationDirection;
    length: PathLength | undefined;
    constructor(dir: RelationDirection, name?: Many<string> | Dictionary<any> | PathLength, labels?: Many<string> | Dictionary<any> | PathLength, conditions?: Dictionary<any> | PathLength, length?: PathLength);
    build(): string;
}
