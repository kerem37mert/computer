import { useState } from "react";
import { Home, Program } from "../../components";
import { v4 } from 'uuid';
import { Settings } from "../../programs";
import { Close } from "../../icons";
import type { TProgram } from "../../types";
import "./style.scss";

const programList: TProgram[] = [
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Ayarlar",
		icon: Close,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: Close,
		component: Settings,
	},
];

const ProgramLauncher = () => {

	// id
	const [openProgram, setOpenProgram] = useState<null | string>(null);

	const selectedProgram = programList.find(program => program.id === openProgram);

	return (
		<div className="program-launcher">
			{selectedProgram ? (
				<Program
					program={selectedProgram}
					setOpenProgram={setOpenProgram}
				/>
			) : (
				<Home programList={programList} setOpenProgram={setOpenProgram} />
			)}
		</div>
	);
};

export default ProgramLauncher;
