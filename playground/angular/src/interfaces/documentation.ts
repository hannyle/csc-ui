export interface ComponentData {
  filePath: string;
  encapsulation: string;
  tag: string;
  readme: string;
  docs: string;
  docsTags: any[];
  usage: Usage;
  props: any[];
  methods: any[];
  events: Event[];
  listeners: Listener[];
  styles: any[];
  slots: any[];
  parts: any[];
  dependents: string[];
  dependencies: string[];
  dependencyGraph: { [key: string]: string[] };
  children?: ComponentData[];
}

export interface Usage {}

export interface Listener {
  event: string;
  capture: boolean;
  passive: boolean;
}
