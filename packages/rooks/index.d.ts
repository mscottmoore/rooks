declare module "online/src/index" {
    type Optional<T> = T | undefined;
    /**
     * Online hook
     * @returns {boolean} The value of navigator.onLine
     */
    function useOnline(): Optional<boolean>;
    export default useOnline;
}
declare module "rooks/index" {
    import useOnline from "online/src/index";
    export { useOnline };
}
