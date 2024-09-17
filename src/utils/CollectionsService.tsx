import Components from "@data/collections/components.json";
import type { Component } from "@type/collection";

const components: Component[] = [];

Object.entries(Components).map(([section, data]) => {
    data.map(element => {
        components.push({ ...element, group: section });
    });
});

export const getComponentDataByLink = (link: string): [Component | undefined, number] => {
    for (let i = 0; i < components.length; i++) {
        if (link === components[i]?.link) {
            return [components[i], i];
        }
    }
    return [undefined, -1];
};

export const getPreviousAndNextComponentsDataByIndex = (index: number) => {
    return [components[index - 1], components[index + 1]];
};