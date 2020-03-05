export interface StaticallyConstructable<T> {
    create(t: T): T;
}

export interface InitializableState<T> {
    getInitialState(): T;
}