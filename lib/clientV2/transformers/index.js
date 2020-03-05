"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const values_1 = require("../../values");
const FormData = require("form-data");
const index_1 = require("../index");
const browser_or_node_1 = require("browser-or-node");
function* traverseErrors(errors, ...parentKeys) {
    for (let { property, constraints, children } of errors) {
        if (children.length === 0) {
            for (let constraint of Object.keys(constraints)) {
                if (constraints.hasOwnProperty(constraint)) {
                    yield {
                        code: constraints[constraint],
                        message: (index_1.default.i18n && index_1.default.i18n.violation[constraints[constraint]]) || constraints[constraint],
                        fault: [...parentKeys, property].join(".")
                    };
                }
            }
        }
        else {
            yield* traverseErrors(children, ...parentKeys, property);
        }
    }
}
function transformValidationError(errors) {
    const failures = [];
    for (let failure of traverseErrors(errors))
        failures.push(failure);
    return {
        ok: false,
        data: failures
    };
}
exports.transformValidationError = transformValidationError;
function transformApiError(e) {
    const { response, request } = e;
    if (response) {
        let message;
        if (response.status === 400 && index_1.default.i18n && index_1.default.i18n.failure.FORBIDDEN)
            message = index_1.default.i18n.failure.FORBIDDEN;
        else if (response.data && response.data.message)
            message = response.data.message;
        else
            message = "Undefined";
        return {
            ok: false,
            headers: response.headers,
            data: [{
                    code: response.status.toString(),
                    message,
                    fault: "callee"
                }]
        };
    }
    else if (request) {
        return {
            ok: false,
            data: [
                {
                    code: values_1.Failure.CONNECTION_FAILURE,
                    message: index_1.default.i18n && index_1.default.i18n.failure.CONNECTION_FAILURE || undefined,
                    fault: "callee"
                }
            ]
        };
    }
    else {
        return {
            ok: false,
            data: [
                {
                    code: values_1.Failure.UNDEFINED,
                    message: index_1.default.i18n && index_1.default.i18n.failure.CONNECTION_FAILURE || undefined,
                    fault: "callee"
                }
            ]
        };
    }
}
exports.transformApiError = transformApiError;
function buildFormData(formData, data, parentKey) {
    if (data &&
        typeof data === "object" &&
        !(data instanceof Date) &&
        !(data instanceof Uint8Array) &&
        (browser_or_node_1.isNode || !(data instanceof File))) {
        Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey
                ? Array.isArray(data)
                    ? `${parentKey}[${key}]`
                    : `${parentKey}.${key}`
                : key);
        });
    }
    else {
        const value = data || ""; // rever
        if (value !== "")
            formData.append(parentKey, value);
    }
}
function jsonToFormData(data) {
    const formData = new FormData();
    buildFormData(formData, data);
    return formData;
}
exports.jsonToFormData = jsonToFormData;
//# sourceMappingURL=index.js.map