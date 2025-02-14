"use client";

import {useParams} from "next/navigation";
import {useTransition, useState} from "react";
import {usePathname, useRouter} from "../../../i18n/routing";

interface LocaleSwitcherProps {
	variant: "blurred" | "white";
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({variant}) => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string>(
		params.locale === "uz"
			? "Uz"
			: params.locale === "eng"
			? "Eng"
			: params.locale === "tr"
			? "Tr"
			: "Py"
	);

	const handleSelect = (option: string, label: string) => {
		setSelectedOption(label);
		setIsOpen(false);
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{pathname, params},
				{locale: option}
			);
		});
	};

	const blurred =
		"bg-white/25 backdrop-blur-[21px] text-white py-2 px-3 lg:py-[14px] lg:px-6";
	const white = "border w-fit py-3 px-4";

	return (
		<div className="relative select-none">
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`font-semibold cursor-pointer w-full flex justify-between items-center rounded-80 
          ${variant === "blurred" ? blurred : white}
        `}>
				<span className="lg:mr-1.5">{selectedOption}</span>
				<svg
					className={`w-4 h-4 transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>

			{isOpen && !isPending && (
				<ul
					className="absolute z-10 mt-2 rounded-lg shadow-md max-h-60 overflow-y-auto 
          marker:bg-white/25 backdrop-blur-[21px] text-gray-700 text-center w-2/3 left-4 font-semibold">
					<li
						onClick={() => handleSelect("ru", "Ру")}
						className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
						Ру
					</li>
					<li
						onClick={() => handleSelect("uz", "Uz")}
						className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
						Uz
					</li>
					<li
						onClick={() => handleSelect("tr", "Tr")}
						className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
						Tr
					</li>
					<li
						onClick={() => handleSelect("eng", "Eng")}
						className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
						Eng
					</li>
				</ul>
			)}
		</div>
	);
};

export default LocaleSwitcher;
