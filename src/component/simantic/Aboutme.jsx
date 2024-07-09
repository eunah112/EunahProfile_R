import React from "react";

const Aboutme = () => {
	const AboutInfo = [
		{
			id: 1,
			src: "",
			title: "이름",
			info: "노은아",
		},
		{
			id: 2,
			src: "",
			title: "생년월일",
			info: "02.01.12",
		},
		{
			id: 3,
			src: "",
			title: "주소지",
			info: "",
		},
		{
			id: 4,
			src: "",
			title: "연락처",
			info: "",
		},
		{
			id: 5,
			src: "",
			title: "이메일",
			info: "",
		},
		{
			id: 6,
			src: "",
			title: "학력",
			info: "",
		},
	];

	const newAboutme = AboutInfo.map((About) => {
		return (
			<div
				key={About.id}
				className='flex items-center mb-[50px] mx-[60px] text-[#212529]'
			>
				<img className='w-[32px]' src={About.src} alt='' />
				<div class='flex flex-col ml-[35px]'>
					<span class='noto-sans-semibold'>
						{About.title}
					</span>
					<span class='noto-sans-light'>{About.info}</span>
				</div>
			</div>
		);
	});

	return (
		<>
			<div class='title text-[40px]'>ABOUT ME</div>
			<div class='grid grid-cols-1 place-content-start md:grid-cols-2 lg:grid-cols-3'>
				{newAboutme}
			</div>
		</>
	);
};

export default Aboutme;
