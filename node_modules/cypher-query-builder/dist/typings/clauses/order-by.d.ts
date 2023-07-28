import { Dictionary } from 'lodash';
import { Clause } from '../clause';
export declare type Direction = boolean | 'DESC' | 'desc' | 'DESCENDING' | 'descending' | 'ASC' | 'asc' | 'ASCENDING' | 'ascending' | null | undefined;
export declare type InternalDirection = 'DESC' | '';
export declare type OrderConstraint = [string, Direction] | [string];
export declare type InternalOrderConstraint = {
    field: string;
    direction: InternalDirection;
};
export declare type OrderConstraints = Dictionary<Direction>;
export declare class OrderBy extends Clause {
    constraints: InternalOrderConstraint[];
    constructor(fields: string | (string | OrderConstraint)[] | OrderConstraints, dir?: Direction);
    build(): string;
    private static normalizeDirection;
}
