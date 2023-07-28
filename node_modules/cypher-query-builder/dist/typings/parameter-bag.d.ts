import { Dictionary } from 'lodash';
export declare class Parameter {
    name: string;
    value: string;
    constructor(name: string, value: string);
    toString(): string;
}
export declare class ParameterBag {
    protected parameterMap: Dictionary<Parameter>;
    /**
     * Constructs a unique name for this parameter bag.
     * @return {string}
     */
    getName(name?: string): string;
    /**
     * Adds a new parameter to this bag.
     * @param {*} value
     * @param {string|undefined} name
     * @return {Parameter} Newly created parameter object.
     */
    addParam(value: any, name?: string): Parameter;
    /**
     * Adds an existing parameter to this bag. The name may be changed if
     * it is already taken, however, the Parameter object will not be recreated.
     * @param {Parameter} param
     * @return {Parameter}
     */
    addExistingParam(param: Parameter): Parameter;
    /**
     * Returns the params in a name: value object suitable for putting into a
     * query object.
     * @return {object}
     */
    getParams(): Dictionary<any>;
    /**
     * Removes a parameter from the internal map.
     * @param {string} name
     */
    deleteParam(name: string): void;
    /**
     * Copies all parameters from another bag into this bag.
     */
    importParams(other: ParameterBag): void;
    /**
     * Returns a parameter with the given name.
     */
    getParam(name: string): Parameter;
}
