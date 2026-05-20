export type SidebarSectionKey =
  | "foundation"
  | "general"
  | "navigation"
  | "dataEntry"
  | "dataDisplay"
  | "feedback";

export interface SidebarItem {
  /** Slug used for both the URL segment and the `ds.common.sidebar.items.{id}` translation key */
  id: string;
}

export interface SidebarSection {
  /** Used to look up `ds.common.sidebar.sections.{key}` */
  key: SidebarSectionKey;
  basePath: "/foundation" | "/components";
  items: SidebarItem[];
}

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    key: "foundation",
    basePath: "/foundation",
    items: [{ id: "typography" }, { id: "color" }, { id: "icon" }, { id: "object-style" }],
  },
  {
    key: "general",
    basePath: "/components",
    items: [{ id: "button" }, { id: "dropdown" }],
  },
  {
    key: "navigation",
    basePath: "/components",
    items: [{ id: "navigation" }, { id: "breadcrumb" }, { id: "pagination" }],
  },
  {
    key: "dataEntry",
    basePath: "/components",
    items: [
      { id: "input" },
      { id: "toggle-radio-checkbox" },
      { id: "chip" },
      { id: "date-picker" },
      { id: "toolbar" },
      { id: "slider" },
    ],
  },
  {
    key: "dataDisplay",
    basePath: "/components",
    items: [
      { id: "filter" },
      { id: "expansion-panel" },
      { id: "table-list" },
      { id: "badge-tag" },
      { id: "avatar" },
      { id: "empty-state" },
      { id: "image-gallery" },
      { id: "tree-view" },
    ],
  },
  {
    key: "feedback",
    basePath: "/components",
    items: [{ id: "feedback-message" }, { id: "tooltip" }, { id: "modal" }, { id: "indicator" }],
  },
];
