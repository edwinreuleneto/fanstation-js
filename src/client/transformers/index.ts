import {AxiosResponse} from "axios";
import {ValidationError} from "class-validator";
import {Failure, Result} from "../interface";
import {Failure as FailureTypes} from "../../values";

import * as FormData from "form-data";
import Client from "../index";

import {isNode} from "browser-or-node";

import immutable from "object-path-immutable";

function* traverseErrors(errors: ValidationError[], ...parentKeys: string[]): IterableIterator<Failure> {
    for (let {property, constraints, children} of errors) {
        if (children.length === 0) {
            for (let constraint of Object.keys(constraints)) {
                if (constraints.hasOwnProperty(constraint)) {
                    yield {
                        code: constraints[constraint],
                        message: (Client.i18n && Client.i18n.violation[constraints[constraint]]) || constraints[constraint],
                        fault: [...parentKeys, property].join(".")
                    }
                }
            }
        } else {
            yield* traverseErrors(children, ...parentKeys, property)
        }
    }
}

export function transformValidationError(errors: ValidationError[]): Result<Failure[]> {
    const failures: Failure[] = [];
    for (let failure of traverseErrors(errors)) failures.push(failure);
    return {
        ok: false,
        data: failures
    };
}

export function transformApiError(e: any): Result<Failure[]> {
    const {response, request} = e;
    if (response) {
        if (response.status === 403) {
            return {
                ok: false,
                headers: response.headers,
                data: [
                    {
                        code: FailureTypes.FORBIDDEN,
                        message: Client.i18n && Client.i18n.failure.FORBIDDEN,
                        fault: "callee"
                    }
                ]
            }
        } else if (response.data.code) {
            return {
                ok: false,
                headers: response.headers,
                data: [
                    {
                        code: response.data.code,
                        message: response.data.message,
                        fault: "callee"
                    }
                ]
            }
        } else {
            return {
                ok: false,
                headers: response.headers,
                data: [
                    {
                        code: response.statusText.replace(" ", "_").toUpperCase(),
                        message: response.statusText,
                        fault: "callee"
                    }
                ]
            }
        }
    } else if (request) {
        return {
            ok: false,
            data: [
                {
                    code: FailureTypes.CONNECTION_FAILURE,
                    message: Client.i18n && Client.i18n.failure.CONNECTION_FAILURE || undefined,
                    fault: "callee"
                }
            ]
        }
    } else {
        return {
            ok: false,
            data: [
                {
                    code: FailureTypes.UNDEFINED,
                    message: Client.i18n && Client.i18n.failure.CONNECTION_FAILURE || undefined,
                    fault: "callee"
                }
            ]
        }
    }
}

function buildFormData(formData, data: any, parentKey?: string) {
    if (
        data &&
        typeof data === "object" &&
        !(data instanceof Date) &&
        !(data instanceof Uint8Array) &&
        (isNode || !(data instanceof File))
    ) {
        Object.keys(data).forEach(key => {
            buildFormData(
                formData,
                data[key],
                parentKey
                    ? Array.isArray(data)
                    ? `${parentKey}[${key}]`
                    : `${parentKey}.${key}`
                    : key
            );
        });
    } else {
        const value = data || ""; // rever
        if (value !== "")
            formData.append(parentKey, value);
    }
}

export function jsonToFormData(data) {
    const formData = new FormData();
    buildFormData(formData, data);
    return formData;
}