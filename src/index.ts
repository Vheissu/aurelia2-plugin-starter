import { DI, IContainer, IRegistry } from '@aurelia/kernel';

const components: IRegistry[] = [
    // MyComponent as unknown as IRegistry,
];

const pluginConfiguration = {
    register(container: IContainer): IContainer {
        return container.register(components)
    },

    createContainer(): IContainer {
        return this.register(DI.createContainer());
    }
};

export const PluginConfiguration = {
    customize(components: any[] = []) {
        return { ...pluginConfiguration };
    },
    ...pluginConfiguration
};