import CrmLayout from "@/components/CrmLayout";
import NoData from "@/components/NoData";
import {useTranslations} from "next-intl";

const Addresses = () => {
	const t = useTranslations();
	const isEmpty = false;
	const infos = [
		"Hasan Karimov",
		"UNALAN MAH. LIBADIYE CAD. NO:80 G BLOK, USKUDAR",
		"Uskudar",
		"Istanbul",
		"2442",
		"Turkiya",
		"+90 216 285 1111",
	];

	if (isEmpty) {
		return <NoData pageName="manzillar" />;
	}
	return (
		<CrmLayout activeMenu="addresses">
			<div className="pt-6 max-sm:text-[0.9em] max-[550px]:text-[0.85em] w-[96%] mx-auto max-[500px]:w-[92%] max-[500px]:text-base">
				<div className="p-10 bg-white w-[45.5em] mx-auto rounded-xl max-md:w-full max-[500px]:bg-transparent max-[500px]:p-0">
					<h3 className="text-[1.5em] font-bold mb-6 max-[500px]:mb-3 max-[500px]:leading-snug">
						{t("crmAddressTitle")}
					</h3>
					<span className="">{t("crmAddressText")}</span>
					<div className="flex flex-col my-10 gap-6 max-[500px]:my-4 max-[400px]:gap-4">
						{infos.map((value, id) => (
							<div
								key={id}
								className="flex items-center justify-between gap-6 w-full max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-2">
								<span className="max-[500px]:font-semibold">
									{id + 1 !== 1
										? t(`crmAddressSpan${id + 1}`)
										: t(`crmAddressSpan`)}
								</span>
								<div className="flex items-center gap-5 w-[20em] justify-between max-[500px]:bg-white max-[500px]:border max-[500px]:rounded-md max-[500px]:w-full max-[500px]:py-3 max-[500px]:px-3">
									<span className="font-semibold max-[500px]:font-normal">
										{value}
									</span>
									<img
										className="cursor-pointer"
										src="/svgs/copy.svg"
										alt="Copy Icon"
									/>
								</div>
							</div>
						))}
					</div>
					<span className="font-bold">{t("crmAddressDeliveryTime")}</span>
				</div>
				<div className="w-[45.5em] mx-auto mt-6 flex gap-4 justify-between max-md:w-full max-[500px]:flex-col max-[400px]:text-[0.9em] mb-2">
					<div className="rounded-xl bg-white w-full justify-center h-24 flex items-center px-4 max-[500px]:h-12 max-[500px]:rounded-full max-[500px]:border">
						<button className="text-orange font-bold text-center max-[400px]:text-[0.95em]">
							{t("crmAddressInfo")}
						</button>
					</div>
					<div className="rounded-xl bg-white w-full justify-center h-24 flex items-center px-4 max-[500px]:h-12 max-[500px]:rounded-full max-[500px]:border ">
						<button className="text-orange font-bold text-center max-[400px]:text-[0.95em]">
							{t("crmAddressForbidden")}
						</button>
					</div>
				</div>
			</div>
		</CrmLayout>
	);
};

export default Addresses;
