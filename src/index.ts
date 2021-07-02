import { DI, IContainer, IRegistry } from '@aurelia/kernel';

export const DefaultComponents: IRegistry[] = [
    AureliaTableCustomAttribute as unknown as IRegistry,
    AutSortCustomAttribute as unknown as IRegistry,
    AutSelectCustomAttribute as unknown as IRegistry,
    AutPaginationCustomElement as unknown as IRegistry,
];

const aureliaTableConfiguration = {
    register(container: IContainer): IContainer {
        return container.register(
            ...DefaultComponents
        );
    },

    createContainer(): IContainer {
        return this.register(DI.createContainer());
    }
};

export const AureliaTableConfiguration = {
    customize(components: any[] = []) {
        return { ...aureliaTableConfiguration };
    },
    ...aureliaTableConfiguration
};

const components: IRegistry[] = [

];


export const PluginConfiguration = {
    register(container: IContainer): IContainer {
        return container.register(components)
    },

    createContainer(): IContainer {
        return this.register(DI.createContainer());
    }
};