import { ListenerOptions } from './listener-options.interface';
import { off } from './off';

export function on(typeSet: string, handle: any, option?: ListenerOptions);
export function on(typeSet: string, factorSelector: any, handle: any, option?: ListenerOptions) {
    const target = this;
    if (typeof factorSelector === 'function') {
        option = handle;
        handle = factorSelector;
        factorSelector = null;
    }
    target.listeners = target.listeners || [];
    const listen = function (event: any) {
        let $thisArg = target;
        // event delegation
        if (factorSelector) {
            let factor;
            if (typeof factorSelector === 'string') {
                factor = event.target.closest(factorSelector);
            } else if (event.target === factorSelector) {
                factor = event.target;
            }
            if (factor) {
                $thisArg = factor;
            } else {
                return;
            }
        }
        if (option && option.once) off.call(target, typeSet, factorSelector, handle, option);
        let detail = event.detail;
        detail = Array.isArray(detail) ? detail : [detail];
        if (handle) handle.call($thisArg, event, ...detail);
    };
    for (const eachTypeSet of typeSet.split(' ')) {
        const splits = eachTypeSet.split('.');
        const type = splits[0];
        target.listeners.push({
            typeSet: eachTypeSet,
            type,
            factorSelector,
            handle,
            option: option || false,
            listen
        });
        target.addEventListener(type, listen, option || false);
    }
    return target;
};