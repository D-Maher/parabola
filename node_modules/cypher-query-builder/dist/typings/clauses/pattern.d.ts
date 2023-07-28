import { Dictionary, Many } from 'lodash';
import { Clause } from '../clause';
import { Parameter } from '../parameter-bag';
export declare abstract class Pattern extends Clause {
    protected options: {
        expanded: boolean;
    };
    protected useExpandedConditions: boolean | undefined;
    protected conditionParams: Dictionary<Parameter> | Parameter;
    protected name: string;
    protected labels: string[];
    protected conditions: Dictionary<any>;
    constructor(name?: Many<string> | Dictionary<any>, labels?: Many<string> | Dictionary<any>, conditions?: Dictionary<any>, options?: {
        expanded: boolean;
    });
    setExpandedConditions(expanded: boolean): void;
    rebindConditionParams(): void;
    getNameString(): string;
    getLabelsString(relation?: boolean): string;
    getConditionsParamString(): string;
}
