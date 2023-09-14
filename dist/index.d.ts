/// <reference types="react" />
import React, { FunctionComponent, ReactElement, ReactNode, ButtonHTMLAttributes, ChangeEventHandler, KeyboardEventHandler, ChangeEvent } from 'react';
import { OptionsOrGroups, GroupBase, Props } from 'react-select';
import { MomentInput } from 'moment';
import { Options } from '@splidejs/react-splide';

declare type AccordionProps = {
    children: React.ReactNode;
    cssClass?: string;
};
declare const Accordion: React.FunctionComponent<AccordionProps>;

declare type AccordionItemProps = {
    heading: string | ReactElement;
    children: ReactNode;
    startOpen?: boolean;
    cssClass?: string;
};
declare const AccordionItem: FunctionComponent<AccordionItemProps>;

declare type AccordionItemContentProps = {
    children: React.ReactNode;
    cssClass?: string;
};
declare const AccordionItemContent: React.FunctionComponent<AccordionItemContentProps>;

declare type IconProps = {
    name: string;
    outlined?: boolean;
    colorIcon?: string;
    onClick?: (e: React.MouseEvent) => void;
    cssClass?: string;
};
declare const Icon: FunctionComponent<IconProps>;

declare enum ButtonSize {
    XSMALL = "btn-xsmall",
    SMALL = "btn-small",
    MEDIUM = "btn-medium",
    BIG = "btn-big"
}
declare enum ButtonStyle {
    PRIMARY_GREEN = "btn-primary-green",
    DEFAULT_GREEN = "btn-default-green",
    PRIMARY_MIDNIGHT = "btn-primary-midnight",
    DEFAULT_MIDNIGHT = "btn-default-midnight",
    PRIMARY_MIDNIGHT_LIGHT = "btn-primary-midnight-light",
    DEFAULT_MIDNIGHT_LIGHT = "btn-default-midnight-light",
    PRIMARY_WHITE = "btn-primary-white",
    DEFAULT_WHITE = "btn-default-white",
    PRIMARY_GREY = "btn-primary-grey"
}
declare type ButtonProps = {
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    children?: React.ReactNode;
    icon?: IconProps;
    reverse?: boolean;
    loading?: boolean;
};
declare const Button: FunctionComponent<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>;

declare type ButtonAddProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
};
declare const ButtonAdd: FunctionComponent<ButtonAddProps>;

declare type ButtonDeleteProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
    loading?: boolean;
};
declare const ButtonDelete: FunctionComponent<ButtonDeleteProps>;

declare enum ButtonLinkStyle {
    BLACK_LIGHT = "btn-link-black-light",
    GREY = "btn-link-grey",
    MIDNIGHT = "btn-link-midnight",
    MIDNIGHT_LIGHT = "btn-link-midnight-light",
    WHITE = "btn-link-white"
}
declare type ButtonLinkProps = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
    icon?: IconProps;
    reverse?: boolean;
    reverseUnderline?: boolean;
};
declare const ButtonLink: FunctionComponent<ButtonLinkProps>;

declare type ButtonLinkBackProps = {
    onClick: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
};
declare const ButtonLinkBack: FunctionComponent<ButtonLinkBackProps>;

declare type ButtonLinkCancelProps = {
    onClick: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
};
declare const ButtonLinkCancel: FunctionComponent<ButtonLinkCancelProps>;

declare type ButtonLinkCloseProps = {
    onClick: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
};
declare const ButtonLinkClose: FunctionComponent<ButtonLinkCloseProps>;

declare type ButtonNewProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
};
declare const ButtonNew: FunctionComponent<ButtonNewProps>;

declare type ButtonOkProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
};
declare const ButtonOk: FunctionComponent<ButtonOkProps>;

declare type ButtonSaveProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
    loading?: boolean;
};
declare const ButtonSave: FunctionComponent<ButtonSaveProps>;

declare type ButtonValidateProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
    loading?: boolean;
};
declare const ButtonValidate: FunctionComponent<ButtonValidateProps>;

declare type IconEditProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
};
declare const IconEdit: FunctionComponent<IconEditProps>;

declare type ContentBlockRowTitleProps = {
    label: string;
    icon?: IconProps;
    link?: string;
};
declare const ContentBlockRowTitle: FunctionComponent<ContentBlockRowTitleProps>;

declare type ContentBlockHeaderProps = {
    title?: ContentBlockRowTitleProps;
    actions?: React.ReactNode;
};

declare type ContentBlockFooterProps = {
    link: string;
    label: string;
    target?: string;
};

declare type ContentBlockProps = {
    children: React.ReactNode;
    cssClass?: string;
    header?: ContentBlockHeaderProps;
    footer?: ContentBlockFooterProps;
};
declare const ContentBlock: FunctionComponent<ContentBlockProps>;

declare type ContentBlockActionProps = {
    type: ContentBlockActionType;
    onClick: () => void;
    isDisabled?: boolean;
    label?: string;
};
declare const ContentBlockAction: FunctionComponent<ContentBlockActionProps>;

declare class ContentBlockActionType {
    static ADD: ContentBlockActionType;
    static EXPORT: ContentBlockActionType;
    static IMPORT: ContentBlockActionType;
    name: string;
    icon: IconProps;
    style: ButtonStyle;
    constructor(name: string, icon: IconProps, style?: ButtonStyle);
}

declare type ContentBlockRowProps = {
    children: React.ReactNode;
};
declare const ContentBlockRow: FunctionComponent<ContentBlockRowProps>;

declare type ContentBlockRowElementRightProps = {
    children: React.ReactNode;
};
declare const ContentBlockRowElementRight: FunctionComponent<ContentBlockRowElementRightProps>;

declare type InputCheckboxProps = {
    name: string;
    checked: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement> | VoidFunction;
    disabled?: boolean;
    readOnly?: boolean;
};
declare const InputCheckbox: FunctionComponent<InputCheckboxProps>;

declare type CheckboxProps = InputCheckboxProps & {
    label?: string;
    tooltip?: string;
    cssClass?: string;
};
declare const Checkbox: FunctionComponent<CheckboxProps>;

declare enum ElementListSize {
    SMALL = "element-list--small",
    MEDIUM = "element-list--medium",
    BIG = "element-list--big"
}
declare type ElementListProps = {
    placeholder?: string;
    size?: ElementListSize;
    inline?: boolean;
    children?: React.ReactNode[];
};
declare const ElementList: FunctionComponent<ElementListProps>;

declare type InfoValueProps = {
    value: string | number;
};
declare const InfoValue: FunctionComponent<InfoValueProps>;

declare type InputTextProps = {
    name: string;
    placeholder?: string;
    value?: string;
    onKeyDown?: KeyboardEventHandler;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    datalistOptions?: string[];
    small?: boolean;
    autoComplete?: string;
    cssClass?: string;
};
declare const InputText: FunctionComponent<InputTextProps>;

declare type InputTextWithButtonProps = {
    input: InputTextProps;
    button: ButtonProps;
};
declare const InputTextWithButton: FunctionComponent<InputTextWithButtonProps>;

declare type InputWithLabelProps = {
    children: React.ReactElement;
    label: string;
    cssClass?: string;
};
declare const InputWithLabel: FunctionComponent<InputWithLabelProps>;

declare type RadioButtonProps = {
    id: string;
    name: string;
    label: string;
    value: string | number;
    checked: boolean;
    onChange: ChangeEventHandler;
};
declare const RadioButton: FunctionComponent<RadioButtonProps>;

declare type RadioButtonsProps = {
    id?: string;
    name: string;
    value: string | number;
    options: {
        value: string | number;
        label: string;
    }[];
    onChange: ChangeEventHandler;
};
declare const RadioButtons: FunctionComponent<RadioButtonsProps>;

declare type SearchAutocompleteItem = {
    value: any;
    searchField: string;
    component?: React.ReactNode;
};
declare type SearchAutocompleteProps = {
    value?: string;
    onChange?: (query: string) => void;
    items: SearchAutocompleteItem[];
    selectedItems?: SearchAutocompleteItem[];
    onSelect: (item: SearchAutocompleteItem) => void;
    placeholder?: string;
    small?: boolean;
};
declare const SearchAutocomplete: FunctionComponent<SearchAutocompleteProps>;

declare type SearchBarProps = {
    value?: string;
    onChange: (query: string) => void;
    placeholder?: string;
    cssClass?: string;
    small?: boolean;
};
declare const SearchBar: FunctionComponent<SearchBarProps>;

declare type SearchBarClearableProps = {
    value?: string;
    onSubmit: (query: string) => void;
    placeholder?: string;
    cssClass?: string;
    small?: boolean;
};
declare const SearchBarClearable: FunctionComponent<SearchBarClearableProps>;

declare enum FormFieldMessageType {
    SUCCESS = "form-field-message-success",
    WARNING = "form-field-message-warning",
    ERROR = "form-field-message-error"
}
declare type FormFieldMessageProps = {
    message: string;
    active: boolean;
    type?: FormFieldMessageType;
};
declare const FormFieldMessage: FunctionComponent<FormFieldMessageProps>;

declare type SearchIdsResult = {
    matchedItems: any[];
    alreadySelectedIds: string[];
    unmatchedIds: string[];
    messages: FormFieldMessageProps[];
};
declare type SearchIdsProps = {
    value?: string;
    onChange?: (query: string) => void;
    items: any[];
    selectedItems?: any[];
    idField?: string;
    placeholder?: string;
    onSubmit: (result: SearchIdsResult) => void;
    small?: boolean;
};
declare const SearchIds: FunctionComponent<SearchIdsProps>;

declare type InputRangeProps = {
    name?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    reverseRange?: boolean;
};
declare const InputRange: FunctionComponent<InputRangeProps>;

declare type SliderProps = InputRangeProps & {
    unit?: string;
    cssClass?: string;
};
declare const Slider: FunctionComponent<SliderProps>;

declare enum TagSize {
    XSMALL = "tag--xsmall",
    SMALL = "tag--small",
    MEDIUM = "tag--medium",
    BIG = "tag--big"
}
declare enum TagStyle {
    PRIMARY_MIDNIGHT_LIGHT = "tag--primary-midnight-light",
    DEFAULT_MIDNIGHT_LIGHT = "tag--default-midnight-light",
    PRIMARY_CYAN_LIGHT = "tag--primary-cyan-light",
    DEFAULT_CYAN_LIGHT = "tag--default-cyan-light",
    PRIMARY_OCEAN = "tag--primary-ocean",
    DEFAULT_OCEAN = "tag--default-ocean",
    PRIMARY_RED = "tag--primary-red",
    PRIMARY_GREY_DARK = "tag--primary-grey-dark",
    PRIMARY_GREY_LIGHT = "tag--primary-grey-light"
}
declare enum TagTextTransform {
    CAPITALIZE = "tag--capitalize",
    UPPERCASE = "tag--uppercase"
}
declare type TagProps = {
    label: string;
    icon?: IconProps;
    size?: TagSize;
    style?: TagStyle;
    customColor?: {
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
    };
    highlighted?: boolean;
    textTransform?: TagTextTransform;
    disabled?: boolean;
    reverse?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    cssClass?: string;
};
declare const Tag: FunctionComponent<TagProps>;

declare type TagFieldProps = TagProps;
declare const TagField: FunctionComponent<TagFieldProps>;

declare type ToggleOptionProps = {
    firstOption: string;
    secondOption: string;
    isFirstOption: boolean;
    onClick: (value: boolean, e: React.MouseEvent) => void;
    slim?: boolean;
};
declare const ToggleOption: FunctionComponent<ToggleOptionProps>;

declare type InputToggleSwitchProps = {
    name: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement> | VoidFunction;
    disabled?: boolean;
};
declare const InputToggleSwitch: FunctionComponent<InputToggleSwitchProps>;

declare type ToggleSwitchProps = InputToggleSwitchProps & {
    label?: string;
    tooltip?: string;
    cssClass?: string;
};
declare const ToggleSwitch: FunctionComponent<ToggleSwitchProps>;

declare type UploadLogoProps = {
    name: string;
    fileName?: string;
    logoUrl?: string;
    onChange: ChangeEventHandler;
    onDelete: (e: React.MouseEvent) => void;
    cssClass?: string;
    small?: boolean;
};
declare const UploadLogo: FunctionComponent<UploadLogoProps>;

declare type UploadPanelProps = {
    name: string;
    onChange: ChangeEventHandler;
    onDelete: (e: React.MouseEvent) => void;
    placeholder?: string;
    acceptType?: string[];
    image?: string | FunctionComponent;
};
declare const UploadPanel: FunctionComponent<UploadPanelProps>;

declare enum FlexContentDirection {
    ROW = "flex-content--direction-row",
    COLUMN = "flex-content--direction-column"
}
declare enum FlexContentAlignment {
    START = "flex-content--align-start",
    END = "flex-content--align-end",
    CENTER = "flex-content--align-center",
    INITIAL = "flex-content--align-initial"
}
declare enum FlexContentJustify {
    START = "flex-content--justify-start",
    END = "flex-content--justify-end",
    CENTER = "flex-content--justify-center",
    SPACE_AROUND = "flex-content--justify-space-around",
    SPACE_BETWEEN = "flex-content--justify-space-between",
    SPACE_EVENLY = "flex-content--justify-space-evenly"
}
declare enum FlexContentSpacing {
    XSMALL = "flex-content--spacing-xsmall",
    SMALL = "flex-content--spacing-small",
    MEDIUM = "flex-content--spacing-medium",
    LARGE = "flex-content--spacing-large",
    LARGE_PLUS = "flex-content--spacing-large-plus",
    XLARGE = "flex-content--spacing-xlarge"
}
declare enum FlexContentMobileDirection {
    ROW = "flex-content--mobile-direction-row",
    COLUMN = "flex-content--mobile-direction-column",
    COLUMN_REVERSE = "flex-content--mobile-direction-column-reverse"
}
declare enum FlexContentLayout {
    COLUMNS = "flex-content--layout-columns",
    TWO_COLUMNS_WIDE_LEFT = "flex-content--layout-two-columns-wide-left",
    TWO_COLUMNS_WIDE_RIGHT = "flex-content--layout-two-columns-wide-right"
}
declare class FlexContentProps {
    static LAYOUT_COLUMNS: FlexContentProps;
    static LAYOUT_ROWS: FlexContentProps;
    children: React.ReactNode;
    direction: FlexContentDirection;
    alignment?: FlexContentAlignment;
    justify?: FlexContentJustify;
    spacing?: FlexContentSpacing;
    allowWrap?: boolean;
    mobileDirection?: FlexContentMobileDirection;
    cssClass?: string;
    layout?: FlexContentLayout;
    constructor(direction: FlexContentDirection, spacing: FlexContentSpacing, layout?: FlexContentLayout, mobileDirection?: FlexContentMobileDirection);
}
declare const FlexContent: FunctionComponent<FlexContentProps>;

declare type LayoutColumnsProps = {
    children: React.ReactNode;
    mobileDirection?: FlexContentMobileDirection;
    cssClass?: string;
};
declare const LayoutColumns: FunctionComponent<LayoutColumnsProps>;

declare type LayoutRowsProps = {
    children: React.ReactNode;
    cssClass?: string;
};
declare const LayoutRows: FunctionComponent<LayoutRowsProps>;

declare type FormButtonsProps = {
    children: React.ReactNode;
};
declare const FormButtons: FunctionComponent<FormButtonsProps>;

declare type FormContainerProps = {
    children: React.ReactNode;
    cssClass?: string;
};
declare const FormContainer: FunctionComponent<FormContainerProps>;

declare type FormErrorProps = {
    message: string;
};
declare const FormError: FunctionComponent<FormErrorProps>;

declare enum FormFieldSize {
    FLEX = "form-field--flex"
}
declare type FormFieldTitleFields = {
    label?: string;
    tooltip?: string;
    actions?: React.ReactNode | React.ReactNode[];
};
declare type FormFieldProps = {
    children: React.ReactElement;
    name?: string;
    required?: boolean;
    title?: FormFieldTitleFields;
    size?: FormFieldSize;
    messages?: FormFieldMessageProps[] | FormFieldMessageProps;
    inline?: boolean;
};
declare const FormField: FunctionComponent<FormFieldProps>;

declare type FormFieldTitleProps = {
    label?: string;
    name?: string;
    required?: boolean;
    tooltip?: string;
    actions?: React.ReactNode | React.ReactNode[];
};
declare const FormFieldTitle: FunctionComponent<FormFieldTitleProps>;

declare type FormGroupProps = {
    children: React.ReactNode;
};
declare const FormGroup: FunctionComponent<FormGroupProps>;

declare type FormMentionProps = {
    message?: string | React.ReactNode;
};
declare const FormMention: FunctionComponent<FormMentionProps>;

declare enum FormRowAlignment {
    CENTER = "form-row-center",
    LEFT = "form-row-left",
    RIGHT = "form-row-right"
}
declare type FormRowProps = {
    children: React.ReactNode;
    alignment?: FormRowAlignment;
};
declare const FormRow: FunctionComponent<FormRowProps>;

declare const FormRowSeparator: () => JSX.Element;

declare type FormRowTitleProps = {
    children: React.ReactNode;
    uppercase?: boolean;
};
declare const FormRowTitle: FunctionComponent<FormRowTitleProps>;

declare type FormTooltipProps = {
    text: string | undefined;
};
declare const FormTooltip: FunctionComponent<FormTooltipProps>;

declare type ColorPickerProps = {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    cssClass?: string;
    small?: boolean;
    placeholder?: string;
};
declare const ColorPicker: FunctionComponent<ColorPickerProps>;

declare enum Color {
    WHITE = "var(--color-white)",
    GREY_LIGHT = "var(--color-grey-light)",
    GREY = "var(--color-grey)",
    GREY_DARK = "var(--color-grey-dark)",
    BLACK_LIGHTER = "var(--color-black-lighter)",
    BLACK_LIGHT = "var(--color-black-light)",
    MIDNIGHT_LIGHTER = "var(--color-midnight-lighter)",
    MIDNIGHT_LIGHT = "var(--color-midnight-light)",
    MIDNIGHT = "var(--color-midnight)",
    MIDNIGHT_DARK = "var(--color-midnight-dark)",
    GREEN = "var(--color-green)",
    LAVENDER = "var(--color-lavender)",
    LAVENDER_DARK = "var(--color-lavender-dark)",
    SAND = "var(--color-sand)",
    SAND_DARK = "var(--color-sand-dark)",
    CORAL_LIGHTER = "var(--color-coral-lighter)",
    CORAL_LIGHT = "var(--color-coral-light)",
    CORAL = "var(--color-coral)",
    LIME_LIGHT = "var(--color-lime-light)",
    LIME = "var(--color-lime)",
    LIME_DARK = "var(--color-lime-dark)",
    BLUE_LIGHT = "var(--color-blue-light)",
    BLUE = "var(--color-blue)",
    YELLOW_LIGHT = "var(--color-yellow-light)",
    YELLOW = "var(--color-yellow)",
    PURPLE_LIGHT = "var(--color-purple-light)",
    PURPLE = "var(--color-purple)",
    PINK_LIGHT = "var(--color-pink-light)",
    PINK = "var(--color-pink)",
    RED = "var(--color-red)",
    RED_DARK = "var(--color-red-dark)",
    ORANGE = "var(--color-orange)",
    ORANGE_DARK = "var(--color-orange-dark)",
    MUSTARD = "var(--color-mustard)",
    BROWN_LIGHT = "var(--color-brown-light)",
    BROWN = "var(--color-brown)",
    BROWN_DARK = "var(--color-brown-dark)",
    RASPBERRY_LIGHT = "var(--color-raspberry-light)",
    RASPBERRY = "var(--color-raspberry)",
    GARENCE = "var(--color-garence)",
    RUST_LIGHT = "var(--color-rust-light)",
    RUST = "var(--color-rust)",
    VIOLINE_LIGHT = "var(--color-violine-light)",
    VIOLINE = "var(--color-violine)",
    BLUEBERRY = "var(--color-blueberry)",
    CYAN = "var(--color-cyan)",
    CYAN_LIGHT = "var(--color-cyan-light)",
    CYAN_LIGHTER = "var(--color-cyan-lighter)",
    INFO_MAIN = "var(--color-info-main)",
    INFO_LIGHT = "var(--color-info-light)",
    DANGER_MAIN = "var(--color-danger-main)",
    DANGER_LIGHT = "var(--color-danger-light)",
    WARNING_MAIN = "var(--color-warning-main)",
    WARNING_LIGHT = "var(--color-warning-light)",
    SUCCESS_MAIN = "var(--color-success-main)",
    SUCCESS_LIGHT = "var(--color-success-light)",
    OCEAN = "var(--color-ocean)",
    OCEAN_LIGHT = "var(--color-ocean-light)",
    OCEAN_LIGHTER = "var(--color-ocean-lighter)"
}

declare type SelectOption = {
    label: string;
    value: string | number;
    isDisabled?: boolean;
    [key: string]: any;
};

declare type InputAutocompleteProps = {
    name: string;
    options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
    onChange: (newValue?: SelectOption) => void;
    selected?: SelectOption;
    autoFocus?: boolean;
    disabled?: boolean;
    placeholder?: string;
    small?: boolean;
    maxMenuHeight?: number;
    isLoading?: boolean;
    reactSelectProps?: Props;
    creatable?: boolean;
    onCreate?: (inputValue: string) => void;
    clearable?: boolean;
};
declare const InputAutocomplete: FunctionComponent<InputAutocompleteProps>;

declare enum InputDateType {
    DATE = "date",
    DATETIME_LOCAL = "datetime-local"
}
declare type InputDateProps = {
    name: string;
    value?: string;
    placeholder?: string;
    type?: InputDateType;
    min?: MomentInput;
    max?: MomentInput;
    onChange?: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    small?: boolean;
};
declare const InputDate: FunctionComponent<InputDateProps>;

declare type InputEmailProps = {
    name: string;
    value?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    small?: boolean;
};
declare const InputEmail: FunctionComponent<InputEmailProps>;

declare type InputNumberProps = {
    name: string;
    placeholder?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    small?: boolean;
};
declare const InputNumber: FunctionComponent<InputNumberProps>;

declare type InputNumberNewProps = {
    name: string;
    placeholder?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    onKeyDown?: KeyboardEventHandler;
    onChange: (value: number) => void;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    small?: boolean;
};
declare const InputNumberNew: FunctionComponent<InputNumberNewProps>;

declare type InputPasswordProps = {
    name: string;
    placeholder?: string;
    value?: string;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    small?: boolean;
};
declare const InputPassword: FunctionComponent<InputPasswordProps>;

declare enum InputPhoneLocale {
    FRENCH = "fr",
    ENGLISH = "en"
}
declare type InputPhoneProps = {
    name: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    locale?: InputPhoneLocale;
    country?: string;
    onCountryChange?: (value?: string) => void;
    small?: boolean;
};
declare const InputPhone: FunctionComponent<InputPhoneProps>;

declare type InputRadioProps = {
    id?: string;
    name: string;
    value: string | number;
    checked: boolean;
    onChange: ChangeEventHandler;
};
declare const InputRadio: FunctionComponent<InputRadioProps>;

declare type SelectProps = {
    name: string;
    value: string | number;
    options: {
        value: string | number;
        label: string;
    }[];
    onChange: ChangeEventHandler;
    withEmptyOption?: boolean;
    disabled?: boolean;
    small?: boolean;
};
declare const Select: FunctionComponent<SelectProps>;

declare type SelectV2Props = {
    name: string;
    options: SelectOption[];
    onChange: (newValue?: SelectOption) => void;
    value?: string | number;
    autoFocus?: boolean;
    disabled?: boolean;
    placeholder?: string;
    small?: boolean;
    maxMenuHeight?: number;
    isLoading?: boolean;
    reactSelectProps?: Props;
    clearable?: boolean;
};
declare const SelectV2: FunctionComponent<SelectV2Props>;

declare type SelectAutocompleteProps = {
    name: string;
    options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
    onChange: (newValue?: SelectOption) => void;
    value?: string | number;
    autoFocus?: boolean;
    disabled?: boolean;
    placeholder?: string;
    small?: boolean;
    maxMenuHeight?: number;
    isLoading?: boolean;
    reactSelectProps?: Props;
    creatable?: boolean;
    onCreate?: (inputValue: string) => void;
    clearable?: boolean;
};
declare const SelectAutocomplete: FunctionComponent<SelectAutocompleteProps>;

declare type SelectMultipleProps = {
    name: string;
    options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
    onChange: (newValue: SelectOption[]) => void;
    values?: (string | number)[];
    autoFocus?: boolean;
    disabled?: boolean;
    placeholder?: string;
    small?: boolean;
    maxMenuHeight?: number;
    hideSelectedOptions?: boolean;
    isLoading?: boolean;
    isSearchable?: boolean;
    isExpandable?: boolean;
    reactSelectProps?: Props;
};
declare const SelectMultiple: FunctionComponent<SelectMultipleProps>;

declare type TextareaProps = {
    name: string;
    placeholder?: string;
    value?: string;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    rows?: number;
    maxLength?: number;
    small?: boolean;
};
declare const Textarea: FunctionComponent<TextareaProps>;

declare enum ModalActionsAlignment {
    CENTER = "modal-new__container__actions--justify-center",
    LEFT = "modal-new__container__actions--justify-left",
    RIGHT = "modal-new__container__actions--justify-right",
    SPACE_BETWEEN = "modal-new__container__actions--justify-space-between"
}
declare type ModalActionsProps = {
    alignment?: ModalActionsAlignment;
    children: React.ReactNode;
};
declare const ModalActions: FunctionComponent<ModalActionsProps>;

declare type ModalContentProps = {
    fullWidth?: boolean;
    children: React.ReactNode;
    centered?: boolean;
};
declare const ModalContent: FunctionComponent<ModalContentProps>;

declare enum ModalDescriptionAlignment {
    CENTER = "modal-description--align-center"
}
declare type ModalDescriptionProps = {
    children: React.ReactNode;
    alignment?: ModalDescriptionAlignment;
};
declare const ModalDescription: FunctionComponent<ModalDescriptionProps>;

declare enum ModalHeaderDirection {
    ROW = "modal-new__container__header--row",
    ROW_REVERSE = "modal-new__container__header--row-reverse",
    COLUMN = "modal-new__container__header--column",
    COLUMN_REVERSE = "modal-new__container__header--column-reverse"
}
declare enum ModalHeaderAlignment {
    CENTER = "modal-new__container__header--justify-center",
    LEFT = "modal-new__container__header--justify-left",
    RIGHT = "modal-new__container__header--justify-right",
    SPACE_BETWEEN = "modal-new__container__header--justify-space-between"
}
declare type ModalHeaderProps = {
    alignment?: ModalHeaderAlignment;
    direction?: ModalHeaderDirection;
    children: React.ReactNode;
};
declare const ModalHeader: FunctionComponent<ModalHeaderProps>;

declare type ModalHeaderTitleProps = {
    title: string;
};
declare const ModalHeaderTitle: FunctionComponent<ModalHeaderTitleProps>;

declare enum ModalStepperAlignment {
    LEFT = "modal-title-stepper--align-left"
}
declare type ModalStepperProps = {
    steps: number;
    activeStep: number;
    alignment?: ModalStepperAlignment;
};
declare const ModalStepper: FunctionComponent<ModalStepperProps>;

declare enum ModalTitleSize {
    HUGE = "modal-title-huge"
}
declare enum ModalTitleAlignment {
    LEFT = "modal-title-align-left"
}
declare type ModalTitleProps = {
    children: React.ReactNode;
    size?: ModalTitleSize;
    alignment?: ModalTitleAlignment;
};
declare const ModalTitle: FunctionComponent<ModalTitleProps>;

declare type SearchFieldProps = {
    children: React.ReactElement;
    label: string;
    tooltip?: string;
    name?: string;
    fixedWidth?: boolean;
};
declare const SearchField: FunctionComponent<SearchFieldProps>;

declare type SearchToolbarProps = {
    searchBar?: SearchBarProps | SearchBarClearableProps;
    actions?: React.ReactNode[];
    children?: React.ReactNode;
    canHideFilters?: boolean;
    onClearFilters?: (e: React.MouseEvent) => void;
    themeWhite?: boolean;
};
declare const SearchToolbar: FunctionComponent<SearchToolbarProps>;

declare type Section1ColProps = {
    children: React.ReactNode;
    justifyContent?: Section1ColJustify;
};
declare enum Section1ColJustify {
    CENTER = "section-col1-justify-center"
}
declare const Section1Col: FunctionComponent<Section1ColProps>;

declare type Section2ColsProps = {
    layout?: Section2ColsLayout;
    alignment?: Section2ColsAlignment;
    mobileReverse?: boolean;
    children: React.ReactNode;
};
declare enum Section2ColsLayout {
    WIDE_LEFT = "section-2cols-wide-left",
    NARROW = "section-2cols-narrow"
}
declare enum Section2ColsAlignment {
    TOP = "section-2cols-align-top"
}
declare const Section2Cols: FunctionComponent<Section2ColsProps>;

declare type Section3ColsProps = {
    children: React.ReactNode;
};
declare const Section3Cols: FunctionComponent<Section3ColsProps>;

declare type SectionBlockHeaderProps = {
    title: string;
    icon?: IconProps;
    link?: string;
    action?: React.ReactNode;
};
declare const SectionBlockHeader: FunctionComponent<SectionBlockHeaderProps>;

declare type SectionBlockFooterProps = {
    link: string;
    label: string;
    target?: string;
};
declare const SectionBlockFooter: FunctionComponent<SectionBlockFooterProps>;

declare enum BoxRadius {
    XS = "--border-radius-xs",
    SM = "--border-radius-sm",
    MD = "--border-radius-md",
    LG = "--border-radius-lg",
    XL = "--border-radius-xl"
}
declare enum BoxSpacing {
    NONE = "--spacing-none",
    XSMALL = "--spacing-xs",
    SMALL = "--spacing-sm",
    MEDIUM = "--spacing-md",
    LARGE = "--spacing-lg",
    XLARGE = "--spacing-xl"
}
declare enum BoxShadow {
    BLACK_BIG = "box--shadow-black-l",
    BLACK_MEDIUM = "box--shadow-black-m"
}
declare class BoxProps {
    static SECTION_BLOCK: BoxProps;
    static SECTION_BLOCK_WITH_SHADOW: BoxProps;
    radius?: BoxRadius;
    shadow?: BoxShadow;
    spacing?: BoxSpacing;
    cssClass?: string;
    onClick?: (e: React.MouseEvent) => void;
    constructor(radius: BoxRadius, spacing: BoxSpacing, shadow?: BoxShadow);
}
declare const Box: React.FunctionComponent<{
    children: React.ReactNode;
} & BoxProps>;

declare type SectionBlockProps = {
    children: React.ReactNode;
    cssClass?: string;
    box?: BoxProps;
    header?: SectionBlockHeaderProps;
    footer?: SectionBlockFooterProps;
};
declare const SectionBlock: FunctionComponent<SectionBlockProps>;

declare type SectionColProps = {
    children: React.ReactNode;
};
declare const SectionCol: FunctionComponent<SectionColProps>;

declare const SectionSeparator: FunctionComponent;

declare type PaginationProps = {
    page: number;
    pageCount: number;
    onClick: (page: number) => void;
};
declare const Pagination: FunctionComponent<PaginationProps>;

declare enum TableNewColumnStyle {
    ALIGN_CENTER = "table__column--align-center",
    ALIGN_RIGHT = "table__column--align-right",
    CLICKABLE = "table__column--clickable",
    FIXED_WIDTH = "table__column--fixed-width",
    HIGHLIGHTED = "table__column--highlighted",
    NOWRAP = "table__column--nowrap",
    HIDE_SCREEN_LARGE = "table__column--hide-screen-large",
    HIDE_SCREEN_MEDIUM = "table__column--hide-screen-medium",
    HIDE_SCREEN_SMALL = "table__column--hide-screen-small",
    NO_VERTICAL_PADDING = "table__column--no-vertical-padding"
}
declare type TableNewColumnProps = {
    children?: React.ReactNode;
    onClick?: ((e: React.MouseEvent) => void) | {
        link: string;
    };
    styles?: TableNewColumnStyle | TableNewColumnStyle[];
    colSpan?: number;
};
declare const TableNewColumn: FunctionComponent<TableNewColumnProps>;

declare type TableNewHeadColumnProps = {
    label?: string | React.ReactNode;
    width?: number;
    styles?: TableNewColumnStyle | TableNewColumnStyle[];
    sort?: {
        field: string;
        reverseOrder?: boolean;
    };
    onSort?: (field: string, reverseOrder?: boolean) => void;
};
declare const TableNewHeadColumn: FunctionComponent<TableNewHeadColumnProps>;

declare type TableNewProps = {
    columns: TableNewHeadColumnProps[];
    children: React.ReactNode;
    pagination?: PaginationProps | number;
    onSort?: (field: string, reverseOrder?: boolean) => void;
    scrollX?: boolean;
    themeWhite?: boolean;
};
declare const TableNew: FunctionComponent<TableNewProps>;

declare type TableNewActionColumnProps = TableNewColumnProps & {
    children?: React.ReactNode;
};
declare const TableNewActionColumn: FunctionComponent<TableNewActionColumnProps>;

declare type TableNewImageProps = {
    image: string | React.FunctionComponent;
};
declare const TableNewImage: FunctionComponent<TableNewImageProps>;

declare type TableNewRowProps = {
    children: React.ReactNode;
    onClick?: ((e: React.MouseEvent) => void) | {
        link: string;
    };
};
declare const TableNewRow: FunctionComponent<TableNewRowProps>;

declare type IconTooltipProps = {
    icon: IconProps;
    text: string;
    cssClass?: string;
    onClick?: (e: React.MouseEvent) => void;
};
declare const IconTooltip: FunctionComponent<IconTooltipProps>;

declare type ActionMenuItem = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
    critical?: boolean;
    separator?: boolean;
    cssClass?: string;
};
declare enum ActionMenuItemPosition {
    TOP_LEFT = "actions-menu-content-top-left"
}
declare enum ActionMenuIcon {
    EDIT = "edit",
    MORE = "more_vert",
    PREVIEW = "visibility",
    LINK_BLANK = "open_in_new"
}
declare type ActionsMenuProps = {
    iconTooltip: IconTooltipProps;
    items: ActionMenuItem[];
    position?: ActionMenuItemPosition;
};
declare const ActionsMenu: FunctionComponent<ActionsMenuProps>;

declare enum AlertSeverity {
    DANGER = "danger",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning"
}
declare type AlertItem = {
    text: string;
    severity?: AlertSeverity;
    fullWidth?: boolean;
};
declare const Alert: FunctionComponent<AlertItem>;

declare type BulletProps = {
    status: BulletStatus;
};
declare enum BulletStatus {
    GREEN = "bullet--green",
    GREY = "bullet--grey",
    ORANGE = "bullet--orange",
    RED = "bullet--red"
}
declare const Bullet: FunctionComponent<BulletProps>;

declare type ButtonUploadProps = {
    cssClass?: string;
    label: string;
    onChange: ChangeEventHandler;
    size?: ButtonSize;
    style?: ButtonStyle;
    acceptType?: string;
    disabled?: boolean;
    loading?: boolean;
};
declare const ButtonUpload: FunctionComponent<ButtonUploadProps>;

declare enum CodeBlockLanguage {
    BASH = "bash",
    CSS = "css",
    GO = "go",
    HTML = "htmlbars",
    JAVASCRIPT = "javascript",
    JSON = "json",
    MARKDOWN = "markdown",
    NODE = "node-repl",
    SCSS = "scss",
    SQL = "sql",
    TYPESCRIPT = "typescript"
}
declare type CodeBlockProps = {
    code: string | undefined;
    language?: CodeBlockLanguage;
    header?: string;
    copiable?: boolean;
    showLineNumbers?: boolean;
    wrapLongLines?: boolean;
};
declare const CodeBlock: React.FC<CodeBlockProps>;

declare type DropDownLinkProps = {
    link: ButtonLinkProps;
    children: React.ReactNode;
    cssClass?: string;
    startOpen?: boolean;
};
declare const DropDownLink: FunctionComponent<DropDownLinkProps>;

declare type EmptyContentMessageProps = {
    svg: React.FunctionComponent;
    message: string;
    children?: React.ReactNode;
};
declare const EmptyContentMessage: FunctionComponent<EmptyContentMessageProps>;

declare global {
    interface Window {
        Sddan: any;
    }
}
declare type FooterProps = {
    legalNotice?: boolean;
    cookiesSettings?: boolean;
    items?: {
        label: string;
        path: string;
    }[];
};
declare const Footer: FunctionComponent<FooterProps>;

declare const GoToTop: () => JSX.Element;

declare type HeroHeaderProps = {
    title: string;
    cssClass?: string;
};
declare const HeroHeader: FunctionComponent<HeroHeaderProps>;

declare type IconNotificationProps = {
    hasNotifications: boolean;
    onClick: (e: React.MouseEvent) => void;
    tooltipText?: string;
    outlined?: boolean;
    cssClass?: string;
};
declare const IconNotification: FunctionComponent<IconNotificationProps>;

declare type LoaderProps = {
    cssClass?: string;
    small?: boolean;
};
declare const Loader: FunctionComponent<LoaderProps>;

declare type MainAlertProps = {
    content: AlertItem | undefined;
    cssClass?: string;
};
declare const MainAlert: FunctionComponent<MainAlertProps>;

declare type MainAlertBarProps = {
    icon?: IconProps;
    text: string;
    severity?: AlertSeverity;
    colors?: {
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
    };
};
declare const MainAlertBar: FunctionComponent<MainAlertBarProps>;

declare enum MainContentStyle {
    FULL_WIDTH = "main-content--full-width",
    NARROW_WIDTH = "main-content--narrow-width"
}
declare type MainContentProps = {
    children: React.ReactNode;
    style?: MainContentStyle;
    cssClass?: string;
};
declare const MainContent: FunctionComponent<MainContentProps>;

declare type MainHeaderAccountProps = {
    children: React.ReactNode;
    themeWhite?: boolean;
};
declare const MainHeaderAccount: FunctionComponent<MainHeaderAccountProps>;

declare type MainHeaderAccountAvatarProps = {
    initials: string;
    tooltip: string;
    children: React.ReactNode;
    onOpen: (e: React.MouseEvent) => void;
};
declare const MainHeaderAccountAvatar: FunctionComponent<MainHeaderAccountAvatarProps>;

declare type MainHeaderItemProps = {
    icon: IconProps;
    label: string;
    active: boolean;
    onOpen: (e: React.MouseEvent) => void;
    onClose?: (e: React.MouseEvent) => void;
    children?: React.ReactNode;
    mobileOnly?: boolean;
    withChip?: boolean;
    showLabel?: boolean;
};
declare const MainHeaderItem: FunctionComponent<MainHeaderItemProps>;

declare type MenuItem = {
    label: string;
    path: string;
    icon: IconProps;
    includes?: boolean;
    items?: MenuItem[];
    externalUrl?: boolean;
    allowedTo?: string;
    adminOnly?: boolean;
    text?: string;
};
declare type MainHeaderBurgerMenuProps = {
    items: MenuItem[];
    activePath: string;
    active: boolean;
    onOpen: (e: React.MouseEvent) => void;
    onClose: (e: React.MouseEvent) => void;
    onClickLink: (path: string, e: React.MouseEvent) => void;
    themeWhite?: boolean;
};
declare const MainHeaderBurgerMenu: FunctionComponent<MainHeaderBurgerMenuProps>;

declare type MainHeaderLayoutProps = {
    children: React.ReactNode;
    themeWhite?: boolean;
};
declare const MainHeaderLayout: FunctionComponent<MainHeaderLayoutProps>;

declare type MainHeaderLogoProps = {
    link: string;
    logo: React.FunctionComponent;
    onClick: (path: string, e: React.MouseEvent) => void;
    usePreprod?: boolean;
};
declare const MainHeaderLogo: FunctionComponent<MainHeaderLogoProps>;

declare type MainHeaderShortcutMenuProps = {
    items: MenuItem[];
    activePath: string;
    onClickLink: (path: string, e: React.MouseEvent) => void;
    themeWhite?: boolean;
};
declare const MainHeaderShortcutMenu: FunctionComponent<MainHeaderShortcutMenuProps>;

declare type MainHeaderSliceProps = {
    children: React.ReactNode;
};
declare const MainHeaderSlice: FunctionComponent<MainHeaderSliceProps>;

declare type MainHeaderSubLayoutProps = {
    children: React.ReactNode;
    cssClass?: string;
};
declare const MainHeaderSubLayout: FunctionComponent<MainHeaderSubLayoutProps>;

declare type MainPageHeaderProps = {
    title: string;
    icon?: IconProps;
};
declare const MainPageHeader: FunctionComponent<MainPageHeaderProps>;

declare enum ParagraphAlignment {
    JUSTIFY = "paragraph--align-justify",
    CENTER = "paragraph--align-center"
}
declare type ParagraphProps = {
    children: React.ReactNode;
    alignment?: ParagraphAlignment;
    withSpacing?: boolean;
    cssClass?: string;
};
declare const Paragraph: FunctionComponent<ParagraphProps>;

declare const ScrollToTop: () => null;

declare type SearchErrorProps = {
    query?: string;
};
declare const SearchError: FunctionComponent<SearchErrorProps>;

declare type SplitButtonAction = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
};
declare type SplitButtonProps = {
    size?: ButtonSize;
    style?: ButtonStyle;
    actions: SplitButtonAction[];
};
declare const SplitButton: FunctionComponent<SplitButtonProps>;

declare type StatusLabelProps = {
    icon: IconProps;
    label: string;
};
declare const StatusLabel: FunctionComponent<StatusLabelProps>;

declare type TooltipProps = {
    children: React.ReactNode;
    text: string;
    cssClass?: string;
    onClick?: (e: React.MouseEvent) => void;
};
declare const Tooltip: FunctionComponent<TooltipProps>;

declare const SvgError403: FunctionComponent;

declare const SvgError404: FunctionComponent;

declare const SvgError500: FunctionComponent;

declare type SvgIabChipProps = {
    currentColor?: string;
};
declare const SvgIabChip: FunctionComponent<SvgIabChipProps>;

declare const SvgNoResult: FunctionComponent;

declare const SvgRocket: () => JSX.Element;

declare const SvgSirdataAudienceLogoMidnight: FunctionComponent;

declare const SvgSirdataAudienceLogoWhite: FunctionComponent;

declare type SvgSirdataChipProps = {
    currentColor?: string;
};
declare const SvgSirdataChip: FunctionComponent<SvgSirdataChipProps>;

declare const SvgSirdataLogoMidnight: FunctionComponent;

declare const SvgSirdataLogoWhite: FunctionComponent;

declare const SvgUnderConstruction: FunctionComponent;

declare const SvgUpload: FunctionComponent;

declare type CarouselProps = {
    ariaLabel: string;
    slides: React.ReactNode[];
    cssClass?: string;
    isLoading?: boolean;
    splideOptions?: Options;
};
declare const Carousel: FunctionComponent<CarouselProps>;

declare type LoadableProps = {
    loading: boolean;
    children: React.ReactNode;
    loaderOptions?: {
        cssClass?: string;
        small?: boolean;
    };
};
declare const Loadable: FunctionComponent<LoadableProps>;

declare enum ModalSize {
    FULLSCREEN = "modal-content-fullscreen",
    MAX_WIDTH = "modal-content-max-width",
    MAX_HEIGHT = "modal-content-max-height"
}
declare type ModalProps = {
    onClose?: (e: React.MouseEvent) => void;
    active: boolean;
    size?: ModalSize;
    animate?: boolean;
    loading?: boolean;
    children: React.ReactNode;
};
declare const Modal: FunctionComponent<ModalProps>;

declare type ModalConfirmMessageProps = {
    message: string;
    confirm: ButtonProps;
    cancel: ButtonProps;
    active: boolean;
};
declare const ModalConfirmMessage: FunctionComponent<ModalConfirmMessageProps>;

declare enum ModalNewSize {
    FULLSCREEN = "modal-new__container--fullscreen",
    MAX_WIDTH = "modal-new__container--max-width",
    MAX_HEIGHT = "modal-new__container--max-height"
}
declare type ModalNewProps = {
    onClose?: (e: React.MouseEvent) => void;
    active: boolean;
    size?: ModalNewSize;
    animate?: boolean;
    loading?: boolean;
    children: React.ReactNode;
    cssClass?: string;
    subLink?: {
        onClick: (e: React.MouseEvent) => void;
        label: string;
    };
    keepMounted?: boolean;
};
declare const ModalNew: FunctionComponent<ModalNewProps>;

declare type ModalNewBlockHeaderProps = {
    alignment?: ModalHeaderAlignment;
    direction?: ModalHeaderDirection;
    stepper?: ModalStepperProps;
    title?: string;
};
declare type ModalNewBlockContentProps = {
    fullWidth?: boolean;
    centered?: boolean;
};
declare type ModalNewBlockFooterProps = {
    alignment?: ModalActionsAlignment;
    actions: React.ReactNode;
};
declare type ModalNewBlockProps = ModalNewProps & {
    header?: ModalNewBlockHeaderProps;
    content?: ModalNewBlockContentProps;
    footer?: ModalNewBlockFooterProps;
};
declare const ModalNewBlock: FunctionComponent<ModalNewBlockProps>;

declare type ModalNotificationContent = {
    image: string;
    call_to_action: string;
    title?: string;
    subtitle?: string;
    text?: string;
};
declare type ModalNotificationProps = {
    content: ModalNotificationContent;
    active: boolean;
    onClose: (e: React.MouseEvent) => void;
    onCallToAction: (e: React.MouseEvent) => void;
    subLink: {
        onClick: (e: React.MouseEvent) => void;
        label: string;
    };
};
declare const ModalNotification: FunctionComponent<ModalNotificationProps>;

declare type ModalSaveBeforeLeavingProps = {
    active: boolean;
    onSave: (e: React.MouseEvent) => void;
    onLeave: (e: React.MouseEvent) => void;
    onCancel: (e: React.MouseEvent) => void;
};
declare const ModalSaveBeforeLeaving: FunctionComponent<ModalSaveBeforeLeavingProps>;

declare type ModalWarningUnsavedChangesProps = {
    active: boolean;
    onCancel: (e: React.MouseEvent) => void;
    onConfirm: (e: React.MouseEvent) => void;
};
declare const ModalWarningUnsavedChanges: FunctionComponent<ModalWarningUnsavedChangesProps>;

declare type WrapperProps = {
    children: React.ReactNode;
    cssClass?: string;
};
declare const Wrapper: FunctionComponent<WrapperProps>;

declare const pathLegalNotice = "/legal-notice";

declare enum FormatterFormat {
    DATE = "DD/MM/YYYY",
    DATE_INPUT = "YYYY-MM-DD",
    DATE_TIME = "DD/MM/YYYY HH:mm",
    DATE_TIME_INPUT = "YYYY-MM-DDTHH:mm"
}
declare class Formatter {
    static formatNumber(value: number | undefined, format?: string): string;
    static formatDate(value?: MomentInput, format?: string): string;
    static formatUTCDate(value?: MomentInput, format?: string): string;
}

declare enum TranslationLibFile {
    COMMON = "common"
}
declare enum TranslationLibKey {
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
declare const Locales: {
    en: {
        common: {
            actions: {
                activate: string;
                add: string;
                back: string;
                cancel: string;
                clear: string;
                clear_search: string;
                close: string;
                confirm: string;
                copied: string;
                copy: string;
                deactivate: string;
                delete: string;
                download: string;
                download_all: string;
                duplicate: string;
                edit: string;
                export: string;
                hide_filters: string;
                import: string;
                more: string;
                new: string;
                ok: string;
                open: string;
                quit: string;
                quit_without_saving: string;
                remove: string;
                remove_all: string;
                reset_filters: string;
                save: string;
                save_and_quit: string;
                search: string;
                send: string;
                show_filters: string;
                sort_by: string;
                validate: string;
            };
            footer: {
                cookies_settings: string;
                legal_notice: string;
            };
            header: {
                home: string;
                menu: string;
                preprod: string;
            };
            messages: {
                id_matched: string;
                id_matched_plural: string;
                id_already_selected: string;
                id_already_selected_plural: string;
                id_unmatched: string;
                id_unmatched_plural: string;
                inputs_required: string;
                loading_results: string;
                no_result: string;
                no_result_for_query: string;
                save_before_leaving: string;
                warning_unsaved_changes: string;
            };
            placeholders: {
                search_ids: string;
                select_default: string;
                upload_panel: string;
            };
            select_option: {
                create: string;
            };
            pagination: {
                first: string;
                last: string;
                next: string;
                previous: string;
            };
        };
    };
    fr: {
        common: {
            actions: {
                activate: string;
                add: string;
                back: string;
                cancel: string;
                clear: string;
                clear_search: string;
                close: string;
                confirm: string;
                copied: string;
                copy: string;
                deactivate: string;
                delete: string;
                download: string;
                download_all: string;
                duplicate: string;
                edit: string;
                export: string;
                hide_filters: string;
                import: string;
                more: string;
                new: string;
                ok: string;
                open: string;
                quit: string;
                quit_without_saving: string;
                remove: string;
                remove_all: string;
                reset_filters: string;
                save: string;
                save_and_quit: string;
                search: string;
                send: string;
                show_filters: string;
                sort_by: string;
                validate: string;
            };
            footer: {
                cookies_settings: string;
                legal_notice: string;
            };
            header: {
                home: string;
                menu: string;
                preprod: string;
            };
            messages: {
                id_matched: string;
                id_matched_plural: string;
                id_already_selected: string;
                id_already_selected_plural: string;
                id_unmatched: string;
                id_unmatched_plural: string;
                inputs_required: string;
                loading_results: string;
                no_result: string;
                no_result_for_query: string;
                save_before_leaving: string;
                warning_unsaved_changes: string;
            };
            placeholders: {
                search_ids: string;
                select_default: string;
                upload_panel: string;
            };
            select_option: {
                create: string;
            };
            pagination: {
                first: string;
                last: string;
                next: string;
                previous: string;
            };
        };
    };
};

export { Accordion, AccordionItem, AccordionItemContent, ActionMenuIcon, ActionMenuItem, ActionMenuItemPosition, ActionsMenu, Alert, AlertItem, AlertSeverity, Box, BoxProps, BoxRadius, BoxShadow, BoxSpacing, Bullet, BulletStatus, Button, ButtonAdd, ButtonDelete, ButtonLink, ButtonLinkBack, ButtonLinkCancel, ButtonLinkClose, ButtonLinkStyle, ButtonNew, ButtonOk, ButtonSave, ButtonSize, ButtonStyle, ButtonUpload, ButtonValidate, Carousel, Checkbox, CodeBlock, CodeBlockLanguage, Color, ColorPicker, ContentBlock, ContentBlockAction, ContentBlockActionType, ContentBlockRow, ContentBlockRowElementRight, ContentBlockRowTitle, DropDownLink, ElementList, ElementListSize, EmptyContentMessage, FlexContent, FlexContentAlignment, FlexContentDirection, FlexContentJustify, FlexContentLayout, FlexContentMobileDirection, FlexContentProps, FlexContentSpacing, Footer, FormButtons, FormContainer, FormError, FormField, FormFieldMessage, FormFieldMessageProps, FormFieldMessageType, FormFieldSize, FormFieldTitle, FormFieldTitleFields, FormGroup, FormMention, FormRow, FormRowAlignment, FormRowSeparator, FormRowTitle, FormTooltip, Formatter, FormatterFormat, GoToTop, HeroHeader, Icon, IconEdit, IconNotification, IconProps, IconTooltip, InfoValue, InputAutocomplete, InputCheckbox, InputCheckboxProps, InputDate, InputDateType, InputEmail, InputNumber, InputNumberNew, InputPassword, InputPhone, InputPhoneLocale, InputRadio, InputRange, InputText, InputTextWithButton, InputToggleSwitch, InputToggleSwitchProps, InputWithLabel, LayoutColumns, LayoutRows, Loadable, Loader, Locales, MainAlert, MainAlertBar, MainContent, MainContentStyle, MainHeaderAccount, MainHeaderAccountAvatar, MainHeaderBurgerMenu, MainHeaderItem, MainHeaderLayout, MainHeaderLogo, MainHeaderShortcutMenu, MainHeaderSlice, MainHeaderSubLayout, MainPageHeader, MenuItem, Modal, ModalActions, ModalActionsAlignment, ModalConfirmMessage, ModalContent, ModalDescription, ModalDescriptionAlignment, ModalHeader, ModalHeaderAlignment, ModalHeaderDirection, ModalHeaderTitle, ModalNew, ModalNewBlock, ModalNewSize, ModalNotification, ModalNotificationContent, ModalSaveBeforeLeaving, ModalSize, ModalStepper, ModalStepperAlignment, ModalTitle, ModalTitleAlignment, ModalTitleSize, ModalWarningUnsavedChanges, Pagination, Paragraph, ParagraphAlignment, RadioButton, RadioButtons, ScrollToTop, SearchAutocomplete, SearchAutocompleteItem, SearchBar, SearchBarClearable, SearchError, SearchField, SearchIds, SearchIdsResult, SearchToolbar, Section1Col, Section1ColJustify, Section2Cols, Section2ColsAlignment, Section2ColsLayout, Section3Cols, SectionBlock, SectionBlockFooter, SectionBlockHeader, SectionCol, SectionSeparator, Select, SelectAutocomplete, SelectMultiple, SelectOption, SelectV2, Slider, SplitButton, SplitButtonAction, StatusLabel, SvgError403, SvgError404, SvgError500, SvgIabChip, SvgNoResult, SvgRocket, SvgSirdataAudienceLogoMidnight, SvgSirdataAudienceLogoWhite, SvgSirdataChip, SvgSirdataLogoMidnight, SvgSirdataLogoWhite, SvgUnderConstruction, SvgUpload, TableNew, TableNewActionColumn, TableNewColumn, TableNewColumnStyle, TableNewHeadColumn, TableNewImage, TableNewRow, Tag, TagField, TagSize, TagStyle, TagTextTransform, Textarea, ToggleOption, ToggleSwitch, Tooltip, TranslationLibFile, TranslationLibKey, UploadLogo, UploadPanel, Wrapper, pathLegalNotice };
