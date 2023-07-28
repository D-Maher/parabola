import { Clause } from '../clause';
import { Dictionary, Many } from 'lodash';
export declare type RemoveProperties = {
    labels?: Dictionary<Many<string>>;
    properties?: Dictionary<Many<string>>;
};
export declare class Remove extends Clause {
    protected labels: Dictionary<string[]>;
    protected properties: Dictionary<string[]>;
    constructor({ labels, properties }: RemoveProperties);
    build(): string;
}
