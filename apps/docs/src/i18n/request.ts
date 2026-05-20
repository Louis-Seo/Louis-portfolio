import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const [
    common,
    projects,
    home,
    about,
    dnkRp,
    nearthwindMobile,
    investManager,
    researchProblemFraming,
    zoomableWorker,
    zoomableWind,
    dsCommon,
    dsIndex,
    foundationTypography,
    foundationColor,
    foundationIcon,
    foundationObjectStyle,
    componentsButton,
    componentsDropdown,
    componentsNavigation,
    componentsBreadcrumb,
    componentsPagination,
    componentsInput,
    componentsTRC,
    componentsChip,
    componentsDatePicker,
    componentsToolbar,
    componentsSlider,
    componentsFilter,
    componentsExpansionPanel,
    componentsTableList,
    componentsBadgeTag,
    componentsAvatar,
    componentsEmptyState,
    componentsImageGallery,
    componentsTreeView,
    componentsFeedbackMessage,
    componentsTooltip,
    componentsModal,
    componentsIndicator,
  ] = await Promise.all([
    import(`../../messages/${locale}/common.json`).then((m) => m.default),
    import(`../../messages/${locale}/projects.json`).then((m) => m.default),
    import(`../../messages/${locale}/home.json`).then((m) => m.default),
    import(`../../messages/${locale}/about.json`).then((m) => m.default),
    import(`../../messages/${locale}/case/dnk-rp.json`).then((m) => m.default),
    import(`../../messages/${locale}/case/nearthwind-mobile.json`).then((m) => m.default),
    import(`../../messages/${locale}/case/invest-manager.json`).then((m) => m.default),
    import(`../../messages/${locale}/case/research-problem-framing.json`).then((m) => m.default),
    import(`../../messages/${locale}/case/zoomable-worker.json`).then((m) => m.default),
    import(`../../messages/${locale}/case/zoomable-wind.json`).then((m) => m.default),
    import(`../../messages/${locale}/ds.common.json`).then((m) => m.default),
    import(`../../messages/${locale}/ds/index.json`).then((m) => m.default).catch(() => ({})),
    import(`../../messages/${locale}/ds/foundation-typography.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/foundation-color.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/foundation-icon.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/foundation-object-style.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-button.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-dropdown.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-navigation.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-breadcrumb.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-pagination.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-input.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-toggle-radio-checkbox.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-chip.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-date-picker.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-toolbar.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-slider.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-filter.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-expansion-panel.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-table-list.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-badge-tag.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-avatar.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-empty-state.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-image-gallery.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-tree-view.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-feedback-message.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-tooltip.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-modal.json`)
      .then((m) => m.default)
      .catch(() => ({})),
    import(`../../messages/${locale}/ds/components-indicator.json`)
      .then((m) => m.default)
      .catch(() => ({})),
  ]);

  return {
    locale,
    messages: {
      common,
      projects,
      home,
      about,
      case: {
        "dnk-rp": dnkRp,
        "nearthwind-mobile": nearthwindMobile,
        "invest-manager": investManager,
        "research-problem-framing": researchProblemFraming,
        "zoomable-worker": zoomableWorker,
        "zoomable-wind": zoomableWind,
      },
      ds: {
        common: dsCommon,
        index: dsIndex,
        "foundation-typography": foundationTypography,
        "foundation-color": foundationColor,
        "foundation-icon": foundationIcon,
        "foundation-object-style": foundationObjectStyle,
        "components-button": componentsButton,
        "components-dropdown": componentsDropdown,
        "components-navigation": componentsNavigation,
        "components-breadcrumb": componentsBreadcrumb,
        "components-pagination": componentsPagination,
        "components-input": componentsInput,
        "components-toggle-radio-checkbox": componentsTRC,
        "components-chip": componentsChip,
        "components-date-picker": componentsDatePicker,
        "components-toolbar": componentsToolbar,
        "components-slider": componentsSlider,
        "components-filter": componentsFilter,
        "components-expansion-panel": componentsExpansionPanel,
        "components-table-list": componentsTableList,
        "components-badge-tag": componentsBadgeTag,
        "components-avatar": componentsAvatar,
        "components-empty-state": componentsEmptyState,
        "components-image-gallery": componentsImageGallery,
        "components-tree-view": componentsTreeView,
        "components-feedback-message": componentsFeedbackMessage,
        "components-tooltip": componentsTooltip,
        "components-modal": componentsModal,
        "components-indicator": componentsIndicator,
      },
    },
  };
});
