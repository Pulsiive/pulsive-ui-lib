import JSON_COMMON_EN from "../locales/en/common.json";
import JSON_COMMON_FR from "../locales/fr/common.json";

export enum TranslationLibFile {
    COMMON = "common",
}

export enum TranslationLibKey {
   ACTION_ACTIVATE = "actions.activate",
   ACTION_ADD = "actions.add",
   ACTION_BACK = "actions.back",
   ACTION_CANCEL = "actions.cancel",
   ACTION_CLEAR = "actions.clear",
   ACTION_CLEAR_SEARCH = "actions.clear_search",
   ACTION_CLOSE = "actions.close",
   ACTION_CONFIRM = "actions.confirm",
   ACTION_COPIED = "actions.copied",
   ACTION_COPY = "actions.copy",
   ACTION_DEACTIVATE = "actions.deactivate",
   ACTION_DELETE = "actions.delete",
   ACTION_DOWNLOAD = "actions.download",
   ACTION_DOWNLOAD_ALL = "actions.download_all",
   ACTION_DUPLICATE = "actions.duplicate",
   ACTION_EDIT = "actions.edit",
   ACTION_EXPORT = "actions.export",
   ACTION_HIDE_FILTERS = "actions.hide_filters",
   ACTION_IMPORT = "actions.import",
   ACTION_MORE = "actions.more",
   ACTION_NEW = "actions.new",
   ACTION_OK = "actions.ok",
   ACTION_OPEN = "actions.open",
   ACTION_QUIT = "actions.quit",
   ACTION_QUIT_WITHOUT_SAVING = "actions.quit_without_saving",
   ACTION_REMOVE = "actions.remove",
   ACTION_REMOVE_ALL = "actions.remove_all",
   ACTION_RESET_FILTERS = "actions.reset_filters",
   ACTION_SAVE = "actions.save",
   ACTION_SAVE_AND_QUIT = "actions.save_and_quit",
   ACTION_SEARCH = "actions.search",
   ACTION_SEND = "actions.send",
   ACTION_SHOW_FILTERS = "actions.show_filters",
   ACTION_SORT_BY = "actions.sort_by",
   ACTION_VALIDATE = "actions.validate",
   FOOTER_COOKIES_SETTINGS = "footer.cookies_settings",
   FOOTER_LEGAL_NOTICE = "footer.legal_notice",
   HEADER_HOME = "header.home",
   HEADER_MENU = "header.menu",
   HEADER_PREPROD = "header.preprod",
   MESSAGE_ID_MATCHED = "messages.id_matched",
   MESSAGE_ID_ALREADY_SELECTED = "messages.id_already_selected",
   MESSAGE_ID_UNMATCHED = "messages.id_unmatched",
   MESSAGE_INPUTS_REQUIRED = "messages.inputs_required",
   MESSAGE_LOADING_RESULT = "messages.loading_results",
   MESSAGE_NO_RESULT = "messages.no_result",
   MESSAGE_NO_RESULT_FOR_QUERY = "messages.no_result_for_query",
   MESSAGE_SAVE_BEFORE_LEAVING = "messages.save_before_leaving",
   MESSAGE_WARNING_UNSAVED_CHANGES = "messages.warning_unsaved_changes",
   PLACEHOLDER_SEARCH_IDS = "placeholders.search_ids",
   PLACEHOLDER_SELECT_DEFAULT = "placeholders.select_default",
   PLACEHOLDER_UPLOAD_PANEL = "placeholders.upload_panel",
   SELECT_OPTION_CREATE = "select_option.create"
}

export const Locales = {
    en: {
        [TranslationLibFile.COMMON]: JSON_COMMON_EN
    },
    fr: {
        [TranslationLibFile.COMMON]: JSON_COMMON_FR
    },
};
