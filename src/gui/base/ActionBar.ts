import m, {Children, Component, Vnode} from "mithril"
import type {ButtonAttrs} from "./Button.js"
import {Button} from "./Button.js"
import {assertMainOrNode} from "../../api/common/Env"

assertMainOrNode()
export type ActionBarAttrs = {
	buttons: ButtonAttrs[]
}

/**
 * An action bar is a bar that contains buttons (either on the left or on the right).
 */
export class ActionBar implements Component<ActionBarAttrs> {

	view(vnode: Vnode<ActionBarAttrs>): Children {
		return m(
			".action-bar.flex-end.items-center",
			vnode.attrs.buttons.map(b => m(Button, b)),
		)
	}
}