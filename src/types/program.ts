import type { ComponentType, SVGProps } from "react";

export interface TProgram {
	id: string,
	name: string,
	icon: ComponentType<SVGProps<SVGSVGElement>>,
	component: ComponentType,
};
