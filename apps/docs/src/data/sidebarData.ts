export interface SidebarItem {
  id: string;
  label: string;
}

export interface SidebarSection {
  id: string;
  title: string;
  basePath: "/foundation" | "/components";
  items: SidebarItem[];
}

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    id: "foundation",
    title: "Foundation",
    basePath: "/foundation",
    items: [
      { id: "typography", label: "Typography" },
      { id: "color", label: "Color" },
      { id: "icon", label: "Icon" },
      { id: "object-style", label: "Object Style" },
    ],
  },
  {
    id: "general",
    title: "General",
    basePath: "/components",
    items: [
      { id: "button", label: "Button" },
      { id: "dropdown", label: "Dropdown" },
    ],
  },
  {
    id: "navigation",
    title: "Navigation",
    basePath: "/components",
    items: [
      { id: "navigation", label: "Navigation" },
      { id: "breadcrumb", label: "Breadcrumb" },
      { id: "pagination", label: "Pagenation" },
    ],
  },
  {
    id: "data-entry",
    title: "Data Entry",
    basePath: "/components",
    items: [
      { id: "input", label: "Input" },
      { id: "toggle-radio-checkbox", label: "Toggle / Radio Btn / Checkbox" },
      { id: "chip", label: "Chip" },
      { id: "date-picker", label: "Date Picker" },
      { id: "toolbar", label: "Toolbar" },
      { id: "slider", label: "Slider" },
    ],
  },
  {
    id: "data-display",
    title: "Data Display",
    basePath: "/components",
    items: [
      { id: "filter", label: "Filter" },
      { id: "expansion-panel", label: "Expansion Panel" },
      { id: "table-list", label: "Table / List" },
      { id: "badge-tag", label: "Badge / Tag" },
      { id: "avatar", label: "Avatar" },
      { id: "empty-state", label: "Empty State" },
      { id: "image-gallery", label: "Image Gallery" },
      { id: "tree-view", label: "Tree View" },
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    basePath: "/components",
    items: [
      { id: "feedback-message", label: "Feedback Message (Toast / Alert)" },
      { id: "tooltip", label: "Tooltip" },
      { id: "modal", label: "Modal" },
      { id: "indicator", label: "Indicator (Spinner / Progress Bar)" },
    ],
  },
];
