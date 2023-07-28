import { Many } from 'lodash';
import { Clause } from '../clause';
export interface DeleteOptions {
    detach?: boolean;
}
export declare class Delete extends Clause {
    protected options: DeleteOptions;
    variables: string[];
    constructor(variables: Many<string>, options?: DeleteOptions);
    build(): string;
}
