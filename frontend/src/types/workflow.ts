export interface Workflow {
    id: number;
    project: number;
    name: string;
    nodes: Node[];
    edges: Edge[];
}

export interface Node {
    id: string;
    component: number;
    position: { x: number; y: number };
    configuration: Record<string, any>;
}

export interface Edge {
    id: string;
    source: string;
    target: string;
}
