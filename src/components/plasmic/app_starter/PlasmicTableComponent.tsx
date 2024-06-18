// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uis6EXi2MLyX8m1aK142cE
// Component: d_ILjyXEnIrC

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: uis6EXi2MLyX8m1aK142cE/projectcss
import sty from "./PlasmicTableComponent.module.css"; // plasmic-import: d_ILjyXEnIrC/css

createPlasmicElementProxy;

export type PlasmicTableComponent__VariantMembers = {};
export type PlasmicTableComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicTableComponent__VariantsArgs;
export const PlasmicTableComponent__VariantProps = new Array<VariantPropType>();

export type PlasmicTableComponent__ArgsType = {};
type ArgPropType = keyof PlasmicTableComponent__ArgsType;
export const PlasmicTableComponent__ArgProps = new Array<ArgPropType>();

export type PlasmicTableComponent__OverridesType = {
  root?: Flex__<"div">;
  table?: Flex__<typeof RichTable>;
  modal?: Flex__<typeof AntdModal>;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  textArea?: Flex__<typeof AntdTextArea>;
  button?: Flex__<typeof AntdButton>;
  showModalButton?: Flex__<typeof AntdButton>;
};

export interface DefaultTableComponentProps {
  className?: string;
}

const $$ = {};

function PlasmicTableComponent__RenderFunc(props: {
  variants: PlasmicTableComponent__VariantsArgs;
  args: PlasmicTableComponent__ArgsType;
  overrides: PlasmicTableComponent__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
      },
      {
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query3: usePlasmicDataOp(() => {
      return {
        sourceId: "iPS8caFvv1AkUMF8rryH4x",
        opId: "e3862659-dfaf-440f-954f-bd9b227d8360",
        userArgs: {},
        cacheKey: `plasmic.$.e3862659-dfaf-440f-954f-bd9b227d8360.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      {(() => {
        const child$Props = {
          canSelectRows: "none",
          className: classNames("__wab_instance", sty.table),
          data: (() => {
            try {
              return $queries.query3.data.response.data;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return (() => {
                  try {
                    return $queries.query3;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })();
              }
              throw e;
            }
          })(),
          hideDensity: true,
          onRowClick: async (rowKey, row, event) => {
            const $steps = {};

            $steps["updateTableSelectedRowKey"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["table", "selectedRowKey"]
                    },
                    operation: 0,
                    value: "id"
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateTableSelectedRowKey"] != null &&
              typeof $steps["updateTableSelectedRowKey"] === "object" &&
              typeof $steps["updateTableSelectedRowKey"].then === "function"
            ) {
              $steps["updateTableSelectedRowKey"] = await $steps[
                "updateTableSelectedRowKey"
              ];
            }

            $steps["updateModalOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["modal", "open"]
                    },
                    operation: 4
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    const oldValue = $stateGet(objRoot, variablePath);
                    $stateSet(objRoot, variablePath, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateModalOpen"] != null &&
              typeof $steps["updateModalOpen"] === "object" &&
              typeof $steps["updateModalOpen"].then === "function"
            ) {
              $steps["updateModalOpen"] = await $steps["updateModalOpen"];
            }
          },
          onRowSelectionChanged: async (...eventArgs: any) => {
            generateStateOnChangePropForCodeComponents(
              $state,
              "selectedRowKey",
              ["table", "selectedRowKey"],
              RichTable_Helpers
            ).apply(null, eventArgs);
            generateStateOnChangePropForCodeComponents(
              $state,
              "selectedRow",
              ["table", "selectedRow"],
              RichTable_Helpers
            ).apply(null, eventArgs);
            generateStateOnChangePropForCodeComponents(
              $state,
              "selectedRows",
              ["table", "selectedRows"],
              RichTable_Helpers
            ).apply(null, eventArgs);
            generateStateOnChangePropForCodeComponents(
              $state,
              "selectedRowKeys",
              ["table", "selectedRowKeys"],
              RichTable_Helpers
            ).apply(null, eventArgs);
          },
          pagination: true,
          rowActions: [{ type: "item" }],
          scopeClassName: sty["table__instance"],
          selectedRowKey: generateStateValueProp($state, [
            "table",
            "selectedRowKey"
          ]),
          selectedRowKeys: generateStateValueProp($state, [
            "table",
            "selectedRowKeys"
          ]),
          themeResetClassName: classNames(
            projectcss.root_reset,
            projectcss.root_reset_tags,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens
          )
        };
        initializeCodeComponentStates(
          $state,
          [
            {
              name: "selectedRowKey",
              plasmicStateName: "table.selectedRowKey"
            },
            {
              name: "selectedRow",
              plasmicStateName: "table.selectedRow"
            },
            {
              name: "selectedRows",
              plasmicStateName: "table.selectedRows"
            },
            {
              name: "selectedRowKeys",
              plasmicStateName: "table.selectedRowKeys"
            }
          ],
          [],
          RichTable_Helpers ?? {},
          child$Props
        );

        return (
          <RichTable
            data-plasmic-name={"table"}
            data-plasmic-override={overrides.table}
            {...child$Props}
          />
        );
      })()}
      <AntdModal
        data-plasmic-name={"modal"}
        data-plasmic-override={overrides.modal}
        className={classNames("__wab_instance", sty.modal)}
        defaultStylesClassName={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens
        )}
        hideFooter={true}
        modalScopeClassName={sty["modal__modal"]}
        onOpenChange={generateStateOnChangeProp($state, ["modal", "open"])}
        open={generateStateValueProp($state, ["modal", "open"])}
        title={"Modal title"}
        trigger={
          <AntdButton
            data-plasmic-name={"showModalButton"}
            data-plasmic-override={overrides.showModalButton}
            className={classNames("__wab_instance", sty.showModalButton)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__akV0I
              )}
            >
              {"Show modal"}
            </div>
          </AntdButton>
        }
      >
        {(() => {
          const child$Props = {
            className: classNames("__wab_instance", sty.form),
            extendedOnValuesChange: generateStateOnChangePropForCodeComponents(
              $state,
              "value",
              ["form", "value"],
              FormWrapper_Helpers
            ),
            formItems: undefined,
            labelCol: { span: 8, horizontalOnly: true },
            layout: "vertical",
            mode: undefined,
            onIsSubmittingChange: generateStateOnChangePropForCodeComponents(
              $state,
              "isSubmitting",
              ["form", "isSubmitting"],
              FormWrapper_Helpers
            ),
            ref: ref => {
              $refs["form"] = ref;
            },
            wrapperCol: { span: 16, horizontalOnly: true }
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "form.value"
              },
              {
                name: "isSubmitting",
                plasmicStateName: "form.isSubmitting"
              }
            ],
            [],
            FormWrapper_Helpers ?? {},
            child$Props
          );

          return (
            <FormWrapper
              data-plasmic-name={"form"}
              data-plasmic-override={overrides.form}
              {...child$Props}
            >
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__lppzr)}
                initialValue={``}
                label={"Name"}
                name={"name"}
              >
                <AntdInput
                  className={classNames("__wab_instance", sty.input)}
                />
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__aSqFv)}
                initialValue={"message initial value"}
                label={"Message"}
                name={"message"}
              >
                <AntdTextArea
                  className={classNames("__wab_instance", sty.textArea)}
                />
              </FormItemWrapper>
              <AntdButton
                className={classNames("__wab_instance", sty.button)}
                submitsForm={true}
                type={"primary"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oOkvz
                  )}
                >
                  {"Submit"}
                </div>
              </AntdButton>
            </FormWrapper>
          );
        })()}
      </AntdModal>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "table",
    "modal",
    "form",
    "input",
    "textArea",
    "button",
    "showModalButton"
  ],
  table: ["table"],
  modal: ["modal", "form", "input", "textArea", "button", "showModalButton"],
  form: ["form", "input", "textArea", "button"],
  input: ["input"],
  textArea: ["textArea"],
  button: ["button"],
  showModalButton: ["showModalButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  table: typeof RichTable;
  modal: typeof AntdModal;
  form: typeof FormWrapper;
  input: typeof AntdInput;
  textArea: typeof AntdTextArea;
  button: typeof AntdButton;
  showModalButton: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTableComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTableComponent__VariantsArgs;
    args?: PlasmicTableComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTableComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTableComponent__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTableComponent__ArgProps,
          internalVariantPropNames: PlasmicTableComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTableComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableComponent";
  } else {
    func.displayName = `PlasmicTableComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicTableComponent = Object.assign(
  // Top-level PlasmicTableComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    table: makeNodeComponent("table"),
    modal: makeNodeComponent("modal"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),
    showModalButton: makeNodeComponent("showModalButton"),

    // Metadata about props expected for PlasmicTableComponent
    internalVariantProps: PlasmicTableComponent__VariantProps,
    internalArgProps: PlasmicTableComponent__ArgProps
  }
);

export default PlasmicTableComponent;
/* prettier-ignore-end */
