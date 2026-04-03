/* ══════════════════════════════════════════════
   @repo/design-system — Public API
   ══════════════════════════════════════════════ */

/* ── Feedback ── */
export { default as Alert } from "./components/Alert/Alert";
export { default as Toast } from "./components/Toast/Toast";
export { default as Tooltip } from "./components/Tooltip/Tooltip";
export { default as Spinner } from "./components/Spinner/Spinner";
export { default as ProgressRing } from "./components/ProgressRing/ProgressRing";

/* ── General ── */
export { default as Button } from "./components/Button/Button";
export { default as IconButton } from "./components/IconButton/IconButton";
export { default as TextButton } from "./components/TextButton/TextButton";
export { default as Dropdown } from "./components/Dropdown/Dropdown";

/* ── Navigation ── */
export { default as Navigation } from "./components/Navigation/Navigation";
export { default as Breadcrumb } from "./components/Breadcrumb/Breadcrumb";
export { default as Pagination } from "./components/Pagination/Pagination";
export { default as SegmentButton } from "./components/SegmentButton/SegmentButton";
export { default as SegmentTab } from "./components/SegmentTab/SegmentTab";

/* ── Data Entry ── */
export { default as Input } from "./components/Input/Input";
export { default as Checkbox } from "./components/Checkbox/Checkbox";
export { default as RadioButton } from "./components/RadioButton/RadioButton";
export { default as Toggle } from "./components/Toggle/Toggle";
export { default as DatePicker } from "./components/DatePicker/DatePicker";
export { default as Slider } from "./components/Slider/Slider";

/* ── Data Display ── */
export { default as Avatar } from "./components/Avatar/Avatar";
export { default as Badge, CountBadge } from "./components/Badge/Badge";
export { default as SelectorTag, FilterTag, ChecklistTag } from "./components/Tag/Tag";
export { default as Table } from "./components/Table/Table";
export { default as TreeView } from "./components/TreeView/TreeView";

/* ── Charts ── */
export { default as ChartGrid } from "./components/ChartGrid/ChartGrid";
export { default as BarChart } from "./components/BarChart/BarChart";
export { default as StackedBarChart } from "./components/StackedBarChart/StackedBarChart";
export { default as HorizontalBarChart } from "./components/HorizontalBarChart/HorizontalBarChart";
export { default as HorizontalStackedBarChart } from "./components/HorizontalStackedBarChart/HorizontalStackedBarChart";
export { default as LineChart } from "./components/LineChart/LineChart";
export { default as AreaChart } from "./components/AreaChart/AreaChart";
export { default as StackedAreaChart } from "./components/StackedAreaChart/StackedAreaChart";
export { default as DonutChart } from "./components/DonutChart/DonutChart";
export { default as HistogramChart } from "./components/HistogramChart/HistogramChart";
export { default as HorizontalHistogramChart } from "./components/HorizontalHistogramChart/HorizontalHistogramChart";
export { default as WaterfallChart } from "./components/WaterfallChart/WaterfallChart";

/* ── Type Exports ── */
export type { AlertType, AlertSize } from "./components/Alert/Alert";
export type { ButtonType, ButtonSize, ButtonState } from "./components/Button/Button";
export type { DropdownItemData } from "./components/Dropdown/Dropdown";
export type { NavSectionData, NavUserInfo } from "./components/Navigation/Navigation";
export type { TableColumn } from "./components/Table/Table";
export type { TreeNodeData } from "./components/TreeView/TreeView";
export type { ChartGridProps } from "./components/ChartGrid/ChartGrid";
export type { BarChartProps, BarChartSeries, TrendLine } from "./components/BarChart/BarChart";
export type { StackedBarChartProps, StackedBarSeries } from "./components/StackedBarChart/StackedBarChart";
export type { LineChartProps, LineChartSeries } from "./components/LineChart/LineChart";
export type { AreaChartProps, AreaChartSeries } from "./components/AreaChart/AreaChart";
export type { HorizontalBarChartProps } from "./components/HorizontalBarChart/HorizontalBarChart";
export type { DonutChartProps } from "./components/DonutChart/DonutChart";
export type { HistogramChartProps } from "./components/HistogramChart/HistogramChart";
export type { WaterfallChartProps } from "./components/WaterfallChart/WaterfallChart";
