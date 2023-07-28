import { ParameterContainer } from './parameter-container';
import { Dictionary } from 'lodash';
export declare type QueryObject = {
    query: string;
    params: Dictionary<any>;
};
export declare abstract class Clause extends ParameterContainer {
    /**
     * Turns the clause into a query string.
     * @return {string} Partial query string.
     */
    abstract build(): string;
    /**
     * Turns the clause into a query string.
     * @return {string} Partial query string.
     */
    toString(): string;
    /**
     * Turns the clause into a query object.
     * @return {object} Query object with two parameters: query and params.
     */
    buildQueryObject(): QueryObject;
    /**
     * Turns the clause into a query string with parameters
     * interpolated into the string. For debugging purposes only.
     * @return {string}
     */
    interpolate(): string;
}
