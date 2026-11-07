import { useState } from "react";
import { Home, Program } from "../../components";
import { v4 } from 'uuid';
import { Settings, Terminal } from "../../programs";
import {
	Calculator as CalculatorIcon,
	Camera as CameraIcon,
	Chrome as ChromeIcon,
	Clock as ClockIcon,
	Gallery as GalleryIcon,
	Github as GithubIcon,
	Linkedin as LinkedinIcon,
	Paint as PaintIcon,
	Settings as SettingsIcon,
	Spotify as SpotifyIcon,
	Terminal as TerminalIcon,
} from "../../icons";
import { HomeProvider } from "../../contexts/HomeContext";
import type { TProgram } from "../../types";
import "./style.scss";

const programList: TProgram[] = [
	{
		id: v4(),
		name: "Ayarlar",
		icon: SettingsIcon,
		component: Settings,
	},
	{
		id: v4(),
		name: "Terminal",
		icon: TerminalIcon,
		component: Terminal,
	},
	{
		id: v4(),
		name: "Browser",
		icon: ChromeIcon,
		component: Settings,
	},
	{
		id: v4(),
		name: "Github",
		icon: GithubIcon,
		component: Settings,
	},
	{
		id: v4(),
		name: "Linkedin",
		icon: LinkedinIcon,
		component: Settings,
	},
	{
		id: v4(),
		name: "Calculator",
		icon: CalculatorIcon,
		component: Settings,
	},
	{
		id: v4(),
		name: "Clock",
		icon: ClockIcon,
		component: Settings,
	},
	{
		id: v4(),
		name: "Camera",
		icon: CameraIcon,
		component: Settings,
	},
	{
		id: v4(),
		name: "Spotify",
		icon: SpotifyIcon,
		component: Settings,
	},
	{
		id: v4(),
		name: "Gallery",
		icon: GalleryIcon,
		component: Settings,
	},
	{
		id: v4(),
		name: "Paint",
		icon: PaintIcon,
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
				<HomeProvider>
					<Home programList={programList} setOpenProgram={setOpenProgram} />
				</HomeProvider>
			)}
		</div>
	);
};

export default ProgramLauncher;
