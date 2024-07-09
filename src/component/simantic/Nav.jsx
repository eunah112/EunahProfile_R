import React from "react";

const Nav = () => {
	return (
		<div>
			<nav
				id='nav'
				class='nav fixed flex flex-row items-center justify-between py-[20px] px-[40px] overflow-hidden'
			>
				<div class='noto-sans-semibold cursor-pointer text-[24px]'>
					REA's Portfolio
				</div>
				<div
					id='nav_menu'
					class='noto-sans-light flex text-[16px]'
				>
					<div class='nav_btn px-[16px] cursor-pointer'>
						About me
					</div>
					<div class='nav_btn px-[16px] cursor-pointer'>
						Skills
					</div>
					<div class='nav_btn px-[16px] cursor-pointer'>
						Archiving
					</div>
					<div class='nav_btn px-[16px] cursor-pointer'>
						Projects
					</div>
					<div class='nav_btn px-[16px] cursor-pointer'>
						Career
					</div>
				</div>
				<button
					id='hamburger_icon'
					class='flex items-center justify-center w-[56px] h-[48px] border border-[grey] border-[2px] rounded-[10px] hidden'
				>
					<img
						class='w-[30px] h-[30px]'
						src='/img/Hamburger_menu.svg'
						alt='Hamburger Menu'
					/>
				</button>
			</nav>
			<div
				id='hamburger_menu'
				class='hidden relative w-full flex flex-col items-center justify-center bg-white text-black my-[88px] z-10'
			>
				<span class='py-2'>About me</span>
				<span class='py-2'>Skills</span>
				<span class='py-2'>Archiving</span>
				<span class='py-2'>Projects</span>
				<span class='py-2'>Career</span>
			</div>
		</div>
	);
};

export default Nav;
