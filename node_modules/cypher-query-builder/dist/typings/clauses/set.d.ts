import { Dictionary, Many } from 'lodash';
import { Clause } from '../clause';
import { Parameter } from '../parameter-bag';
export declare type SetProperties = {
    labels?: Dictionary<Many<string>>;
    values?: Dictionary<any>;
    variables?: Dictionary<string | Dictionary<string>>;
};
export interface SetOptions {
    merge?: boolean;
}
export declare class Set extends Clause {
    protected labels: Dictionary<string[]>;
    protected values: Dictionary<Parameter>;
    protected variables: Dictionary<string | Dictionary<string>>;
    protected merge: boolean;
    protected makeLabelStatement: (labels: Many<string>, key: string) => string;
    protected makeValueStatement: (value: any, key: string) => string;
    protected makeVariableStatement: (value: string | Dictionary<string>, key: string) => string;
    constructor({ labels, values, variables }: SetProperties, options?: SetOptions);
    build(): string;
}
