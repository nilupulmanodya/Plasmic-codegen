// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uis6EXi2MLyX8m1aK142cE
// Component: qjwvLfCDsU3B

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

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: uis6EXi2MLyX8m1aK142cE/projectcss
import sty from "./PlasmicFormComponent.module.css"; // plasmic-import: qjwvLfCDsU3B/css

createPlasmicElementProxy;

export type PlasmicFormComponent__VariantMembers = {};
export type PlasmicFormComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicFormComponent__VariantsArgs;
export const PlasmicFormComponent__VariantProps = new Array<VariantPropType>();

export type PlasmicFormComponent__ArgsType = {};
type ArgPropType = keyof PlasmicFormComponent__ArgsType;
export const PlasmicFormComponent__ArgProps = new Array<ArgPropType>();

export type PlasmicFormComponent__OverridesType = {
  root?: Flex__<"div">;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  textArea?: Flex__<typeof AntdTextArea>;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
};

export interface DefaultFormComponentProps {
  className?: string;
}

const $$ = {};

function PlasmicFormComponent__RenderFunc(props: {
  variants: PlasmicFormComponent__VariantsArgs;
  args: PlasmicFormComponent__ArgsType;
  overrides: PlasmicFormComponent__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
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
    $queries: {},
    $refs
  });

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
              className={classNames("__wab_instance", sty.formField__n2JvT)}
              label={"Name"}
              name={"name"}
            >
              <AntdInput className={classNames("__wab_instance", sty.input)} />
            </FormItemWrapper>
            <FormItemWrapper
              className={classNames("__wab_instance", sty.formField__vr0Re)}
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
                  sty.text
                )}
              >
                {"Submit"}
              </div>
            </AntdButton>
          </FormWrapper>
        );
      })()}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "form", "input", "textArea", "button", "text"],
  form: ["form", "input", "textArea", "button", "text"],
  input: ["input"],
  textArea: ["textArea"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  form: typeof FormWrapper;
  input: typeof AntdInput;
  textArea: typeof AntdTextArea;
  button: typeof AntdButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFormComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFormComponent__VariantsArgs;
    args?: PlasmicFormComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFormComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFormComponent__ArgsType,
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
          internalArgPropNames: PlasmicFormComponent__ArgProps,
          internalVariantPropNames: PlasmicFormComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFormComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFormComponent";
  } else {
    func.displayName = `PlasmicFormComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicFormComponent = Object.assign(
  // Top-level PlasmicFormComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicFormComponent
    internalVariantProps: PlasmicFormComponent__VariantProps,
    internalArgProps: PlasmicFormComponent__ArgProps
  }
);

export default PlasmicFormComponent;
/* prettier-ignore-end */
