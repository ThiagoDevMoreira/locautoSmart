interface BaseCrud<T> {
    create(item: Partial<T>): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    update(id: string, item: Partial<T>): Promise<T>;
    getById(id: string): Promise<T | null>;
    listByFilter(filter: Partial<T>): Promise<T | null>;
    listAllActive(): Promise<T[] | null>;
    listAllInactiveOrDeleted(): Promise<T[] | null>;
}

interface VeicleCrud<T> extends BaseCrud<T> { }
