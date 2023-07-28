import { Parameter, ParameterBag } from './parameter-bag';
import { Dictionary } from 'lodash';
export declare class ParameterContainer {
    protected parameterBag: ParameterBag;
    useParameterBag(newBag: ParameterBag): void;
    getParams(): Dictionary<any>;
    /**
     * Adds a new parameter to the bag.
     * @param {*} value
     * @param {string|undefined} name
     * @return {Parameter} Newly created parameter object.
     */
    addParam(value: any, name?: string): Parameter;
    getParameterBag(): ParameterBag;
}
