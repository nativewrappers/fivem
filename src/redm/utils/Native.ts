/**
 * Just a short hand for Citizen.invokeNative
 * @param hash
 * @param args
 * @returns
 */
export const _N = <T = void>(hash: string, ...args: InputArgument[]): T => {
    return Citizen.invokeNative<T>(hash, ...args);
};
