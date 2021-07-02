import { DI, IContainer, IRegistry } from '@aurelia/kernel';

const components: IRegistry[] = [
    // MyComponent as unknown as IRegistry,
];

export const PluginConfiguration = {
    register(container: IContainer): IContainer {
        return container.register(components)
    },

    createContainer(): IContainer {
        return this.register(DI.createContainer());
    }
};