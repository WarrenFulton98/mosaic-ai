export interface Component {
    id: number;
    name: string;
    type: string;
    configuration: Record<string, any>;
    category: string;
}
